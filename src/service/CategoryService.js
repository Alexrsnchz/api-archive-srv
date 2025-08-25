import { prisma } from '../lib/prisma.js';

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
