const path = require('path');
const fs = require('fs');
import express, {
  Request,
  Response,
  NextFunction,
  RequestHandler,
} from 'express';
import { ServerError } from '../types';
const structureRouter = require('./routers/structureRouter');
const PORT = 3036;

// invoke express
const app = express();

// parse request body using express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../dist')));

app.use('/api/structure', structureRouter);

// Sends the index.html to all routes (for server-side ReactRouter)
app.use('*', (req, res, next) => {
  const error = {
    status: 404,
    message: { err: 'Not Found' },
  };
  return res.status(200).sendFile(path.join(__dirname, '../dist/index.html'));

  next(error);
});

// global error handling
app.use(
  // '/',
  (err: ServerError, req: Request, res: Response, next: NextFunction) => {
    const globalErr = {
      log: 'UNKNOWN MIDDLEWARE ERROR',
      status: 500,
      message: { err: 'ERROR' },
    };
    const errorObj = Object.assign({}, globalErr, err);
    return res.status(errorObj.status).json(errorObj.message);
  }
);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

// export app module
module.exports = app;
