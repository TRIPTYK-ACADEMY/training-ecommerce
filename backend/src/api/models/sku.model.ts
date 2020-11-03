import { Column, OneToMany } from "typeorm";
import { JsonApiEntity } from "../../core/decorators/model.decorator";
import { JsonApiModel } from "../../core/models/json-api.model";
import { Document } from "../models/document.model";
import { SkuRepository } from "../repositories/sku.repository";
import { SkuSerializer } from "../serializers/sku.serializer";
import * as SkuValidator from "../validations/sku.validation";

export interface SkuInterface {
    name;
    description;
    price;
    media;
}

@JsonApiEntity("skus", {
    serializer: SkuSerializer,
    repository: SkuRepository,
    validator: SkuValidator
})
export class Sku extends JsonApiModel<Sku> implements SkuInterface {
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
    @Column({
    	type: "int",
    	nullable: false,
    	width: 11
    })
    public price;
    
    @OneToMany(() => Document, (inverseRelation) => inverseRelation.sku_media)
    public media;
}
