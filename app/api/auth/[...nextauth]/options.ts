//// @ts-expect-error : "Module '"next-auth"' has no exported member 'NextAuthOptions'. Did you mean to use 'import NextAuthOptions from "next-auth"' instead?ts(2614)"
// import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
// import CredentialsProvider from "next-auth/providers/credentials";

export const options = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
};
