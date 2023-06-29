import ProjectsRepo from "@/lib/repository/ProjectsRepo";
import { NextResponse, type NextRequest } from "next/server";

/* INSERT PROJECTS */
export async function POST(req: NextRequest) {
  const { name, description } = await req.json();
  
  await ProjectsRepo.insertOne({
    name, description
  });
  
  const body = JSON.stringify({
    ok: true
  });

  return new NextResponse(body, {
    status: 200
  })
}

