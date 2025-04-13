import { prisma } from '@/prisma';
import { auth } from "@/auth";
import { redirect } from "next/navigation";

async function saveGreeting() {
  'use server'
  
  try {
    await prisma.greeting.create({
      data: {
        message: "hello"
      }
    });
    return { success: true };
  } catch (error) {
    console.error("Error saving greeting:", error);
    return { success: false, error: error instanceof Error ? error.message : String(error) };
  }
}

export default async function Dashboard() {
  const session = await auth();

  if (!session) {
    redirect("/auth/signin");
  }

  await saveGreeting();

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">User Profile</h2>
        <div className="space-y-3">
          <div className="grid grid-cols-[120px_1fr] gap-2">
            <span className="font-medium text-gray-600">Name:</span>
            <span>{session.user?.name}</span>
          </div>
          <div className="grid grid-cols-[120px_1fr] gap-2">
            <span className="font-medium text-gray-600">Email:</span>
            <span>{session.user?.email}</span>
          </div>
          <div className="grid grid-cols-[120px_1fr] gap-2">
            <span className="font-medium text-gray-600">User ID:</span>
            <span>{session.user?.id}</span>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Protected Content</h2>
        <p className="text-gray-600 mb-4">
          This is a protected page that only authenticated users can access.
          If you try to access this page without being logged in, you will be
          redirected to the login page.
        </p>
        <div className="bg-blue-50 p-4 rounded-md">
          <p className="text-blue-800">
            Authentication is working correctly! This page is protected by server-side
            session verification using NextAuth.js.
          </p>
        </div>
      </div>
    </div>
  );
}