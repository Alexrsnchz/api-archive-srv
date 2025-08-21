import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.disable('x-powered-by');
app.use(express.json());

/*app.use('/api/categories', categoriesRouter)
app.use('/api/apis', apisRouter)*/

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
