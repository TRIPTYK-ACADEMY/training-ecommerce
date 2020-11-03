import { singleton } from "tsyringe";
import { JsonApiSerializer } from "../../core/decorators/serializer.decorator";
import { BaseJsonApiSerializer } from "../../core/serializers/base.serializer";
import { Category } from "../models/category.model";
import CategorySerializerSchema from "./schemas/category.serializer.schema";

@singleton()
@JsonApiSerializer({
    type : "categories",
    schemas : () => [CategorySerializerSchema]
})
export class CategorySerializer extends BaseJsonApiSerializer<Category> {
}
