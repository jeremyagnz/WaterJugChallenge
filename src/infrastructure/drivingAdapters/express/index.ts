import express, { Application } from 'express';
import cors from 'cors';
import routes from './routes';

class Server {
  private app: Application;
  private port: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '8000';
    this.config();
    this.routes();
  }

  private config(): void {
    this.app.use(express.json());
    this.app.use(cors());
  }

  private routes(): void {
    this.app.use('/api', routes);
  }

  public start(): void {
    this.app.listen(this.port, () => {
      console.log(`Server listening on port ${this.port}`);
    });
  }
}

const server = new Server();
server.start();