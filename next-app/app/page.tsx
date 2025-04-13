import Image from "next/image";
import { auth } from "@/auth";
import Link from "next/link";

export default async function Home() {
  const session = await auth();

  return (
    <div className="mx-auto max-w-3xl text-center">
      <h1 className="mb-6 text-4xl font-bold">Welcome to Next.js Auth App</h1>
      
      <div className="mb-8">
        {session ? (
          <div className="rounded-lg bg-green-50 p-6 text-center">
            <p className="mb-2 text-xl font-medium text-green-800">
              You are signed in as {session.user?.name}
            </p>
            <Link
              href="/dashboard"
              className="mt-4 inline-block rounded-md bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700"
            >
              Go to Dashboard
            </Link>
          </div>
        ) : (
          <div className="rounded-lg bg-blue-50 p-6 text-center">
            <p className="mb-2 text-xl font-medium text-blue-800">
              Sign in to access all features
            </p>
            <Link
              href="/auth/signin"
              className="mt-4 inline-block rounded-md bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700"
            >
              Sign In
            </Link>
          </div>
        )}
      </div>

      <div className="mt-10">
        <h2 className="mb-4 text-2xl font-semibold">About This App</h2>
        <p className="text-gray-600">
          This is a demo application showing NextAuth.js integration with Next.js.
          The app uses Credentials Provider for authentication and demonstrates
          protected routes, session management, and more.
        </p>
      </div>
      
      <div className="mt-12">
        <h2 className="mb-4 text-2xl font-semibold">Built With</h2>
        <div className="flex justify-center space-x-8">
          <div className="text-center">
            <Image
              src="/next.svg"
              alt="Next.js logo"
              width={80}
              height={40}
              className="mx-auto mb-2"
            />
            <p className="text-sm text-gray-600">Next.js 15</p>
          </div>
          <div className="text-center">
            <Image
              src="/vercel.svg"
              alt="Vercel logo"
              width={80}
              height={40}
              className="mx-auto mb-2"
            />
            <p className="text-sm text-gray-600">Vercel Deployment</p>
          </div>
        </div>
      </div>
    </div>
  );
}
