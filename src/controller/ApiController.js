import ApiService from '../service/ApiService.js';

export default class ApiController {
  static async getApis(req, res, next) {
    try {
      const apis = await ApiService.getAll();

      return res.status(200).json(apis);
    } catch (error) {
      next(error);
    }
  }

  static async getApi(req, res, next) {
    const { id } = req.params;

    try {
      const api = await ApiService.getById(id);

      return res.status(200).json(api);
    } catch (error) {
      next(error);
    }
  }

  static async getApiSearch(req, res, next) {
    const search = req.query.query;

    if (!search || search.length < 3 || search.trim() === '') {
      return res.status(200).json([]);
    }

    try {
      const apis = await ApiService.getBySearch(search);

      return res.status(200).json(apis);
    } catch (error) {
      next(error);
    }
  }

  static async getApiCategory(req, res, next) {
    const category = req.query.categoryId;

    try {
      const apis = await ApiService.getByCategory(Number(category));

      return res.status(200).json(apis);
    } catch (error) {
      next(error);
    }
  }

  static async addApi(req, res, next) {
    const data = req.body;

    try {
      const api = await ApiService.create(data);

      return res.status(201).json(api);
    } catch (error) {
      next(error);
    }
  }

  static async updateApi(req, res, next) {
    const { id } = req.params;
    const data = req.body;

    try {
      const api = await ApiService.update(id, data);

      return res.status(200).json(api);
    } catch (error) {
      next(error);
    }
  }

  static async deleteApi(req, res, next) {
    const { id } = req.params;

    try {
      await ApiService.delete(id);

      return res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}
