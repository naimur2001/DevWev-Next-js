import User from "@/models/User"
import connect from "@/utils/database"
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs"
 const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
     
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      id:"credentials",
      name:"Credentials",
      async authorize(credentials){
        await connect()
        try {
          const user= await User.findOne({email:credentials.email})
             const {username,email}=user
        if (user) {
        const isPasswordCorrect= await bcrypt.compare(credentials.password,user.password)
      console.log(user)
if (isPasswordCorrect) {
  return user;
}
else{
  throw new Error("Wrong input")
}
        }
        else{

          throw new Error("User not found")
        }

        } catch (error) {
          throw new Error(error)
        }
      }
    })
    // ...add more providers here
  ],
  pages:{
    error:"/dashboard/login"
  }
})

export {handler as GET, handler as POST}