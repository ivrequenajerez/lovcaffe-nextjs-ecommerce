// lib/actions/auth.ts
"use client";

import { signIn, signOut } from "next-auth/react";

export const login = () => signIn("github", { callbackUrl: "/" });
export const logout = () => signOut({ callbackUrl: "/" });
