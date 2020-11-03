import { singleton, autoInjectable } from "tsyringe";
import BaseJsonApiController from "../../core/controllers/json-api.controller";
import { JsonApiController } from "../../core/decorators/controller.decorator";
import { Category } from "../models/category.model";

@JsonApiController(Category)
@singleton()
@autoInjectable()
export default class CategoryController extends BaseJsonApiController<Category> {
}
