import  express from 'express';
import routes from './routes/routes';

import * as dotenv from 'dotenv';
dotenv.config();

const app = express();

// ----------------------------- MIDLEWARE -----------------------------

app.use(routes);

// ----------------------------- SETUP -----------------------------

const port: Number = Number(process.env.PORT) || 3000;
app.listen(port, () => {
    console.log(`server running in port ${port}`);
})