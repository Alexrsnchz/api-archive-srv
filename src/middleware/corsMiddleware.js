import cors from 'cors';

const corsOptions = {
  origin: ['http://localhost:5173', 'https://api-archive-web.vercel.app'],
  credentials: true,
};

export const corsMiddleware = cors(corsOptions);
