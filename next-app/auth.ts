import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/prisma";

if (!process.env.AUTH_SECRET) {
    throw new Error("Missing AUTH_SECRET environment variable")
}

const googleClientId = process.env.GOOGLE_CLIENT_ID
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET

if (!googleClientId || !googleClientSecret) {
  throw new Error("Missing Google OAuth credentials")
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: googleClientId,
      clientSecret: googleClientSecret,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (credentials?.username === "user" && credentials?.password === "password") {
          return {
            id: "1",
            name: "User",
            email: "user@example.com",
          };
        }
        return null;
      }
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user, account }) {
        // If we have a user, it's a first time sign in
        if (user && user.id) {
          token.id = user.id;
          // Add any additional profile data from auth providers
          if (account?.provider === "google") {
            token.picture = user.image;
          }
        }
        return token;
      },
      async session({ session, token }) {
        if (session.user) {
          session.user.id = token.id as string;
          // Pass profile picture from token to session if available
          if (token.picture) {
            session.user.image = token.picture as string;
          }
        }
        return session;
      },
    },
});
