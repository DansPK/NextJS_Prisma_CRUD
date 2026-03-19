import prisma from "../../../lib/prisma";
import {NextRequest, NextResponse} from "next/server";

export async function GET(){
    const userData = await prisma.user.findMany();
    return NextResponse.json({
        status: 200,
        message: "Get all uses successfully",
        payload: userData,
    })
}


export async function POST(request){
    const {name, email} = await request.json();
    const addUser = await prisma.user.create(
        {
            data: {
                name,
                email,
            },
        });
    return NextResponse.json({
        status: 200,
        message: "Add new user successfully",
        payload: addUser,
    })
}