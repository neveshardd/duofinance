import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { findUser } from "./lib/find-user"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Credentials({
    credentials: {
      email: {},
      password: {}
    },
    authorize: async (credentials) => {
      const user = await findUser(credentials.email as string, credentials.password as string)

      return user
    }
  })],
})