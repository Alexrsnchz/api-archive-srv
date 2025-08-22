import ApiRepository from '../repository/ApiRepository.js';

export default class ApiService {
  static getAll() {
    return ApiRepository.getAll();
  }

  static getById(id) {
    return ApiRepository.getById(id);
  }

  static create(api) {
    return ApiRepository.create(api);
  }

  static update(id, api) {
    return ApiRepository.update(id, api);
  }

  static delete(id) {
    return ApiRepository.delete(id);
  }
}
