# Next.js Authentication App

This Next.js application demonstrates authentication using NextAuth.js. The app includes credential-based login, protected routes, and session management, designed to be deployed on Vercel's free plan.

## Features

- **Authentication with NextAuth.js**: Credential-based authentication system
- **Protected Routes**: Server-side and middleware protection for authenticated routes
- **TypeScript**: Fully typed codebase with custom type definitions
- **Responsive Design**: Mobile-friendly UI with Tailwind CSS

## Getting Started

1. Clone the repository:

```bash
git clone <repository-url>
cd typescript-nextjs-vercel/next-app
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file in the next-app directory with:

```
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-random-secret-key
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Demo Authentication

Use the following credentials for testing:

- **Username**: user
- **Password**: password

## Deployment on Vercel

Configure the following environment variables in your Vercel project:

- `NEXTAUTH_URL`: Your production URL
- `NEXTAUTH_SECRET`: A secure random string for JWT encryption

Then deploy through the Vercel platform or CLI.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [NextAuth.js Documentation](https://next-auth.js.org)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
