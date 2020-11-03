import { CategoryInterface } from "../../models/category.model";
import { Serialize, Deserialize, SerializerSchema, Relation } from "../../../core/decorators/serializer.decorator";
import DocumentSerializerSchema from "./document.serializer.schema";

@SerializerSchema()
export default class CategorySerializerSchema implements CategoryInterface {
    @Serialize()
    @Deserialize()
    public name;
    @Serialize()
    @Deserialize()
    public description;
    @Relation(() => DocumentSerializerSchema)
    public media;
}
