import { Column, OneToOne } from "typeorm";
import { JsonApiEntity } from "../../core/decorators/model.decorator";
import { JsonApiModel } from "../../core/models/json-api.model";
import { Document } from "../models/document.model";
import { CategoryRepository } from "../repositories/category.repository";
import { CategorySerializer } from "../serializers/category.serializer";
import * as CategoryValidator from "../validations/category.validation";

export interface CategoryInterface {
    name;
    description;
    media;
}

@JsonApiEntity("categories", {
    serializer: CategorySerializer,
    repository: CategoryRepository,
    validator: CategoryValidator
})
export class Category extends JsonApiModel<Category> implements CategoryInterface {
    @Column({
    	type: "varchar",
    	nullable: false,
    	length: 255
    })
    public name;
    @Column({
    	type: "text",
    	nullable: true
    })
    public description;
    @OneToOne(() => Document, (inverseRelation) => inverseRelation.category_media)
    public media;
}
