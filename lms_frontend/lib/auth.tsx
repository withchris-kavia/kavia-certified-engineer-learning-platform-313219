"use client";

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { apiFetch } from "@/lib/api";

type AuthUser = {
  id?: string;
  name?: string;
  email?: string;
};

type AuthState = {
  token: string | null;
  user: AuthUser | null;
};

type LoginRequest = {
  email: string;
  password: string;
};

type RegisterRequest = {
  name: string;
  email: string;
  password: string;
};

type AuthContextValue = AuthState & {
  isAuthenticated: boolean;
  isHydrated: boolean;
  login: (input: LoginRequest) => Promise<void>;
  register: (input: RegisterRequest) => Promise<void>;
  logout: () => void;
};

const STORAGE_KEY = "lms_auth_v1";

/**
 * PUBLIC_INTERFACE
 * AuthProvider provides client-side auth state for the app, persisted to localStorage.
 */
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AuthState>({ token: null, user: null });
  const [isHydrated, setIsHydrated] = useState(false);

  // Hydrate from localStorage on first client render.
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as AuthState;
        if (parsed && typeof parsed === "object") {
          setState({
            token: typeof parsed.token === "string" ? parsed.token : null,
            user: parsed.user && typeof parsed.user === "object" ? (parsed.user as AuthUser) : null
          });
        }
      }
    } catch {
      // If parsing fails, ignore and treat as logged out.
    } finally {
      setIsHydrated(true);
    }
  }, []);

  // Persist to localStorage whenever state changes (after hydration).
  useEffect(() => {
    if (!isHydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // ignore quota / disabled storage
    }
  }, [state, isHydrated]);

  const logout = useCallback(() => {
    setState({ token: null, user: null });
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  }, []);

  const login = useCallback(async (input: LoginRequest) => {
    // Placeholder call — once backend exists this should return token + user.
    // We keep the path contract stable for seamless integration.
    type LoginResponse = { token?: string; user?: AuthUser };

    const res = await apiFetch<LoginResponse>("/auth/login", {
      method: "POST",
      body: JSON.stringify(input)
    });

    const token = res?.token ?? "placeholder-token";
    const user: AuthUser = res?.user ?? { email: input.email };

    setState({ token, user });
  }, []);

  const register = useCallback(async (input: RegisterRequest) => {
    // Placeholder call — once backend exists this should return token + user.
    type RegisterResponse = { token?: string; user?: AuthUser };

    const res = await apiFetch<RegisterResponse>("/auth/register", {
      method: "POST",
      body: JSON.stringify(input)
    });

    const token = res?.token ?? "placeholder-token";
    const user: AuthUser = res?.user ?? { name: input.name, email: input.email };

    setState({ token, user });
  }, []);

  const value: AuthContextValue = useMemo(
    () => ({
      ...state,
      isAuthenticated: Boolean(state.token),
      isHydrated,
      login,
      register,
      logout
    }),
    [state, isHydrated, login, register, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

/**
 * PUBLIC_INTERFACE
 * useAuth returns the current auth state and actions (login/register/logout).
 */
export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within <AuthProvider />");
  }
  return ctx;
}
