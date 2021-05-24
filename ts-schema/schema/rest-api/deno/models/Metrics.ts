/**
 * TeamCity REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 2018.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Metric } from './Metric.ts';
import { HttpFile } from '../http/http.ts';

export class Metrics {
    'count'?: number;
    'metric'?: Array<Metric>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "count",
            "baseName": "count",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "metric",
            "baseName": "metric",
            "type": "Array<Metric>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Metrics.attributeTypeMap;
    }
    
    public constructor() {
    }
}

