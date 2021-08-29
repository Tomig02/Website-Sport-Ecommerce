import express from 'express';
import path from 'path';
import routes from './source/routes/routes';

import * as dotenv from 'dotenv';
dotenv.config();

const app = express();

// ----------------------------- MIDLEWARE -----------------------------

app.use(routes);
app.use(express.static(path.join(__dirname, 'public')));
console.log(path.join(__dirname, 'public'));
app.set('views', './source/templates');
app.set('view engine', 'pug');


// ----------------------------- SETUP -----------------------------

const port: Number = Number(process.env.PORT) || 3000;
app.listen(port, () => {
    console.log(`server running in port ${port}`);
})