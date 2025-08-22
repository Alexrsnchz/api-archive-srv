import { Router } from 'express';
import CategoriesController from '../controller/CategoryController.js';

export const categoriesRouter = new Router();

categoriesRouter.get('/', CategoriesController.getCategories);
categoriesRouter.post('/', CategoriesController.addCategory);

categoriesRouter.get('/:id', CategoriesController.getCategory);
categoriesRouter.patch('/:id', CategoriesController.updateCategory);
categoriesRouter.delete('/:id', CategoriesController.deleteCategory);
