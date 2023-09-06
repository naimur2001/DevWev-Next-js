import connect from "@/utils/database";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import User from "@/models/User";
export const POST =async (request)=>{
  const {username,email,password}= await request.json();

  await connect();
  const hashedPassword= await bcrypt.hash(password,5)
const newUser= new User(
  {
    username,
    email,
    password:hashedPassword,
  }
)
  try {
    await newUser.save();
    return new NextResponse("Account has been created",{
      status: 201,
    });
  } catch (error) {
    return new NextResponse(err.message,{
      status: 500,
    });
  }

}