import Database from '@/lib/mongodb';
import { Collection } from 'mongodb';

class Repository<T extends {}> {
  protected collection: Collection<T>;

  constructor (props: {collection: string}) {
    const { collection } = props;
    
    this.collection = Database.collection<T>(collection)
  }

  public async getAll() {
    return this.collection.find().toArray();
  }
}

export default Repository