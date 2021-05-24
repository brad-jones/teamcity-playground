// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {isCodeInRange} from '../util.ts';

import { Agent } from '../models/Agent.ts';
import { AgentPool } from '../models/AgentPool.ts';
import { AgentPools } from '../models/AgentPools.ts';
import { Agents } from '../models/Agents.ts';
import { Project } from '../models/Project.ts';
import { Projects } from '../models/Projects.ts';

/**
 * no description
 */
export class AgentPoolApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Assign the agent to the matching agent pool.
     * @param agentPoolLocator 
     * @param fields 
     * @param body 
     */
    public async addAgentToAgentPool(agentPoolLocator: string, fields?: string, body?: Agent, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'agentPoolLocator' is not null or undefined
        if (agentPoolLocator === null || agentPoolLocator === undefined) {
            throw new RequiredError('Required parameter agentPoolLocator was null or undefined when calling addAgentToAgentPool.');
        }




        // Path Params
        const localVarPath = '/app/rest/agentPools/{agentPoolLocator}/agents'
            .replace('{' + 'agentPoolLocator' + '}', encodeURIComponent(String(agentPoolLocator)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
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
            ObjectSerializer.serialize(body, "Agent", ""),
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
     * Assign the project to the matching agent pool.
     * @param agentPoolLocator 
     * @param body 
     */
    public async addProjectToAgentPool(agentPoolLocator: string, body?: Project, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'agentPoolLocator' is not null or undefined
        if (agentPoolLocator === null || agentPoolLocator === undefined) {
            throw new RequiredError('Required parameter agentPoolLocator was null or undefined when calling addProjectToAgentPool.');
        }



        // Path Params
        const localVarPath = '/app/rest/agentPools/{agentPoolLocator}/projects'
            .replace('{' + 'agentPoolLocator' + '}', encodeURIComponent(String(agentPoolLocator)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/xml",
        
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "Project", ""),
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
     * Create a new agent pool.
     * @param body 
     */
    public async createAgentPool(body?: AgentPool, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;


        // Path Params
        const localVarPath = '/app/rest/agentPools';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

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
     * Delete the agent pool matching the locator.
     * @param agentPoolLocator 
     */
    public async deleteAgentPool(agentPoolLocator: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'agentPoolLocator' is not null or undefined
        if (agentPoolLocator === null || agentPoolLocator === undefined) {
            throw new RequiredError('Required parameter agentPoolLocator was null or undefined when calling deleteAgentPool.');
        }


        // Path Params
        const localVarPath = '/app/rest/agentPools/{agentPoolLocator}'
            .replace('{' + 'agentPoolLocator' + '}', encodeURIComponent(String(agentPoolLocator)));

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
     * Unassign all projects from the matching agent pool.
     * @param agentPoolLocator 
     */
    public async deleteAllProjectsFromAgentPool(agentPoolLocator: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'agentPoolLocator' is not null or undefined
        if (agentPoolLocator === null || agentPoolLocator === undefined) {
            throw new RequiredError('Required parameter agentPoolLocator was null or undefined when calling deleteAllProjectsFromAgentPool.');
        }


        // Path Params
        const localVarPath = '/app/rest/agentPools/{agentPoolLocator}/projects'
            .replace('{' + 'agentPoolLocator' + '}', encodeURIComponent(String(agentPoolLocator)));

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
     * Unassign the project from the matching agent pool.
     * @param agentPoolLocator 
     * @param projectLocator 
     */
    public async deleteProjectFromAgentPool(agentPoolLocator: string, projectLocator: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'agentPoolLocator' is not null or undefined
        if (agentPoolLocator === null || agentPoolLocator === undefined) {
            throw new RequiredError('Required parameter agentPoolLocator was null or undefined when calling deleteProjectFromAgentPool.');
        }


        // verify required parameter 'projectLocator' is not null or undefined
        if (projectLocator === null || projectLocator === undefined) {
            throw new RequiredError('Required parameter projectLocator was null or undefined when calling deleteProjectFromAgentPool.');
        }


        // Path Params
        const localVarPath = '/app/rest/agentPools/{agentPoolLocator}/projects/{projectLocator}'
            .replace('{' + 'agentPoolLocator' + '}', encodeURIComponent(String(agentPoolLocator)))
            .replace('{' + 'projectLocator' + '}', encodeURIComponent(String(projectLocator)));

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
     * Get the agent pool matching the locator.
     * @param agentPoolLocator 
     * @param fields 
     */
    public async getAgentPoolOfAgentPool(agentPoolLocator: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'agentPoolLocator' is not null or undefined
        if (agentPoolLocator === null || agentPoolLocator === undefined) {
            throw new RequiredError('Required parameter agentPoolLocator was null or undefined when calling getAgentPoolOfAgentPool.');
        }



        // Path Params
        const localVarPath = '/app/rest/agentPools/{agentPoolLocator}'
            .replace('{' + 'agentPoolLocator' + '}', encodeURIComponent(String(agentPoolLocator)));

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
     * Get all agent pools.
     * @param locator 
     * @param fields 
     */
    public async getAllAgentPools(locator?: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;



        // Path Params
        const localVarPath = '/app/rest/agentPools';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (locator !== undefined) {
            requestContext.setQueryParam("locator", ObjectSerializer.serialize(locator, "string", "AgentPoolLocator"));
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
     * Get the agent of the matching agent pool.
     * @param agentPoolLocator 
     * @param locator 
     * @param fields 
     */
    public async getAllAgentsFromAgentPool(agentPoolLocator: string, locator?: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'agentPoolLocator' is not null or undefined
        if (agentPoolLocator === null || agentPoolLocator === undefined) {
            throw new RequiredError('Required parameter agentPoolLocator was null or undefined when calling getAllAgentsFromAgentPool.');
        }




        // Path Params
        const localVarPath = '/app/rest/agentPools/{agentPoolLocator}/agents'
            .replace('{' + 'agentPoolLocator' + '}', encodeURIComponent(String(agentPoolLocator)));

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
     * Get all projects of the matching agent pool.
     * @param agentPoolLocator 
     * @param fields 
     */
    public async getAllProjectsFromAgentPool(agentPoolLocator: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'agentPoolLocator' is not null or undefined
        if (agentPoolLocator === null || agentPoolLocator === undefined) {
            throw new RequiredError('Required parameter agentPoolLocator was null or undefined when calling getAllProjectsFromAgentPool.');
        }



        // Path Params
        const localVarPath = '/app/rest/agentPools/{agentPoolLocator}/projects'
            .replace('{' + 'agentPoolLocator' + '}', encodeURIComponent(String(agentPoolLocator)));

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
     * Get a field of the matching agent pool.
     * @param agentPoolLocator 
     * @param field 
     */
    public async getFieldFromAgentPool(agentPoolLocator: string, field: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'agentPoolLocator' is not null or undefined
        if (agentPoolLocator === null || agentPoolLocator === undefined) {
            throw new RequiredError('Required parameter agentPoolLocator was null or undefined when calling getFieldFromAgentPool.');
        }


        // verify required parameter 'field' is not null or undefined
        if (field === null || field === undefined) {
            throw new RequiredError('Required parameter field was null or undefined when calling getFieldFromAgentPool.');
        }


        // Path Params
        const localVarPath = '/app/rest/agentPools/{agentPoolLocator}/{field}'
            .replace('{' + 'agentPoolLocator' + '}', encodeURIComponent(String(agentPoolLocator)))
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
     * Update a field of the matching agent pool.
     * @param agentPoolLocator 
     * @param field 
     * @param body 
     */
    public async setAgentPoolField(agentPoolLocator: string, field: string, body?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'agentPoolLocator' is not null or undefined
        if (agentPoolLocator === null || agentPoolLocator === undefined) {
            throw new RequiredError('Required parameter agentPoolLocator was null or undefined when calling setAgentPoolField.');
        }


        // verify required parameter 'field' is not null or undefined
        if (field === null || field === undefined) {
            throw new RequiredError('Required parameter field was null or undefined when calling setAgentPoolField.');
        }



        // Path Params
        const localVarPath = '/app/rest/agentPools/{agentPoolLocator}/{field}'
            .replace('{' + 'agentPoolLocator' + '}', encodeURIComponent(String(agentPoolLocator)))
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
     * Update projects of the matching agent pool.
     * @param agentPoolLocator 
     * @param body 
     */
    public async setAgentPoolProjects(agentPoolLocator: string, body?: Projects, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'agentPoolLocator' is not null or undefined
        if (agentPoolLocator === null || agentPoolLocator === undefined) {
            throw new RequiredError('Required parameter agentPoolLocator was null or undefined when calling setAgentPoolProjects.');
        }



        // Path Params
        const localVarPath = '/app/rest/agentPools/{agentPoolLocator}/projects'
            .replace('{' + 'agentPoolLocator' + '}', encodeURIComponent(String(agentPoolLocator)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/xml",
        
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "Projects", ""),
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

export class AgentPoolApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addAgentToAgentPool
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async addAgentToAgentPool(response: ResponseContext): Promise<Agent > {
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
     * @params response Response returned by the server for a request to addProjectToAgentPool
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async addProjectToAgentPool(response: ResponseContext): Promise<Project > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Project = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Project", ""
            ) as Project;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Project = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Project", ""
            ) as Project;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createAgentPool
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createAgentPool(response: ResponseContext): Promise<AgentPool > {
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
     * @params response Response returned by the server for a request to deleteAgentPool
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteAgentPool(response: ResponseContext): Promise< void> {
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
     * @params response Response returned by the server for a request to deleteAllProjectsFromAgentPool
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteAllProjectsFromAgentPool(response: ResponseContext): Promise< void> {
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
     * @params response Response returned by the server for a request to deleteProjectFromAgentPool
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteProjectFromAgentPool(response: ResponseContext): Promise< void> {
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
     * @params response Response returned by the server for a request to getAgentPoolOfAgentPool
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAgentPoolOfAgentPool(response: ResponseContext): Promise<AgentPool > {
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
     * @params response Response returned by the server for a request to getAllAgentPools
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAllAgentPools(response: ResponseContext): Promise<AgentPools > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AgentPools = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentPools", ""
            ) as AgentPools;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AgentPools = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentPools", ""
            ) as AgentPools;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAllAgentsFromAgentPool
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAllAgentsFromAgentPool(response: ResponseContext): Promise<Agents > {
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
     * @params response Response returned by the server for a request to getAllProjectsFromAgentPool
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAllProjectsFromAgentPool(response: ResponseContext): Promise<Projects > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Projects = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Projects", ""
            ) as Projects;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Projects = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Projects", ""
            ) as Projects;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getFieldFromAgentPool
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getFieldFromAgentPool(response: ResponseContext): Promise<string > {
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
     * @params response Response returned by the server for a request to setAgentPoolField
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async setAgentPoolField(response: ResponseContext): Promise<string > {
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
     * @params response Response returned by the server for a request to setAgentPoolProjects
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async setAgentPoolProjects(response: ResponseContext): Promise<Projects > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Projects = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Projects", ""
            ) as Projects;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Projects = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Projects", ""
            ) as Projects;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
