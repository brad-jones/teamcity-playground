// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {isCodeInRange} from '../util.ts';

import { AgentRequirement } from '../models/AgentRequirement.ts';
import { AgentRequirements } from '../models/AgentRequirements.ts';
import { ArtifactDependencies } from '../models/ArtifactDependencies.ts';
import { ArtifactDependency } from '../models/ArtifactDependency.ts';
import { Branches } from '../models/Branches.ts';
import { BuildType } from '../models/BuildType.ts';
import { BuildTypes } from '../models/BuildTypes.ts';
import { Builds } from '../models/Builds.ts';
import { Feature } from '../models/Feature.ts';
import { Features } from '../models/Features.ts';
import { Files } from '../models/Files.ts';
import { Investigations } from '../models/Investigations.ts';
import { Items } from '../models/Items.ts';
import { Properties } from '../models/Properties.ts';
import { Property } from '../models/Property.ts';
import { SnapshotDependencies } from '../models/SnapshotDependencies.ts';
import { SnapshotDependency } from '../models/SnapshotDependency.ts';
import { Step } from '../models/Step.ts';
import { Steps } from '../models/Steps.ts';
import { Tags } from '../models/Tags.ts';
import { Trigger } from '../models/Trigger.ts';
import { Triggers } from '../models/Triggers.ts';
import { Type } from '../models/Type.ts';
import { VcsRootEntries } from '../models/VcsRootEntries.ts';
import { VcsRootEntry } from '../models/VcsRootEntry.ts';
import { VcsRootInstances } from '../models/VcsRootInstances.ts';

/**
 * no description
 */
