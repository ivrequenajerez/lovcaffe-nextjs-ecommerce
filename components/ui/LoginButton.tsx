"use client";

import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { UserIcon } from "@heroicons/react/24/outline";

export default function LoginButton() {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    signIn("github", { callbackUrl: "/" });
  };

  const handleLogout = () => {
    setLoading(true);
    signOut({ callbackUrl: "/" });
  };

  if (loading || status === "loading") {
    return (
      <button
        disabled
        className="text-gray-900 p-2 opacity-70 cursor-wait flex items-center gap-2"
      >
        <svg
          className="animate-spin h-5 w-5 text-[--color-brand-600]"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          ></path>
        </svg>
        Cargando...
      </button>
    );
  }

  return session ? (
    <button
      onClick={handleLogout}
      className="text-gray-900 p-2 hover:text-[--color-brand-600] flex items-center gap-2"
    >
      <UserIcon className="h-6 w-6" aria-hidden="true" />
      <span className="text-sm">Cerrar sesión</span>
    </button>
  ) : (
    <button
      onClick={handleLogin}
      className="text-gray-900 p-2 hover:text-[--color-brand-600] flex items-center gap-2"
    >
      <UserIcon className="h-6 w-6" aria-hidden="true" />
      <span className="text-sm">Login / Signup</span>
    </button>
  );
}
