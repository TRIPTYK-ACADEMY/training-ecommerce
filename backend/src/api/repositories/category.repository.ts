import BaseJsonApiRepository from "../../core/repositories/base.repository";
import { Category } from "../models/category.model";

export class CategoryRepository extends BaseJsonApiRepository<Category> {
    public constructor() {
        super();
    }
}
