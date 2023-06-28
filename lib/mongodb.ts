import { MongoClient, Db } from 'mongodb';

class Database {
  static instance: Db;
  private dbURI = 'mongodb://localhost:3001';
  private dbName = 'inntaesh';
  private options = {};

  constructor() {
    if (!Database.instance)
      this.connect();
  }

  private connect() {
    const client = new MongoClient(this.dbURI, this.options);
    Database.instance = client.db(this.dbName);
  }
}

const db = new Database();

export default Database.instance;