import { singleton, autoInjectable } from "tsyringe";
import BaseJsonApiController from "../../core/controllers/json-api.controller";
import { JsonApiController } from "../../core/decorators/controller.decorator";
import { Sku } from "../models/sku.model";

@JsonApiController(Sku)
@singleton()
@autoInjectable()
export default class SkuController extends BaseJsonApiController<Sku> {
}
