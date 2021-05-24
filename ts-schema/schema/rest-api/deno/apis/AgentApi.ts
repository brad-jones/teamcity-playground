// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {isCodeInRange} from '../util.ts';

import { Agent } from '../models/Agent.ts';
import { AgentPool } from '../models/AgentPool.ts';
import { Agents } from '../models/Agents.ts';
import { AuthorizedInfo } from '../models/AuthorizedInfo.ts';
import { BuildTypes } from '../models/BuildTypes.ts';
import { Compatibilities } from '../models/Compatibilities.ts';
import { CompatibilityPolicy } from '../models/CompatibilityPolicy.ts';
import { EnabledInfo } from '../models/EnabledInfo.ts';

/**
 * no description
 */
export class AgentApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Delete an inactive agent.
     * @param agentLocator 
     */
    public async deleteAgent(agentLocator: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'agentLocator' is not null or undefined
        if (agentLocator === null || agentLocator === undefined) {
            throw new RequiredError('Required parameter agentLocator was null or undefined when calling deleteAgent.');
        }


        // Path Params
        const localVarPath = '/app/rest/agents/{agentLocator}'
            .replace('{' + 'agentLocator' + '}', encodeURIComponent(String(agentLocator)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["Authorization"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get agent matching the locator.
     * @param agentLocator 
     * @param fields 
     */
    public async getAgent(agentLocator: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'agentLocator' is not null or undefined
        if (agentLocator === null || agentLocator === undefined) {
            throw new RequiredError('Required parameter agentLocator was null or undefined when calling getAgent.');
        }



        // Path Params
        const localVarPath = '/app/rest/agents/{agentLocator}'
            .replace('{' + 'agentLocator' + '}', encodeURIComponent(String(agentLocator)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fields !== undefined) {
            requestContext.setQueryParam("fields", ObjectSerializer.serialize(fields, "string", ""));
        }

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["Authorization"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get a field of the matching agent.
     * @param agentLocator 
     * @param field 
     */
    public async getAgentField(agentLocator: string, field: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'agentLocator' is not null or undefined
        if (agentLocator === null || agentLocator === undefined) {
            throw new RequiredError('Required parameter agentLocator was null or undefined when calling getAgentField.');
        }


        // verify required parameter 'field' is not null or undefined
        if (field === null || field === undefined) {
            throw new RequiredError('Required parameter field was null or undefined when calling getAgentField.');
        }


        // Path Params
        const localVarPath = '/app/rest/agents/{agentLocator}/{field}'
            .replace('{' + 'agentLocator' + '}', encodeURIComponent(String(agentLocator)))
            .replace('{' + 'field' + '}', encodeURIComponent(String(field)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["Authorization"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get the agent pool of the matching agent.
     * @param agentLocator 
     * @param fields 
     */
    public async getAgentPool(agentLocator: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'agentLocator' is not null or undefined
        if (agentLocator === null || agentLocator === undefined) {
            throw new RequiredError('Required parameter agentLocator was null or undefined when calling getAgentPool.');
        }



        // Path Params
        const localVarPath = '/app/rest/agents/{agentLocator}/pool'
            .replace('{' + 'agentLocator' + '}', encodeURIComponent(String(agentLocator)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fields !== undefined) {
            requestContext.setQueryParam("fields", ObjectSerializer.serialize(fields, "string", ""));
        }

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["Authorization"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get all known agents.
     * @param locator 
     * @param fields 
     */
    public async getAllAgents(locator?: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;



        // Path Params
        const localVarPath = '/app/rest/agents';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (locator !== undefined) {
            requestContext.setQueryParam("locator", ObjectSerializer.serialize(locator, "string", "AgentLocator"));
        }
        if (fields !== undefined) {
            requestContext.setQueryParam("fields", ObjectSerializer.serialize(fields, "string", ""));
        }

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["Authorization"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get the authorization info of the matching agent.
     * @param agentLocator 
     * @param fields 
     */
    public async getAuthorizedInfo(agentLocator: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'agentLocator' is not null or undefined
        if (agentLocator === null || agentLocator === undefined) {
            throw new RequiredError('Required parameter agentLocator was null or undefined when calling getAuthorizedInfo.');
        }



        // Path Params
        const localVarPath = '/app/rest/agents/{agentLocator}/authorizedInfo'
            .replace('{' + 'agentLocator' + '}', encodeURIComponent(String(agentLocator)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fields !== undefined) {
            requestContext.setQueryParam("fields", ObjectSerializer.serialize(fields, "string", ""));
        }

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["Authorization"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get the build configuration run policy of the matching agent.
     * @param agentLocator 
     * @param fields 
     */
    public async getBuildConfigurationRunPolicy(agentLocator: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'agentLocator' is not null or undefined
        if (agentLocator === null || agentLocator === undefined) {
            throw new RequiredError('Required parameter agentLocator was null or undefined when calling getBuildConfigurationRunPolicy.');
        }



        // Path Params
        const localVarPath = '/app/rest/agents/{agentLocator}/compatibilityPolicy'
            .replace('{' + 'agentLocator' + '}', encodeURIComponent(String(agentLocator)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fields !== undefined) {
            requestContext.setQueryParam("fields", ObjectSerializer.serialize(fields, "string", ""));
        }

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["Authorization"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get build types compatible with the matching agent.
     * @param agentLocator 
     * @param fields 
     */
    public async getCompatibleBuildTypes(agentLocator: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'agentLocator' is not null or undefined
        if (agentLocator === null || agentLocator === undefined) {
            throw new RequiredError('Required parameter agentLocator was null or undefined when calling getCompatibleBuildTypes.');
        }



        // Path Params
        const localVarPath = '/app/rest/agents/{agentLocator}/compatibleBuildTypes'
            .replace('{' + 'agentLocator' + '}', encodeURIComponent(String(agentLocator)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fields !== undefined) {
            requestContext.setQueryParam("fields", ObjectSerializer.serialize(fields, "string", ""));
        }

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["Authorization"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Check if the matching agent is enabled.
     * @param agentLocator 
     * @param fields 
     */
    public async getEnabledInfo(agentLocator: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'agentLocator' is not null or undefined
        if (agentLocator === null || agentLocator === undefined) {
            throw new RequiredError('Required parameter agentLocator was null or undefined when calling getEnabledInfo.');
        }



        // Path Params
        const localVarPath = '/app/rest/agents/{agentLocator}/enabledInfo'
            .replace('{' + 'agentLocator' + '}', encodeURIComponent(String(agentLocator)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fields !== undefined) {
            requestContext.setQueryParam("fields", ObjectSerializer.serialize(fields, "string", ""));
        }

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["Authorization"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get build types incompatible with the matching agent.
     * @param agentLocator 
     * @param fields 
     */
    public async getIncompatibleBuildTypes(agentLocator: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'agentLocator' is not null or undefined
        if (agentLocator === null || agentLocator === undefined) {
            throw new RequiredError('Required parameter agentLocator was null or undefined when calling getIncompatibleBuildTypes.');
        }



        // Path Params
        const localVarPath = '/app/rest/agents/{agentLocator}/incompatibleBuildTypes'
            .replace('{' + 'agentLocator' + '}', encodeURIComponent(String(agentLocator)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fields !== undefined) {
            requestContext.setQueryParam("fields", ObjectSerializer.serialize(fields, "string", ""));
        }

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["Authorization"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Update a field of the matching agent.
     * @param agentLocator 
     * @param field 
     * @param body 
     */
    public async setAgentField(agentLocator: string, field: string, body?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'agentLocator' is not null or undefined
        if (agentLocator === null || agentLocator === undefined) {
            throw new RequiredError('Required parameter agentLocator was null or undefined when calling setAgentField.');
        }


        // verify required parameter 'field' is not null or undefined
        if (field === null || field === undefined) {
            throw new RequiredError('Required parameter field was null or undefined when calling setAgentField.');
        }



        // Path Params
        const localVarPath = '/app/rest/agents/{agentLocator}/{field}'
            .replace('{' + 'agentLocator' + '}', encodeURIComponent(String(agentLocator)))
            .replace('{' + 'field' + '}', encodeURIComponent(String(field)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "text/plain"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "string", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["Authorization"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Assign the matching agent to the specified agent pool.
     * @param agentLocator 
     * @param fields 
     * @param body 
     */
    public async setAgentPool(agentLocator: string, fields?: string, body?: AgentPool, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'agentLocator' is not null or undefined
        if (agentLocator === null || agentLocator === undefined) {
            throw new RequiredError('Required parameter agentLocator was null or undefined when calling setAgentPool.');
        }




        // Path Params
        const localVarPath = '/app/rest/agents/{agentLocator}/pool'
            .replace('{' + 'agentLocator' + '}', encodeURIComponent(String(agentLocator)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fields !== undefined) {
            requestContext.setQueryParam("fields", ObjectSerializer.serialize(fields, "string", ""));
        }

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/xml",
        
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "AgentPool", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["Authorization"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Update the authorization info of the matching agent.
     * @param agentLocator 
     * @param fields 
     * @param body 
     */
    public async setAuthorizedInfo(agentLocator: string, fields?: string, body?: AuthorizedInfo, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'agentLocator' is not null or undefined
        if (agentLocator === null || agentLocator === undefined) {
            throw new RequiredError('Required parameter agentLocator was null or undefined when calling setAuthorizedInfo.');
        }




        // Path Params
        const localVarPath = '/app/rest/agents/{agentLocator}/authorizedInfo'
            .replace('{' + 'agentLocator' + '}', encodeURIComponent(String(agentLocator)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fields !== undefined) {
            requestContext.setQueryParam("fields", ObjectSerializer.serialize(fields, "string", ""));
        }

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/xml",
        
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "AuthorizedInfo", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["Authorization"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Update build configuration run policy of agent matching locator.
     * @param agentLocator 
     * @param fields 
     * @param body 
     */
    public async setBuildConfigurationRunPolicy(agentLocator: string, fields?: string, body?: CompatibilityPolicy, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'agentLocator' is not null or undefined
        if (agentLocator === null || agentLocator === undefined) {
            throw new RequiredError('Required parameter agentLocator was null or undefined when calling setBuildConfigurationRunPolicy.');
        }




        // Path Params
        const localVarPath = '/app/rest/agents/{agentLocator}/compatibilityPolicy'
            .replace('{' + 'agentLocator' + '}', encodeURIComponent(String(agentLocator)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fields !== undefined) {
            requestContext.setQueryParam("fields", ObjectSerializer.serialize(fields, "string", ""));
        }

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/xml",
        
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "CompatibilityPolicy", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["Authorization"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Update the enablement status of the matching agent.
     * @param agentLocator 
     * @param fields 
     * @param body 
     */
    public async setEnabledInfo(agentLocator: string, fields?: string, body?: EnabledInfo, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'agentLocator' is not null or undefined
        if (agentLocator === null || agentLocator === undefined) {
            throw new RequiredError('Required parameter agentLocator was null or undefined when calling setEnabledInfo.');
        }




        // Path Params
        const localVarPath = '/app/rest/agents/{agentLocator}/enabledInfo'
            .replace('{' + 'agentLocator' + '}', encodeURIComponent(String(agentLocator)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fields !== undefined) {
            requestContext.setQueryParam("fields", ObjectSerializer.serialize(fields, "string", ""));
        }

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/xml",
        
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "EnabledInfo", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["Authorization"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class AgentApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteAgent
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteAgent(response: ResponseContext): Promise< void> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "successful operation");
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            return;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAgent
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAgent(response: ResponseContext): Promise<Agent > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Agent = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Agent", ""
            ) as Agent;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Agent = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Agent", ""
            ) as Agent;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAgentField
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAgentField(response: ResponseContext): Promise<string > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAgentPool
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAgentPool(response: ResponseContext): Promise<AgentPool > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AgentPool = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentPool", ""
            ) as AgentPool;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AgentPool = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentPool", ""
            ) as AgentPool;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAllAgents
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAllAgents(response: ResponseContext): Promise<Agents > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Agents = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Agents", ""
            ) as Agents;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Agents = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Agents", ""
            ) as Agents;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAuthorizedInfo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAuthorizedInfo(response: ResponseContext): Promise<AuthorizedInfo > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AuthorizedInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthorizedInfo", ""
            ) as AuthorizedInfo;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AuthorizedInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthorizedInfo", ""
            ) as AuthorizedInfo;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBuildConfigurationRunPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBuildConfigurationRunPolicy(response: ResponseContext): Promise<CompatibilityPolicy > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CompatibilityPolicy = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CompatibilityPolicy", ""
            ) as CompatibilityPolicy;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CompatibilityPolicy = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CompatibilityPolicy", ""
            ) as CompatibilityPolicy;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCompatibleBuildTypes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCompatibleBuildTypes(response: ResponseContext): Promise<BuildTypes > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BuildTypes = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BuildTypes", ""
            ) as BuildTypes;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BuildTypes = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BuildTypes", ""
            ) as BuildTypes;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getEnabledInfo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getEnabledInfo(response: ResponseContext): Promise<EnabledInfo > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: EnabledInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EnabledInfo", ""
            ) as EnabledInfo;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: EnabledInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EnabledInfo", ""
            ) as EnabledInfo;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getIncompatibleBuildTypes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getIncompatibleBuildTypes(response: ResponseContext): Promise<Compatibilities > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Compatibilities = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Compatibilities", ""
            ) as Compatibilities;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Compatibilities = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Compatibilities", ""
            ) as Compatibilities;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to setAgentField
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async setAgentField(response: ResponseContext): Promise<string > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to setAgentPool
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async setAgentPool(response: ResponseContext): Promise<AgentPool > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AgentPool = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentPool", ""
            ) as AgentPool;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AgentPool = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentPool", ""
            ) as AgentPool;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to setAuthorizedInfo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async setAuthorizedInfo(response: ResponseContext): Promise<AuthorizedInfo > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AuthorizedInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthorizedInfo", ""
            ) as AuthorizedInfo;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AuthorizedInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthorizedInfo", ""
            ) as AuthorizedInfo;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to setBuildConfigurationRunPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async setBuildConfigurationRunPolicy(response: ResponseContext): Promise<CompatibilityPolicy > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CompatibilityPolicy = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CompatibilityPolicy", ""
            ) as CompatibilityPolicy;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CompatibilityPolicy = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CompatibilityPolicy", ""
            ) as CompatibilityPolicy;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to setEnabledInfo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async setEnabledInfo(response: ResponseContext): Promise<EnabledInfo > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: EnabledInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EnabledInfo", ""
            ) as EnabledInfo;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: EnabledInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EnabledInfo", ""
            ) as EnabledInfo;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
