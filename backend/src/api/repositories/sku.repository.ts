import BaseJsonApiRepository from "../../core/repositories/base.repository";
import { Sku } from "../models/sku.model";

export class SkuRepository extends BaseJsonApiRepository<Sku> {
    public constructor() {
        super();
    }
}
