import cors from 'cors';
import * as dotenv from 'dotenv';
import express, { Application, Request, Response } from 'express';
import helmet from 'helmet';

dotenv.config();

const PORT: number = parseInt(process.env.PORT as string);

const app: Application = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
