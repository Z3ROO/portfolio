import ProjectsRepo from "@/lib/repository/ProjectsRepo";
import { NextResponse, type NextRequest } from "next/server";

export async function DELETE(req: NextRequest, { params }: { params: { id: string }}) {
  const projectId = params.id;
  
  await ProjectsRepo.deleteOne(projectId);

  return new NextResponse(JSON.stringify({ok: true}), {
    status: 200
  });
}