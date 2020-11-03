import { SkuInterface } from "../../models/sku.model";
import { Serialize, Deserialize, SerializerSchema, Relation } from "../../../core/decorators/serializer.decorator";
import DocumentSerializerSchema from "./document.serializer.schema";

@SerializerSchema()
export default class SkuSerializerSchema implements SkuInterface {
    @Serialize()
    @Deserialize()
    public name;
    @Serialize()
    @Deserialize()
    public description;
    @Serialize()
    @Deserialize()
    public price;
    @Relation(() => DocumentSerializerSchema)
    public media;
}
