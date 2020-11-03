import { singleton } from "tsyringe";
import { JsonApiSerializer } from "../../core/decorators/serializer.decorator";
import { BaseJsonApiSerializer } from "../../core/serializers/base.serializer";
import { Sku } from "../models/sku.model";
import SkuSerializerSchema from "./schemas/sku.serializer.schema";

@singleton()
@JsonApiSerializer({
    type : "skus",
    schemas : () => [SkuSerializerSchema]
})
export class SkuSerializer extends BaseJsonApiSerializer<Sku> {
}
