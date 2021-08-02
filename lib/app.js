import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';
import booksController from './controllers/books';

const app = express();

app.use(express.json());
app.use('/api/v1/books', booksController);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
