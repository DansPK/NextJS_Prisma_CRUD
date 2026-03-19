import prisma from "../../../../../lib/prisma";
import {NextResponse} from "next/server";

export async function GET(_, {params}){
    const {name} = await params;
    const user = await prisma.user.findUnique({
        where: {
            name: name,
        },
    });

    return NextResponse.json({
        status: 200,
        message: `Get user name: ${name} successfully`,
        payload: user,
    });

}