import CategoryRepository from '../repository/CategoryRepository.js';

export default class CategoryService {
  static getAll() {
    return CategoryRepository.getAll();
  }

  static getById(id) {
    return CategoryRepository.getById(id);
  }

  static create(category) {
    return CategoryRepository.create(category);
  }

  static update(id, category) {
    return CategoryRepository.update(id, category);
  }

  static delete(id) {
    return CategoryRepository.delete(id);
  }
}
