import ProjectsRepo, { Project } from '@/lib/repository/ProjectsRepo';
import { WithId } from 'mongodb';

export default async function Home() {

  return (
    <main className="">
      <Showcase />
    </main>
  )
}


async function Showcase() {
  const projects = await ProjectsRepo.getAll();
  return (
    <div className="flex flex-col p-4">
      {
        projects.map(
          project => (<Project key={project._id.toString()} {...project} />)
        )
      }
    </div>
  );
}

function Project(props: WithId<Project>) {
  const { name, description } = props;
  return (
    <div className="p-4 rounded-sm border-white border">
      <h3>{name}</h3>
      <div>{description}</div>
    </div>
  );
}

