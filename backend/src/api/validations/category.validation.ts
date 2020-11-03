import * as Joi from "@hapi/joi";
import Boom from "@hapi/boom";
import * as Moment from "moment-timezone";
import { ValidationSchema } from "../../core/types/validation";
import { Category } from "../models/category.model";

export const get: ValidationSchema<Category> = {
    	id: {
    		in: [
    			"params"
    		],
    		errorMessage: "Please provide a valid id",
    		isInt: true,
    		toInt: true
    	}
    };
export const list: ValidationSchema<Category> = {};
export const create: ValidationSchema<Category> = {
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
        }
};
export const update: ValidationSchema<Category> = {
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
        }
};
export const remove: ValidationSchema<Category> = {};