export class BuildTypeApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Add an agent requirement to the matching build configuration.
     * @param btLocator 
     * @param fields 
     * @param body 
     */
    public async addAgentRequirementToBuildType(btLocator: string, fields?: string, body?: AgentRequirement, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling addAgentRequirementToBuildType.');
        }




        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/agent-requirements'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)));

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
            ObjectSerializer.serialize(body, "AgentRequirement", ""),
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
     * Add an artifact dependency to the matching build configuration.
     * @param btLocator 
     * @param fields 
     * @param body 
     */
    public async addArtifactDependencyToBuildType(btLocator: string, fields?: string, body?: ArtifactDependency, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling addArtifactDependencyToBuildType.');
        }




        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/artifact-dependencies'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)));

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
            ObjectSerializer.serialize(body, "ArtifactDependency", ""),
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
     * Add build feature to the matching build configuration.
     * @param btLocator 
     * @param fields 
     * @param body 
     */
    public async addBuildFeatureToBuildType(btLocator: string, fields?: string, body?: Feature, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling addBuildFeatureToBuildType.');
        }




        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/features'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)));

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
            ObjectSerializer.serialize(body, "Feature", ""),
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
     * Add a build step to the matching build configuration.
     * @param btLocator 
     * @param fields 
     * @param body 
     */
    public async addBuildStepToBuildType(btLocator: string, fields?: string, body?: Step, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling addBuildStepToBuildType.');
        }




        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/steps'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)));

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
            ObjectSerializer.serialize(body, "Step", ""),
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
     * Add a build template to the matching build configuration.
     * @param btLocator 
     * @param optimizeSettings 
     * @param fields 
     * @param body 
     */
    public async addBuildTemplate(btLocator: string, optimizeSettings?: boolean, fields?: string, body?: BuildType, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling addBuildTemplate.');
        }





        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/templates'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (optimizeSettings !== undefined) {
            requestContext.setQueryParam("optimizeSettings", ObjectSerializer.serialize(optimizeSettings, "boolean", ""));
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
            ObjectSerializer.serialize(body, "BuildType", ""),
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
     * Update build feature parameter for the matching build configuration.
     * @param btLocator 
     * @param featureId 
     * @param parameterName 
     * @param body 
     */
    public async addParameterToBuildFeature(btLocator: string, featureId: string, parameterName: string, body?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling addParameterToBuildFeature.');
        }


        // verify required parameter 'featureId' is not null or undefined
        if (featureId === null || featureId === undefined) {
            throw new RequiredError('Required parameter featureId was null or undefined when calling addParameterToBuildFeature.');
        }


        // verify required parameter 'parameterName' is not null or undefined
        if (parameterName === null || parameterName === undefined) {
            throw new RequiredError('Required parameter parameterName was null or undefined when calling addParameterToBuildFeature.');
        }



        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/features/{featureId}/parameters/{parameterName}'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)))
            .replace('{' + 'featureId' + '}', encodeURIComponent(String(featureId)))
            .replace('{' + 'parameterName' + '}', encodeURIComponent(String(parameterName)));

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
     * Add a parameter to a build step of the matching build configuration.
     * @param btLocator 
     * @param stepId 
     * @param parameterName 
     * @param body 
     */
    public async addParameterToBuildStep(btLocator: string, stepId: string, parameterName: string, body?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling addParameterToBuildStep.');
        }


        // verify required parameter 'stepId' is not null or undefined
        if (stepId === null || stepId === undefined) {
            throw new RequiredError('Required parameter stepId was null or undefined when calling addParameterToBuildStep.');
        }


        // verify required parameter 'parameterName' is not null or undefined
        if (parameterName === null || parameterName === undefined) {
            throw new RequiredError('Required parameter parameterName was null or undefined when calling addParameterToBuildStep.');
        }



        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/steps/{stepId}/parameters/{parameterName}'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)))
            .replace('{' + 'stepId' + '}', encodeURIComponent(String(stepId)))
            .replace('{' + 'parameterName' + '}', encodeURIComponent(String(parameterName)));

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
     * Add a snapshot dependency to the matching build configuration.
     * @param btLocator 
     * @param fields 
     * @param body 
     */
    public async addSnapshotDependencyToBuildType(btLocator: string, fields?: string, body?: SnapshotDependency, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling addSnapshotDependencyToBuildType.');
        }




        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/snapshot-dependencies'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)));

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
            ObjectSerializer.serialize(body, "SnapshotDependency", ""),
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
     * Add a trigger to the matching build configuration.
     * @param btLocator 
     * @param fields 
     * @param body 
     */
    public async addTriggerToBuildType(btLocator: string, fields?: string, body?: Trigger, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling addTriggerToBuildType.');
        }




        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/triggers'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)));

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
            ObjectSerializer.serialize(body, "Trigger", ""),
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
     * Add a VCS root to the matching build.
     * @param btLocator 
     * @param fields 
     * @param body 
     */
    public async addVcsRootToBuildType(btLocator: string, fields?: string, body?: VcsRootEntry, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling addVcsRootToBuildType.');
        }




        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/vcs-root-entries'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)));

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
            ObjectSerializer.serialize(body, "VcsRootEntry", ""),
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
     * Create a build parameter.
     * @param btLocator 
     * @param fields 
     * @param body 
     */
    public async createBuildParameterOfBuildType(btLocator: string, fields?: string, body?: Property, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling createBuildParameterOfBuildType.');
        }




        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/parameters'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)));

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
            ObjectSerializer.serialize(body, "Property", ""),
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
     * Create a new build configuration.
     * @param fields 
     * @param body 
     */
    public async createBuildType(fields?: string, body?: BuildType, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;



        // Path Params
        const localVarPath = '/app/rest/buildTypes';

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
            ObjectSerializer.serialize(body, "BuildType", ""),
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
     * Remove an agent requirement of the matching build configuration.
     * @param btLocator 
     * @param agentRequirementLocator 
     */
    public async deleteAgentRequirement(btLocator: string, agentRequirementLocator: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling deleteAgentRequirement.');
        }


        // verify required parameter 'agentRequirementLocator' is not null or undefined
        if (agentRequirementLocator === null || agentRequirementLocator === undefined) {
            throw new RequiredError('Required parameter agentRequirementLocator was null or undefined when calling deleteAgentRequirement.');
        }


        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/agent-requirements/{agentRequirementLocator}'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)))
            .replace('{' + 'agentRequirementLocator' + '}', encodeURIComponent(String(agentRequirementLocator)));

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
     * Remove an artifact dependency from the matching build configuration.
     * @param btLocator 
     * @param artifactDepLocator 
     */
    public async deleteArtifactDependency(btLocator: string, artifactDepLocator: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling deleteArtifactDependency.');
        }


        // verify required parameter 'artifactDepLocator' is not null or undefined
        if (artifactDepLocator === null || artifactDepLocator === undefined) {
            throw new RequiredError('Required parameter artifactDepLocator was null or undefined when calling deleteArtifactDependency.');
        }


        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/artifact-dependencies/{artifactDepLocator}'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)))
            .replace('{' + 'artifactDepLocator' + '}', encodeURIComponent(String(artifactDepLocator)));

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
     * Delete build parameter.
     * @param name 
     * @param btLocator 
     */
    public async deleteBuildParameterOfBuildType(name: string, btLocator: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('Required parameter name was null or undefined when calling deleteBuildParameterOfBuildType.');
        }


        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling deleteBuildParameterOfBuildType.');
        }


        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/parameters/{name}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)));

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
     * Delete all build parameters.
     * @param btLocator 
     */
    public async deleteBuildParametersOfBuildType(btLocator: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling deleteBuildParametersOfBuildType.');
        }


        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/parameters'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)));

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
     * Delete a build step of the matching build configuration.
     * @param btLocator 
     * @param stepId 
     */
    public async deleteBuildStep(btLocator: string, stepId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling deleteBuildStep.');
        }


        // verify required parameter 'stepId' is not null or undefined
        if (stepId === null || stepId === undefined) {
            throw new RequiredError('Required parameter stepId was null or undefined when calling deleteBuildStep.');
        }


        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/steps/{stepId}'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)))
            .replace('{' + 'stepId' + '}', encodeURIComponent(String(stepId)));

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
     * Update a parameter of a build step of the matching build configuration.
     * @param btLocator 
     * @param stepId 
     * @param fields 
     * @param body 
     */
    public async deleteBuildStepParameters(btLocator: string, stepId: string, fields?: string, body?: Properties, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling deleteBuildStepParameters.');
        }


        // verify required parameter 'stepId' is not null or undefined
        if (stepId === null || stepId === undefined) {
            throw new RequiredError('Required parameter stepId was null or undefined when calling deleteBuildStepParameters.');
        }




        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/steps/{stepId}/parameters'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)))
            .replace('{' + 'stepId' + '}', encodeURIComponent(String(stepId)));

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
            ObjectSerializer.serialize(body, "Properties", ""),
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
     * Delete build configuration matching the locator.
     * @param btLocator 
     */
    public async deleteBuildType(btLocator: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling deleteBuildType.');
        }


        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)));

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
     * Remove a build feature of the matching build configuration.
     * @param btLocator 
     * @param featureId 
     */
    public async deleteFeatureOfBuildType(btLocator: string, featureId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling deleteFeatureOfBuildType.');
        }


        // verify required parameter 'featureId' is not null or undefined
        if (featureId === null || featureId === undefined) {
            throw new RequiredError('Required parameter featureId was null or undefined when calling deleteFeatureOfBuildType.');
        }


        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/features/{featureId}'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)))
            .replace('{' + 'featureId' + '}', encodeURIComponent(String(featureId)));

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
     * Delete a snapshot dependency of the matching build configuration.
     * @param btLocator 
     * @param snapshotDepLocator 
     */
    public async deleteSnapshotDependency(btLocator: string, snapshotDepLocator: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling deleteSnapshotDependency.');
        }


        // verify required parameter 'snapshotDepLocator' is not null or undefined
        if (snapshotDepLocator === null || snapshotDepLocator === undefined) {
            throw new RequiredError('Required parameter snapshotDepLocator was null or undefined when calling deleteSnapshotDependency.');
        }


        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/snapshot-dependencies/{snapshotDepLocator}'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)))
            .replace('{' + 'snapshotDepLocator' + '}', encodeURIComponent(String(snapshotDepLocator)));

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
     * Delete a trigger of the matching build configuration.
     * @param btLocator 
     * @param triggerLocator 
     */
    public async deleteTrigger(btLocator: string, triggerLocator: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling deleteTrigger.');
        }


        // verify required parameter 'triggerLocator' is not null or undefined
        if (triggerLocator === null || triggerLocator === undefined) {
            throw new RequiredError('Required parameter triggerLocator was null or undefined when calling deleteTrigger.');
        }


        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/triggers/{triggerLocator}'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)))
            .replace('{' + 'triggerLocator' + '}', encodeURIComponent(String(triggerLocator)));

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
     * Remove a VCS root of the matching build configuration.
     * @param btLocator 
     * @param vcsRootLocator 
     */
    public async deleteVcsRootOfBuildType(btLocator: string, vcsRootLocator: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling deleteVcsRootOfBuildType.');
        }


        // verify required parameter 'vcsRootLocator' is not null or undefined
        if (vcsRootLocator === null || vcsRootLocator === undefined) {
            throw new RequiredError('Required parameter vcsRootLocator was null or undefined when calling deleteVcsRootOfBuildType.');
        }


        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/vcs-root-entries/{vcsRootLocator}'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)))
            .replace('{' + 'vcsRootLocator' + '}', encodeURIComponent(String(vcsRootLocator)));

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
     * Download specific file.
     * @param path 
     * @param btLocator 
     * @param resolveParameters 
     */
    public async downloadFileOfBuildType(path: string, btLocator: string, resolveParameters?: boolean, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'path' is not null or undefined
        if (path === null || path === undefined) {
            throw new RequiredError('Required parameter path was null or undefined when calling downloadFileOfBuildType.');
        }


        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling downloadFileOfBuildType.');
        }



        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/vcs/files/latest/files{path}'
            .replace('{' + 'path' + '}', encodeURIComponent(String(path)))
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (resolveParameters !== undefined) {
            requestContext.setQueryParam("resolveParameters", ObjectSerializer.serialize(resolveParameters, "boolean", ""));
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
     * Get an agent requirement of the matching build configuration.
     * @param btLocator 
     * @param agentRequirementLocator 
     * @param fields 
     */
    public async getAgentRequirement(btLocator: string, agentRequirementLocator: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling getAgentRequirement.');
        }


        // verify required parameter 'agentRequirementLocator' is not null or undefined
        if (agentRequirementLocator === null || agentRequirementLocator === undefined) {
            throw new RequiredError('Required parameter agentRequirementLocator was null or undefined when calling getAgentRequirement.');
        }



        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/agent-requirements/{agentRequirementLocator}'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)))
            .replace('{' + 'agentRequirementLocator' + '}', encodeURIComponent(String(agentRequirementLocator)));

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
     * Get a setting of an agent requirement of the matching build configuration.
     * @param btLocator 
     * @param agentRequirementLocator 
     * @param fieldName 
     */
    public async getAgentRequirementParameter(btLocator: string, agentRequirementLocator: string, fieldName: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling getAgentRequirementParameter.');
        }


        // verify required parameter 'agentRequirementLocator' is not null or undefined
        if (agentRequirementLocator === null || agentRequirementLocator === undefined) {
            throw new RequiredError('Required parameter agentRequirementLocator was null or undefined when calling getAgentRequirementParameter.');
        }


        // verify required parameter 'fieldName' is not null or undefined
        if (fieldName === null || fieldName === undefined) {
            throw new RequiredError('Required parameter fieldName was null or undefined when calling getAgentRequirementParameter.');
        }


        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/agent-requirements/{agentRequirementLocator}/{fieldName}'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)))
            .replace('{' + 'agentRequirementLocator' + '}', encodeURIComponent(String(agentRequirementLocator)))
            .replace('{' + 'fieldName' + '}', encodeURIComponent(String(fieldName)));

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
     * Get external IDs of the matching build configuration.
     * @param btLocator 
     * @param field 
     */
    public async getAliases(btLocator: string, field?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling getAliases.');
        }



        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/aliases'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (field !== undefined) {
            requestContext.setQueryParam("field", ObjectSerializer.serialize(field, "string", ""));
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
     * Get all agent requirements of the matching build configuration.
     * @param btLocator 
     * @param fields 
     */
    public async getAllAgentRequirements(btLocator: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling getAllAgentRequirements.');
        }



        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/agent-requirements'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)));

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
     * Get all artifact dependencies of the matching build configuration.
     * @param btLocator 
     * @param fields 
     */
    public async getAllArtifactDependencies(btLocator: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling getAllArtifactDependencies.');
        }



        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/artifact-dependencies'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)));

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
     * Get all branches of the matching build configuration.
     * @param btLocator 
     * @param locator 
     * @param fields 
     */
    public async getAllBranchesOfBuildType(btLocator: string, locator?: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling getAllBranchesOfBuildType.');
        }




        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/branches'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (locator !== undefined) {
            requestContext.setQueryParam("locator", ObjectSerializer.serialize(locator, "string", ""));
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
     * Get all parameters of a build feature of the matching build configuration.
     * @param btLocator 
     * @param featureId 
     * @param fields 
     */
    public async getAllBuildFeatureParameters(btLocator: string, featureId: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling getAllBuildFeatureParameters.');
        }


        // verify required parameter 'featureId' is not null or undefined
        if (featureId === null || featureId === undefined) {
            throw new RequiredError('Required parameter featureId was null or undefined when calling getAllBuildFeatureParameters.');
        }



        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/features/{featureId}/parameters'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)))
            .replace('{' + 'featureId' + '}', encodeURIComponent(String(featureId)));

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
     * Get all build features of the matching build configuration.
     * @param btLocator 
     * @param fields 
     */
    public async getAllBuildFeatures(btLocator: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling getAllBuildFeatures.');
        }



        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/features'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)));

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
     * Get all parameters of a build step of the matching build configuration.
     * @param btLocator 
     * @param stepId 
     * @param fields 
     */
    public async getAllBuildStepParameters(btLocator: string, stepId: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling getAllBuildStepParameters.');
        }


        // verify required parameter 'stepId' is not null or undefined
        if (stepId === null || stepId === undefined) {
            throw new RequiredError('Required parameter stepId was null or undefined when calling getAllBuildStepParameters.');
        }



        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/steps/{stepId}/parameters'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)))
            .replace('{' + 'stepId' + '}', encodeURIComponent(String(stepId)));

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
     * Get all build steps of the matching build configuration.
     * @param btLocator 
     * @param fields 
     */
    public async getAllBuildSteps(btLocator: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling getAllBuildSteps.');
        }



        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/steps'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)));

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
     * Get all build templates of the matching build configuration.
     * @param btLocator 
     * @param fields 
     */
    public async getAllBuildTemplates(btLocator: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling getAllBuildTemplates.');
        }



        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/templates'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)));

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
     * Get all build configurations.
     * @param locator 
     * @param fields 
     */
    public async getAllBuildTypes(locator?: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;



        // Path Params
        const localVarPath = '/app/rest/buildTypes';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (locator !== undefined) {
            requestContext.setQueryParam("locator", ObjectSerializer.serialize(locator, "string", "BuildTypeLocator"));
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
     * Get all investigations of the matching build configuration.
     * @param btLocator 
     * @param fields 
     */
    public async getAllInvestigationsOfBuildType(btLocator: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling getAllInvestigationsOfBuildType.');
        }



        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/investigations'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)));

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
     * Get all snapshot dependencies of the matching build configuration.
     * @param btLocator 
     * @param fields 
     */
    public async getAllSnapshotDependencies(btLocator: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling getAllSnapshotDependencies.');
        }



        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/snapshot-dependencies'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)));

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
     * Get all triggers of the matching build configuration.
     * @param btLocator 
     * @param fields 
     */
    public async getAllTriggers(btLocator: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling getAllTriggers.');
        }



        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/triggers'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)));

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
     * Get all VCS roots of the matching build configuration.
     * @param btLocator 
     * @param fields 
     */
    public async getAllVcsRootsOfBuildType(btLocator: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling getAllVcsRootsOfBuildType.');
        }



        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/vcs-root-entries'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)));

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
     * Get an artifact dependency of the matching build configuration.
     * @param btLocator 
     * @param artifactDepLocator 
     * @param fields 
     */
    public async getArtifactDependency(btLocator: string, artifactDepLocator: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling getArtifactDependency.');
        }


        // verify required parameter 'artifactDepLocator' is not null or undefined
        if (artifactDepLocator === null || artifactDepLocator === undefined) {
            throw new RequiredError('Required parameter artifactDepLocator was null or undefined when calling getArtifactDependency.');
        }



        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/artifact-dependencies/{artifactDepLocator}'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)))
            .replace('{' + 'artifactDepLocator' + '}', encodeURIComponent(String(artifactDepLocator)));

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
     * Get a parameter of an artifact dependency of the matching build configuration.
     * @param btLocator 
     * @param artifactDepLocator 
     * @param fieldName 
     */
    public async getArtifactDependencyParameter(btLocator: string, artifactDepLocator: string, fieldName: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling getArtifactDependencyParameter.');
        }


        // verify required parameter 'artifactDepLocator' is not null or undefined
        if (artifactDepLocator === null || artifactDepLocator === undefined) {
            throw new RequiredError('Required parameter artifactDepLocator was null or undefined when calling getArtifactDependencyParameter.');
        }


        // verify required parameter 'fieldName' is not null or undefined
        if (fieldName === null || fieldName === undefined) {
            throw new RequiredError('Required parameter fieldName was null or undefined when calling getArtifactDependencyParameter.');
        }


        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/artifact-dependencies/{artifactDepLocator}/{fieldName}'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)))
            .replace('{' + 'artifactDepLocator' + '}', encodeURIComponent(String(artifactDepLocator)))
            .replace('{' + 'fieldName' + '}', encodeURIComponent(String(fieldName)));

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
     * Get a build feature of the matching build configuration.
     * @param btLocator 
     * @param featureId 
     * @param fields 
     */
    public async getBuildFeature(btLocator: string, featureId: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling getBuildFeature.');
        }


        // verify required parameter 'featureId' is not null or undefined
        if (featureId === null || featureId === undefined) {
            throw new RequiredError('Required parameter featureId was null or undefined when calling getBuildFeature.');
        }



        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/features/{featureId}'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)))
            .replace('{' + 'featureId' + '}', encodeURIComponent(String(featureId)));

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
     * Get a parameter of a build feature of the matching build configuration.
     * @param btLocator 
     * @param featureId 
     * @param parameterName 
     */
    public async getBuildFeatureParameter(btLocator: string, featureId: string, parameterName: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling getBuildFeatureParameter.');
        }


        // verify required parameter 'featureId' is not null or undefined
        if (featureId === null || featureId === undefined) {
            throw new RequiredError('Required parameter featureId was null or undefined when calling getBuildFeatureParameter.');
        }


        // verify required parameter 'parameterName' is not null or undefined
        if (parameterName === null || parameterName === undefined) {
            throw new RequiredError('Required parameter parameterName was null or undefined when calling getBuildFeatureParameter.');
        }


        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/features/{featureId}/parameters/{parameterName}'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)))
            .replace('{' + 'featureId' + '}', encodeURIComponent(String(featureId)))
            .replace('{' + 'parameterName' + '}', encodeURIComponent(String(parameterName)));

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
     * Get the setting of a build feature of the matching build configuration.
     * @param btLocator 
     * @param featureId 
     * @param name 
     */
    public async getBuildFeatureSetting(btLocator: string, featureId: string, name: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling getBuildFeatureSetting.');
        }


        // verify required parameter 'featureId' is not null or undefined
        if (featureId === null || featureId === undefined) {
            throw new RequiredError('Required parameter featureId was null or undefined when calling getBuildFeatureSetting.');
        }


        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('Required parameter name was null or undefined when calling getBuildFeatureSetting.');
        }


        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/features/{featureId}/{name}'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)))
            .replace('{' + 'featureId' + '}', encodeURIComponent(String(featureId)))
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
     * Get build parameter.
     * @param name 
     * @param btLocator 
     * @param fields 
     */
    public async getBuildParameterOfBuildType(name: string, btLocator: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('Required parameter name was null or undefined when calling getBuildParameterOfBuildType.');
        }


        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling getBuildParameterOfBuildType.');
        }



        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/parameters/{name}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)));

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
     * Get build parameter specification.
     * @param name 
     * @param btLocator 
     */
    public async getBuildParameterSpecificationOfBuildType(name: string, btLocator: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('Required parameter name was null or undefined when calling getBuildParameterSpecificationOfBuildType.');
        }


        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling getBuildParameterSpecificationOfBuildType.');
        }


        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/parameters/{name}/type/rawValue'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)));

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
     * Get type of build parameter.
     * @param name 
     * @param btLocator 
     */
    public async getBuildParameterTypeOfBuildType(name: string, btLocator: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('Required parameter name was null or undefined when calling getBuildParameterTypeOfBuildType.');
        }


        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling getBuildParameterTypeOfBuildType.');
        }


        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/parameters/{name}/type'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)));

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
     * Get value of build parameter.
     * @param name 
     * @param btLocator 
     */
    public async getBuildParameterValueOfBuildType(name: string, btLocator: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('Required parameter name was null or undefined when calling getBuildParameterValueOfBuildType.');
        }


        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling getBuildParameterValueOfBuildType.');
        }


        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/parameters/{name}/value'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)));

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
     * Get build parameters.
     * @param btLocator 
     * @param locator 
     * @param fields 
     */
    public async getBuildParametersOfBuildType(btLocator: string, locator?: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling getBuildParametersOfBuildType.');
        }




        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/parameters'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (locator !== undefined) {
            requestContext.setQueryParam("locator", ObjectSerializer.serialize(locator, "string", ""));
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
     * Get a build step of the matching build configuration.
     * @param btLocator 
     * @param stepId 
     * @param fields 
     */
    public async getBuildStep(btLocator: string, stepId: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling getBuildStep.');
        }


        // verify required parameter 'stepId' is not null or undefined
        if (stepId === null || stepId === undefined) {
            throw new RequiredError('Required parameter stepId was null or undefined when calling getBuildStep.');
        }



        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/steps/{stepId}'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)))
            .replace('{' + 'stepId' + '}', encodeURIComponent(String(stepId)));

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
     * Get a parameter of a build step of the matching build configuration.
     * @param btLocator 
     * @param stepId 
     * @param parameterName 
     */
    public async getBuildStepParameter(btLocator: string, stepId: string, parameterName: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling getBuildStepParameter.');
        }


        // verify required parameter 'stepId' is not null or undefined
        if (stepId === null || stepId === undefined) {
            throw new RequiredError('Required parameter stepId was null or undefined when calling getBuildStepParameter.');
        }


        // verify required parameter 'parameterName' is not null or undefined
        if (parameterName === null || parameterName === undefined) {
            throw new RequiredError('Required parameter parameterName was null or undefined when calling getBuildStepParameter.');
        }


        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/steps/{stepId}/parameters/{parameterName}'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)))
            .replace('{' + 'stepId' + '}', encodeURIComponent(String(stepId)))
            .replace('{' + 'parameterName' + '}', encodeURIComponent(String(parameterName)));

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
     * Get the setting of a build step of the matching build configuration.
     * @param btLocator 
     * @param stepId 
     * @param fieldName 
     */
    public async getBuildStepSetting(btLocator: string, stepId: string, fieldName: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling getBuildStepSetting.');
        }


        // verify required parameter 'stepId' is not null or undefined
        if (stepId === null || stepId === undefined) {
            throw new RequiredError('Required parameter stepId was null or undefined when calling getBuildStepSetting.');
        }


        // verify required parameter 'fieldName' is not null or undefined
        if (fieldName === null || fieldName === undefined) {
            throw new RequiredError('Required parameter fieldName was null or undefined when calling getBuildStepSetting.');
        }


        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/steps/{stepId}/{fieldName}'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)))
            .replace('{' + 'stepId' + '}', encodeURIComponent(String(stepId)))
            .replace('{' + 'fieldName' + '}', encodeURIComponent(String(fieldName)));

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
     * Get a template of the matching build configuration.
     * @param btLocator 
     * @param templateLocator 
     * @param fields 
     */
    public async getBuildTemplate(btLocator: string, templateLocator: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling getBuildTemplate.');
        }


        // verify required parameter 'templateLocator' is not null or undefined
        if (templateLocator === null || templateLocator === undefined) {
            throw new RequiredError('Required parameter templateLocator was null or undefined when calling getBuildTemplate.');
        }



        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/templates/{templateLocator}'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)))
            .replace('{' + 'templateLocator' + '}', encodeURIComponent(String(templateLocator)));

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
     * Get build configuration matching the locator.
     * @param btLocator 
     * @param fields 
     */
    public async getBuildType(btLocator: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling getBuildType.');
        }



        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)));

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
     * Get tags of builds of the matching build configuration.
     * @param btLocator 
     * @param field 
     */
    public async getBuildTypeBuildTags(btLocator: string, field?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling getBuildTypeBuildTags.');
        }



        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/buildTags'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (field !== undefined) {
            requestContext.setQueryParam("field", ObjectSerializer.serialize(field, "string", ""));
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
     * Get builds of the matching build configuration.
     * @param btLocator 
     * @param fields 
     */
    public async getBuildTypeBuilds(btLocator: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling getBuildTypeBuilds.');
        }



        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/builds'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)));

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
     * Get a field of the matching build configuration.
     * @param btLocator 
     * @param field 
     */
    public async getBuildTypeField(btLocator: string, field: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling getBuildTypeField.');
        }


        // verify required parameter 'field' is not null or undefined
        if (field === null || field === undefined) {
            throw new RequiredError('Required parameter field was null or undefined when calling getBuildTypeField.');
        }


        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/{field}'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)))
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
     * Get the settings file of the matching build configuration.
     * @param btLocator 
     */
    public async getBuildTypeSettingsFile(btLocator: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling getBuildTypeSettingsFile.');
        }


        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/settingsFile'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)));

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
     * Get metadata of specific file.
     * @param path 
     * @param btLocator 
     * @param fields 
     * @param resolveParameters 
     */
    public async getFileMetadataOfBuildType(path: string, btLocator: string, fields?: string, resolveParameters?: boolean, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'path' is not null or undefined
        if (path === null || path === undefined) {
            throw new RequiredError('Required parameter path was null or undefined when calling getFileMetadataOfBuildType.');
        }


        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling getFileMetadataOfBuildType.');
        }




        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/vcs/files/latest/metadata{path}'
            .replace('{' + 'path' + '}', encodeURIComponent(String(path)))
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)));

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
     * @param btLocator 
     * @param basePath 
     * @param locator 
     * @param fields 
     * @param resolveParameters 
     */
    public async getFilesListForSubpathOfBuildType(path: string, btLocator: string, basePath?: string, locator?: string, fields?: string, resolveParameters?: boolean, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'path' is not null or undefined
        if (path === null || path === undefined) {
            throw new RequiredError('Required parameter path was null or undefined when calling getFilesListForSubpathOfBuildType.');
        }


        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling getFilesListForSubpathOfBuildType.');
        }






        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/vcs/files/latest/{path}'
            .replace('{' + 'path' + '}', encodeURIComponent(String(path)))
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)));

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
     * @param btLocator 
     * @param basePath 
     * @param locator 
     * @param fields 
     * @param resolveParameters 
     */
    public async getFilesListOfBuildType(btLocator: string, basePath?: string, locator?: string, fields?: string, resolveParameters?: boolean, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling getFilesListOfBuildType.');
        }






        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/vcs/files/latest'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)));

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
     * Get a snapshot dependency of the matching build configuration.
     * @param btLocator 
     * @param snapshotDepLocator 
     * @param fields 
     */
    public async getSnapshotDependency(btLocator: string, snapshotDepLocator: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling getSnapshotDependency.');
        }


        // verify required parameter 'snapshotDepLocator' is not null or undefined
        if (snapshotDepLocator === null || snapshotDepLocator === undefined) {
            throw new RequiredError('Required parameter snapshotDepLocator was null or undefined when calling getSnapshotDependency.');
        }



        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/snapshot-dependencies/{snapshotDepLocator}'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)))
            .replace('{' + 'snapshotDepLocator' + '}', encodeURIComponent(String(snapshotDepLocator)));

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
     * Get a trigger of the matching build configuration.
     * @param btLocator 
     * @param triggerLocator 
     * @param fields 
     */
    public async getTrigger(btLocator: string, triggerLocator: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling getTrigger.');
        }


        // verify required parameter 'triggerLocator' is not null or undefined
        if (triggerLocator === null || triggerLocator === undefined) {
            throw new RequiredError('Required parameter triggerLocator was null or undefined when calling getTrigger.');
        }



        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/triggers/{triggerLocator}'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)))
            .replace('{' + 'triggerLocator' + '}', encodeURIComponent(String(triggerLocator)));

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
     * Get a parameter of a trigger of the matching build configuration.
     * @param btLocator 
     * @param triggerLocator 
     * @param fieldName 
     */
    public async getTriggerParameter(btLocator: string, triggerLocator: string, fieldName: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling getTriggerParameter.');
        }


        // verify required parameter 'triggerLocator' is not null or undefined
        if (triggerLocator === null || triggerLocator === undefined) {
            throw new RequiredError('Required parameter triggerLocator was null or undefined when calling getTriggerParameter.');
        }


        // verify required parameter 'fieldName' is not null or undefined
        if (fieldName === null || fieldName === undefined) {
            throw new RequiredError('Required parameter fieldName was null or undefined when calling getTriggerParameter.');
        }


        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/triggers/{triggerLocator}/{fieldName}'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)))
            .replace('{' + 'triggerLocator' + '}', encodeURIComponent(String(triggerLocator)))
            .replace('{' + 'fieldName' + '}', encodeURIComponent(String(fieldName)));

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
     * Get a VCS root of the matching build configuration.
     * @param btLocator 
     * @param vcsRootLocator 
     * @param fields 
     */
    public async getVcsRoot(btLocator: string, vcsRootLocator: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling getVcsRoot.');
        }


        // verify required parameter 'vcsRootLocator' is not null or undefined
        if (vcsRootLocator === null || vcsRootLocator === undefined) {
            throw new RequiredError('Required parameter vcsRootLocator was null or undefined when calling getVcsRoot.');
        }



        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/vcs-root-entries/{vcsRootLocator}'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)))
            .replace('{' + 'vcsRootLocator' + '}', encodeURIComponent(String(vcsRootLocator)));

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
     * Get checkout rules of a VCS root of the matching build configuration.
     * @param btLocator 
     * @param vcsRootLocator 
     */
    public async getVcsRootCheckoutRules(btLocator: string, vcsRootLocator: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling getVcsRootCheckoutRules.');
        }


        // verify required parameter 'vcsRootLocator' is not null or undefined
        if (vcsRootLocator === null || vcsRootLocator === undefined) {
            throw new RequiredError('Required parameter vcsRootLocator was null or undefined when calling getVcsRootCheckoutRules.');
        }


        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/vcs-root-entries/{vcsRootLocator}/checkout-rules'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)))
            .replace('{' + 'vcsRootLocator' + '}', encodeURIComponent(String(vcsRootLocator)));

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
     * Get all VCS root instances of the matching build configuration.
     * @param btLocator 
     * @param fields 
     */
    public async getVcsRootInstancesOfBuildType(btLocator: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling getVcsRootInstancesOfBuildType.');
        }



        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/vcsRootInstances'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)));

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
     * @param btLocator 
     * @param basePath 
     * @param locator 
     * @param name 
     * @param resolveParameters 
     */
    public async getZippedFileOfBuildType(path: string, btLocator: string, basePath?: string, locator?: string, name?: string, resolveParameters?: boolean, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'path' is not null or undefined
        if (path === null || path === undefined) {
            throw new RequiredError('Required parameter path was null or undefined when calling getZippedFileOfBuildType.');
        }


        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling getZippedFileOfBuildType.');
        }






        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/vcs/files/latest/archived{path}'
            .replace('{' + 'path' + '}', encodeURIComponent(String(path)))
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)));

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
     * Detach all templates from the matching build configuration.
     * @param btLocator 
     * @param inlineSettings 
     */
    public async removeAllTemplates(btLocator: string, inlineSettings?: boolean, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling removeAllTemplates.');
        }



        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/templates'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (inlineSettings !== undefined) {
            requestContext.setQueryParam("inlineSettings", ObjectSerializer.serialize(inlineSettings, "boolean", ""));
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
     * Detach a template from the matching build configuration.
     * @param btLocator 
     * @param templateLocator 
     * @param inlineSettings 
     */
    public async removeTemplate(btLocator: string, templateLocator: string, inlineSettings?: boolean, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling removeTemplate.');
        }


        // verify required parameter 'templateLocator' is not null or undefined
        if (templateLocator === null || templateLocator === undefined) {
            throw new RequiredError('Required parameter templateLocator was null or undefined when calling removeTemplate.');
        }



        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/templates/{templateLocator}'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)))
            .replace('{' + 'templateLocator' + '}', encodeURIComponent(String(templateLocator)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (inlineSettings !== undefined) {
            requestContext.setQueryParam("inlineSettings", ObjectSerializer.serialize(inlineSettings, "boolean", ""));
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
     * Update an agent requirement of the matching build configuration.
     * @param btLocator 
     * @param agentRequirementLocator 
     * @param fields 
     * @param body 
     */
    public async replaceAgentRequirement(btLocator: string, agentRequirementLocator: string, fields?: string, body?: AgentRequirement, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling replaceAgentRequirement.');
        }


        // verify required parameter 'agentRequirementLocator' is not null or undefined
        if (agentRequirementLocator === null || agentRequirementLocator === undefined) {
            throw new RequiredError('Required parameter agentRequirementLocator was null or undefined when calling replaceAgentRequirement.');
        }




        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/agent-requirements/{agentRequirementLocator}'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)))
            .replace('{' + 'agentRequirementLocator' + '}', encodeURIComponent(String(agentRequirementLocator)));

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
            ObjectSerializer.serialize(body, "AgentRequirement", ""),
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
     * Update all agent requirements of the matching build configuration.
     * @param btLocator 
     * @param fields 
     * @param body 
     */
    public async replaceAllAgentRequirements(btLocator: string, fields?: string, body?: AgentRequirements, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling replaceAllAgentRequirements.');
        }




        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/agent-requirements'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)));

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
            ObjectSerializer.serialize(body, "AgentRequirements", ""),
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
     * Update all artifact dependencies of the matching build configuration.
     * @param btLocator 
     * @param fields 
     * @param body 
     */
    public async replaceAllArtifactDependencies(btLocator: string, fields?: string, body?: ArtifactDependencies, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling replaceAllArtifactDependencies.');
        }




        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/artifact-dependencies'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)));

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
            ObjectSerializer.serialize(body, "ArtifactDependencies", ""),
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
     * Update all build features of the matching build configuration.
     * @param btLocator 
     * @param fields 
     * @param body 
     */
    public async replaceAllBuildFeatures(btLocator: string, fields?: string, body?: Features, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling replaceAllBuildFeatures.');
        }




        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/features'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)));

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
            ObjectSerializer.serialize(body, "Features", ""),
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
     * Update all build steps of the matching build configuration.
     * @param btLocator 
     * @param fields 
     * @param body 
     */
    public async replaceAllBuildSteps(btLocator: string, fields?: string, body?: Steps, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling replaceAllBuildSteps.');
        }




        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/steps'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)));

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
            ObjectSerializer.serialize(body, "Steps", ""),
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
     * Update all snapshot dependencies of the matching build configuration.
     * @param btLocator 
     * @param fields 
     * @param body 
     */
    public async replaceAllSnapshotDependencies(btLocator: string, fields?: string, body?: SnapshotDependencies, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling replaceAllSnapshotDependencies.');
        }




        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/snapshot-dependencies'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)));

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
            ObjectSerializer.serialize(body, "SnapshotDependencies", ""),
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
     * Update all triggers of the matching build configuration.
     * @param btLocator 
     * @param fields 
     * @param body 
     */
    public async replaceAllTriggers(btLocator: string, fields?: string, body?: Triggers, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling replaceAllTriggers.');
        }




        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/triggers'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)));

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
            ObjectSerializer.serialize(body, "Triggers", ""),
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
     * Update all VCS roots of the matching build configuration.
     * @param btLocator 
     * @param fields 
     * @param body 
     */
    public async replaceAllVcsRoots(btLocator: string, fields?: string, body?: VcsRootEntries, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling replaceAllVcsRoots.');
        }




        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/vcs-root-entries'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)));

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
            ObjectSerializer.serialize(body, "VcsRootEntries", ""),
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
     * Update an artifact dependency of the matching build configuration.
     * @param btLocator 
     * @param artifactDepLocator 
     * @param fields 
     * @param body 
     */
    public async replaceArtifactDependency(btLocator: string, artifactDepLocator: string, fields?: string, body?: ArtifactDependency, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling replaceArtifactDependency.');
        }


        // verify required parameter 'artifactDepLocator' is not null or undefined
        if (artifactDepLocator === null || artifactDepLocator === undefined) {
            throw new RequiredError('Required parameter artifactDepLocator was null or undefined when calling replaceArtifactDependency.');
        }




        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/artifact-dependencies/{artifactDepLocator}'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)))
            .replace('{' + 'artifactDepLocator' + '}', encodeURIComponent(String(artifactDepLocator)));

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
            ObjectSerializer.serialize(body, "ArtifactDependency", ""),
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
     * Update a build feature of the matching build configuration.
     * @param btLocator 
     * @param featureId 
     * @param fields 
     * @param body 
     */
    public async replaceBuildFeature(btLocator: string, featureId: string, fields?: string, body?: Feature, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling replaceBuildFeature.');
        }


        // verify required parameter 'featureId' is not null or undefined
        if (featureId === null || featureId === undefined) {
            throw new RequiredError('Required parameter featureId was null or undefined when calling replaceBuildFeature.');
        }




        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/features/{featureId}'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)))
            .replace('{' + 'featureId' + '}', encodeURIComponent(String(featureId)));

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
            ObjectSerializer.serialize(body, "Feature", ""),
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
     * Update a parameter of a build feature of the matching build configuration.
     * @param btLocator 
     * @param featureId 
     * @param fields 
     * @param body 
     */
    public async replaceBuildFeatureParameters(btLocator: string, featureId: string, fields?: string, body?: Properties, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling replaceBuildFeatureParameters.');
        }


        // verify required parameter 'featureId' is not null or undefined
        if (featureId === null || featureId === undefined) {
            throw new RequiredError('Required parameter featureId was null or undefined when calling replaceBuildFeatureParameters.');
        }




        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/features/{featureId}/parameters'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)))
            .replace('{' + 'featureId' + '}', encodeURIComponent(String(featureId)));

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
            ObjectSerializer.serialize(body, "Properties", ""),
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
     * Replace a build step of the matching build configuration.
     * @param btLocator 
     * @param stepId 
     * @param fields 
     * @param body 
     */
    public async replaceBuildStep(btLocator: string, stepId: string, fields?: string, body?: Step, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling replaceBuildStep.');
        }


        // verify required parameter 'stepId' is not null or undefined
        if (stepId === null || stepId === undefined) {
            throw new RequiredError('Required parameter stepId was null or undefined when calling replaceBuildStep.');
        }




        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/steps/{stepId}'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)))
            .replace('{' + 'stepId' + '}', encodeURIComponent(String(stepId)));

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
            ObjectSerializer.serialize(body, "Step", ""),
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
     * Update a snapshot dependency of the matching build configuration.
     * @param btLocator 
     * @param snapshotDepLocator 
     * @param fields 
     * @param body 
     */
    public async replaceSnapshotDependency(btLocator: string, snapshotDepLocator: string, fields?: string, body?: SnapshotDependency, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling replaceSnapshotDependency.');
        }


        // verify required parameter 'snapshotDepLocator' is not null or undefined
        if (snapshotDepLocator === null || snapshotDepLocator === undefined) {
            throw new RequiredError('Required parameter snapshotDepLocator was null or undefined when calling replaceSnapshotDependency.');
        }




        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/snapshot-dependencies/{snapshotDepLocator}'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)))
            .replace('{' + 'snapshotDepLocator' + '}', encodeURIComponent(String(snapshotDepLocator)));

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
            ObjectSerializer.serialize(body, "SnapshotDependency", ""),
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
     * Update a trigger of the matching build configuration.
     * @param btLocator 
     * @param triggerLocator 
     * @param fields 
     * @param body 
     */
    public async replaceTrigger(btLocator: string, triggerLocator: string, fields?: string, body?: Trigger, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling replaceTrigger.');
        }


        // verify required parameter 'triggerLocator' is not null or undefined
        if (triggerLocator === null || triggerLocator === undefined) {
            throw new RequiredError('Required parameter triggerLocator was null or undefined when calling replaceTrigger.');
        }




        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/triggers/{triggerLocator}'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)))
            .replace('{' + 'triggerLocator' + '}', encodeURIComponent(String(triggerLocator)));

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
            ObjectSerializer.serialize(body, "Trigger", ""),
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
     * Update a parameter of an agent requirement of the matching build configuration.
     * @param btLocator 
     * @param agentRequirementLocator 
     * @param fieldName 
     * @param body 
     */
    public async setAgentRequirementParameter(btLocator: string, agentRequirementLocator: string, fieldName: string, body?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling setAgentRequirementParameter.');
        }


        // verify required parameter 'agentRequirementLocator' is not null or undefined
        if (agentRequirementLocator === null || agentRequirementLocator === undefined) {
            throw new RequiredError('Required parameter agentRequirementLocator was null or undefined when calling setAgentRequirementParameter.');
        }


        // verify required parameter 'fieldName' is not null or undefined
        if (fieldName === null || fieldName === undefined) {
            throw new RequiredError('Required parameter fieldName was null or undefined when calling setAgentRequirementParameter.');
        }



        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/agent-requirements/{agentRequirementLocator}/{fieldName}'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)))
            .replace('{' + 'agentRequirementLocator' + '}', encodeURIComponent(String(agentRequirementLocator)))
            .replace('{' + 'fieldName' + '}', encodeURIComponent(String(fieldName)));

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
     * Update a parameter of an artifact dependency of the matching build configuration.
     * @param btLocator 
     * @param artifactDepLocator 
     * @param fieldName 
     * @param body 
     */
    public async setArtifactDependencyParameter(btLocator: string, artifactDepLocator: string, fieldName: string, body?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling setArtifactDependencyParameter.');
        }


        // verify required parameter 'artifactDepLocator' is not null or undefined
        if (artifactDepLocator === null || artifactDepLocator === undefined) {
            throw new RequiredError('Required parameter artifactDepLocator was null or undefined when calling setArtifactDependencyParameter.');
        }


        // verify required parameter 'fieldName' is not null or undefined
        if (fieldName === null || fieldName === undefined) {
            throw new RequiredError('Required parameter fieldName was null or undefined when calling setArtifactDependencyParameter.');
        }



        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/artifact-dependencies/{artifactDepLocator}/{fieldName}'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)))
            .replace('{' + 'artifactDepLocator' + '}', encodeURIComponent(String(artifactDepLocator)))
            .replace('{' + 'fieldName' + '}', encodeURIComponent(String(fieldName)));

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
     * Update a parameter of a build feature of the matching build configuration.
     * @param btLocator 
     * @param featureId 
     * @param name 
     * @param body 
     */
    public async setBuildFeatureParameter(btLocator: string, featureId: string, name: string, body?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling setBuildFeatureParameter.');
        }


        // verify required parameter 'featureId' is not null or undefined
        if (featureId === null || featureId === undefined) {
            throw new RequiredError('Required parameter featureId was null or undefined when calling setBuildFeatureParameter.');
        }


        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('Required parameter name was null or undefined when calling setBuildFeatureParameter.');
        }



        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/features/{featureId}/{name}'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)))
            .replace('{' + 'featureId' + '}', encodeURIComponent(String(featureId)))
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

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
     * Update a parameter of a build step of the matching build configuration.
     * @param btLocator 
     * @param stepId 
     * @param fieldName 
     * @param body 
     */
    public async setBuildStepParameter(btLocator: string, stepId: string, fieldName: string, body?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling setBuildStepParameter.');
        }


        // verify required parameter 'stepId' is not null or undefined
        if (stepId === null || stepId === undefined) {
            throw new RequiredError('Required parameter stepId was null or undefined when calling setBuildStepParameter.');
        }


        // verify required parameter 'fieldName' is not null or undefined
        if (fieldName === null || fieldName === undefined) {
            throw new RequiredError('Required parameter fieldName was null or undefined when calling setBuildStepParameter.');
        }



        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/steps/{stepId}/{fieldName}'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)))
            .replace('{' + 'stepId' + '}', encodeURIComponent(String(stepId)))
            .replace('{' + 'fieldName' + '}', encodeURIComponent(String(fieldName)));

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
     * Update a field of the matching build configuration.
     * @param btLocator 
     * @param field 
     * @param body 
     */
    public async setBuildTypeField(btLocator: string, field: string, body?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling setBuildTypeField.');
        }


        // verify required parameter 'field' is not null or undefined
        if (field === null || field === undefined) {
            throw new RequiredError('Required parameter field was null or undefined when calling setBuildTypeField.');
        }



        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/{field}'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)))
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
     * Update all templates of the matching build configuration.
     * @param btLocator 
     * @param optimizeSettings 
     * @param fields 
     * @param body 
     */
    public async setBuildTypeTemplates(btLocator: string, optimizeSettings?: boolean, fields?: string, body?: BuildTypes, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling setBuildTypeTemplates.');
        }





        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/templates'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (optimizeSettings !== undefined) {
            requestContext.setQueryParam("optimizeSettings", ObjectSerializer.serialize(optimizeSettings, "boolean", ""));
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
            ObjectSerializer.serialize(body, "BuildTypes", ""),
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
     * Update a parameter of a trigger of the matching build configuration.
     * @param btLocator 
     * @param triggerLocator 
     * @param fieldName 
     * @param body 
     */
    public async setTriggerParameter(btLocator: string, triggerLocator: string, fieldName: string, body?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling setTriggerParameter.');
        }


        // verify required parameter 'triggerLocator' is not null or undefined
        if (triggerLocator === null || triggerLocator === undefined) {
            throw new RequiredError('Required parameter triggerLocator was null or undefined when calling setTriggerParameter.');
        }


        // verify required parameter 'fieldName' is not null or undefined
        if (fieldName === null || fieldName === undefined) {
            throw new RequiredError('Required parameter fieldName was null or undefined when calling setTriggerParameter.');
        }



        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/triggers/{triggerLocator}/{fieldName}'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)))
            .replace('{' + 'triggerLocator' + '}', encodeURIComponent(String(triggerLocator)))
            .replace('{' + 'fieldName' + '}', encodeURIComponent(String(fieldName)));

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
     * Update build parameter.
     * @param name 
     * @param btLocator 
     * @param fields 
     * @param body 
     */
    public async updateBuildParameterOfBuildType(name: string, btLocator: string, fields?: string, body?: Property, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('Required parameter name was null or undefined when calling updateBuildParameterOfBuildType.');
        }


        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling updateBuildParameterOfBuildType.');
        }




        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/parameters/{name}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)));

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
            ObjectSerializer.serialize(body, "Property", ""),
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
     * Update build parameter specification.
     * @param name 
     * @param btLocator 
     * @param body 
     */
    public async updateBuildParameterSpecificationOfBuildType(name: string, btLocator: string, body?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('Required parameter name was null or undefined when calling updateBuildParameterSpecificationOfBuildType.');
        }


        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling updateBuildParameterSpecificationOfBuildType.');
        }



        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/parameters/{name}/type/rawValue'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)));

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
     * Update type of build parameter.
     * @param name 
     * @param btLocator 
     * @param body 
     */
    public async updateBuildParameterTypeOfBuildType(name: string, btLocator: string, body?: Type, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('Required parameter name was null or undefined when calling updateBuildParameterTypeOfBuildType.');
        }


        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling updateBuildParameterTypeOfBuildType.');
        }



        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/parameters/{name}/type'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)));

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
            ObjectSerializer.serialize(body, "Type", ""),
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
     * Update value of build parameter.
     * @param name 
     * @param btLocator 
     * @param body 
     */
    public async updateBuildParameterValueOfBuildType(name: string, btLocator: string, body?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('Required parameter name was null or undefined when calling updateBuildParameterValueOfBuildType.');
        }


        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling updateBuildParameterValueOfBuildType.');
        }



        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/parameters/{name}/value'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)));

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
     * Update build parameters.
     * @param btLocator 
     * @param fields 
     * @param body 
     */
    public async updateBuildParametersOfBuildType(btLocator: string, fields?: string, body?: Properties, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling updateBuildParametersOfBuildType.');
        }




        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/parameters'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)));

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
            ObjectSerializer.serialize(body, "Properties", ""),
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
     * Update a VCS root of the matching build configuration.
     * @param btLocator 
     * @param vcsRootLocator 
     * @param fields 
     * @param body 
     */
    public async updateBuildTypeVcsRoot(btLocator: string, vcsRootLocator: string, fields?: string, body?: VcsRootEntry, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling updateBuildTypeVcsRoot.');
        }


        // verify required parameter 'vcsRootLocator' is not null or undefined
        if (vcsRootLocator === null || vcsRootLocator === undefined) {
            throw new RequiredError('Required parameter vcsRootLocator was null or undefined when calling updateBuildTypeVcsRoot.');
        }




        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/vcs-root-entries/{vcsRootLocator}'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)))
            .replace('{' + 'vcsRootLocator' + '}', encodeURIComponent(String(vcsRootLocator)));

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
            ObjectSerializer.serialize(body, "VcsRootEntry", ""),
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
     * Update checkout rules of a VCS root of the matching build configuration.
     * @param btLocator 
     * @param vcsRootLocator 
     * @param body 
     */
    public async updateBuildTypeVcsRootCheckoutRules(btLocator: string, vcsRootLocator: string, body?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'btLocator' is not null or undefined
        if (btLocator === null || btLocator === undefined) {
            throw new RequiredError('Required parameter btLocator was null or undefined when calling updateBuildTypeVcsRootCheckoutRules.');
        }


        // verify required parameter 'vcsRootLocator' is not null or undefined
        if (vcsRootLocator === null || vcsRootLocator === undefined) {
            throw new RequiredError('Required parameter vcsRootLocator was null or undefined when calling updateBuildTypeVcsRootCheckoutRules.');
        }



        // Path Params
        const localVarPath = '/app/rest/buildTypes/{btLocator}/vcs-root-entries/{vcsRootLocator}/checkout-rules'
            .replace('{' + 'btLocator' + '}', encodeURIComponent(String(btLocator)))
            .replace('{' + 'vcsRootLocator' + '}', encodeURIComponent(String(vcsRootLocator)));

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

}

