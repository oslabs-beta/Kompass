const path = require('path');
const fs = require('fs');
import express, {
  Request,
  Response,
  NextFunction,
  RequestHandler,
} from 'express';
import { ServerError } from '../types';
const PORT = 3000;

// invoke express
const app = express();

// parse request body using express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', express.static(path.join(__dirname, '../dist')));

// catch-all router handler for any request to an unknown route
app.use('*', (req, res) => {
  return res.status(404).send('ERROR, ROUTE NOT FOUND');
});

// global error handling
app.use(
  '/',
  (err: ServerError, req: Request, res: Response, next: NextFunction) => {
    const globalErr = {
      log: 'UNKNOWN MIDDLEWARE ERROR',
      status: 500,
      message: { err: 'ERROR' },
    };
    const errorObj = Object.assign({}, globalErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  }
);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

// export app module
module.exports = app;
