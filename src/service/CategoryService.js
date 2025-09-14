import prisma from '../lib/prisma.js';

export default class CategoryRepository {
  static getAll() {
    return prisma.category.findMany({
      include: {
        _count: {
          select: { apis: true },
        },
      },
    });
  }

  static async getPaginated(page = 1, limit = 10) {
    const skip = (page - 1) * limit;

    const [data, total] = await Promise.all([
      prisma.category.findMany({
        skip,
        take: limit,
        orderBy: { id: 'asc' },
        include: {
          _count: {
            select: { apis: true },
          },
        },
      }),
      prisma.category.count(),
    ]);

    return {
      data,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  static getById(id) {
    return prisma.category.findUnique({
      where: { id },
    });
  }

  static create(data) {
    return prisma.category.create({
      data: data,
    });
  }

  static update(id, data) {
    return prisma.category.update({
      where: { id },
      data: data,
    });
  }

  static delete(id) {
    return prisma.category.delete({
      where: { id },
    });
  }
}
