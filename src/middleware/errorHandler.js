import { Prisma } from '../lib/prisma.js';

export function errorHandler(error, req, res, next) {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    switch (error.code) {
      case 'P2025':
        return res.status(404).json({
          status: 'error',
          message: 'Resource not found',
        });
      case 'P2002':
        return res.status(409).json({
          status: 'error',
          message: 'Resource already exists',
        });
      default:
        return res.status(500).json({
          status: 'error',
          message: 'Database error',
        });
    }
  }

  console.error('Unhandled error: ', error);
  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
}
