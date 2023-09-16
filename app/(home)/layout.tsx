import GetAllProjects from "@/util/GetAllProjects";
import { ReactNode } from "react";
import { SortProjectsContext } from "./ProjectsContext";
import Header from "./Header";

export default async function HomeLayout({children}: {children: ReactNode}) {
  const projects = await GetAllProjects();

  return (
    <div className='h-screen w-screen'>
      <SortProjectsContext originalProjects={projects}>
        <Header>
          {children}
        </Header>
      </SortProjectsContext>
    </div>
  )
}