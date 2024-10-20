import { PrismaClient } from "@prisma/client"
import {NextRequest, NextResponse} from "next/server"


const prisma = new PrismaClient()

export async function GET(request:NextRequest) {
    try {
        const videos = await prisma.video.findMany({
            orderBy:{createdAt:"desc"}
        })

        return NextResponse.json(videos)
    } catch (error:any) {
        return NextResponse.json({error:"error fetching videos"},{status:500},)
    }
    finally{
        await prisma.$disconnect()
    }
}