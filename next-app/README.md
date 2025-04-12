# Next.js Authentication App

This Next.js application demonstrates authentication using NextAuth.js. The app includes Google OAuth and credential-based login, protected routes, and session management, designed to be deployed on Vercel's free plan.

## Features

- **Authentication with NextAuth.js**: Google OAuth and credential-based authentication
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

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

4. Set up Google OAuth:
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project
   - Configure the OAuth consent screen
   - Create OAuth client ID credentials (Web application)
   - Add authorized redirect URIs: `http://localhost:3000/api/auth/callback/google` (for local development) and your production URL if deploying
   - Copy the Client ID and Client Secret to your `.env.local` file

5. Run the development server:

```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Demo Authentication

Two authentication methods available:

1. **Google Sign-In**: Click the "Sign in with Google" button
2. **Credentials**:
   - **Username**: user
   - **Password**: password

## Deployment on Vercel

Configure the following environment variables in your Vercel project:

- `NEXTAUTH_URL`: Your production URL
- `NEXTAUTH_SECRET`: A secure random string for JWT encryption
- `GOOGLE_CLIENT_ID`: Your Google Client ID
- `GOOGLE_CLIENT_SECRET`: Your Google Client Secret

Remember to add your production callback URL to your Google OAuth settings: `https://your-domain.com/api/auth/callback/google`

Then deploy through the Vercel platform or CLI.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [NextAuth.js Documentation](https://next-auth.js.org)
- [Google OAuth Documentation](https://developers.google.com/identity/protocols/oauth2)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
