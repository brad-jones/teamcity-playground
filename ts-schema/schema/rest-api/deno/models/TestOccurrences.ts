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

import { TestCounters } from './TestCounters.ts';
import { TestOccurrence } from './TestOccurrence.ts';
import { HttpFile } from '../http/http.ts';

export class TestOccurrences {
    'count'?: number;
    'href'?: string;
    'nextHref'?: string;
    'prevHref'?: string;
    'testOccurrence'?: Array<TestOccurrence>;
    'testCounters'?: TestCounters;
    'passed'?: number;
    'failed'?: number;
    'newFailed'?: number;
    'ignored'?: number;
    'muted'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "count",
            "baseName": "count",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "href",
            "baseName": "href",
            "type": "string",
            "format": ""
        },
        {
            "name": "nextHref",
            "baseName": "nextHref",
            "type": "string",
            "format": ""
        },
        {
            "name": "prevHref",
            "baseName": "prevHref",
            "type": "string",
            "format": ""
        },
        {
            "name": "testOccurrence",
            "baseName": "testOccurrence",
            "type": "Array<TestOccurrence>",
            "format": ""
        },
        {
            "name": "testCounters",
            "baseName": "testCounters",
            "type": "TestCounters",
            "format": ""
        },
        {
            "name": "passed",
            "baseName": "passed",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "failed",
            "baseName": "failed",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "newFailed",
            "baseName": "newFailed",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "ignored",
            "baseName": "ignored",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "muted",
            "baseName": "muted",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return TestOccurrences.attributeTypeMap;
    }
    
    public constructor() {
    }
}
