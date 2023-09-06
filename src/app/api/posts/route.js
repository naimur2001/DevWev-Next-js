
import Post from "@/models/Post";
import connect from "@/utils/database";

import { NextResponse } from "next/server";

export const GET = async (request) => {
  const url= new URL(request.url)
  const username=url.searchParams.get('username')
  try {
    await connect()
    const posts= await Post.find(username && {username})
    return new NextResponse(JSON.stringify(posts), { status: 201 });
  } catch (error) {
    return new NextResponse("Database Error !!", { status: 500 });
    }
    // return new NextResponse("Database cholche !!", { status: 200 });
};

//post
export const POST = async (request) => {
 const {title,desc,image,content,username}= await request.json()
 const newPost= new Post({title,desc,image,content,username})
  try {
    await connect()
    await newPost.save()
    return new NextResponse("Post Done", { status: 201 });
  } catch (error) {
    return new NextResponse("Database Error !!", { status: 500 });
    }

  
};

