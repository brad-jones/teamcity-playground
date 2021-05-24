// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {isCodeInRange} from '../util.ts';

import { Build } from '../models/Build.ts';
import { BuildChanges } from '../models/BuildChanges.ts';
import { Builds } from '../models/Builds.ts';
import { Comment } from '../models/Comment.ts';
import { Files } from '../models/Files.ts';
import { IssuesUsages } from '../models/IssuesUsages.ts';
import { MultipleOperationResult } from '../models/MultipleOperationResult.ts';
import { PinInfo } from '../models/PinInfo.ts';
import { ProblemOccurrence } from '../models/ProblemOccurrence.ts';
import { ProblemOccurrences } from '../models/ProblemOccurrences.ts';
import { Properties } from '../models/Properties.ts';
import { Tags } from '../models/Tags.ts';
import { TestOccurrences } from '../models/TestOccurrences.ts';
import { VcsLabels } from '../models/VcsLabels.ts';

/**
 * no description
 */
export class BuildApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Add a VCS label to the matching build.
     * @param buildLocator 
     * @param locator 
     * @param fields 
     * @param body 
     */
    public async addBuildVcsLabel(buildLocator: string, locator?: string, fields?: string, body?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'buildLocator' is not null or undefined
        if (buildLocator === null || buildLocator === undefined) {
            throw new RequiredError('Required parameter buildLocator was null or undefined when calling addBuildVcsLabel.');
        }





        // Path Params
        const localVarPath = '/app/rest/builds/{buildLocator}/vcsLabels'
            .replace('{' + 'buildLocator' + '}', encodeURIComponent(String(buildLocator)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (locator !== undefined) {
            requestContext.setQueryParam("locator", ObjectSerializer.serialize(locator, "string", "VcsRootInstanceLocator"));
        }
        if (fields !== undefined) {
            requestContext.setQueryParam("fields", ObjectSerializer.serialize(fields, "string", ""));
        }

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
     * Adds a message to the build log. Service messages are accepted.
     * @param buildLocator 
     * @param fields 
     * @param body 
     */
    public async addLogMessageToBuild(buildLocator: string, fields?: string, body?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'buildLocator' is not null or undefined
        if (buildLocator === null || buildLocator === undefined) {
            throw new RequiredError('Required parameter buildLocator was null or undefined when calling addLogMessageToBuild.');
        }




        // Path Params
        const localVarPath = '/app/rest/builds/{buildLocator}/log'
            .replace('{' + 'buildLocator' + '}', encodeURIComponent(String(buildLocator)));

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
     * Add a build problem to the matching build.
     * @param buildLocator 
     * @param fields 
     * @param body 
     */
    public async addProblemToBuild(buildLocator: string, fields?: string, body?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'buildLocator' is not null or undefined
        if (buildLocator === null || buildLocator === undefined) {
            throw new RequiredError('Required parameter buildLocator was null or undefined when calling addProblemToBuild.');
        }




        // Path Params
        const localVarPath = '/app/rest/builds/{buildLocator}/problemOccurrences'
            .replace('{' + 'buildLocator' + '}', encodeURIComponent(String(buildLocator)));

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
     * Add tags to the matching build.
     * @param buildLocator 
     * @param fields 
     * @param body 
     */
    public async addTagsToBuild(buildLocator: string, fields?: string, body?: Tags, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'buildLocator' is not null or undefined
        if (buildLocator === null || buildLocator === undefined) {
            throw new RequiredError('Required parameter buildLocator was null or undefined when calling addTagsToBuild.');
        }




        // Path Params
        const localVarPath = '/app/rest/builds/{buildLocator}/tags'
            .replace('{' + 'buildLocator' + '}', encodeURIComponent(String(buildLocator)));

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
            ObjectSerializer.serialize(body, "Tags", ""),
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
     * Add tags to multiple matching builds.
     * @param buildLocator 
     * @param fields 
     * @param body 
     */
    public async addTagsToMultipleBuilds(buildLocator: string, fields?: string, body?: Tags, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'buildLocator' is not null or undefined
        if (buildLocator === null || buildLocator === undefined) {
            throw new RequiredError('Required parameter buildLocator was null or undefined when calling addTagsToMultipleBuilds.');
        }




        // Path Params
        const localVarPath = '/app/rest/builds/multiple/{buildLocator}/tags'
            .replace('{' + 'buildLocator' + '}', encodeURIComponent(String(buildLocator)));

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
            ObjectSerializer.serialize(body, "Tags", ""),
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
     * Delete build matching the locator.
     * @param buildLocator 
     */
    public async deleteBuild(buildLocator: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'buildLocator' is not null or undefined
        if (buildLocator === null || buildLocator === undefined) {
            throw new RequiredError('Required parameter buildLocator was null or undefined when calling deleteBuild.');
        }


        // Path Params
        const localVarPath = '/app/rest/builds/{buildLocator}'
            .replace('{' + 'buildLocator' + '}', encodeURIComponent(String(buildLocator)));

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
     * Remove the build comment matching the locator.
     * @param buildLocator 
     */
    public async deleteBuildComment(buildLocator: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'buildLocator' is not null or undefined
        if (buildLocator === null || buildLocator === undefined) {
            throw new RequiredError('Required parameter buildLocator was null or undefined when calling deleteBuildComment.');
        }


        // Path Params
        const localVarPath = '/app/rest/builds/{buildLocator}/comment'
            .replace('{' + 'buildLocator' + '}', encodeURIComponent(String(buildLocator)));

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
     * Delete comments of multiple matching builds.
     * @param buildLocator 
     * @param fields 
     */
    public async deleteMultipleBuildComments(buildLocator: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'buildLocator' is not null or undefined
        if (buildLocator === null || buildLocator === undefined) {
            throw new RequiredError('Required parameter buildLocator was null or undefined when calling deleteMultipleBuildComments.');
        }



        // Path Params
        const localVarPath = '/app/rest/builds/multiple/{buildLocator}/comment'
            .replace('{' + 'buildLocator' + '}', encodeURIComponent(String(buildLocator)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
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
     * Delete multiple builds matching the locator.
     * @param buildLocator 
     * @param fields 
     */
    public async deleteMultipleBuilds(buildLocator: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'buildLocator' is not null or undefined
        if (buildLocator === null || buildLocator === undefined) {
            throw new RequiredError('Required parameter buildLocator was null or undefined when calling deleteMultipleBuilds.');
        }



        // Path Params
        const localVarPath = '/app/rest/builds/multiple/{buildLocator}'
            .replace('{' + 'buildLocator' + '}', encodeURIComponent(String(buildLocator)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
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
     * Download specific file.
     * @param path 
     * @param buildLocator 
     * @param resolveParameters 
     * @param logBuildUsage 
     */
    public async downloadFileOfBuild(path: string, buildLocator: string, resolveParameters?: boolean, logBuildUsage?: boolean, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'path' is not null or undefined
        if (path === null || path === undefined) {
            throw new RequiredError('Required parameter path was null or undefined when calling downloadFileOfBuild.');
        }


        // verify required parameter 'buildLocator' is not null or undefined
        if (buildLocator === null || buildLocator === undefined) {
            throw new RequiredError('Required parameter buildLocator was null or undefined when calling downloadFileOfBuild.');
        }




        // Path Params
        const localVarPath = '/app/rest/builds/{buildLocator}/artifacts/files{path}'
            .replace('{' + 'path' + '}', encodeURIComponent(String(path)))
            .replace('{' + 'buildLocator' + '}', encodeURIComponent(String(buildLocator)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (resolveParameters !== undefined) {
            requestContext.setQueryParam("resolveParameters", ObjectSerializer.serialize(resolveParameters, "boolean", ""));
        }
        if (logBuildUsage !== undefined) {
            requestContext.setQueryParam("logBuildUsage", ObjectSerializer.serialize(logBuildUsage, "boolean", ""));
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
     * Get the build status of aggregated matching builds.
     * @param buildLocator 
     */
    public async getAggregatedBuildStatus(buildLocator: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'buildLocator' is not null or undefined
        if (buildLocator === null || buildLocator === undefined) {
            throw new RequiredError('Required parameter buildLocator was null or undefined when calling getAggregatedBuildStatus.');
        }


        // Path Params
        const localVarPath = '/app/rest/builds/aggregated/{buildLocator}/status'
            .replace('{' + 'buildLocator' + '}', encodeURIComponent(String(buildLocator)));

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
     * Get the status icon (in specified format) of aggregated matching builds.
     * @param buildLocator 
     * @param suffix 
     */
    public async getAggregatedBuildStatusIcon(buildLocator: string, suffix: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'buildLocator' is not null or undefined
        if (buildLocator === null || buildLocator === undefined) {
            throw new RequiredError('Required parameter buildLocator was null or undefined when calling getAggregatedBuildStatusIcon.');
        }


        // verify required parameter 'suffix' is not null or undefined
        if (suffix === null || suffix === undefined) {
            throw new RequiredError('Required parameter suffix was null or undefined when calling getAggregatedBuildStatusIcon.');
        }


        // Path Params
        const localVarPath = '/app/rest/builds/aggregated/{buildLocator}/statusIcon{suffix}'
            .replace('{' + 'buildLocator' + '}', encodeURIComponent(String(buildLocator)))
            .replace('{' + 'suffix' + '}', encodeURIComponent(String(suffix)));

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
     * Get all builds.
     * @param locator 
     * @param fields 
     */
    public async getAllBuilds(locator?: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;



        // Path Params
        const localVarPath = '/app/rest/builds';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (locator !== undefined) {
            requestContext.setQueryParam("locator", ObjectSerializer.serialize(locator, "string", "BuildLocator"));
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
     * Get artifact dependency changes of the matching build.
     * @param buildLocator 
     * @param fields 
     */
    public async getArtifactDependencyChanges(buildLocator: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'buildLocator' is not null or undefined
        if (buildLocator === null || buildLocator === undefined) {
            throw new RequiredError('Required parameter buildLocator was null or undefined when calling getArtifactDependencyChanges.');
        }



        // Path Params
        const localVarPath = '/app/rest/builds/{buildLocator}/artifactDependencyChanges'
            .replace('{' + 'buildLocator' + '}', encodeURIComponent(String(buildLocator)));

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
     * Get the artifacts' directory of the matching build.
     * @param buildLocator 
     */
    public async getArtifactsDirectory(buildLocator: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'buildLocator' is not null or undefined
        if (buildLocator === null || buildLocator === undefined) {
            throw new RequiredError('Required parameter buildLocator was null or undefined when calling getArtifactsDirectory.');
        }


        // Path Params
        const localVarPath = '/app/rest/builds/{buildLocator}/artifactsDirectory'
            .replace('{' + 'buildLocator' + '}', encodeURIComponent(String(buildLocator)));

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
     * Get build matching the locator.
     * @param buildLocator 
     * @param fields 
     */
    public async getBuild(buildLocator: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'buildLocator' is not null or undefined
        if (buildLocator === null || buildLocator === undefined) {
            throw new RequiredError('Required parameter buildLocator was null or undefined when calling getBuild.');
        }



        // Path Params
        const localVarPath = '/app/rest/builds/{buildLocator}'
            .replace('{' + 'buildLocator' + '}', encodeURIComponent(String(buildLocator)));

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
     * Get actual build parameters of the matching build.
     * @param buildLocator 
     * @param fields 
     */
    public async getBuildActualParameters(buildLocator: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'buildLocator' is not null or undefined
        if (buildLocator === null || buildLocator === undefined) {
            throw new RequiredError('Required parameter buildLocator was null or undefined when calling getBuildActualParameters.');
        }



        // Path Params
        const localVarPath = '/app/rest/builds/{buildLocator}/resulting-properties'
            .replace('{' + 'buildLocator' + '}', encodeURIComponent(String(buildLocator)));

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
     * Get a field of the matching build.
     * @param buildLocator 
     * @param field 
     */
    public async getBuildField(buildLocator: string, field: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'buildLocator' is not null or undefined
        if (buildLocator === null || buildLocator === undefined) {
            throw new RequiredError('Required parameter buildLocator was null or undefined when calling getBuildField.');
        }


        // verify required parameter 'field' is not null or undefined
        if (field === null || field === undefined) {
            throw new RequiredError('Required parameter field was null or undefined when calling getBuildField.');
        }


        // Path Params
        const localVarPath = '/app/rest/builds/{buildLocator}/{field}'
            .replace('{' + 'buildLocator' + '}', encodeURIComponent(String(buildLocator)))
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
     * Get the finish date of the matching build.
     * @param buildLocator 
     */
    public async getBuildFinishDate(buildLocator: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'buildLocator' is not null or undefined
        if (buildLocator === null || buildLocator === undefined) {
            throw new RequiredError('Required parameter buildLocator was null or undefined when calling getBuildFinishDate.');
        }


        // Path Params
        const localVarPath = '/app/rest/builds/{buildLocator}/finishDate'
            .replace('{' + 'buildLocator' + '}', encodeURIComponent(String(buildLocator)));

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
     * Get the number of the matching build.
     * @param buildLocator 
     */
    public async getBuildNumber(buildLocator: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'buildLocator' is not null or undefined
        if (buildLocator === null || buildLocator === undefined) {
            throw new RequiredError('Required parameter buildLocator was null or undefined when calling getBuildNumber.');
        }


        // Path Params
        const localVarPath = '/app/rest/builds/{buildLocator}/number'
            .replace('{' + 'buildLocator' + '}', encodeURIComponent(String(buildLocator)));

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
     * Check if the matching build is pinned.
     * @param buildLocator 
     * @param fields 
     */
    public async getBuildPinInfo(buildLocator: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'buildLocator' is not null or undefined
        if (buildLocator === null || buildLocator === undefined) {
            throw new RequiredError('Required parameter buildLocator was null or undefined when calling getBuildPinInfo.');
        }



        // Path Params
        const localVarPath = '/app/rest/builds/{buildLocator}/pinInfo'
            .replace('{' + 'buildLocator' + '}', encodeURIComponent(String(buildLocator)));

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
     * Get build problems of the matching build.
     * @param buildLocator 
     * @param fields 
     */
    public async getBuildProblems(buildLocator: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'buildLocator' is not null or undefined
        if (buildLocator === null || buildLocator === undefined) {
            throw new RequiredError('Required parameter buildLocator was null or undefined when calling getBuildProblems.');
        }



        // Path Params
        const localVarPath = '/app/rest/builds/{buildLocator}/problemOccurrences'
            .replace('{' + 'buildLocator' + '}', encodeURIComponent(String(buildLocator)));

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
     * Get related issues of the matching build.
     * @param buildLocator 
     * @param fields 
     */
    public async getBuildRelatedIssues(buildLocator: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'buildLocator' is not null or undefined
        if (buildLocator === null || buildLocator === undefined) {
            throw new RequiredError('Required parameter buildLocator was null or undefined when calling getBuildRelatedIssues.');
        }



        // Path Params
        const localVarPath = '/app/rest/builds/{buildLocator}/relatedIssues'
            .replace('{' + 'buildLocator' + '}', encodeURIComponent(String(buildLocator)));

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
     * Get the resolvement status of the matching build.
     * @param buildLocator 
     * @param value 
     */
    public async getBuildResolved(buildLocator: string, value: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'buildLocator' is not null or undefined
        if (buildLocator === null || buildLocator === undefined) {
            throw new RequiredError('Required parameter buildLocator was null or undefined when calling getBuildResolved.');
        }


        // verify required parameter 'value' is not null or undefined
        if (value === null || value === undefined) {
            throw new RequiredError('Required parameter value was null or undefined when calling getBuildResolved.');
        }


        // Path Params
        const localVarPath = '/app/rest/builds/{buildLocator}/resolved/{value}'
            .replace('{' + 'buildLocator' + '}', encodeURIComponent(String(buildLocator)))
            .replace('{' + 'value' + '}', encodeURIComponent(String(value)));

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
     * Update a build parameter of the matching build.
     * @param buildLocator 
     * @param propertyName 
     */
    public async getBuildResultingProperties(buildLocator: string, propertyName: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'buildLocator' is not null or undefined
        if (buildLocator === null || buildLocator === undefined) {
            throw new RequiredError('Required parameter buildLocator was null or undefined when calling getBuildResultingProperties.');
        }


        // verify required parameter 'propertyName' is not null or undefined
        if (propertyName === null || propertyName === undefined) {
            throw new RequiredError('Required parameter propertyName was null or undefined when calling getBuildResultingProperties.');
        }


        // Path Params
        const localVarPath = '/app/rest/builds/{buildLocator}/resulting-properties/{propertyName}'
            .replace('{' + 'buildLocator' + '}', encodeURIComponent(String(buildLocator)))
            .replace('{' + 'propertyName' + '}', encodeURIComponent(String(propertyName)));

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
     * Get a source file of the matching build.
     * @param buildLocator 
     * @param fileName 
     */
    public async getBuildSourceFile(buildLocator: string, fileName: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'buildLocator' is not null or undefined
        if (buildLocator === null || buildLocator === undefined) {
            throw new RequiredError('Required parameter buildLocator was null or undefined when calling getBuildSourceFile.');
        }


        // verify required parameter 'fileName' is not null or undefined
        if (fileName === null || fileName === undefined) {
            throw new RequiredError('Required parameter fileName was null or undefined when calling getBuildSourceFile.');
        }


        // Path Params
        const localVarPath = '/app/rest/builds/{buildLocator}/sources/files/{fileName}'
            .replace('{' + 'buildLocator' + '}', encodeURIComponent(String(buildLocator)))
            .replace('{' + 'fileName' + '}', encodeURIComponent(String(fileName)));

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
     * Get a statistical value of the matching build.
     * @param buildLocator 
     * @param name 
     */
    public async getBuildStatisticValue(buildLocator: string, name: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'buildLocator' is not null or undefined
        if (buildLocator === null || buildLocator === undefined) {
            throw new RequiredError('Required parameter buildLocator was null or undefined when calling getBuildStatisticValue.');
        }


        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('Required parameter name was null or undefined when calling getBuildStatisticValue.');
        }


        // Path Params
        const localVarPath = '/app/rest/builds/{buildLocator}/statistics/{name}'
            .replace('{' + 'buildLocator' + '}', encodeURIComponent(String(buildLocator)))
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

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
     * Get all statistical values of the matching build.
     * @param buildLocator 
     * @param fields 
     */
    public async getBuildStatisticValues(buildLocator: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'buildLocator' is not null or undefined
        if (buildLocator === null || buildLocator === undefined) {
            throw new RequiredError('Required parameter buildLocator was null or undefined when calling getBuildStatisticValues.');
        }



        // Path Params
        const localVarPath = '/app/rest/builds/{buildLocator}/statistics'
            .replace('{' + 'buildLocator' + '}', encodeURIComponent(String(buildLocator)));

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
     * Get the status icon (in specified format) of the matching build.
     * @param buildLocator 
     * @param suffix 
     */
    public async getBuildStatusIcon(buildLocator: string, suffix: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'buildLocator' is not null or undefined
        if (buildLocator === null || buildLocator === undefined) {
            throw new RequiredError('Required parameter buildLocator was null or undefined when calling getBuildStatusIcon.');
        }


        // verify required parameter 'suffix' is not null or undefined
        if (suffix === null || suffix === undefined) {
            throw new RequiredError('Required parameter suffix was null or undefined when calling getBuildStatusIcon.');
        }


        // Path Params
        const localVarPath = '/app/rest/builds/{buildLocator}/statusIcon{suffix}'
            .replace('{' + 'buildLocator' + '}', encodeURIComponent(String(buildLocator)))
            .replace('{' + 'suffix' + '}', encodeURIComponent(String(suffix)));

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
     * Get the build status text of the matching build.
     * @param buildLocator 
     */
    public async getBuildStatusText(buildLocator: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'buildLocator' is not null or undefined
        if (buildLocator === null || buildLocator === undefined) {
            throw new RequiredError('Required parameter buildLocator was null or undefined when calling getBuildStatusText.');
        }


        // Path Params
        const localVarPath = '/app/rest/builds/{buildLocator}/statusText'
            .replace('{' + 'buildLocator' + '}', encodeURIComponent(String(buildLocator)));

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
     * Get tags of the matching build.
     * @param buildLocator 
     * @param locator 
     * @param fields 
     */
    public async getBuildTags(buildLocator: string, locator?: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'buildLocator' is not null or undefined
        if (buildLocator === null || buildLocator === undefined) {
            throw new RequiredError('Required parameter buildLocator was null or undefined when calling getBuildTags.');
        }




        // Path Params
        const localVarPath = '/app/rest/builds/{buildLocator}/tags'
            .replace('{' + 'buildLocator' + '}', encodeURIComponent(String(buildLocator)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (locator !== undefined) {
            requestContext.setQueryParam("locator", ObjectSerializer.serialize(locator, "string", "TagLocator"));
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
     * Get test occurrences of the matching build.
     * @param buildLocator 
     * @param fields 
     */
    public async getBuildTestOccurrences(buildLocator: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'buildLocator' is not null or undefined
        if (buildLocator === null || buildLocator === undefined) {
            throw new RequiredError('Required parameter buildLocator was null or undefined when calling getBuildTestOccurrences.');
        }



        // Path Params
        const localVarPath = '/app/rest/builds/{buildLocator}/testOccurrences'
            .replace('{' + 'buildLocator' + '}', encodeURIComponent(String(buildLocator)));

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
     * Get VCS labels of the matching build.
     * @param buildLocator 
     * @param fields 
     */
    public async getBuildVcsLabels(buildLocator: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'buildLocator' is not null or undefined
        if (buildLocator === null || buildLocator === undefined) {
            throw new RequiredError('Required parameter buildLocator was null or undefined when calling getBuildVcsLabels.');
        }



        // Path Params
        const localVarPath = '/app/rest/builds/{buildLocator}/vcsLabels'
            .replace('{' + 'buildLocator' + '}', encodeURIComponent(String(buildLocator)));

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
     * Check if the matching build is canceled.
     * @param buildLocator 
     * @param fields 
     */
    public async getCanceledInfo(buildLocator: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'buildLocator' is not null or undefined
        if (buildLocator === null || buildLocator === undefined) {
            throw new RequiredError('Required parameter buildLocator was null or undefined when calling getCanceledInfo.');
        }



        // Path Params
        const localVarPath = '/app/rest/builds/{buildLocator}/canceledInfo'
            .replace('{' + 'buildLocator' + '}', encodeURIComponent(String(buildLocator)));

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
     * Get metadata of specific file.
     * @param path 
     * @param buildLocator 
     * @param fields 
     * @param resolveParameters 
     * @param logBuildUsage 
     */
    public async getFileMetadataOfBuild(path: string, buildLocator: string, fields?: string, resolveParameters?: boolean, logBuildUsage?: boolean, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'path' is not null or undefined
        if (path === null || path === undefined) {
            throw new RequiredError('Required parameter path was null or undefined when calling getFileMetadataOfBuild.');
        }


        // verify required parameter 'buildLocator' is not null or undefined
        if (buildLocator === null || buildLocator === undefined) {
            throw new RequiredError('Required parameter buildLocator was null or undefined when calling getFileMetadataOfBuild.');
        }





        // Path Params
        const localVarPath = '/app/rest/builds/{buildLocator}/artifacts/metadata{path}'
            .replace('{' + 'path' + '}', encodeURIComponent(String(path)))
            .replace('{' + 'buildLocator' + '}', encodeURIComponent(String(buildLocator)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fields !== undefined) {
            requestContext.setQueryParam("fields", ObjectSerializer.serialize(fields, "string", ""));
        }
        if (resolveParameters !== undefined) {
            requestContext.setQueryParam("resolveParameters", ObjectSerializer.serialize(resolveParameters, "boolean", ""));
        }
        if (logBuildUsage !== undefined) {
            requestContext.setQueryParam("logBuildUsage", ObjectSerializer.serialize(logBuildUsage, "boolean", ""));
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
     * List files under this path.
     * @param path 
     * @param buildLocator 
     * @param basePath 
     * @param locator 
     * @param fields 
     * @param resolveParameters 
     * @param logBuildUsage 
     */
    public async getFilesListForSubpathOfBuild(path: string, buildLocator: string, basePath?: string, locator?: string, fields?: string, resolveParameters?: boolean, logBuildUsage?: boolean, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'path' is not null or undefined
        if (path === null || path === undefined) {
            throw new RequiredError('Required parameter path was null or undefined when calling getFilesListForSubpathOfBuild.');
        }


        // verify required parameter 'buildLocator' is not null or undefined
        if (buildLocator === null || buildLocator === undefined) {
            throw new RequiredError('Required parameter buildLocator was null or undefined when calling getFilesListForSubpathOfBuild.');
        }







        // Path Params
        const localVarPath = '/app/rest/builds/{buildLocator}/artifacts/{path}'
            .replace('{' + 'path' + '}', encodeURIComponent(String(path)))
            .replace('{' + 'buildLocator' + '}', encodeURIComponent(String(buildLocator)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (basePath !== undefined) {
            requestContext.setQueryParam("basePath", ObjectSerializer.serialize(basePath, "string", ""));
        }
        if (locator !== undefined) {
            requestContext.setQueryParam("locator", ObjectSerializer.serialize(locator, "string", ""));
        }
        if (fields !== undefined) {
            requestContext.setQueryParam("fields", ObjectSerializer.serialize(fields, "string", ""));
        }
        if (resolveParameters !== undefined) {
            requestContext.setQueryParam("resolveParameters", ObjectSerializer.serialize(resolveParameters, "boolean", ""));
        }
        if (logBuildUsage !== undefined) {
            requestContext.setQueryParam("logBuildUsage", ObjectSerializer.serialize(logBuildUsage, "boolean", ""));
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
     * List all files.
     * @param buildLocator 
     * @param basePath 
     * @param locator 
     * @param fields 
     * @param resolveParameters 
     * @param logBuildUsage 
     */
    public async getFilesListOfBuild(buildLocator: string, basePath?: string, locator?: string, fields?: string, resolveParameters?: boolean, logBuildUsage?: boolean, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'buildLocator' is not null or undefined
        if (buildLocator === null || buildLocator === undefined) {
            throw new RequiredError('Required parameter buildLocator was null or undefined when calling getFilesListOfBuild.');
        }







        // Path Params
        const localVarPath = '/app/rest/builds/{buildLocator}/artifacts'
            .replace('{' + 'buildLocator' + '}', encodeURIComponent(String(buildLocator)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (basePath !== undefined) {
            requestContext.setQueryParam("basePath", ObjectSerializer.serialize(basePath, "string", ""));
        }
        if (locator !== undefined) {
            requestContext.setQueryParam("locator", ObjectSerializer.serialize(locator, "string", ""));
        }
        if (fields !== undefined) {
            requestContext.setQueryParam("fields", ObjectSerializer.serialize(fields, "string", ""));
        }
        if (resolveParameters !== undefined) {
            requestContext.setQueryParam("resolveParameters", ObjectSerializer.serialize(resolveParameters, "boolean", ""));
        }
        if (logBuildUsage !== undefined) {
            requestContext.setQueryParam("logBuildUsage", ObjectSerializer.serialize(logBuildUsage, "boolean", ""));
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
     * Get multiple builds matching the locator.
     * @param buildLocator 
     * @param fields 
     */
    public async getMultipleBuilds(buildLocator: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'buildLocator' is not null or undefined
        if (buildLocator === null || buildLocator === undefined) {
            throw new RequiredError('Required parameter buildLocator was null or undefined when calling getMultipleBuilds.');
        }



        // Path Params
        const localVarPath = '/app/rest/builds/multiple/{buildLocator}'
            .replace('{' + 'buildLocator' + '}', encodeURIComponent(String(buildLocator)));

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
     * Get specific file zipped.
     * @param path 
     * @param buildLocator 
     * @param basePath 
     * @param locator 
     * @param name 
     * @param resolveParameters 
     * @param logBuildUsage 
     */
    public async getZippedFileOfBuild(path: string, buildLocator: string, basePath?: string, locator?: string, name?: string, resolveParameters?: boolean, logBuildUsage?: boolean, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'path' is not null or undefined
        if (path === null || path === undefined) {
            throw new RequiredError('Required parameter path was null or undefined when calling getZippedFileOfBuild.');
        }


        // verify required parameter 'buildLocator' is not null or undefined
        if (buildLocator === null || buildLocator === undefined) {
            throw new RequiredError('Required parameter buildLocator was null or undefined when calling getZippedFileOfBuild.');
        }







        // Path Params
        const localVarPath = '/app/rest/builds/{buildLocator}/artifacts/archived{path}'
            .replace('{' + 'path' + '}', encodeURIComponent(String(path)))
            .replace('{' + 'buildLocator' + '}', encodeURIComponent(String(buildLocator)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (basePath !== undefined) {
            requestContext.setQueryParam("basePath", ObjectSerializer.serialize(basePath, "string", ""));
        }
        if (locator !== undefined) {
            requestContext.setQueryParam("locator", ObjectSerializer.serialize(locator, "string", ""));
        }
        if (name !== undefined) {
            requestContext.setQueryParam("name", ObjectSerializer.serialize(name, "string", ""));
        }
        if (resolveParameters !== undefined) {
            requestContext.setQueryParam("resolveParameters", ObjectSerializer.serialize(resolveParameters, "boolean", ""));
        }
        if (logBuildUsage !== undefined) {
            requestContext.setQueryParam("logBuildUsage", ObjectSerializer.serialize(logBuildUsage, "boolean", ""));
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
     * Starts the queued build as an agent-less build and returns the corresponding running build.
     * @param buildLocator 
     * @param fields 
     * @param body 
     */
    public async markBuildAsRunning(buildLocator: string, fields?: string, body?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'buildLocator' is not null or undefined
        if (buildLocator === null || buildLocator === undefined) {
            throw new RequiredError('Required parameter buildLocator was null or undefined when calling markBuildAsRunning.');
        }




        // Path Params
        const localVarPath = '/app/rest/builds/{buildLocator}/runningData'
            .replace('{' + 'buildLocator' + '}', encodeURIComponent(String(buildLocator)));

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
     * Pin multiple matching builds.
     * @param buildLocator 
     * @param fields 
     * @param body 
     */
    public async pinMultipleBuilds(buildLocator: string, fields?: string, body?: PinInfo, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'buildLocator' is not null or undefined
        if (buildLocator === null || buildLocator === undefined) {
            throw new RequiredError('Required parameter buildLocator was null or undefined when calling pinMultipleBuilds.');
        }




        // Path Params
        const localVarPath = '/app/rest/builds/multiple/{buildLocator}/pinInfo'
            .replace('{' + 'buildLocator' + '}', encodeURIComponent(String(buildLocator)));

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
            ObjectSerializer.serialize(body, "PinInfo", ""),
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
     * Remove tags from multiple matching builds.
     * @param buildLocator 
     * @param fields 
     * @param body 
     */
    public async removeMultipleBuildTags(buildLocator: string, fields?: string, body?: Tags, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'buildLocator' is not null or undefined
        if (buildLocator === null || buildLocator === undefined) {
            throw new RequiredError('Required parameter buildLocator was null or undefined when calling removeMultipleBuildTags.');
        }




        // Path Params
        const localVarPath = '/app/rest/builds/multiple/{buildLocator}/tags'
            .replace('{' + 'buildLocator' + '}', encodeURIComponent(String(buildLocator)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
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
            ObjectSerializer.serialize(body, "Tags", ""),
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
     * Remove build parameters from the matching build.
     * @param buildLocator 
     */
    public async resetBuildFinishProperties(buildLocator: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'buildLocator' is not null or undefined
        if (buildLocator === null || buildLocator === undefined) {
            throw new RequiredError('Required parameter buildLocator was null or undefined when calling resetBuildFinishProperties.');
        }


        // Path Params
        const localVarPath = '/app/rest/builds/{buildLocator}/caches/finishProperties'
            .replace('{' + 'buildLocator' + '}', encodeURIComponent(String(buildLocator)));

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
     * Update the comment on the matching build.
     * @param buildLocator 
     * @param body 
     */
    public async setBuildComment(buildLocator: string, body?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'buildLocator' is not null or undefined
        if (buildLocator === null || buildLocator === undefined) {
            throw new RequiredError('Required parameter buildLocator was null or undefined when calling setBuildComment.');
        }



        // Path Params
        const localVarPath = '/app/rest/builds/{buildLocator}/comment'
            .replace('{' + 'buildLocator' + '}', encodeURIComponent(String(buildLocator)));

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
     * Marks the running build as finished by passing agent the current time of the build to finish.
     * @param buildLocator 
     * @param body 
     */
    public async setBuildFinishDate(buildLocator: string, body?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'buildLocator' is not null or undefined
        if (buildLocator === null || buildLocator === undefined) {
            throw new RequiredError('Required parameter buildLocator was null or undefined when calling setBuildFinishDate.');
        }



        // Path Params
        const localVarPath = '/app/rest/builds/{buildLocator}/finishDate'
            .replace('{' + 'buildLocator' + '}', encodeURIComponent(String(buildLocator)));

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
     * Update the number of the matching build.
     * @param buildLocator 
     * @param body 
     */
    public async setBuildNumber(buildLocator: string, body?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'buildLocator' is not null or undefined
        if (buildLocator === null || buildLocator === undefined) {
            throw new RequiredError('Required parameter buildLocator was null or undefined when calling setBuildNumber.');
        }



        // Path Params
        const localVarPath = '/app/rest/builds/{buildLocator}/number'
            .replace('{' + 'buildLocator' + '}', encodeURIComponent(String(buildLocator)));

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
     * Update the pin info of the matching build.
     * @param buildLocator 
     * @param fields 
     * @param body 
     */
    public async setBuildPinInfo(buildLocator: string, fields?: string, body?: PinInfo, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'buildLocator' is not null or undefined
        if (buildLocator === null || buildLocator === undefined) {
            throw new RequiredError('Required parameter buildLocator was null or undefined when calling setBuildPinInfo.');
        }




        // Path Params
        const localVarPath = '/app/rest/builds/{buildLocator}/pinInfo'
            .replace('{' + 'buildLocator' + '}', encodeURIComponent(String(buildLocator)));

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
            ObjectSerializer.serialize(body, "PinInfo", ""),
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
     * Update the build status of the matching build.
     * @param buildLocator 
     * @param body 
     */
    public async setBuildStatusText(buildLocator: string, body?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'buildLocator' is not null or undefined
        if (buildLocator === null || buildLocator === undefined) {
            throw new RequiredError('Required parameter buildLocator was null or undefined when calling setBuildStatusText.');
        }



        // Path Params
        const localVarPath = '/app/rest/builds/{buildLocator}/statusText'
            .replace('{' + 'buildLocator' + '}', encodeURIComponent(String(buildLocator)));

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
     * Update tags of the matching build.
     * @param buildLocator 
     * @param locator 
     * @param fields 
     * @param body 
     */
    public async setBuildTags(buildLocator: string, locator?: string, fields?: string, body?: Tags, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'buildLocator' is not null or undefined
        if (buildLocator === null || buildLocator === undefined) {
            throw new RequiredError('Required parameter buildLocator was null or undefined when calling setBuildTags.');
        }





        // Path Params
        const localVarPath = '/app/rest/builds/{buildLocator}/tags'
            .replace('{' + 'buildLocator' + '}', encodeURIComponent(String(buildLocator)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (locator !== undefined) {
            requestContext.setQueryParam("locator", ObjectSerializer.serialize(locator, "string", "TagLocator"));
        }
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
            ObjectSerializer.serialize(body, "Tags", ""),
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
     * Marks the running build as finished by passing agent the current time of the build to finish.
     * @param buildLocator 
     */
    public async setFinishedTime(buildLocator: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'buildLocator' is not null or undefined
        if (buildLocator === null || buildLocator === undefined) {
            throw new RequiredError('Required parameter buildLocator was null or undefined when calling setFinishedTime.');
        }


        // Path Params
        const localVarPath = '/app/rest/builds/{buildLocator}/finish'
            .replace('{' + 'buildLocator' + '}', encodeURIComponent(String(buildLocator)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
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
     * Update comments in multiple matching builds.
     * @param buildLocator 
     * @param fields 
     * @param body 
     */
    public async setMultipleBuildComments(buildLocator: string, fields?: string, body?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'buildLocator' is not null or undefined
        if (buildLocator === null || buildLocator === undefined) {
            throw new RequiredError('Required parameter buildLocator was null or undefined when calling setMultipleBuildComments.');
        }




        // Path Params
        const localVarPath = '/app/rest/builds/multiple/{buildLocator}/comment'
            .replace('{' + 'buildLocator' + '}', encodeURIComponent(String(buildLocator)));

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

}

export class BuildApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addBuildVcsLabel
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async addBuildVcsLabel(response: ResponseContext): Promise<VcsLabels > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: VcsLabels = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VcsLabels", ""
            ) as VcsLabels;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: VcsLabels = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VcsLabels", ""
            ) as VcsLabels;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addLogMessageToBuild
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async addLogMessageToBuild(response: ResponseContext): Promise< void> {
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
     * @params response Response returned by the server for a request to addProblemToBuild
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async addProblemToBuild(response: ResponseContext): Promise<ProblemOccurrence > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ProblemOccurrence = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProblemOccurrence", ""
            ) as ProblemOccurrence;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ProblemOccurrence = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProblemOccurrence", ""
            ) as ProblemOccurrence;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addTagsToBuild
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async addTagsToBuild(response: ResponseContext): Promise<Tags > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Tags = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Tags", ""
            ) as Tags;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Tags = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Tags", ""
            ) as Tags;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addTagsToMultipleBuilds
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async addTagsToMultipleBuilds(response: ResponseContext): Promise<MultipleOperationResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MultipleOperationResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MultipleOperationResult", ""
            ) as MultipleOperationResult;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MultipleOperationResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MultipleOperationResult", ""
            ) as MultipleOperationResult;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteBuild
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteBuild(response: ResponseContext): Promise< void> {
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
     * @params response Response returned by the server for a request to deleteBuildComment
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteBuildComment(response: ResponseContext): Promise< void> {
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
     * @params response Response returned by the server for a request to deleteMultipleBuildComments
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteMultipleBuildComments(response: ResponseContext): Promise<MultipleOperationResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MultipleOperationResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MultipleOperationResult", ""
            ) as MultipleOperationResult;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MultipleOperationResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MultipleOperationResult", ""
            ) as MultipleOperationResult;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteMultipleBuilds
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteMultipleBuilds(response: ResponseContext): Promise<MultipleOperationResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MultipleOperationResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MultipleOperationResult", ""
            ) as MultipleOperationResult;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MultipleOperationResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MultipleOperationResult", ""
            ) as MultipleOperationResult;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to downloadFileOfBuild
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async downloadFileOfBuild(response: ResponseContext): Promise< void> {
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
     * @params response Response returned by the server for a request to getAggregatedBuildStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAggregatedBuildStatus(response: ResponseContext): Promise<string > {
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
     * @params response Response returned by the server for a request to getAggregatedBuildStatusIcon
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAggregatedBuildStatusIcon(response: ResponseContext): Promise< void> {
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
     * @params response Response returned by the server for a request to getAllBuilds
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAllBuilds(response: ResponseContext): Promise<Builds > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Builds = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Builds", ""
            ) as Builds;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Builds = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Builds", ""
            ) as Builds;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getArtifactDependencyChanges
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getArtifactDependencyChanges(response: ResponseContext): Promise<BuildChanges > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BuildChanges = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BuildChanges", ""
            ) as BuildChanges;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BuildChanges = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BuildChanges", ""
            ) as BuildChanges;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getArtifactsDirectory
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getArtifactsDirectory(response: ResponseContext): Promise<string > {
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
     * @params response Response returned by the server for a request to getBuild
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBuild(response: ResponseContext): Promise<Build > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Build = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Build", ""
            ) as Build;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Build = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Build", ""
            ) as Build;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBuildActualParameters
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBuildActualParameters(response: ResponseContext): Promise<Properties > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Properties = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Properties", ""
            ) as Properties;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Properties = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Properties", ""
            ) as Properties;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBuildField
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBuildField(response: ResponseContext): Promise<string > {
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
     * @params response Response returned by the server for a request to getBuildFinishDate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBuildFinishDate(response: ResponseContext): Promise<string > {
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
     * @params response Response returned by the server for a request to getBuildNumber
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBuildNumber(response: ResponseContext): Promise<string > {
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
     * @params response Response returned by the server for a request to getBuildPinInfo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBuildPinInfo(response: ResponseContext): Promise<PinInfo > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PinInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PinInfo", ""
            ) as PinInfo;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PinInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PinInfo", ""
            ) as PinInfo;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBuildProblems
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBuildProblems(response: ResponseContext): Promise<ProblemOccurrences > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ProblemOccurrences = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProblemOccurrences", ""
            ) as ProblemOccurrences;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ProblemOccurrences = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProblemOccurrences", ""
            ) as ProblemOccurrences;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBuildRelatedIssues
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBuildRelatedIssues(response: ResponseContext): Promise<IssuesUsages > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: IssuesUsages = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "IssuesUsages", ""
            ) as IssuesUsages;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: IssuesUsages = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "IssuesUsages", ""
            ) as IssuesUsages;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBuildResolved
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBuildResolved(response: ResponseContext): Promise<string > {
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
     * @params response Response returned by the server for a request to getBuildResultingProperties
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBuildResultingProperties(response: ResponseContext): Promise<string > {
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
     * @params response Response returned by the server for a request to getBuildSourceFile
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBuildSourceFile(response: ResponseContext): Promise< void> {
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
     * @params response Response returned by the server for a request to getBuildStatisticValue
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBuildStatisticValue(response: ResponseContext): Promise<string > {
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
     * @params response Response returned by the server for a request to getBuildStatisticValues
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBuildStatisticValues(response: ResponseContext): Promise<Properties > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Properties = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Properties", ""
            ) as Properties;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Properties = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Properties", ""
            ) as Properties;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBuildStatusIcon
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBuildStatusIcon(response: ResponseContext): Promise< void> {
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
     * @params response Response returned by the server for a request to getBuildStatusText
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBuildStatusText(response: ResponseContext): Promise<string > {
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
     * @params response Response returned by the server for a request to getBuildTags
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBuildTags(response: ResponseContext): Promise<Tags > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Tags = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Tags", ""
            ) as Tags;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Tags = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Tags", ""
            ) as Tags;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBuildTestOccurrences
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBuildTestOccurrences(response: ResponseContext): Promise<TestOccurrences > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TestOccurrences = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TestOccurrences", ""
            ) as TestOccurrences;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TestOccurrences = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TestOccurrences", ""
            ) as TestOccurrences;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBuildVcsLabels
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBuildVcsLabels(response: ResponseContext): Promise<VcsLabels > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: VcsLabels = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VcsLabels", ""
            ) as VcsLabels;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: VcsLabels = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VcsLabels", ""
            ) as VcsLabels;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCanceledInfo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCanceledInfo(response: ResponseContext): Promise<Comment > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Comment = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Comment", ""
            ) as Comment;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Comment = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Comment", ""
            ) as Comment;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getFileMetadataOfBuild
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getFileMetadataOfBuild(response: ResponseContext): Promise<any > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getFilesListForSubpathOfBuild
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getFilesListForSubpathOfBuild(response: ResponseContext): Promise<Files > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Files = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Files", ""
            ) as Files;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Files = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Files", ""
            ) as Files;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getFilesListOfBuild
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getFilesListOfBuild(response: ResponseContext): Promise<Files > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Files = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Files", ""
            ) as Files;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Files = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Files", ""
            ) as Files;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getMultipleBuilds
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getMultipleBuilds(response: ResponseContext): Promise<Builds > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Builds = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Builds", ""
            ) as Builds;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Builds = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Builds", ""
            ) as Builds;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getZippedFileOfBuild
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getZippedFileOfBuild(response: ResponseContext): Promise< void> {
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
     * @params response Response returned by the server for a request to markBuildAsRunning
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async markBuildAsRunning(response: ResponseContext): Promise<Build > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Build = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Build", ""
            ) as Build;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Build = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Build", ""
            ) as Build;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to pinMultipleBuilds
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async pinMultipleBuilds(response: ResponseContext): Promise<MultipleOperationResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MultipleOperationResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MultipleOperationResult", ""
            ) as MultipleOperationResult;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MultipleOperationResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MultipleOperationResult", ""
            ) as MultipleOperationResult;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to removeMultipleBuildTags
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async removeMultipleBuildTags(response: ResponseContext): Promise<MultipleOperationResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MultipleOperationResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MultipleOperationResult", ""
            ) as MultipleOperationResult;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MultipleOperationResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MultipleOperationResult", ""
            ) as MultipleOperationResult;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to resetBuildFinishProperties
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async resetBuildFinishProperties(response: ResponseContext): Promise< void> {
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
     * @params response Response returned by the server for a request to setBuildComment
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async setBuildComment(response: ResponseContext): Promise< void> {
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
     * @params response Response returned by the server for a request to setBuildFinishDate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async setBuildFinishDate(response: ResponseContext): Promise<string > {
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
     * @params response Response returned by the server for a request to setBuildNumber
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async setBuildNumber(response: ResponseContext): Promise<string > {
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
     * @params response Response returned by the server for a request to setBuildPinInfo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async setBuildPinInfo(response: ResponseContext): Promise<PinInfo > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PinInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PinInfo", ""
            ) as PinInfo;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PinInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PinInfo", ""
            ) as PinInfo;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to setBuildStatusText
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async setBuildStatusText(response: ResponseContext): Promise<string > {
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
     * @params response Response returned by the server for a request to setBuildTags
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async setBuildTags(response: ResponseContext): Promise<Tags > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Tags = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Tags", ""
            ) as Tags;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Tags = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Tags", ""
            ) as Tags;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to setFinishedTime
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async setFinishedTime(response: ResponseContext): Promise<string > {
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
     * @params response Response returned by the server for a request to setMultipleBuildComments
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async setMultipleBuildComments(response: ResponseContext): Promise<MultipleOperationResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MultipleOperationResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MultipleOperationResult", ""
            ) as MultipleOperationResult;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MultipleOperationResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MultipleOperationResult", ""
            ) as MultipleOperationResult;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
