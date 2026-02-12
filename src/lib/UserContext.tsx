"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

export type UserRank = 'Meteor' | 'Moon Walker' | 'Sun Keeper';

const rankTranslations: Record<UserRank, string> = {
  'Meteor': 'Sao Băng',
  'Moon Walker': 'Người đi trên Trăng',
  'Sun Keeper': 'Người giữ Mặt Trời'
};

export interface User {
  id: string;
  username: string;
  email: string;
  avatar?: string;
  currentPoint: number; // Stardust
  totalSpent: number;
  rank: string; // Translated rank
}

export interface Voucher {
  id: string;
  code: string;
  type: 'percent' | 'fixed';
  value: number;
  minOrderValue: number;
  description: string;
  expiryDate: string;
}

interface UserContextType {
  user: User | null;
  isLoggedIn: boolean;
  login: (method: 'google' | 'facebook' | 'zalo') => void;
  logout: () => void;
  addPoints: (amount: number) => void;
  vouchers: Voucher[];
  addVoucher: (voucher: Voucher) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [vouchers, setVouchers] = useState<Voucher[]>([]);

  // Logic đăng nhập với ID duy nhất cho từng phương thức
  const login = (method: 'google' | 'facebook' | 'zalo') => {
    // Trong thực tế, các ID này sẽ được trả về từ Google/FB API
    // Ở đây ta mô phỏng bằng cách tạo ID dựa trên method
    const prefix = method === 'google' ? 'GGL' : method === 'facebook' ? 'FB' : 'ZL';
    const randomId = Math.floor(1000 + Math.random() * 9000);
    const uniqueId = `${prefix}-${randomId}`;

    const mockUser: User = {
      id: uniqueId,
      username: `Du hành giả ${method.charAt(0).toUpperCase() + method.slice(1)}`,
      email: `${method}@cosmic.com`,
      currentPoint: 0,
      totalSpent: 0,
      rank: rankTranslations['Meteor']
    };

    // Kiểm tra xem user này đã từng "đăng nhập" (có trong LocalStorage) chưa
    const existingUsers = JSON.parse(localStorage.getItem('cosmic_users_db') || '{}');
    
    if (existingUsers[uniqueId]) {
      setUser(existingUsers[uniqueId]);
      localStorage.setItem('cosmic_user', JSON.stringify(existingUsers[uniqueId]));
    } else {
      setUser(mockUser);
      existingUsers[uniqueId] = mockUser;
      localStorage.setItem('cosmic_users_db', JSON.stringify(existingUsers));
      localStorage.setItem('cosmic_user', JSON.stringify(mockUser));
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('cosmic_user');
  };

  const addPoints = (amount: number) => {
    if (!user) return;
    const newPoints = user.currentPoint + amount;
    const newTotalSpent = user.totalSpent + (amount * 10000); // 1 point = 10k
    
    let newRankKey: UserRank = 'Meteor';
    if (newPoints >= 2000) newRankKey = 'Sun Keeper';
    else if (newPoints >= 500) newRankKey = 'Moon Walker';

    const updatedUser = { ...user, currentPoint: newPoints, totalSpent: newTotalSpent, rank: rankTranslations[newRankKey] };
    setUser(updatedUser);
    localStorage.setItem('cosmic_user', JSON.stringify(updatedUser));

    // Cập nhật vào "Database" mô phỏng
    const existingUsers = JSON.parse(localStorage.getItem('cosmic_users_db') || '{}');
    existingUsers[user.id] = updatedUser;
    localStorage.setItem('cosmic_users_db', JSON.stringify(existingUsers));
  };

  const addVoucher = (voucher: Voucher) => {
    setVouchers([...vouchers, voucher]);
  };

  useEffect(() => {
    const savedUser = localStorage.getItem('cosmic_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, isLoggedIn: !!user, login, logout, addPoints, vouchers, addVoucher }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
