"use client";

import { UserIcon } from "@heroicons/react/24/outline";
import { signIn, signOut } from "next-auth/react";

export default function LoginButton({ isLogged }: { isLogged: boolean }) {
  return isLogged ? (
    <button
      onClick={() => signOut({ callbackUrl: "/" })}
      className="text-gray-900 p-2 hover:text-[--color-brand-600]"
    >
      <UserIcon className="h-6 w-6" aria-hidden="true" />
      <span className="sr-only">Cerrar sesión</span>
    </button>
  ) : (
    <button
      onClick={() => signIn("github", { callbackUrl: "/" })}
      className="text-gray-900 p-2 hover:text-[--color-brand-600]"
    >
      <UserIcon className="h-6 w-6" aria-hidden="true" />
      <span className="sr-only">Iniciar sesión</span>
    </button>
  );
}
