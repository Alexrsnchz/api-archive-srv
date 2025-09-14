import CategoryService from '../service/CategoryService.js';

export default class CategoryController {
  static async getCategories(req, res, next) {
    try {
      const page = parseInt(req.query.page) || null;
      const limit = parseInt(req.query.limit) || null;

      let categories;

      if (page && limit) {
        categories = await CategoryService.getPaginated(page, limit);
      } else {
        const data = await CategoryService.getAll();
        categories = { data };
      }

      return res.status(200).json(categories);
    } catch (error) {
      next(error);
    }
  }

  static async getCategory(req, res, next) {
    const { id } = req.params;

    try {
      const category = await CategoryService.getById(Number(id));

      return res.status(200).json(category);
    } catch (error) {
      next(error);
    }
  }

  static async addCategory(req, res, next) {
    const data = req.body;

    try {
      const category = await CategoryService.create(data);

      return res.status(201).json(category);
    } catch (error) {
      next(error);
    }
  }

  static async updateCategory(req, res, next) {
    const { id } = req.params;
    const data = req.body;

    try {
      const category = await CategoryService.update(Number(id), data);

      return res.status(200).json(category);
    } catch (error) {
      next(error);
    }
  }

  static async deleteCategory(req, res, next) {
    const { id } = req.params;

    try {
      await CategoryService.delete(Number(id));

      return res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}
