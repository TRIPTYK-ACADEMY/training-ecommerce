import * as Joi from "@hapi/joi";
import Boom from "@hapi/boom";
import * as Moment from "moment-timezone";
import { ValidationSchema } from "../../core/types/validation";
import { Sku } from "../models/sku.model";

export const get: ValidationSchema<Sku> = {
    	id: {
    		in: [
    			"params"
    		],
    		errorMessage: "Please provide a valid id",
    		isInt: true,
    		toInt: true
    	}
    };
export const list: ValidationSchema<Sku> = {};
export const create: ValidationSchema<Sku> = {
    name: {
        	exists: true,
        	isLength: {
        		errorMessage: "Maximum length is 255",
        		options: {
        			min: 0,
        			max: 255
        		}
        	},
        	isString: {
        		errorMessage: "This field must be a string"
        	}
        },
    description: {
        	optional: {
        		options: {
        			nullable: true,
        			checkFalsy: true
        		}
        	},
        	isString: {
        		errorMessage: "This field must be a string"
        	}
        },
    price: {
        	exists: true,
        	isInt: {
        		errorMessage: "This field must be an integer"
        	}
        }
};
export const update: ValidationSchema<Sku> = {
        ...exports.get,
        ...{},
    name: {
        	exists: true,
        	isLength: {
        		errorMessage: "Maximum length is 255",
        		options: {
        			min: 0,
        			max: 255
        		}
        	},
        	isString: {
        		errorMessage: "This field must be a string"
        	}
        },
    description: {
        	optional: {
        		options: {
        			nullable: true,
        			checkFalsy: true
        		}
        	},
        	isString: {
        		errorMessage: "This field must be a string"
        	}
        },
    price: {
        	exists: true,
        	isInt: {
        		errorMessage: "This field must be an integer"
        	}
        }
};
export const remove: ValidationSchema<Sku> = {};
