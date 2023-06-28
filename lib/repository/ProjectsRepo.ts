import { ObjectId } from 'mongodb';
import Repository from './config/repository';

export interface Project {
  name: string
  description: string
}

class Projects extends Repository<Project> {
  constructor() {
    super({
      collection: 'Projects'
    });
  }

  public async get(projectName: string) {
    return this.collection.findOne({name: projectName});
  }

  public async insertOne(props: Project) {
    const { 
      name,
      description
    } = props;

    return this.collection.insertOne({
      name,
      description
    });
  }

  public async updateOne(id: string, props: Project) {
    const _id = new ObjectId(id);
    return this.collection.findOneAndUpdate({ _id }, {
      $set: {
        ...props
      }
    }); 
  }

  public async deleteOne(id: string) {
    const _id = new ObjectId(id);

    await this.collection.findOneAndDelete({_id});
  }

}

const ProjectsRepo = new Projects();

export default ProjectsRepo;