import { prisma } from '../lib/prisma.js';

export default class ApiRepository {
  static getAll() {
    return prisma.api.findMany();
  }

  static getById(id) {
    return prisma.api.findUnique({
      where: { id },
    });
  }

  static getBySearch(search) {
    return prisma.api.findMany({
      where: {
        name: {
          contains: search,
          mode: 'insensitive',
        },
      },
    });
  }

  static create(data) {
    return prisma.api.create({
      data: data,
    });
  }

  static update(id, data) {
    return prisma.api.update({
      where: { id },
      data: data,
    });
  }

  static delete(id) {
    return prisma.api.delete({
      where: { id },
    });
  }
}
