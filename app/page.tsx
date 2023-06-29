import ProjectsRepo from '@/lib/repository/ProjectsRepo';
import { Project } from '@/lib/types';
import { WithId } from 'mongodb';

export default async function Home() {

  return (
    <main className="">
      <ProjectsShowcase />
    </main>
  )
}


async function ProjectsShowcase() {
  const projects = await ProjectsRepo.getAll();
  return (
    <div className="flex flex-col p-4">
      {
        projects.map(
          project => (<ProjectDisplay key={project._id.toString()} {...project} />)
        )
      }
    </div>
  );
}

function ProjectDisplay(props: WithId<Project>) {
  const { name, description } = props;
  return (
    <div className="p-4 rounded-sm border-white border">
      <h3>{name}</h3>
      <div>{description}</div>
    </div>
  );
}

