import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.static('public'));

app.listen(port, () => {
  console.debug('Kinch client running on port', port);
});
