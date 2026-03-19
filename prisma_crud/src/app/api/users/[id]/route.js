import prisma from "../../../../lib/prisma";
import {NextResponse} from "next/server";

export async function GET(_, {params}) {
    const {id} = await params;
    const user = await prisma.user.findUnique({
        where: {
            id: +id,
        },
    });

    return NextResponse.json({
        status: 200,
        message: `Get user id: ${id} successfully.`,
        payload: user,
    })

}


export async function DELETE(_, {params}) {
    const {id} = await params;
    await prisma.user.delete({
        where: {
            id: +id,
        }
    });
    return NextResponse.json({
        status: 200,
        message: `Delete user id: ${id} successfully.`,
    })
}

export async function PUT(request, {params}){
    const {name, email} = await request.json();
    const {id} = await params;
    const updateUser = await prisma.user.update({
        data:{name, email},
        where: {
            id: +id,
        },
    });

    return NextResponse.json({
        status: 200,
        message: `Update user id: ${id} successfully.`,
        payload: updateUser,
    });
}
