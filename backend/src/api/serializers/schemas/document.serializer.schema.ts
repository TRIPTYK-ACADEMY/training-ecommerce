import { Serialize, Deserialize, SerializerSchema, Relation } from "../../../core/decorators/serializer.decorator";
import UserSerializerSchema from "./user.serializer.schema";
import { DocumentInterface } from "../../models/document.model";
import SkuSerializerSchema from "./sku.serializer.schema";
import CategorySerializerSchema from "./category.serializer.schema";

@SerializerSchema()
export default class DocumentSerializerSchema implements DocumentInterface  {
    @Serialize()
    public deleted_at: Date;

    @Serialize()
    @Deserialize()
    public fieldname;

    @Serialize()
    @Deserialize()
    public filename;

    @Serialize()
    @Deserialize()
    public originalname;

    @Serialize()
    @Deserialize()
    public size;

    @Serialize()
    @Deserialize()
    public mimetype;

    @Serialize()
    @Deserialize()
    public path;

    @Relation(() => UserSerializerSchema)
    public users;

    @Relation(() => UserSerializerSchema)
    public user_avatar;
    @Relation(() => SkuSerializerSchema)
    public sku_media;
    @Relation(() => CategorySerializerSchema)
    public category_media;
}
