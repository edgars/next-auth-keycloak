import NextAuth from "next-auth"
import KeycloakProvider from "next-auth/providers/keycloak";

export default NextAuth({
  providers: [
    KeycloakProvider({
      clientId: "manager",
      clientSecret: "EIiCep91qG0GwPgQxozwNfSiUbnAyDEl",
      issuer: "http://localhost:8080/auth/realms/api-manager",
    })
  ],
  pages: {
    /**
    signIn: 'http://loalh',
    signOut: '/auth/signout',
    error: '/auth/error', // Error code passed in query string as ?error=
    verifyRequest: '/auth/verify-request', // (used for check email message)
    newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
    */
  },
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token
      }
      console.log(token)
      return token
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken
      console.log(session.accessToken)
      return session
    }
  }
});
