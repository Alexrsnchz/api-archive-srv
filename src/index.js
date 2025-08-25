import express from 'express';
import { corsMiddleware } from './middleware/corsMiddleware.js';
import { categoriesRouter } from './routes/categoriesRouter.js';
import { apisRouter } from './routes/apisRouter.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.disable('x-powered-by');
app.use(express.json());
app.use(corsMiddleware);

app.use('/api/categories', categoriesRouter);
app.use('/api/apis', apisRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
