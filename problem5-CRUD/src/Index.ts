import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import taskRoutes from './routes/task.routes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req: Request, res: Response) => {
  res.send('Code challenge Backend');
});

app.use('/api/tasks', taskRoutes);

// Khởi động server
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});