export class BuildTypeApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addAgentRequirementToBuildType
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async addAgentRequirementToBuildType(response: ResponseContext): Promise<AgentRequirement > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AgentRequirement = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentRequirement", ""
            ) as AgentRequirement;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AgentRequirement = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentRequirement", ""
            ) as AgentRequirement;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addArtifactDependencyToBuildType
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async addArtifactDependencyToBuildType(response: ResponseContext): Promise<ArtifactDependency > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ArtifactDependency = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ArtifactDependency", ""
            ) as ArtifactDependency;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ArtifactDependency = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ArtifactDependency", ""
            ) as ArtifactDependency;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addBuildFeatureToBuildType
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async addBuildFeatureToBuildType(response: ResponseContext): Promise<Feature > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Feature = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Feature", ""
            ) as Feature;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Feature = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Feature", ""
            ) as Feature;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addBuildStepToBuildType
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async addBuildStepToBuildType(response: ResponseContext): Promise<Step > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Step = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Step", ""
            ) as Step;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Step = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Step", ""
            ) as Step;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addBuildTemplate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async addBuildTemplate(response: ResponseContext): Promise<BuildType > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BuildType = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BuildType", ""
            ) as BuildType;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BuildType = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BuildType", ""
            ) as BuildType;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addParameterToBuildFeature
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async addParameterToBuildFeature(response: ResponseContext): Promise<string > {
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
     * @params response Response returned by the server for a request to addParameterToBuildStep
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async addParameterToBuildStep(response: ResponseContext): Promise<string > {
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
     * @params response Response returned by the server for a request to addSnapshotDependencyToBuildType
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async addSnapshotDependencyToBuildType(response: ResponseContext): Promise<SnapshotDependency > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SnapshotDependency = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SnapshotDependency", ""
            ) as SnapshotDependency;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SnapshotDependency = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SnapshotDependency", ""
            ) as SnapshotDependency;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addTriggerToBuildType
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async addTriggerToBuildType(response: ResponseContext): Promise<Trigger > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Trigger = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Trigger", ""
            ) as Trigger;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Trigger = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Trigger", ""
            ) as Trigger;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addVcsRootToBuildType
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async addVcsRootToBuildType(response: ResponseContext): Promise<VcsRootEntry > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: VcsRootEntry = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VcsRootEntry", ""
            ) as VcsRootEntry;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: VcsRootEntry = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VcsRootEntry", ""
            ) as VcsRootEntry;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createBuildParameterOfBuildType
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createBuildParameterOfBuildType(response: ResponseContext): Promise<Property > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Property = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Property", ""
            ) as Property;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Property = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Property", ""
            ) as Property;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createBuildType
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createBuildType(response: ResponseContext): Promise<BuildType > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BuildType = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BuildType", ""
            ) as BuildType;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BuildType = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BuildType", ""
            ) as BuildType;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteAgentRequirement
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteAgentRequirement(response: ResponseContext): Promise< void> {
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
     * @params response Response returned by the server for a request to deleteArtifactDependency
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteArtifactDependency(response: ResponseContext): Promise< void> {
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
     * @params response Response returned by the server for a request to deleteBuildParameterOfBuildType
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteBuildParameterOfBuildType(response: ResponseContext): Promise< void> {
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
     * @params response Response returned by the server for a request to deleteBuildParametersOfBuildType
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteBuildParametersOfBuildType(response: ResponseContext): Promise< void> {
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
     * @params response Response returned by the server for a request to deleteBuildStep
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteBuildStep(response: ResponseContext): Promise< void> {
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
     * @params response Response returned by the server for a request to deleteBuildStepParameters
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteBuildStepParameters(response: ResponseContext): Promise<Properties > {
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
     * @params response Response returned by the server for a request to deleteBuildType
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteBuildType(response: ResponseContext): Promise< void> {
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
     * @params response Response returned by the server for a request to deleteFeatureOfBuildType
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteFeatureOfBuildType(response: ResponseContext): Promise< void> {
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
     * @params response Response returned by the server for a request to deleteSnapshotDependency
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteSnapshotDependency(response: ResponseContext): Promise< void> {
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
     * @params response Response returned by the server for a request to deleteTrigger
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteTrigger(response: ResponseContext): Promise< void> {
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
     * @params response Response returned by the server for a request to deleteVcsRootOfBuildType
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteVcsRootOfBuildType(response: ResponseContext): Promise< void> {
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
     * @params response Response returned by the server for a request to downloadFileOfBuildType
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async downloadFileOfBuildType(response: ResponseContext): Promise< void> {
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
     * @params response Response returned by the server for a request to getAgentRequirement
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAgentRequirement(response: ResponseContext): Promise<AgentRequirement > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AgentRequirement = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentRequirement", ""
            ) as AgentRequirement;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AgentRequirement = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentRequirement", ""
            ) as AgentRequirement;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAgentRequirementParameter
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAgentRequirementParameter(response: ResponseContext): Promise<string > {
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
     * @params response Response returned by the server for a request to getAliases
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAliases(response: ResponseContext): Promise<Items > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Items = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Items", ""
            ) as Items;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Items = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Items", ""
            ) as Items;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAllAgentRequirements
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAllAgentRequirements(response: ResponseContext): Promise<AgentRequirements > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AgentRequirements = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentRequirements", ""
            ) as AgentRequirements;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AgentRequirements = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentRequirements", ""
            ) as AgentRequirements;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAllArtifactDependencies
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAllArtifactDependencies(response: ResponseContext): Promise<ArtifactDependencies > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ArtifactDependencies = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ArtifactDependencies", ""
            ) as ArtifactDependencies;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ArtifactDependencies = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ArtifactDependencies", ""
            ) as ArtifactDependencies;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAllBranchesOfBuildType
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAllBranchesOfBuildType(response: ResponseContext): Promise<Branches > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Branches = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Branches", ""
            ) as Branches;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Branches = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Branches", ""
            ) as Branches;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAllBuildFeatureParameters
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAllBuildFeatureParameters(response: ResponseContext): Promise<Properties > {
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
     * @params response Response returned by the server for a request to getAllBuildFeatures
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAllBuildFeatures(response: ResponseContext): Promise<Features > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Features = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Features", ""
            ) as Features;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Features = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Features", ""
            ) as Features;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAllBuildStepParameters
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAllBuildStepParameters(response: ResponseContext): Promise<Properties > {
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
     * @params response Response returned by the server for a request to getAllBuildSteps
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAllBuildSteps(response: ResponseContext): Promise<Steps > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Steps = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Steps", ""
            ) as Steps;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Steps = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Steps", ""
            ) as Steps;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAllBuildTemplates
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAllBuildTemplates(response: ResponseContext): Promise<BuildTypes > {
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
     * @params response Response returned by the server for a request to getAllBuildTypes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAllBuildTypes(response: ResponseContext): Promise<BuildTypes > {
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
     * @params response Response returned by the server for a request to getAllInvestigationsOfBuildType
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAllInvestigationsOfBuildType(response: ResponseContext): Promise<Investigations > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Investigations = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Investigations", ""
            ) as Investigations;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Investigations = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Investigations", ""
            ) as Investigations;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAllSnapshotDependencies
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAllSnapshotDependencies(response: ResponseContext): Promise<SnapshotDependencies > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SnapshotDependencies = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SnapshotDependencies", ""
            ) as SnapshotDependencies;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SnapshotDependencies = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SnapshotDependencies", ""
            ) as SnapshotDependencies;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAllTriggers
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAllTriggers(response: ResponseContext): Promise<Triggers > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Triggers = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Triggers", ""
            ) as Triggers;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Triggers = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Triggers", ""
            ) as Triggers;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAllVcsRootsOfBuildType
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAllVcsRootsOfBuildType(response: ResponseContext): Promise<VcsRootEntries > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: VcsRootEntries = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VcsRootEntries", ""
            ) as VcsRootEntries;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: VcsRootEntries = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VcsRootEntries", ""
            ) as VcsRootEntries;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getArtifactDependency
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getArtifactDependency(response: ResponseContext): Promise<ArtifactDependency > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ArtifactDependency = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ArtifactDependency", ""
            ) as ArtifactDependency;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ArtifactDependency = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ArtifactDependency", ""
            ) as ArtifactDependency;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getArtifactDependencyParameter
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getArtifactDependencyParameter(response: ResponseContext): Promise<string > {
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
     * @params response Response returned by the server for a request to getBuildFeature
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBuildFeature(response: ResponseContext): Promise<Feature > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Feature = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Feature", ""
            ) as Feature;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Feature = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Feature", ""
            ) as Feature;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBuildFeatureParameter
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBuildFeatureParameter(response: ResponseContext): Promise<string > {
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
     * @params response Response returned by the server for a request to getBuildFeatureSetting
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBuildFeatureSetting(response: ResponseContext): Promise<string > {
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
     * @params response Response returned by the server for a request to getBuildParameterOfBuildType
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBuildParameterOfBuildType(response: ResponseContext): Promise<Property > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Property = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Property", ""
            ) as Property;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Property = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Property", ""
            ) as Property;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBuildParameterSpecificationOfBuildType
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBuildParameterSpecificationOfBuildType(response: ResponseContext): Promise<string > {
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
     * @params response Response returned by the server for a request to getBuildParameterTypeOfBuildType
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBuildParameterTypeOfBuildType(response: ResponseContext): Promise<Type > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Type = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Type", ""
            ) as Type;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Type = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Type", ""
            ) as Type;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBuildParameterValueOfBuildType
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBuildParameterValueOfBuildType(response: ResponseContext): Promise<string > {
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
     * @params response Response returned by the server for a request to getBuildParametersOfBuildType
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBuildParametersOfBuildType(response: ResponseContext): Promise<Properties > {
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
     * @params response Response returned by the server for a request to getBuildStep
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBuildStep(response: ResponseContext): Promise<Step > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Step = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Step", ""
            ) as Step;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Step = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Step", ""
            ) as Step;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBuildStepParameter
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBuildStepParameter(response: ResponseContext): Promise<string > {
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
     * @params response Response returned by the server for a request to getBuildStepSetting
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBuildStepSetting(response: ResponseContext): Promise<string > {
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
     * @params response Response returned by the server for a request to getBuildTemplate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBuildTemplate(response: ResponseContext): Promise<BuildType > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BuildType = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BuildType", ""
            ) as BuildType;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BuildType = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BuildType", ""
            ) as BuildType;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBuildType
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBuildType(response: ResponseContext): Promise<BuildType > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BuildType = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BuildType", ""
            ) as BuildType;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BuildType = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BuildType", ""
            ) as BuildType;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBuildTypeBuildTags
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBuildTypeBuildTags(response: ResponseContext): Promise<Tags > {
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
     * @params response Response returned by the server for a request to getBuildTypeBuilds
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBuildTypeBuilds(response: ResponseContext): Promise<Builds > {
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
     * @params response Response returned by the server for a request to getBuildTypeField
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBuildTypeField(response: ResponseContext): Promise<string > {
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
     * @params response Response returned by the server for a request to getBuildTypeSettingsFile
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBuildTypeSettingsFile(response: ResponseContext): Promise<string > {
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
     * @params response Response returned by the server for a request to getFileMetadataOfBuildType
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getFileMetadataOfBuildType(response: ResponseContext): Promise<any > {
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
     * @params response Response returned by the server for a request to getFilesListForSubpathOfBuildType
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getFilesListForSubpathOfBuildType(response: ResponseContext): Promise<Files > {
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
     * @params response Response returned by the server for a request to getFilesListOfBuildType
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getFilesListOfBuildType(response: ResponseContext): Promise<Files > {
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
     * @params response Response returned by the server for a request to getSnapshotDependency
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSnapshotDependency(response: ResponseContext): Promise<SnapshotDependency > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SnapshotDependency = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SnapshotDependency", ""
            ) as SnapshotDependency;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SnapshotDependency = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SnapshotDependency", ""
            ) as SnapshotDependency;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTrigger
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTrigger(response: ResponseContext): Promise<Trigger > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Trigger = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Trigger", ""
            ) as Trigger;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Trigger = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Trigger", ""
            ) as Trigger;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTriggerParameter
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTriggerParameter(response: ResponseContext): Promise<string > {
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
     * @params response Response returned by the server for a request to getVcsRoot
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getVcsRoot(response: ResponseContext): Promise<VcsRootEntry > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: VcsRootEntry = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VcsRootEntry", ""
            ) as VcsRootEntry;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: VcsRootEntry = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VcsRootEntry", ""
            ) as VcsRootEntry;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getVcsRootCheckoutRules
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getVcsRootCheckoutRules(response: ResponseContext): Promise<string > {
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
     * @params response Response returned by the server for a request to getVcsRootInstancesOfBuildType
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getVcsRootInstancesOfBuildType(response: ResponseContext): Promise<VcsRootInstances > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: VcsRootInstances = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VcsRootInstances", ""
            ) as VcsRootInstances;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: VcsRootInstances = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VcsRootInstances", ""
            ) as VcsRootInstances;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getZippedFileOfBuildType
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getZippedFileOfBuildType(response: ResponseContext): Promise< void> {
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
     * @params response Response returned by the server for a request to removeAllTemplates
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async removeAllTemplates(response: ResponseContext): Promise< void> {
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
     * @params response Response returned by the server for a request to removeTemplate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async removeTemplate(response: ResponseContext): Promise< void> {
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
     * @params response Response returned by the server for a request to replaceAgentRequirement
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async replaceAgentRequirement(response: ResponseContext): Promise<AgentRequirement > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AgentRequirement = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentRequirement", ""
            ) as AgentRequirement;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AgentRequirement = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentRequirement", ""
            ) as AgentRequirement;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceAllAgentRequirements
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async replaceAllAgentRequirements(response: ResponseContext): Promise<AgentRequirements > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AgentRequirements = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentRequirements", ""
            ) as AgentRequirements;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AgentRequirements = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentRequirements", ""
            ) as AgentRequirements;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceAllArtifactDependencies
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async replaceAllArtifactDependencies(response: ResponseContext): Promise<ArtifactDependencies > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ArtifactDependencies = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ArtifactDependencies", ""
            ) as ArtifactDependencies;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ArtifactDependencies = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ArtifactDependencies", ""
            ) as ArtifactDependencies;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceAllBuildFeatures
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async replaceAllBuildFeatures(response: ResponseContext): Promise<Features > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Features = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Features", ""
            ) as Features;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Features = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Features", ""
            ) as Features;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceAllBuildSteps
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async replaceAllBuildSteps(response: ResponseContext): Promise<Steps > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Steps = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Steps", ""
            ) as Steps;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Steps = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Steps", ""
            ) as Steps;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceAllSnapshotDependencies
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async replaceAllSnapshotDependencies(response: ResponseContext): Promise<SnapshotDependencies > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SnapshotDependencies = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SnapshotDependencies", ""
            ) as SnapshotDependencies;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SnapshotDependencies = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SnapshotDependencies", ""
            ) as SnapshotDependencies;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceAllTriggers
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async replaceAllTriggers(response: ResponseContext): Promise<Triggers > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Triggers = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Triggers", ""
            ) as Triggers;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Triggers = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Triggers", ""
            ) as Triggers;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceAllVcsRoots
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async replaceAllVcsRoots(response: ResponseContext): Promise<VcsRootEntries > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: VcsRootEntries = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VcsRootEntries", ""
            ) as VcsRootEntries;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: VcsRootEntries = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VcsRootEntries", ""
            ) as VcsRootEntries;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceArtifactDependency
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async replaceArtifactDependency(response: ResponseContext): Promise<ArtifactDependency > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ArtifactDependency = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ArtifactDependency", ""
            ) as ArtifactDependency;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ArtifactDependency = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ArtifactDependency", ""
            ) as ArtifactDependency;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceBuildFeature
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async replaceBuildFeature(response: ResponseContext): Promise<Feature > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Feature = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Feature", ""
            ) as Feature;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Feature = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Feature", ""
            ) as Feature;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceBuildFeatureParameters
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async replaceBuildFeatureParameters(response: ResponseContext): Promise<Properties > {
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
     * @params response Response returned by the server for a request to replaceBuildStep
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async replaceBuildStep(response: ResponseContext): Promise<Step > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Step = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Step", ""
            ) as Step;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Step = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Step", ""
            ) as Step;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceSnapshotDependency
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async replaceSnapshotDependency(response: ResponseContext): Promise<SnapshotDependency > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SnapshotDependency = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SnapshotDependency", ""
            ) as SnapshotDependency;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SnapshotDependency = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SnapshotDependency", ""
            ) as SnapshotDependency;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceTrigger
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async replaceTrigger(response: ResponseContext): Promise<Trigger > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Trigger = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Trigger", ""
            ) as Trigger;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Trigger = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Trigger", ""
            ) as Trigger;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to setAgentRequirementParameter
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async setAgentRequirementParameter(response: ResponseContext): Promise<string > {
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
     * @params response Response returned by the server for a request to setArtifactDependencyParameter
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async setArtifactDependencyParameter(response: ResponseContext): Promise<string > {
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
     * @params response Response returned by the server for a request to setBuildFeatureParameter
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async setBuildFeatureParameter(response: ResponseContext): Promise<string > {
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
     * @params response Response returned by the server for a request to setBuildStepParameter
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async setBuildStepParameter(response: ResponseContext): Promise<string > {
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
     * @params response Response returned by the server for a request to setBuildTypeField
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async setBuildTypeField(response: ResponseContext): Promise<string > {
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
     * @params response Response returned by the server for a request to setBuildTypeTemplates
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async setBuildTypeTemplates(response: ResponseContext): Promise<BuildTypes > {
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
     * @params response Response returned by the server for a request to setTriggerParameter
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async setTriggerParameter(response: ResponseContext): Promise<string > {
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
     * @params response Response returned by the server for a request to updateBuildParameterOfBuildType
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateBuildParameterOfBuildType(response: ResponseContext): Promise<Property > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Property = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Property", ""
            ) as Property;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Property = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Property", ""
            ) as Property;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateBuildParameterSpecificationOfBuildType
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateBuildParameterSpecificationOfBuildType(response: ResponseContext): Promise<string > {
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
     * @params response Response returned by the server for a request to updateBuildParameterTypeOfBuildType
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateBuildParameterTypeOfBuildType(response: ResponseContext): Promise<Type > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Type = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Type", ""
            ) as Type;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Type = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Type", ""
            ) as Type;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateBuildParameterValueOfBuildType
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateBuildParameterValueOfBuildType(response: ResponseContext): Promise<string > {
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
     * @params response Response returned by the server for a request to updateBuildParametersOfBuildType
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateBuildParametersOfBuildType(response: ResponseContext): Promise<Properties > {
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
     * @params response Response returned by the server for a request to updateBuildTypeVcsRoot
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateBuildTypeVcsRoot(response: ResponseContext): Promise<VcsRootEntry > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: VcsRootEntry = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VcsRootEntry", ""
            ) as VcsRootEntry;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: VcsRootEntry = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VcsRootEntry", ""
            ) as VcsRootEntry;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateBuildTypeVcsRootCheckoutRules
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateBuildTypeVcsRootCheckoutRules(response: ResponseContext): Promise<string > {
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

}
