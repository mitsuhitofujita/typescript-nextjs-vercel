"use client";

import { signOut } from "next-auth/react";

type LogoutButtonProps = {
  className?: string;
};

export default function LogoutButton({ className = "" }: LogoutButtonProps) {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/" })}
      className={`rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 ${className}`}
    >
      Sign Out
    </button>
  );
}