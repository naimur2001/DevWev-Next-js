

import User from "@/models/User";
import connect from "@/utils/database";

import { NextResponse } from "next/server";

export const GET = async (request,{params}) => {
  const {email}=params;
  try {
    await connect()
    const user= await User.findOne({email:email})
    return new NextResponse(JSON.stringify(user), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error !!", { status: 500 });
    }
    // return new NextResponse("Database cholche !!", { status: 200 });
};

