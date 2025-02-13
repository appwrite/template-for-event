"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Models } from "appwrite";
import { getUser } from "@/tools/account";

type UserContextType = {
  user: Models.User<Models.Preferences> | null;
  loading: boolean;
  clearUser: () => void;
};

const UserContext = createContext<UserContextType>({
  user: null,
  loading: true,
  clearUser: () => {},
});

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [user, setUserState] = useState<Models.User<Models.Preferences> | null>(null);

  useEffect(() => {
    getUser()
      .then((user) => setUserState(user ?? null))
      .catch(() => setUserState(null))
      .finally(() => setLoading(false));
  }, []);

  const clearUser = () => setUserState(null);

  return (
    <UserContext.Provider value={{ user, loading, clearUser }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
