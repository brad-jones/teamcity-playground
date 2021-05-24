import { ResponseContext, RequestContext, HttpFile } from '../http/http.ts';
import * as models from '../models/all.ts';
import { Configuration} from '../configuration.ts'

import { Agent } from '../models/Agent.ts';
import { AgentLocator } from '../models/AgentLocator.ts';
import { AgentPool } from '../models/AgentPool.ts';
import { AgentPoolLocator } from '../models/AgentPoolLocator.ts';
import { AgentPools } from '../models/AgentPools.ts';
import { AgentRequirement } from '../models/AgentRequirement.ts';
import { AgentRequirements } from '../models/AgentRequirements.ts';
import { Agents } from '../models/Agents.ts';
import { ArtifactDependencies } from '../models/ArtifactDependencies.ts';
import { ArtifactDependency } from '../models/ArtifactDependency.ts';
import { AuditAction } from '../models/AuditAction.ts';
import { AuditEvent } from '../models/AuditEvent.ts';
import { AuditEvents } from '../models/AuditEvents.ts';
import { AuditLocator } from '../models/AuditLocator.ts';
import { AuthorizedInfo } from '../models/AuthorizedInfo.ts';
import { Branch } from '../models/Branch.ts';
import { BranchLocator } from '../models/BranchLocator.ts';
import { BranchVersion } from '../models/BranchVersion.ts';
import { Branches } from '../models/Branches.ts';
import { Build } from '../models/Build.ts';
import { BuildCancelRequest } from '../models/BuildCancelRequest.ts';
import { BuildChange } from '../models/BuildChange.ts';
import { BuildChanges } from '../models/BuildChanges.ts';
import { BuildLocator } from '../models/BuildLocator.ts';
import { BuildQueueLocator } from '../models/BuildQueueLocator.ts';
import { BuildTriggeringOptions } from '../models/BuildTriggeringOptions.ts';
import { BuildType } from '../models/BuildType.ts';
import { BuildTypeLocator } from '../models/BuildTypeLocator.ts';
import { BuildTypes } from '../models/BuildTypes.ts';
import { Builds } from '../models/Builds.ts';
import { Change } from '../models/Change.ts';
import { ChangeLocator } from '../models/ChangeLocator.ts';
import { Changes } from '../models/Changes.ts';
import { CloudImage } from '../models/CloudImage.ts';
import { CloudImages } from '../models/CloudImages.ts';
import { CloudInstance } from '../models/CloudInstance.ts';
import { CloudInstances } from '../models/CloudInstances.ts';
import { CloudProfile } from '../models/CloudProfile.ts';
import { CloudProfiles } from '../models/CloudProfiles.ts';
import { Comment } from '../models/Comment.ts';
import { Compatibilities } from '../models/Compatibilities.ts';
import { Compatibility } from '../models/Compatibility.ts';
import { CompatibilityPolicy } from '../models/CompatibilityPolicy.ts';
import { Customizations } from '../models/Customizations.ts';
import { Datas } from '../models/Datas.ts';
import { EnabledInfo } from '../models/EnabledInfo.ts';
import { Entries } from '../models/Entries.ts';
import { Entry } from '../models/Entry.ts';
import { Environment } from '../models/Environment.ts';
import { Feature } from '../models/Feature.ts';
import { Features } from '../models/Features.ts';
import { File } from '../models/File.ts';
import { FileChange } from '../models/FileChange.ts';
import { FileChanges } from '../models/FileChanges.ts';
import { Files } from '../models/Files.ts';
import { Group } from '../models/Group.ts';
import { Groups } from '../models/Groups.ts';
import { Href } from '../models/Href.ts';
import { Investigation } from '../models/Investigation.ts';
import { InvestigationLocator } from '../models/InvestigationLocator.ts';
import { Investigations } from '../models/Investigations.ts';
import { Issue } from '../models/Issue.ts';
import { IssueUsage } from '../models/IssueUsage.ts';
import { Issues } from '../models/Issues.ts';
import { IssuesUsages } from '../models/IssuesUsages.ts';
import { Items } from '../models/Items.ts';
import { LicenseKey } from '../models/LicenseKey.ts';
import { LicenseKeys } from '../models/LicenseKeys.ts';
import { LicensingData } from '../models/LicensingData.ts';
import { Link } from '../models/Link.ts';
import { Links } from '../models/Links.ts';
import { MetaData } from '../models/MetaData.ts';
import { Metric } from '../models/Metric.ts';
import { MetricTag } from '../models/MetricTag.ts';
import { MetricTags } from '../models/MetricTags.ts';
import { MetricValue } from '../models/MetricValue.ts';
import { MetricValues } from '../models/MetricValues.ts';
import { Metrics } from '../models/Metrics.ts';
import { MultipleOperationResult } from '../models/MultipleOperationResult.ts';
import { Mute } from '../models/Mute.ts';
import { MuteLocator } from '../models/MuteLocator.ts';
import { Mutes } from '../models/Mutes.ts';
import { NewBuildTypeDescription } from '../models/NewBuildTypeDescription.ts';
import { NewProjectDescription } from '../models/NewProjectDescription.ts';
import { OperationResult } from '../models/OperationResult.ts';
import { ParsedTestName } from '../models/ParsedTestName.ts';
import { Permission } from '../models/Permission.ts';
import { PermissionAssignment } from '../models/PermissionAssignment.ts';
import { PermissionAssignments } from '../models/PermissionAssignments.ts';
import { PermissionRestriction } from '../models/PermissionRestriction.ts';
import { PermissionRestrictions } from '../models/PermissionRestrictions.ts';
import { PinInfo } from '../models/PinInfo.ts';
import { Plugin } from '../models/Plugin.ts';
import { Plugins } from '../models/Plugins.ts';
import { Problem } from '../models/Problem.ts';
import { ProblemLocator } from '../models/ProblemLocator.ts';
import { ProblemOccurrence } from '../models/ProblemOccurrence.ts';
import { ProblemOccurrenceLocator } from '../models/ProblemOccurrenceLocator.ts';
import { ProblemOccurrences } from '../models/ProblemOccurrences.ts';
import { ProblemScope } from '../models/ProblemScope.ts';
import { ProblemTarget } from '../models/ProblemTarget.ts';
import { Problems } from '../models/Problems.ts';
import { ProgressInfo } from '../models/ProgressInfo.ts';
import { Project } from '../models/Project.ts';
import { ProjectFeature } from '../models/ProjectFeature.ts';
import { ProjectFeatures } from '../models/ProjectFeatures.ts';
import { ProjectLocator } from '../models/ProjectLocator.ts';
import { Projects } from '../models/Projects.ts';
import { Properties } from '../models/Properties.ts';
import { Property } from '../models/Property.ts';
import { Related } from '../models/Related.ts';
import { RelatedEntities } from '../models/RelatedEntities.ts';
import { RelatedEntity } from '../models/RelatedEntity.ts';
import { RepositoryState } from '../models/RepositoryState.ts';
import { Requirements } from '../models/Requirements.ts';
import { Resolution } from '../models/Resolution.ts';
import { Revision } from '../models/Revision.ts';
import { Revisions } from '../models/Revisions.ts';
import { Role } from '../models/Role.ts';
import { Roles } from '../models/Roles.ts';
import { Server } from '../models/Server.ts';
import { SnapshotDependencies } from '../models/SnapshotDependencies.ts';
import { SnapshotDependency } from '../models/SnapshotDependency.ts';
import { StateField } from '../models/StateField.ts';
import { Step } from '../models/Step.ts';
import { Steps } from '../models/Steps.ts';
import { Tag } from '../models/Tag.ts';
import { TagLocator } from '../models/TagLocator.ts';
import { Tags } from '../models/Tags.ts';
import { Test } from '../models/Test.ts';
import { TestCounters } from '../models/TestCounters.ts';
import { TestLocator } from '../models/TestLocator.ts';
import { TestOccurrence } from '../models/TestOccurrence.ts';
import { TestOccurrenceLocator } from '../models/TestOccurrenceLocator.ts';
import { TestOccurrences } from '../models/TestOccurrences.ts';
import { TestRunMetadata } from '../models/TestRunMetadata.ts';
import { Tests } from '../models/Tests.ts';
import { Token } from '../models/Token.ts';
import { Tokens } from '../models/Tokens.ts';
import { Trigger } from '../models/Trigger.ts';
import { TriggeredBy } from '../models/TriggeredBy.ts';
import { Triggers } from '../models/Triggers.ts';
import { Type } from '../models/Type.ts';
import { TypedValue } from '../models/TypedValue.ts';
import { User } from '../models/User.ts';
import { UserGroupLocator } from '../models/UserGroupLocator.ts';
import { UserLocator } from '../models/UserLocator.ts';
import { Users } from '../models/Users.ts';
import { VcsCheckStatus } from '../models/VcsCheckStatus.ts';
import { VcsLabel } from '../models/VcsLabel.ts';
import { VcsLabels } from '../models/VcsLabels.ts';
import { VcsRoot } from '../models/VcsRoot.ts';
import { VcsRootEntries } from '../models/VcsRootEntries.ts';
import { VcsRootEntry } from '../models/VcsRootEntry.ts';
import { VcsRootInstance } from '../models/VcsRootInstance.ts';
import { VcsRootInstanceLocator } from '../models/VcsRootInstanceLocator.ts';
import { VcsRootInstances } from '../models/VcsRootInstances.ts';
import { VcsRootLocator } from '../models/VcsRootLocator.ts';
import { VcsRoots } from '../models/VcsRoots.ts';
import { VcsStatus } from '../models/VcsStatus.ts';
import { ObservableAgentApi } from './ObservableAPI.ts';

import { AgentApiRequestFactory, AgentApiResponseProcessor} from "../apis/AgentApi.ts";
export class PromiseAgentApi {
    private api: ObservableAgentApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AgentApiRequestFactory,
        responseProcessor?: AgentApiResponseProcessor
    ) {
        this.api = new ObservableAgentApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete an inactive agent.
     * @param agentLocator 
     */
    public deleteAgent(agentLocator: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteAgent(agentLocator, options);
        return result.toPromise();
    }

    /**
     * Get agent matching the locator.
     * @param agentLocator 
     * @param fields 
     */
    public getAgent(agentLocator: string, fields?: string, options?: Configuration): Promise<Agent> {
        const result = this.api.getAgent(agentLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Get a field of the matching agent.
     * @param agentLocator 
     * @param field 
     */
    public getAgentField(agentLocator: string, field: string, options?: Configuration): Promise<string> {
        const result = this.api.getAgentField(agentLocator, field, options);
        return result.toPromise();
    }

    /**
     * Get the agent pool of the matching agent.
     * @param agentLocator 
     * @param fields 
     */
    public getAgentPool(agentLocator: string, fields?: string, options?: Configuration): Promise<AgentPool> {
        const result = this.api.getAgentPool(agentLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Get all known agents.
     * @param locator 
     * @param fields 
     */
    public getAllAgents(locator?: string, fields?: string, options?: Configuration): Promise<Agents> {
        const result = this.api.getAllAgents(locator, fields, options);
        return result.toPromise();
    }

    /**
     * Get the authorization info of the matching agent.
     * @param agentLocator 
     * @param fields 
     */
    public getAuthorizedInfo(agentLocator: string, fields?: string, options?: Configuration): Promise<AuthorizedInfo> {
        const result = this.api.getAuthorizedInfo(agentLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Get the build configuration run policy of the matching agent.
     * @param agentLocator 
     * @param fields 
     */
    public getBuildConfigurationRunPolicy(agentLocator: string, fields?: string, options?: Configuration): Promise<CompatibilityPolicy> {
        const result = this.api.getBuildConfigurationRunPolicy(agentLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Get build types compatible with the matching agent.
     * @param agentLocator 
     * @param fields 
     */
    public getCompatibleBuildTypes(agentLocator: string, fields?: string, options?: Configuration): Promise<BuildTypes> {
        const result = this.api.getCompatibleBuildTypes(agentLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Check if the matching agent is enabled.
     * @param agentLocator 
     * @param fields 
     */
    public getEnabledInfo(agentLocator: string, fields?: string, options?: Configuration): Promise<EnabledInfo> {
        const result = this.api.getEnabledInfo(agentLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Get build types incompatible with the matching agent.
     * @param agentLocator 
     * @param fields 
     */
    public getIncompatibleBuildTypes(agentLocator: string, fields?: string, options?: Configuration): Promise<Compatibilities> {
        const result = this.api.getIncompatibleBuildTypes(agentLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Update a field of the matching agent.
     * @param agentLocator 
     * @param field 
     * @param body 
     */
    public setAgentField(agentLocator: string, field: string, body?: string, options?: Configuration): Promise<string> {
        const result = this.api.setAgentField(agentLocator, field, body, options);
        return result.toPromise();
    }

    /**
     * Assign the matching agent to the specified agent pool.
     * @param agentLocator 
     * @param fields 
     * @param body 
     */
    public setAgentPool(agentLocator: string, fields?: string, body?: AgentPool, options?: Configuration): Promise<AgentPool> {
        const result = this.api.setAgentPool(agentLocator, fields, body, options);
        return result.toPromise();
    }

    /**
     * Update the authorization info of the matching agent.
     * @param agentLocator 
     * @param fields 
     * @param body 
     */
    public setAuthorizedInfo(agentLocator: string, fields?: string, body?: AuthorizedInfo, options?: Configuration): Promise<AuthorizedInfo> {
        const result = this.api.setAuthorizedInfo(agentLocator, fields, body, options);
        return result.toPromise();
    }

    /**
     * Update build configuration run policy of agent matching locator.
     * @param agentLocator 
     * @param fields 
     * @param body 
     */
    public setBuildConfigurationRunPolicy(agentLocator: string, fields?: string, body?: CompatibilityPolicy, options?: Configuration): Promise<CompatibilityPolicy> {
        const result = this.api.setBuildConfigurationRunPolicy(agentLocator, fields, body, options);
        return result.toPromise();
    }

    /**
     * Update the enablement status of the matching agent.
     * @param agentLocator 
     * @param fields 
     * @param body 
     */
    public setEnabledInfo(agentLocator: string, fields?: string, body?: EnabledInfo, options?: Configuration): Promise<EnabledInfo> {
        const result = this.api.setEnabledInfo(agentLocator, fields, body, options);
        return result.toPromise();
    }


}



import { ObservableAgentPoolApi } from './ObservableAPI.ts';

import { AgentPoolApiRequestFactory, AgentPoolApiResponseProcessor} from "../apis/AgentPoolApi.ts";
export class PromiseAgentPoolApi {
    private api: ObservableAgentPoolApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AgentPoolApiRequestFactory,
        responseProcessor?: AgentPoolApiResponseProcessor
    ) {
        this.api = new ObservableAgentPoolApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Assign the agent to the matching agent pool.
     * @param agentPoolLocator 
     * @param fields 
     * @param body 
     */
    public addAgentToAgentPool(agentPoolLocator: string, fields?: string, body?: Agent, options?: Configuration): Promise<Agent> {
        const result = this.api.addAgentToAgentPool(agentPoolLocator, fields, body, options);
        return result.toPromise();
    }

    /**
     * Assign the project to the matching agent pool.
     * @param agentPoolLocator 
     * @param body 
     */
    public addProjectToAgentPool(agentPoolLocator: string, body?: Project, options?: Configuration): Promise<Project> {
        const result = this.api.addProjectToAgentPool(agentPoolLocator, body, options);
        return result.toPromise();
    }

    /**
     * Create a new agent pool.
     * @param body 
     */
    public createAgentPool(body?: AgentPool, options?: Configuration): Promise<AgentPool> {
        const result = this.api.createAgentPool(body, options);
        return result.toPromise();
    }

    /**
     * Delete the agent pool matching the locator.
     * @param agentPoolLocator 
     */
    public deleteAgentPool(agentPoolLocator: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteAgentPool(agentPoolLocator, options);
        return result.toPromise();
    }

    /**
     * Unassign all projects from the matching agent pool.
     * @param agentPoolLocator 
     */
    public deleteAllProjectsFromAgentPool(agentPoolLocator: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteAllProjectsFromAgentPool(agentPoolLocator, options);
        return result.toPromise();
    }

    /**
     * Unassign the project from the matching agent pool.
     * @param agentPoolLocator 
     * @param projectLocator 
     */
    public deleteProjectFromAgentPool(agentPoolLocator: string, projectLocator: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteProjectFromAgentPool(agentPoolLocator, projectLocator, options);
        return result.toPromise();
    }

    /**
     * Get the agent pool matching the locator.
     * @param agentPoolLocator 
     * @param fields 
     */
    public getAgentPoolOfAgentPool(agentPoolLocator: string, fields?: string, options?: Configuration): Promise<AgentPool> {
        const result = this.api.getAgentPoolOfAgentPool(agentPoolLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Get all agent pools.
     * @param locator 
     * @param fields 
     */
    public getAllAgentPools(locator?: string, fields?: string, options?: Configuration): Promise<AgentPools> {
        const result = this.api.getAllAgentPools(locator, fields, options);
        return result.toPromise();
    }

    /**
     * Get the agent of the matching agent pool.
     * @param agentPoolLocator 
     * @param locator 
     * @param fields 
     */
    public getAllAgentsFromAgentPool(agentPoolLocator: string, locator?: string, fields?: string, options?: Configuration): Promise<Agents> {
        const result = this.api.getAllAgentsFromAgentPool(agentPoolLocator, locator, fields, options);
        return result.toPromise();
    }

    /**
     * Get all projects of the matching agent pool.
     * @param agentPoolLocator 
     * @param fields 
     */
    public getAllProjectsFromAgentPool(agentPoolLocator: string, fields?: string, options?: Configuration): Promise<Projects> {
        const result = this.api.getAllProjectsFromAgentPool(agentPoolLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Get a field of the matching agent pool.
     * @param agentPoolLocator 
     * @param field 
     */
    public getFieldFromAgentPool(agentPoolLocator: string, field: string, options?: Configuration): Promise<string> {
        const result = this.api.getFieldFromAgentPool(agentPoolLocator, field, options);
        return result.toPromise();
    }

    /**
     * Update a field of the matching agent pool.
     * @param agentPoolLocator 
     * @param field 
     * @param body 
     */
    public setAgentPoolField(agentPoolLocator: string, field: string, body?: string, options?: Configuration): Promise<string> {
        const result = this.api.setAgentPoolField(agentPoolLocator, field, body, options);
        return result.toPromise();
    }

    /**
     * Update projects of the matching agent pool.
     * @param agentPoolLocator 
     * @param body 
     */
    public setAgentPoolProjects(agentPoolLocator: string, body?: Projects, options?: Configuration): Promise<Projects> {
        const result = this.api.setAgentPoolProjects(agentPoolLocator, body, options);
        return result.toPromise();
    }


}



import { ObservableAuditApi } from './ObservableAPI.ts';

import { AuditApiRequestFactory, AuditApiResponseProcessor} from "../apis/AuditApi.ts";
export class PromiseAuditApi {
    private api: ObservableAuditApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AuditApiRequestFactory,
        responseProcessor?: AuditApiResponseProcessor
    ) {
        this.api = new ObservableAuditApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get all audit events.
     * @param locator 
     * @param fields 
     */
    public getAllAuditEvents(locator?: string, fields?: string, options?: Configuration): Promise<AuditEvents> {
        const result = this.api.getAllAuditEvents(locator, fields, options);
        return result.toPromise();
    }

    /**
     * Get audit event matching the locator.
     * @param auditEventLocator 
     * @param fields 
     */
    public getAuditEvent(auditEventLocator: string, fields?: string, options?: Configuration): Promise<AuditEvent> {
        const result = this.api.getAuditEvent(auditEventLocator, fields, options);
        return result.toPromise();
    }


}



import { ObservableBuildApi } from './ObservableAPI.ts';

import { BuildApiRequestFactory, BuildApiResponseProcessor} from "../apis/BuildApi.ts";
export class PromiseBuildApi {
    private api: ObservableBuildApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BuildApiRequestFactory,
        responseProcessor?: BuildApiResponseProcessor
    ) {
        this.api = new ObservableBuildApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add a VCS label to the matching build.
     * @param buildLocator 
     * @param locator 
     * @param fields 
     * @param body 
     */
    public addBuildVcsLabel(buildLocator: string, locator?: string, fields?: string, body?: string, options?: Configuration): Promise<VcsLabels> {
        const result = this.api.addBuildVcsLabel(buildLocator, locator, fields, body, options);
        return result.toPromise();
    }

    /**
     * Adds a message to the build log. Service messages are accepted.
     * @param buildLocator 
     * @param fields 
     * @param body 
     */
    public addLogMessageToBuild(buildLocator: string, fields?: string, body?: string, options?: Configuration): Promise<void> {
        const result = this.api.addLogMessageToBuild(buildLocator, fields, body, options);
        return result.toPromise();
    }

    /**
     * Add a build problem to the matching build.
     * @param buildLocator 
     * @param fields 
     * @param body 
     */
    public addProblemToBuild(buildLocator: string, fields?: string, body?: string, options?: Configuration): Promise<ProblemOccurrence> {
        const result = this.api.addProblemToBuild(buildLocator, fields, body, options);
        return result.toPromise();
    }

    /**
     * Add tags to the matching build.
     * @param buildLocator 
     * @param fields 
     * @param body 
     */
    public addTagsToBuild(buildLocator: string, fields?: string, body?: Tags, options?: Configuration): Promise<Tags> {
        const result = this.api.addTagsToBuild(buildLocator, fields, body, options);
        return result.toPromise();
    }

    /**
     * Add tags to multiple matching builds.
     * @param buildLocator 
     * @param fields 
     * @param body 
     */
    public addTagsToMultipleBuilds(buildLocator: string, fields?: string, body?: Tags, options?: Configuration): Promise<MultipleOperationResult> {
        const result = this.api.addTagsToMultipleBuilds(buildLocator, fields, body, options);
        return result.toPromise();
    }

    /**
     * Delete build matching the locator.
     * @param buildLocator 
     */
    public deleteBuild(buildLocator: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteBuild(buildLocator, options);
        return result.toPromise();
    }

    /**
     * Remove the build comment matching the locator.
     * @param buildLocator 
     */
    public deleteBuildComment(buildLocator: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteBuildComment(buildLocator, options);
        return result.toPromise();
    }

    /**
     * Delete comments of multiple matching builds.
     * @param buildLocator 
     * @param fields 
     */
    public deleteMultipleBuildComments(buildLocator: string, fields?: string, options?: Configuration): Promise<MultipleOperationResult> {
        const result = this.api.deleteMultipleBuildComments(buildLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Delete multiple builds matching the locator.
     * @param buildLocator 
     * @param fields 
     */
    public deleteMultipleBuilds(buildLocator: string, fields?: string, options?: Configuration): Promise<MultipleOperationResult> {
        const result = this.api.deleteMultipleBuilds(buildLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Download specific file.
     * @param path 
     * @param buildLocator 
     * @param resolveParameters 
     * @param logBuildUsage 
     */
    public downloadFileOfBuild(path: string, buildLocator: string, resolveParameters?: boolean, logBuildUsage?: boolean, options?: Configuration): Promise<void> {
        const result = this.api.downloadFileOfBuild(path, buildLocator, resolveParameters, logBuildUsage, options);
        return result.toPromise();
    }

    /**
     * Get the build status of aggregated matching builds.
     * @param buildLocator 
     */
    public getAggregatedBuildStatus(buildLocator: string, options?: Configuration): Promise<string> {
        const result = this.api.getAggregatedBuildStatus(buildLocator, options);
        return result.toPromise();
    }

    /**
     * Get the status icon (in specified format) of aggregated matching builds.
     * @param buildLocator 
     * @param suffix 
     */
    public getAggregatedBuildStatusIcon(buildLocator: string, suffix: string, options?: Configuration): Promise<void> {
        const result = this.api.getAggregatedBuildStatusIcon(buildLocator, suffix, options);
        return result.toPromise();
    }

    /**
     * Get all builds.
     * @param locator 
     * @param fields 
     */
    public getAllBuilds(locator?: string, fields?: string, options?: Configuration): Promise<Builds> {
        const result = this.api.getAllBuilds(locator, fields, options);
        return result.toPromise();
    }

    /**
     * Get artifact dependency changes of the matching build.
     * @param buildLocator 
     * @param fields 
     */
    public getArtifactDependencyChanges(buildLocator: string, fields?: string, options?: Configuration): Promise<BuildChanges> {
        const result = this.api.getArtifactDependencyChanges(buildLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Get the artifacts' directory of the matching build.
     * @param buildLocator 
     */
    public getArtifactsDirectory(buildLocator: string, options?: Configuration): Promise<string> {
        const result = this.api.getArtifactsDirectory(buildLocator, options);
        return result.toPromise();
    }

    /**
     * Get build matching the locator.
     * @param buildLocator 
     * @param fields 
     */
    public getBuild(buildLocator: string, fields?: string, options?: Configuration): Promise<Build> {
        const result = this.api.getBuild(buildLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Get actual build parameters of the matching build.
     * @param buildLocator 
     * @param fields 
     */
    public getBuildActualParameters(buildLocator: string, fields?: string, options?: Configuration): Promise<Properties> {
        const result = this.api.getBuildActualParameters(buildLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Get a field of the matching build.
     * @param buildLocator 
     * @param field 
     */
    public getBuildField(buildLocator: string, field: string, options?: Configuration): Promise<string> {
        const result = this.api.getBuildField(buildLocator, field, options);
        return result.toPromise();
    }

    /**
     * Get the finish date of the matching build.
     * @param buildLocator 
     */
    public getBuildFinishDate(buildLocator: string, options?: Configuration): Promise<string> {
        const result = this.api.getBuildFinishDate(buildLocator, options);
        return result.toPromise();
    }

    /**
     * Get the number of the matching build.
     * @param buildLocator 
     */
    public getBuildNumber(buildLocator: string, options?: Configuration): Promise<string> {
        const result = this.api.getBuildNumber(buildLocator, options);
        return result.toPromise();
    }

    /**
     * Check if the matching build is pinned.
     * @param buildLocator 
     * @param fields 
     */
    public getBuildPinInfo(buildLocator: string, fields?: string, options?: Configuration): Promise<PinInfo> {
        const result = this.api.getBuildPinInfo(buildLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Get build problems of the matching build.
     * @param buildLocator 
     * @param fields 
     */
    public getBuildProblems(buildLocator: string, fields?: string, options?: Configuration): Promise<ProblemOccurrences> {
        const result = this.api.getBuildProblems(buildLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Get related issues of the matching build.
     * @param buildLocator 
     * @param fields 
     */
    public getBuildRelatedIssues(buildLocator: string, fields?: string, options?: Configuration): Promise<IssuesUsages> {
        const result = this.api.getBuildRelatedIssues(buildLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Get the resolvement status of the matching build.
     * @param buildLocator 
     * @param value 
     */
    public getBuildResolved(buildLocator: string, value: string, options?: Configuration): Promise<string> {
        const result = this.api.getBuildResolved(buildLocator, value, options);
        return result.toPromise();
    }

    /**
     * Update a build parameter of the matching build.
     * @param buildLocator 
     * @param propertyName 
     */
    public getBuildResultingProperties(buildLocator: string, propertyName: string, options?: Configuration): Promise<string> {
        const result = this.api.getBuildResultingProperties(buildLocator, propertyName, options);
        return result.toPromise();
    }

    /**
     * Get a source file of the matching build.
     * @param buildLocator 
     * @param fileName 
     */
    public getBuildSourceFile(buildLocator: string, fileName: string, options?: Configuration): Promise<void> {
        const result = this.api.getBuildSourceFile(buildLocator, fileName, options);
        return result.toPromise();
    }

    /**
     * Get a statistical value of the matching build.
     * @param buildLocator 
     * @param name 
     */
    public getBuildStatisticValue(buildLocator: string, name: string, options?: Configuration): Promise<string> {
        const result = this.api.getBuildStatisticValue(buildLocator, name, options);
        return result.toPromise();
    }

    /**
     * Get all statistical values of the matching build.
     * @param buildLocator 
     * @param fields 
     */
    public getBuildStatisticValues(buildLocator: string, fields?: string, options?: Configuration): Promise<Properties> {
        const result = this.api.getBuildStatisticValues(buildLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Get the status icon (in specified format) of the matching build.
     * @param buildLocator 
     * @param suffix 
     */
    public getBuildStatusIcon(buildLocator: string, suffix: string, options?: Configuration): Promise<void> {
        const result = this.api.getBuildStatusIcon(buildLocator, suffix, options);
        return result.toPromise();
    }

    /**
     * Get the build status text of the matching build.
     * @param buildLocator 
     */
    public getBuildStatusText(buildLocator: string, options?: Configuration): Promise<string> {
        const result = this.api.getBuildStatusText(buildLocator, options);
        return result.toPromise();
    }

    /**
     * Get tags of the matching build.
     * @param buildLocator 
     * @param locator 
     * @param fields 
     */
    public getBuildTags(buildLocator: string, locator?: string, fields?: string, options?: Configuration): Promise<Tags> {
        const result = this.api.getBuildTags(buildLocator, locator, fields, options);
        return result.toPromise();
    }

    /**
     * Get test occurrences of the matching build.
     * @param buildLocator 
     * @param fields 
     */
    public getBuildTestOccurrences(buildLocator: string, fields?: string, options?: Configuration): Promise<TestOccurrences> {
        const result = this.api.getBuildTestOccurrences(buildLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Get VCS labels of the matching build.
     * @param buildLocator 
     * @param fields 
     */
    public getBuildVcsLabels(buildLocator: string, fields?: string, options?: Configuration): Promise<VcsLabels> {
        const result = this.api.getBuildVcsLabels(buildLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Check if the matching build is canceled.
     * @param buildLocator 
     * @param fields 
     */
    public getCanceledInfo(buildLocator: string, fields?: string, options?: Configuration): Promise<Comment> {
        const result = this.api.getCanceledInfo(buildLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Get metadata of specific file.
     * @param path 
     * @param buildLocator 
     * @param fields 
     * @param resolveParameters 
     * @param logBuildUsage 
     */
    public getFileMetadataOfBuild(path: string, buildLocator: string, fields?: string, resolveParameters?: boolean, logBuildUsage?: boolean, options?: Configuration): Promise<any> {
        const result = this.api.getFileMetadataOfBuild(path, buildLocator, fields, resolveParameters, logBuildUsage, options);
        return result.toPromise();
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
    public getFilesListForSubpathOfBuild(path: string, buildLocator: string, basePath?: string, locator?: string, fields?: string, resolveParameters?: boolean, logBuildUsage?: boolean, options?: Configuration): Promise<Files> {
        const result = this.api.getFilesListForSubpathOfBuild(path, buildLocator, basePath, locator, fields, resolveParameters, logBuildUsage, options);
        return result.toPromise();
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
    public getFilesListOfBuild(buildLocator: string, basePath?: string, locator?: string, fields?: string, resolveParameters?: boolean, logBuildUsage?: boolean, options?: Configuration): Promise<Files> {
        const result = this.api.getFilesListOfBuild(buildLocator, basePath, locator, fields, resolveParameters, logBuildUsage, options);
        return result.toPromise();
    }

    /**
     * Get multiple builds matching the locator.
     * @param buildLocator 
     * @param fields 
     */
    public getMultipleBuilds(buildLocator: string, fields?: string, options?: Configuration): Promise<Builds> {
        const result = this.api.getMultipleBuilds(buildLocator, fields, options);
        return result.toPromise();
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
    public getZippedFileOfBuild(path: string, buildLocator: string, basePath?: string, locator?: string, name?: string, resolveParameters?: boolean, logBuildUsage?: boolean, options?: Configuration): Promise<void> {
        const result = this.api.getZippedFileOfBuild(path, buildLocator, basePath, locator, name, resolveParameters, logBuildUsage, options);
        return result.toPromise();
    }

    /**
     * Starts the queued build as an agent-less build and returns the corresponding running build.
     * @param buildLocator 
     * @param fields 
     * @param body 
     */
    public markBuildAsRunning(buildLocator: string, fields?: string, body?: string, options?: Configuration): Promise<Build> {
        const result = this.api.markBuildAsRunning(buildLocator, fields, body, options);
        return result.toPromise();
    }

    /**
     * Pin multiple matching builds.
     * @param buildLocator 
     * @param fields 
     * @param body 
     */
    public pinMultipleBuilds(buildLocator: string, fields?: string, body?: PinInfo, options?: Configuration): Promise<MultipleOperationResult> {
        const result = this.api.pinMultipleBuilds(buildLocator, fields, body, options);
        return result.toPromise();
    }

    /**
     * Remove tags from multiple matching builds.
     * @param buildLocator 
     * @param fields 
     * @param body 
     */
    public removeMultipleBuildTags(buildLocator: string, fields?: string, body?: Tags, options?: Configuration): Promise<MultipleOperationResult> {
        const result = this.api.removeMultipleBuildTags(buildLocator, fields, body, options);
        return result.toPromise();
    }

    /**
     * Remove build parameters from the matching build.
     * @param buildLocator 
     */
    public resetBuildFinishProperties(buildLocator: string, options?: Configuration): Promise<void> {
        const result = this.api.resetBuildFinishProperties(buildLocator, options);
        return result.toPromise();
    }

    /**
     * Update the comment on the matching build.
     * @param buildLocator 
     * @param body 
     */
    public setBuildComment(buildLocator: string, body?: string, options?: Configuration): Promise<void> {
        const result = this.api.setBuildComment(buildLocator, body, options);
        return result.toPromise();
    }

    /**
     * Marks the running build as finished by passing agent the current time of the build to finish.
     * @param buildLocator 
     * @param body 
     */
    public setBuildFinishDate(buildLocator: string, body?: string, options?: Configuration): Promise<string> {
        const result = this.api.setBuildFinishDate(buildLocator, body, options);
        return result.toPromise();
    }

    /**
     * Update the number of the matching build.
     * @param buildLocator 
     * @param body 
     */
    public setBuildNumber(buildLocator: string, body?: string, options?: Configuration): Promise<string> {
        const result = this.api.setBuildNumber(buildLocator, body, options);
        return result.toPromise();
    }

    /**
     * Update the pin info of the matching build.
     * @param buildLocator 
     * @param fields 
     * @param body 
     */
    public setBuildPinInfo(buildLocator: string, fields?: string, body?: PinInfo, options?: Configuration): Promise<PinInfo> {
        const result = this.api.setBuildPinInfo(buildLocator, fields, body, options);
        return result.toPromise();
    }

    /**
     * Update the build status of the matching build.
     * @param buildLocator 
     * @param body 
     */
    public setBuildStatusText(buildLocator: string, body?: string, options?: Configuration): Promise<string> {
        const result = this.api.setBuildStatusText(buildLocator, body, options);
        return result.toPromise();
    }

    /**
     * Update tags of the matching build.
     * @param buildLocator 
     * @param locator 
     * @param fields 
     * @param body 
     */
    public setBuildTags(buildLocator: string, locator?: string, fields?: string, body?: Tags, options?: Configuration): Promise<Tags> {
        const result = this.api.setBuildTags(buildLocator, locator, fields, body, options);
        return result.toPromise();
    }

    /**
     * Marks the running build as finished by passing agent the current time of the build to finish.
     * @param buildLocator 
     */
    public setFinishedTime(buildLocator: string, options?: Configuration): Promise<string> {
        const result = this.api.setFinishedTime(buildLocator, options);
        return result.toPromise();
    }

    /**
     * Update comments in multiple matching builds.
     * @param buildLocator 
     * @param fields 
     * @param body 
     */
    public setMultipleBuildComments(buildLocator: string, fields?: string, body?: string, options?: Configuration): Promise<MultipleOperationResult> {
        const result = this.api.setMultipleBuildComments(buildLocator, fields, body, options);
        return result.toPromise();
    }


}



import { ObservableBuildQueueApi } from './ObservableAPI.ts';

import { BuildQueueApiRequestFactory, BuildQueueApiResponseProcessor} from "../apis/BuildQueueApi.ts";
export class PromiseBuildQueueApi {
    private api: ObservableBuildQueueApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BuildQueueApiRequestFactory,
        responseProcessor?: BuildQueueApiResponseProcessor
    ) {
        this.api = new ObservableBuildQueueApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add a new build to the queue.
     * @param moveToTop 
     * @param body 
     */
    public addBuildToQueue(moveToTop?: boolean, body?: Build, options?: Configuration): Promise<Build> {
        const result = this.api.addBuildToQueue(moveToTop, body, options);
        return result.toPromise();
    }

    /**
     * Add tags to the matching build.
     * @param buildLocator 
     * @param body 
     */
    public addTagsToBuildOfBuildQueue(buildLocator: string, body?: Tags, options?: Configuration): Promise<void> {
        const result = this.api.addTagsToBuildOfBuildQueue(buildLocator, body, options);
        return result.toPromise();
    }

    /**
     * Cancel a queued matching build.
     * @param queuedBuildLocator 
     * @param body 
     */
    public cancelQueuedBuild(queuedBuildLocator: string, body?: BuildCancelRequest, options?: Configuration): Promise<Build> {
        const result = this.api.cancelQueuedBuild(queuedBuildLocator, body, options);
        return result.toPromise();
    }

    /**
     * Delete all queued builds.
     * @param locator 
     * @param fields 
     */
    public deleteAllQueuedBuilds(locator?: string, fields?: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteAllQueuedBuilds(locator, fields, options);
        return result.toPromise();
    }

    /**
     * Delete a queued matching build.
     * @param queuedBuildLocator 
     */
    public deleteQueuedBuild(queuedBuildLocator: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteQueuedBuild(queuedBuildLocator, options);
        return result.toPromise();
    }

    /**
     * Get all queued builds.
     * @param locator 
     * @param fields 
     */
    public getAllQueuedBuilds(locator?: string, fields?: string, options?: Configuration): Promise<Builds> {
        const result = this.api.getAllQueuedBuilds(locator, fields, options);
        return result.toPromise();
    }

    /**
     * Get compatible agents for a queued matching build.
     * @param queuedBuildLocator 
     * @param fields 
     */
    public getCompatibleAgentsForBuild(queuedBuildLocator: string, fields?: string, options?: Configuration): Promise<Agents> {
        const result = this.api.getCompatibleAgentsForBuild(queuedBuildLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Get a queued matching build.
     * @param queuedBuildLocator 
     * @param fields 
     */
    public getQueuedBuild(queuedBuildLocator: string, fields?: string, options?: Configuration): Promise<Build> {
        const result = this.api.getQueuedBuild(queuedBuildLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Get the queue position of a queued matching build.
     * @param queuePosition 
     * @param fields 
     */
    public getQueuedBuildPosition(queuePosition: string, fields?: string, options?: Configuration): Promise<Build> {
        const result = this.api.getQueuedBuildPosition(queuePosition, fields, options);
        return result.toPromise();
    }

    /**
     * Get tags of the queued matching build.
     * @param buildLocator 
     * @param locator 
     * @param fields 
     */
    public getQueuedBuildTags(buildLocator: string, locator?: string, fields?: string, options?: Configuration): Promise<Tags> {
        const result = this.api.getQueuedBuildTags(buildLocator, locator, fields, options);
        return result.toPromise();
    }

    /**
     * Update the queue position of a queued matching build.
     * @param queuePosition 
     * @param fields 
     * @param body 
     */
    public setQueuedBuildPosition(queuePosition: string, fields?: string, body?: Build, options?: Configuration): Promise<Build> {
        const result = this.api.setQueuedBuildPosition(queuePosition, fields, body, options);
        return result.toPromise();
    }

    /**
     * Update the build queue order.
     * @param fields 
     * @param body 
     */
    public setQueuedBuildsOrder(fields?: string, body?: Builds, options?: Configuration): Promise<Builds> {
        const result = this.api.setQueuedBuildsOrder(fields, body, options);
        return result.toPromise();
    }


}



import { ObservableBuildTypeApi } from './ObservableAPI.ts';

import { BuildTypeApiRequestFactory, BuildTypeApiResponseProcessor} from "../apis/BuildTypeApi.ts";
export class PromiseBuildTypeApi {
    private api: ObservableBuildTypeApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BuildTypeApiRequestFactory,
        responseProcessor?: BuildTypeApiResponseProcessor
    ) {
        this.api = new ObservableBuildTypeApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add an agent requirement to the matching build configuration.
     * @param btLocator 
     * @param fields 
     * @param body 
     */
    public addAgentRequirementToBuildType(btLocator: string, fields?: string, body?: AgentRequirement, options?: Configuration): Promise<AgentRequirement> {
        const result = this.api.addAgentRequirementToBuildType(btLocator, fields, body, options);
        return result.toPromise();
    }

    /**
     * Add an artifact dependency to the matching build configuration.
     * @param btLocator 
     * @param fields 
     * @param body 
     */
    public addArtifactDependencyToBuildType(btLocator: string, fields?: string, body?: ArtifactDependency, options?: Configuration): Promise<ArtifactDependency> {
        const result = this.api.addArtifactDependencyToBuildType(btLocator, fields, body, options);
        return result.toPromise();
    }

    /**
     * Add build feature to the matching build configuration.
     * @param btLocator 
     * @param fields 
     * @param body 
     */
    public addBuildFeatureToBuildType(btLocator: string, fields?: string, body?: Feature, options?: Configuration): Promise<Feature> {
        const result = this.api.addBuildFeatureToBuildType(btLocator, fields, body, options);
        return result.toPromise();
    }

    /**
     * Add a build step to the matching build configuration.
     * @param btLocator 
     * @param fields 
     * @param body 
     */
    public addBuildStepToBuildType(btLocator: string, fields?: string, body?: Step, options?: Configuration): Promise<Step> {
        const result = this.api.addBuildStepToBuildType(btLocator, fields, body, options);
        return result.toPromise();
    }

    /**
     * Add a build template to the matching build configuration.
     * @param btLocator 
     * @param optimizeSettings 
     * @param fields 
     * @param body 
     */
    public addBuildTemplate(btLocator: string, optimizeSettings?: boolean, fields?: string, body?: BuildType, options?: Configuration): Promise<BuildType> {
        const result = this.api.addBuildTemplate(btLocator, optimizeSettings, fields, body, options);
        return result.toPromise();
    }

    /**
     * Update build feature parameter for the matching build configuration.
     * @param btLocator 
     * @param featureId 
     * @param parameterName 
     * @param body 
     */
    public addParameterToBuildFeature(btLocator: string, featureId: string, parameterName: string, body?: string, options?: Configuration): Promise<string> {
        const result = this.api.addParameterToBuildFeature(btLocator, featureId, parameterName, body, options);
        return result.toPromise();
    }

    /**
     * Add a parameter to a build step of the matching build configuration.
     * @param btLocator 
     * @param stepId 
     * @param parameterName 
     * @param body 
     */
    public addParameterToBuildStep(btLocator: string, stepId: string, parameterName: string, body?: string, options?: Configuration): Promise<string> {
        const result = this.api.addParameterToBuildStep(btLocator, stepId, parameterName, body, options);
        return result.toPromise();
    }

    /**
     * Add a snapshot dependency to the matching build configuration.
     * @param btLocator 
     * @param fields 
     * @param body 
     */
    public addSnapshotDependencyToBuildType(btLocator: string, fields?: string, body?: SnapshotDependency, options?: Configuration): Promise<SnapshotDependency> {
        const result = this.api.addSnapshotDependencyToBuildType(btLocator, fields, body, options);
        return result.toPromise();
    }

    /**
     * Add a trigger to the matching build configuration.
     * @param btLocator 
     * @param fields 
     * @param body 
     */
    public addTriggerToBuildType(btLocator: string, fields?: string, body?: Trigger, options?: Configuration): Promise<Trigger> {
        const result = this.api.addTriggerToBuildType(btLocator, fields, body, options);
        return result.toPromise();
    }

    /**
     * Add a VCS root to the matching build.
     * @param btLocator 
     * @param fields 
     * @param body 
     */
    public addVcsRootToBuildType(btLocator: string, fields?: string, body?: VcsRootEntry, options?: Configuration): Promise<VcsRootEntry> {
        const result = this.api.addVcsRootToBuildType(btLocator, fields, body, options);
        return result.toPromise();
    }

    /**
     * Create a build parameter.
     * @param btLocator 
     * @param fields 
     * @param body 
     */
    public createBuildParameterOfBuildType(btLocator: string, fields?: string, body?: Property, options?: Configuration): Promise<Property> {
        const result = this.api.createBuildParameterOfBuildType(btLocator, fields, body, options);
        return result.toPromise();
    }

    /**
     * Create a new build configuration.
     * @param fields 
     * @param body 
     */
    public createBuildType(fields?: string, body?: BuildType, options?: Configuration): Promise<BuildType> {
        const result = this.api.createBuildType(fields, body, options);
        return result.toPromise();
    }

    /**
     * Remove an agent requirement of the matching build configuration.
     * @param btLocator 
     * @param agentRequirementLocator 
     */
    public deleteAgentRequirement(btLocator: string, agentRequirementLocator: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteAgentRequirement(btLocator, agentRequirementLocator, options);
        return result.toPromise();
    }

    /**
     * Remove an artifact dependency from the matching build configuration.
     * @param btLocator 
     * @param artifactDepLocator 
     */
    public deleteArtifactDependency(btLocator: string, artifactDepLocator: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteArtifactDependency(btLocator, artifactDepLocator, options);
        return result.toPromise();
    }

    /**
     * Delete build parameter.
     * @param name 
     * @param btLocator 
     */
    public deleteBuildParameterOfBuildType(name: string, btLocator: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteBuildParameterOfBuildType(name, btLocator, options);
        return result.toPromise();
    }

    /**
     * Delete all build parameters.
     * @param btLocator 
     */
    public deleteBuildParametersOfBuildType(btLocator: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteBuildParametersOfBuildType(btLocator, options);
        return result.toPromise();
    }

    /**
     * Delete a build step of the matching build configuration.
     * @param btLocator 
     * @param stepId 
     */
    public deleteBuildStep(btLocator: string, stepId: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteBuildStep(btLocator, stepId, options);
        return result.toPromise();
    }

    /**
     * Update a parameter of a build step of the matching build configuration.
     * @param btLocator 
     * @param stepId 
     * @param fields 
     * @param body 
     */
    public deleteBuildStepParameters(btLocator: string, stepId: string, fields?: string, body?: Properties, options?: Configuration): Promise<Properties> {
        const result = this.api.deleteBuildStepParameters(btLocator, stepId, fields, body, options);
        return result.toPromise();
    }

    /**
     * Delete build configuration matching the locator.
     * @param btLocator 
     */
    public deleteBuildType(btLocator: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteBuildType(btLocator, options);
        return result.toPromise();
    }

    /**
     * Remove a build feature of the matching build configuration.
     * @param btLocator 
     * @param featureId 
     */
    public deleteFeatureOfBuildType(btLocator: string, featureId: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteFeatureOfBuildType(btLocator, featureId, options);
        return result.toPromise();
    }

    /**
     * Delete a snapshot dependency of the matching build configuration.
     * @param btLocator 
     * @param snapshotDepLocator 
     */
    public deleteSnapshotDependency(btLocator: string, snapshotDepLocator: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteSnapshotDependency(btLocator, snapshotDepLocator, options);
        return result.toPromise();
    }

    /**
     * Delete a trigger of the matching build configuration.
     * @param btLocator 
     * @param triggerLocator 
     */
    public deleteTrigger(btLocator: string, triggerLocator: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteTrigger(btLocator, triggerLocator, options);
        return result.toPromise();
    }

    /**
     * Remove a VCS root of the matching build configuration.
     * @param btLocator 
     * @param vcsRootLocator 
     */
    public deleteVcsRootOfBuildType(btLocator: string, vcsRootLocator: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteVcsRootOfBuildType(btLocator, vcsRootLocator, options);
        return result.toPromise();
    }

    /**
     * Download specific file.
     * @param path 
     * @param btLocator 
     * @param resolveParameters 
     */
    public downloadFileOfBuildType(path: string, btLocator: string, resolveParameters?: boolean, options?: Configuration): Promise<void> {
        const result = this.api.downloadFileOfBuildType(path, btLocator, resolveParameters, options);
        return result.toPromise();
    }

    /**
     * Get an agent requirement of the matching build configuration.
     * @param btLocator 
     * @param agentRequirementLocator 
     * @param fields 
     */
    public getAgentRequirement(btLocator: string, agentRequirementLocator: string, fields?: string, options?: Configuration): Promise<AgentRequirement> {
        const result = this.api.getAgentRequirement(btLocator, agentRequirementLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Get a setting of an agent requirement of the matching build configuration.
     * @param btLocator 
     * @param agentRequirementLocator 
     * @param fieldName 
     */
    public getAgentRequirementParameter(btLocator: string, agentRequirementLocator: string, fieldName: string, options?: Configuration): Promise<string> {
        const result = this.api.getAgentRequirementParameter(btLocator, agentRequirementLocator, fieldName, options);
        return result.toPromise();
    }

    /**
     * Get external IDs of the matching build configuration.
     * @param btLocator 
     * @param field 
     */
    public getAliases(btLocator: string, field?: string, options?: Configuration): Promise<Items> {
        const result = this.api.getAliases(btLocator, field, options);
        return result.toPromise();
    }

    /**
     * Get all agent requirements of the matching build configuration.
     * @param btLocator 
     * @param fields 
     */
    public getAllAgentRequirements(btLocator: string, fields?: string, options?: Configuration): Promise<AgentRequirements> {
        const result = this.api.getAllAgentRequirements(btLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Get all artifact dependencies of the matching build configuration.
     * @param btLocator 
     * @param fields 
     */
    public getAllArtifactDependencies(btLocator: string, fields?: string, options?: Configuration): Promise<ArtifactDependencies> {
        const result = this.api.getAllArtifactDependencies(btLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Get all branches of the matching build configuration.
     * @param btLocator 
     * @param locator 
     * @param fields 
     */
    public getAllBranchesOfBuildType(btLocator: string, locator?: string, fields?: string, options?: Configuration): Promise<Branches> {
        const result = this.api.getAllBranchesOfBuildType(btLocator, locator, fields, options);
        return result.toPromise();
    }

    /**
     * Get all parameters of a build feature of the matching build configuration.
     * @param btLocator 
     * @param featureId 
     * @param fields 
     */
    public getAllBuildFeatureParameters(btLocator: string, featureId: string, fields?: string, options?: Configuration): Promise<Properties> {
        const result = this.api.getAllBuildFeatureParameters(btLocator, featureId, fields, options);
        return result.toPromise();
    }

    /**
     * Get all build features of the matching build configuration.
     * @param btLocator 
     * @param fields 
     */
    public getAllBuildFeatures(btLocator: string, fields?: string, options?: Configuration): Promise<Features> {
        const result = this.api.getAllBuildFeatures(btLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Get all parameters of a build step of the matching build configuration.
     * @param btLocator 
     * @param stepId 
     * @param fields 
     */
    public getAllBuildStepParameters(btLocator: string, stepId: string, fields?: string, options?: Configuration): Promise<Properties> {
        const result = this.api.getAllBuildStepParameters(btLocator, stepId, fields, options);
        return result.toPromise();
    }

    /**
     * Get all build steps of the matching build configuration.
     * @param btLocator 
     * @param fields 
     */
    public getAllBuildSteps(btLocator: string, fields?: string, options?: Configuration): Promise<Steps> {
        const result = this.api.getAllBuildSteps(btLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Get all build templates of the matching build configuration.
     * @param btLocator 
     * @param fields 
     */
    public getAllBuildTemplates(btLocator: string, fields?: string, options?: Configuration): Promise<BuildTypes> {
        const result = this.api.getAllBuildTemplates(btLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Get all build configurations.
     * @param locator 
     * @param fields 
     */
    public getAllBuildTypes(locator?: string, fields?: string, options?: Configuration): Promise<BuildTypes> {
        const result = this.api.getAllBuildTypes(locator, fields, options);
        return result.toPromise();
    }

    /**
     * Get all investigations of the matching build configuration.
     * @param btLocator 
     * @param fields 
     */
    public getAllInvestigationsOfBuildType(btLocator: string, fields?: string, options?: Configuration): Promise<Investigations> {
        const result = this.api.getAllInvestigationsOfBuildType(btLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Get all snapshot dependencies of the matching build configuration.
     * @param btLocator 
     * @param fields 
     */
    public getAllSnapshotDependencies(btLocator: string, fields?: string, options?: Configuration): Promise<SnapshotDependencies> {
        const result = this.api.getAllSnapshotDependencies(btLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Get all triggers of the matching build configuration.
     * @param btLocator 
     * @param fields 
     */
    public getAllTriggers(btLocator: string, fields?: string, options?: Configuration): Promise<Triggers> {
        const result = this.api.getAllTriggers(btLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Get all VCS roots of the matching build configuration.
     * @param btLocator 
     * @param fields 
     */
    public getAllVcsRootsOfBuildType(btLocator: string, fields?: string, options?: Configuration): Promise<VcsRootEntries> {
        const result = this.api.getAllVcsRootsOfBuildType(btLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Get an artifact dependency of the matching build configuration.
     * @param btLocator 
     * @param artifactDepLocator 
     * @param fields 
     */
    public getArtifactDependency(btLocator: string, artifactDepLocator: string, fields?: string, options?: Configuration): Promise<ArtifactDependency> {
        const result = this.api.getArtifactDependency(btLocator, artifactDepLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Get a parameter of an artifact dependency of the matching build configuration.
     * @param btLocator 
     * @param artifactDepLocator 
     * @param fieldName 
     */
    public getArtifactDependencyParameter(btLocator: string, artifactDepLocator: string, fieldName: string, options?: Configuration): Promise<string> {
        const result = this.api.getArtifactDependencyParameter(btLocator, artifactDepLocator, fieldName, options);
        return result.toPromise();
    }

    /**
     * Get a build feature of the matching build configuration.
     * @param btLocator 
     * @param featureId 
     * @param fields 
     */
    public getBuildFeature(btLocator: string, featureId: string, fields?: string, options?: Configuration): Promise<Feature> {
        const result = this.api.getBuildFeature(btLocator, featureId, fields, options);
        return result.toPromise();
    }

    /**
     * Get a parameter of a build feature of the matching build configuration.
     * @param btLocator 
     * @param featureId 
     * @param parameterName 
     */
    public getBuildFeatureParameter(btLocator: string, featureId: string, parameterName: string, options?: Configuration): Promise<string> {
        const result = this.api.getBuildFeatureParameter(btLocator, featureId, parameterName, options);
        return result.toPromise();
    }

    /**
     * Get the setting of a build feature of the matching build configuration.
     * @param btLocator 
     * @param featureId 
     * @param name 
     */
    public getBuildFeatureSetting(btLocator: string, featureId: string, name: string, options?: Configuration): Promise<string> {
        const result = this.api.getBuildFeatureSetting(btLocator, featureId, name, options);
        return result.toPromise();
    }

    /**
     * Get build parameter.
     * @param name 
     * @param btLocator 
     * @param fields 
     */
    public getBuildParameterOfBuildType(name: string, btLocator: string, fields?: string, options?: Configuration): Promise<Property> {
        const result = this.api.getBuildParameterOfBuildType(name, btLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Get build parameter specification.
     * @param name 
     * @param btLocator 
     */
    public getBuildParameterSpecificationOfBuildType(name: string, btLocator: string, options?: Configuration): Promise<string> {
        const result = this.api.getBuildParameterSpecificationOfBuildType(name, btLocator, options);
        return result.toPromise();
    }

    /**
     * Get type of build parameter.
     * @param name 
     * @param btLocator 
     */
    public getBuildParameterTypeOfBuildType(name: string, btLocator: string, options?: Configuration): Promise<Type> {
        const result = this.api.getBuildParameterTypeOfBuildType(name, btLocator, options);
        return result.toPromise();
    }

    /**
     * Get value of build parameter.
     * @param name 
     * @param btLocator 
     */
    public getBuildParameterValueOfBuildType(name: string, btLocator: string, options?: Configuration): Promise<string> {
        const result = this.api.getBuildParameterValueOfBuildType(name, btLocator, options);
        return result.toPromise();
    }

    /**
     * Get build parameters.
     * @param btLocator 
     * @param locator 
     * @param fields 
     */
    public getBuildParametersOfBuildType(btLocator: string, locator?: string, fields?: string, options?: Configuration): Promise<Properties> {
        const result = this.api.getBuildParametersOfBuildType(btLocator, locator, fields, options);
        return result.toPromise();
    }

    /**
     * Get a build step of the matching build configuration.
     * @param btLocator 
     * @param stepId 
     * @param fields 
     */
    public getBuildStep(btLocator: string, stepId: string, fields?: string, options?: Configuration): Promise<Step> {
        const result = this.api.getBuildStep(btLocator, stepId, fields, options);
        return result.toPromise();
    }

    /**
     * Get a parameter of a build step of the matching build configuration.
     * @param btLocator 
     * @param stepId 
     * @param parameterName 
     */
    public getBuildStepParameter(btLocator: string, stepId: string, parameterName: string, options?: Configuration): Promise<string> {
        const result = this.api.getBuildStepParameter(btLocator, stepId, parameterName, options);
        return result.toPromise();
    }

    /**
     * Get the setting of a build step of the matching build configuration.
     * @param btLocator 
     * @param stepId 
     * @param fieldName 
     */
    public getBuildStepSetting(btLocator: string, stepId: string, fieldName: string, options?: Configuration): Promise<string> {
        const result = this.api.getBuildStepSetting(btLocator, stepId, fieldName, options);
        return result.toPromise();
    }

    /**
     * Get a template of the matching build configuration.
     * @param btLocator 
     * @param templateLocator 
     * @param fields 
     */
    public getBuildTemplate(btLocator: string, templateLocator: string, fields?: string, options?: Configuration): Promise<BuildType> {
        const result = this.api.getBuildTemplate(btLocator, templateLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Get build configuration matching the locator.
     * @param btLocator 
     * @param fields 
     */
    public getBuildType(btLocator: string, fields?: string, options?: Configuration): Promise<BuildType> {
        const result = this.api.getBuildType(btLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Get tags of builds of the matching build configuration.
     * @param btLocator 
     * @param field 
     */
    public getBuildTypeBuildTags(btLocator: string, field?: string, options?: Configuration): Promise<Tags> {
        const result = this.api.getBuildTypeBuildTags(btLocator, field, options);
        return result.toPromise();
    }

    /**
     * Get builds of the matching build configuration.
     * @param btLocator 
     * @param fields 
     */
    public getBuildTypeBuilds(btLocator: string, fields?: string, options?: Configuration): Promise<Builds> {
        const result = this.api.getBuildTypeBuilds(btLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Get a field of the matching build configuration.
     * @param btLocator 
     * @param field 
     */
    public getBuildTypeField(btLocator: string, field: string, options?: Configuration): Promise<string> {
        const result = this.api.getBuildTypeField(btLocator, field, options);
        return result.toPromise();
    }

    /**
     * Get the settings file of the matching build configuration.
     * @param btLocator 
     */
    public getBuildTypeSettingsFile(btLocator: string, options?: Configuration): Promise<string> {
        const result = this.api.getBuildTypeSettingsFile(btLocator, options);
        return result.toPromise();
    }

    /**
     * Get metadata of specific file.
     * @param path 
     * @param btLocator 
     * @param fields 
     * @param resolveParameters 
     */
    public getFileMetadataOfBuildType(path: string, btLocator: string, fields?: string, resolveParameters?: boolean, options?: Configuration): Promise<any> {
        const result = this.api.getFileMetadataOfBuildType(path, btLocator, fields, resolveParameters, options);
        return result.toPromise();
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
    public getFilesListForSubpathOfBuildType(path: string, btLocator: string, basePath?: string, locator?: string, fields?: string, resolveParameters?: boolean, options?: Configuration): Promise<Files> {
        const result = this.api.getFilesListForSubpathOfBuildType(path, btLocator, basePath, locator, fields, resolveParameters, options);
        return result.toPromise();
    }

    /**
     * List all files.
     * @param btLocator 
     * @param basePath 
     * @param locator 
     * @param fields 
     * @param resolveParameters 
     */
    public getFilesListOfBuildType(btLocator: string, basePath?: string, locator?: string, fields?: string, resolveParameters?: boolean, options?: Configuration): Promise<Files> {
        const result = this.api.getFilesListOfBuildType(btLocator, basePath, locator, fields, resolveParameters, options);
        return result.toPromise();
    }

    /**
     * Get a snapshot dependency of the matching build configuration.
     * @param btLocator 
     * @param snapshotDepLocator 
     * @param fields 
     */
    public getSnapshotDependency(btLocator: string, snapshotDepLocator: string, fields?: string, options?: Configuration): Promise<SnapshotDependency> {
        const result = this.api.getSnapshotDependency(btLocator, snapshotDepLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Get a trigger of the matching build configuration.
     * @param btLocator 
     * @param triggerLocator 
     * @param fields 
     */
    public getTrigger(btLocator: string, triggerLocator: string, fields?: string, options?: Configuration): Promise<Trigger> {
        const result = this.api.getTrigger(btLocator, triggerLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Get a parameter of a trigger of the matching build configuration.
     * @param btLocator 
     * @param triggerLocator 
     * @param fieldName 
     */
    public getTriggerParameter(btLocator: string, triggerLocator: string, fieldName: string, options?: Configuration): Promise<string> {
        const result = this.api.getTriggerParameter(btLocator, triggerLocator, fieldName, options);
        return result.toPromise();
    }

    /**
     * Get a VCS root of the matching build configuration.
     * @param btLocator 
     * @param vcsRootLocator 
     * @param fields 
     */
    public getVcsRoot(btLocator: string, vcsRootLocator: string, fields?: string, options?: Configuration): Promise<VcsRootEntry> {
        const result = this.api.getVcsRoot(btLocator, vcsRootLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Get checkout rules of a VCS root of the matching build configuration.
     * @param btLocator 
     * @param vcsRootLocator 
     */
    public getVcsRootCheckoutRules(btLocator: string, vcsRootLocator: string, options?: Configuration): Promise<string> {
        const result = this.api.getVcsRootCheckoutRules(btLocator, vcsRootLocator, options);
        return result.toPromise();
    }

    /**
     * Get all VCS root instances of the matching build configuration.
     * @param btLocator 
     * @param fields 
     */
    public getVcsRootInstancesOfBuildType(btLocator: string, fields?: string, options?: Configuration): Promise<VcsRootInstances> {
        const result = this.api.getVcsRootInstancesOfBuildType(btLocator, fields, options);
        return result.toPromise();
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
    public getZippedFileOfBuildType(path: string, btLocator: string, basePath?: string, locator?: string, name?: string, resolveParameters?: boolean, options?: Configuration): Promise<void> {
        const result = this.api.getZippedFileOfBuildType(path, btLocator, basePath, locator, name, resolveParameters, options);
        return result.toPromise();
    }

    /**
     * Detach all templates from the matching build configuration.
     * @param btLocator 
     * @param inlineSettings 
     */
    public removeAllTemplates(btLocator: string, inlineSettings?: boolean, options?: Configuration): Promise<void> {
        const result = this.api.removeAllTemplates(btLocator, inlineSettings, options);
        return result.toPromise();
    }

    /**
     * Detach a template from the matching build configuration.
     * @param btLocator 
     * @param templateLocator 
     * @param inlineSettings 
     */
    public removeTemplate(btLocator: string, templateLocator: string, inlineSettings?: boolean, options?: Configuration): Promise<void> {
        const result = this.api.removeTemplate(btLocator, templateLocator, inlineSettings, options);
        return result.toPromise();
    }

    /**
     * Update an agent requirement of the matching build configuration.
     * @param btLocator 
     * @param agentRequirementLocator 
     * @param fields 
     * @param body 
     */
    public replaceAgentRequirement(btLocator: string, agentRequirementLocator: string, fields?: string, body?: AgentRequirement, options?: Configuration): Promise<AgentRequirement> {
        const result = this.api.replaceAgentRequirement(btLocator, agentRequirementLocator, fields, body, options);
        return result.toPromise();
    }

    /**
     * Update all agent requirements of the matching build configuration.
     * @param btLocator 
     * @param fields 
     * @param body 
     */
    public replaceAllAgentRequirements(btLocator: string, fields?: string, body?: AgentRequirements, options?: Configuration): Promise<AgentRequirements> {
        const result = this.api.replaceAllAgentRequirements(btLocator, fields, body, options);
        return result.toPromise();
    }

    /**
     * Update all artifact dependencies of the matching build configuration.
     * @param btLocator 
     * @param fields 
     * @param body 
     */
    public replaceAllArtifactDependencies(btLocator: string, fields?: string, body?: ArtifactDependencies, options?: Configuration): Promise<ArtifactDependencies> {
        const result = this.api.replaceAllArtifactDependencies(btLocator, fields, body, options);
        return result.toPromise();
    }

    /**
     * Update all build features of the matching build configuration.
     * @param btLocator 
     * @param fields 
     * @param body 
     */
    public replaceAllBuildFeatures(btLocator: string, fields?: string, body?: Features, options?: Configuration): Promise<Features> {
        const result = this.api.replaceAllBuildFeatures(btLocator, fields, body, options);
        return result.toPromise();
    }

    /**
     * Update all build steps of the matching build configuration.
     * @param btLocator 
     * @param fields 
     * @param body 
     */
    public replaceAllBuildSteps(btLocator: string, fields?: string, body?: Steps, options?: Configuration): Promise<Steps> {
        const result = this.api.replaceAllBuildSteps(btLocator, fields, body, options);
        return result.toPromise();
    }

    /**
     * Update all snapshot dependencies of the matching build configuration.
     * @param btLocator 
     * @param fields 
     * @param body 
     */
    public replaceAllSnapshotDependencies(btLocator: string, fields?: string, body?: SnapshotDependencies, options?: Configuration): Promise<SnapshotDependencies> {
        const result = this.api.replaceAllSnapshotDependencies(btLocator, fields, body, options);
        return result.toPromise();
    }

    /**
     * Update all triggers of the matching build configuration.
     * @param btLocator 
     * @param fields 
     * @param body 
     */
    public replaceAllTriggers(btLocator: string, fields?: string, body?: Triggers, options?: Configuration): Promise<Triggers> {
        const result = this.api.replaceAllTriggers(btLocator, fields, body, options);
        return result.toPromise();
    }

    /**
     * Update all VCS roots of the matching build configuration.
     * @param btLocator 
     * @param fields 
     * @param body 
     */
    public replaceAllVcsRoots(btLocator: string, fields?: string, body?: VcsRootEntries, options?: Configuration): Promise<VcsRootEntries> {
        const result = this.api.replaceAllVcsRoots(btLocator, fields, body, options);
        return result.toPromise();
    }

    /**
     * Update an artifact dependency of the matching build configuration.
     * @param btLocator 
     * @param artifactDepLocator 
     * @param fields 
     * @param body 
     */
    public replaceArtifactDependency(btLocator: string, artifactDepLocator: string, fields?: string, body?: ArtifactDependency, options?: Configuration): Promise<ArtifactDependency> {
        const result = this.api.replaceArtifactDependency(btLocator, artifactDepLocator, fields, body, options);
        return result.toPromise();
    }

    /**
     * Update a build feature of the matching build configuration.
     * @param btLocator 
     * @param featureId 
     * @param fields 
     * @param body 
     */
    public replaceBuildFeature(btLocator: string, featureId: string, fields?: string, body?: Feature, options?: Configuration): Promise<Feature> {
        const result = this.api.replaceBuildFeature(btLocator, featureId, fields, body, options);
        return result.toPromise();
    }

    /**
     * Update a parameter of a build feature of the matching build configuration.
     * @param btLocator 
     * @param featureId 
     * @param fields 
     * @param body 
     */
    public replaceBuildFeatureParameters(btLocator: string, featureId: string, fields?: string, body?: Properties, options?: Configuration): Promise<Properties> {
        const result = this.api.replaceBuildFeatureParameters(btLocator, featureId, fields, body, options);
        return result.toPromise();
    }

    /**
     * Replace a build step of the matching build configuration.
     * @param btLocator 
     * @param stepId 
     * @param fields 
     * @param body 
     */
    public replaceBuildStep(btLocator: string, stepId: string, fields?: string, body?: Step, options?: Configuration): Promise<Step> {
        const result = this.api.replaceBuildStep(btLocator, stepId, fields, body, options);
        return result.toPromise();
    }

    /**
     * Update a snapshot dependency of the matching build configuration.
     * @param btLocator 
     * @param snapshotDepLocator 
     * @param fields 
     * @param body 
     */
    public replaceSnapshotDependency(btLocator: string, snapshotDepLocator: string, fields?: string, body?: SnapshotDependency, options?: Configuration): Promise<SnapshotDependency> {
        const result = this.api.replaceSnapshotDependency(btLocator, snapshotDepLocator, fields, body, options);
        return result.toPromise();
    }

    /**
     * Update a trigger of the matching build configuration.
     * @param btLocator 
     * @param triggerLocator 
     * @param fields 
     * @param body 
     */
    public replaceTrigger(btLocator: string, triggerLocator: string, fields?: string, body?: Trigger, options?: Configuration): Promise<Trigger> {
        const result = this.api.replaceTrigger(btLocator, triggerLocator, fields, body, options);
        return result.toPromise();
    }

    /**
     * Update a parameter of an agent requirement of the matching build configuration.
     * @param btLocator 
     * @param agentRequirementLocator 
     * @param fieldName 
     * @param body 
     */
    public setAgentRequirementParameter(btLocator: string, agentRequirementLocator: string, fieldName: string, body?: string, options?: Configuration): Promise<string> {
        const result = this.api.setAgentRequirementParameter(btLocator, agentRequirementLocator, fieldName, body, options);
        return result.toPromise();
    }

    /**
     * Update a parameter of an artifact dependency of the matching build configuration.
     * @param btLocator 
     * @param artifactDepLocator 
     * @param fieldName 
     * @param body 
     */
    public setArtifactDependencyParameter(btLocator: string, artifactDepLocator: string, fieldName: string, body?: string, options?: Configuration): Promise<string> {
        const result = this.api.setArtifactDependencyParameter(btLocator, artifactDepLocator, fieldName, body, options);
        return result.toPromise();
    }

    /**
     * Update a parameter of a build feature of the matching build configuration.
     * @param btLocator 
     * @param featureId 
     * @param name 
     * @param body 
     */
    public setBuildFeatureParameter(btLocator: string, featureId: string, name: string, body?: string, options?: Configuration): Promise<string> {
        const result = this.api.setBuildFeatureParameter(btLocator, featureId, name, body, options);
        return result.toPromise();
    }

    /**
     * Update a parameter of a build step of the matching build configuration.
     * @param btLocator 
     * @param stepId 
     * @param fieldName 
     * @param body 
     */
    public setBuildStepParameter(btLocator: string, stepId: string, fieldName: string, body?: string, options?: Configuration): Promise<string> {
        const result = this.api.setBuildStepParameter(btLocator, stepId, fieldName, body, options);
        return result.toPromise();
    }

    /**
     * Update a field of the matching build configuration.
     * @param btLocator 
     * @param field 
     * @param body 
     */
    public setBuildTypeField(btLocator: string, field: string, body?: string, options?: Configuration): Promise<string> {
        const result = this.api.setBuildTypeField(btLocator, field, body, options);
        return result.toPromise();
    }

    /**
     * Update all templates of the matching build configuration.
     * @param btLocator 
     * @param optimizeSettings 
     * @param fields 
     * @param body 
     */
    public setBuildTypeTemplates(btLocator: string, optimizeSettings?: boolean, fields?: string, body?: BuildTypes, options?: Configuration): Promise<BuildTypes> {
        const result = this.api.setBuildTypeTemplates(btLocator, optimizeSettings, fields, body, options);
        return result.toPromise();
    }

    /**
     * Update a parameter of a trigger of the matching build configuration.
     * @param btLocator 
     * @param triggerLocator 
     * @param fieldName 
     * @param body 
     */
    public setTriggerParameter(btLocator: string, triggerLocator: string, fieldName: string, body?: string, options?: Configuration): Promise<string> {
        const result = this.api.setTriggerParameter(btLocator, triggerLocator, fieldName, body, options);
        return result.toPromise();
    }

    /**
     * Update build parameter.
     * @param name 
     * @param btLocator 
     * @param fields 
     * @param body 
     */
    public updateBuildParameterOfBuildType(name: string, btLocator: string, fields?: string, body?: Property, options?: Configuration): Promise<Property> {
        const result = this.api.updateBuildParameterOfBuildType(name, btLocator, fields, body, options);
        return result.toPromise();
    }

    /**
     * Update build parameter specification.
     * @param name 
     * @param btLocator 
     * @param body 
     */
    public updateBuildParameterSpecificationOfBuildType(name: string, btLocator: string, body?: string, options?: Configuration): Promise<string> {
        const result = this.api.updateBuildParameterSpecificationOfBuildType(name, btLocator, body, options);
        return result.toPromise();
    }

    /**
     * Update type of build parameter.
     * @param name 
     * @param btLocator 
     * @param body 
     */
    public updateBuildParameterTypeOfBuildType(name: string, btLocator: string, body?: Type, options?: Configuration): Promise<Type> {
        const result = this.api.updateBuildParameterTypeOfBuildType(name, btLocator, body, options);
        return result.toPromise();
    }

    /**
     * Update value of build parameter.
     * @param name 
     * @param btLocator 
     * @param body 
     */
    public updateBuildParameterValueOfBuildType(name: string, btLocator: string, body?: string, options?: Configuration): Promise<string> {
        const result = this.api.updateBuildParameterValueOfBuildType(name, btLocator, body, options);
        return result.toPromise();
    }

    /**
     * Update build parameters.
     * @param btLocator 
     * @param fields 
     * @param body 
     */
    public updateBuildParametersOfBuildType(btLocator: string, fields?: string, body?: Properties, options?: Configuration): Promise<Properties> {
        const result = this.api.updateBuildParametersOfBuildType(btLocator, fields, body, options);
        return result.toPromise();
    }

    /**
     * Update a VCS root of the matching build configuration.
     * @param btLocator 
     * @param vcsRootLocator 
     * @param fields 
     * @param body 
     */
    public updateBuildTypeVcsRoot(btLocator: string, vcsRootLocator: string, fields?: string, body?: VcsRootEntry, options?: Configuration): Promise<VcsRootEntry> {
        const result = this.api.updateBuildTypeVcsRoot(btLocator, vcsRootLocator, fields, body, options);
        return result.toPromise();
    }

    /**
     * Update checkout rules of a VCS root of the matching build configuration.
     * @param btLocator 
     * @param vcsRootLocator 
     * @param body 
     */
    public updateBuildTypeVcsRootCheckoutRules(btLocator: string, vcsRootLocator: string, body?: string, options?: Configuration): Promise<string> {
        const result = this.api.updateBuildTypeVcsRootCheckoutRules(btLocator, vcsRootLocator, body, options);
        return result.toPromise();
    }


}



import { ObservableChangeApi } from './ObservableAPI.ts';

import { ChangeApiRequestFactory, ChangeApiResponseProcessor} from "../apis/ChangeApi.ts";
export class PromiseChangeApi {
    private api: ObservableChangeApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ChangeApiRequestFactory,
        responseProcessor?: ChangeApiResponseProcessor
    ) {
        this.api = new ObservableChangeApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get all changes.
     * @param locator 
     * @param fields 
     */
    public getAllChanges(locator?: string, fields?: string, options?: Configuration): Promise<Changes> {
        const result = this.api.getAllChanges(locator, fields, options);
        return result.toPromise();
    }

    /**
     * Get change matching the locator.
     * @param changeLocator 
     * @param fields 
     */
    public getChange(changeLocator: string, fields?: string, options?: Configuration): Promise<Change> {
        const result = this.api.getChange(changeLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Get attributes of the matching change.
     * @param changeLocator 
     * @param fields 
     */
    public getChangeAttributes(changeLocator: string, fields?: string, options?: Configuration): Promise<Entries> {
        const result = this.api.getChangeAttributes(changeLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Get duplicates of the matching change.
     * @param changeLocator 
     * @param fields 
     */
    public getChangeDuplicates(changeLocator: string, fields?: string, options?: Configuration): Promise<Changes> {
        const result = this.api.getChangeDuplicates(changeLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Get a field of the matching change.
     * @param changeLocator 
     * @param field 
     */
    public getChangeField(changeLocator: string, field: string, options?: Configuration): Promise<string> {
        const result = this.api.getChangeField(changeLocator, field, options);
        return result.toPromise();
    }

    /**
     * Get first builds of the matching change.
     * @param changeLocator 
     * @param fields 
     */
    public getChangeFirstBuilds(changeLocator: string, fields?: string, options?: Configuration): Promise<Builds> {
        const result = this.api.getChangeFirstBuilds(changeLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Get issues of the matching change.
     * @param changeLocator 
     */
    public getChangeIssue(changeLocator: string, options?: Configuration): Promise<Issues> {
        const result = this.api.getChangeIssue(changeLocator, options);
        return result.toPromise();
    }

    /**
     * Get parent changes of the matching change.
     * @param changeLocator 
     * @param fields 
     */
    public getChangeParentChanges(changeLocator: string, fields?: string, options?: Configuration): Promise<Changes> {
        const result = this.api.getChangeParentChanges(changeLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Get parent revisions of the matching change.
     * @param changeLocator 
     */
    public getChangeParentRevisions(changeLocator: string, options?: Configuration): Promise<Items> {
        const result = this.api.getChangeParentRevisions(changeLocator, options);
        return result.toPromise();
    }

    /**
     * Get build configurations related to the matching change.
     * @param changeLocator 
     * @param fields 
     */
    public getChangeRelatedBuildTypes(changeLocator: string, fields?: string, options?: Configuration): Promise<BuildTypes> {
        const result = this.api.getChangeRelatedBuildTypes(changeLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Get a VCS root instance of the matching change.
     * @param changeLocator 
     * @param fields 
     */
    public getChangeVcsRoot(changeLocator: string, fields?: string, options?: Configuration): Promise<VcsRootInstance> {
        const result = this.api.getChangeVcsRoot(changeLocator, fields, options);
        return result.toPromise();
    }


}



import { ObservableCloudInstanceApi } from './ObservableAPI.ts';

import { CloudInstanceApiRequestFactory, CloudInstanceApiResponseProcessor} from "../apis/CloudInstanceApi.ts";
export class PromiseCloudInstanceApi {
    private api: ObservableCloudInstanceApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CloudInstanceApiRequestFactory,
        responseProcessor?: CloudInstanceApiResponseProcessor
    ) {
        this.api = new ObservableCloudInstanceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get all cloud images.
     * @param locator 
     * @param fields 
     */
    public getAllCloudImages(locator?: string, fields?: string, options?: Configuration): Promise<CloudImages> {
        const result = this.api.getAllCloudImages(locator, fields, options);
        return result.toPromise();
    }

    /**
     * Get all cloud instances.
     * @param locator 
     * @param fields 
     */
    public getAllCloudInstances(locator?: string, fields?: string, options?: Configuration): Promise<CloudInstances> {
        const result = this.api.getAllCloudInstances(locator, fields, options);
        return result.toPromise();
    }

    /**
     * Get all cloud profiles.
     * @param locator 
     * @param fields 
     */
    public getAllCloudProfiles(locator?: string, fields?: string, options?: Configuration): Promise<CloudProfiles> {
        const result = this.api.getAllCloudProfiles(locator, fields, options);
        return result.toPromise();
    }

    /**
     * Get cloud image matching the locator.
     * @param imageLocator 
     * @param fields 
     */
    public getCloudImage(imageLocator: string, fields?: string, options?: Configuration): Promise<CloudImage> {
        const result = this.api.getCloudImage(imageLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Get cloud instance matching the locator.
     * @param instanceLocator 
     * @param fields 
     */
    public getCloudInstance(instanceLocator: string, fields?: string, options?: Configuration): Promise<CloudInstance> {
        const result = this.api.getCloudInstance(instanceLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Get cloud profile matching the locator.
     * @param profileLocator 
     * @param fields 
     */
    public getCloudProfile(profileLocator: string, fields?: string, options?: Configuration): Promise<CloudProfile> {
        const result = this.api.getCloudProfile(profileLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Start a new cloud instance.
     * @param fields 
     * @param body 
     */
    public startInstance(fields?: string, body?: CloudInstance, options?: Configuration): Promise<void> {
        const result = this.api.startInstance(fields, body, options);
        return result.toPromise();
    }

    /**
     * Stop cloud instance matching the locator.
     * @param instanceLocator 
     */
    public stopInstance(instanceLocator: string, options?: Configuration): Promise<void> {
        const result = this.api.stopInstance(instanceLocator, options);
        return result.toPromise();
    }


}



import { ObservableGroupApi } from './ObservableAPI.ts';

import { GroupApiRequestFactory, GroupApiResponseProcessor} from "../apis/GroupApi.ts";
export class PromiseGroupApi {
    private api: ObservableGroupApi

    public constructor(
        configuration: Configuration,
        requestFactory?: GroupApiRequestFactory,
        responseProcessor?: GroupApiResponseProcessor
    ) {
        this.api = new ObservableGroupApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add a new user group.
     * @param fields 
     * @param body 
     */
    public addGroup(fields?: string, body?: Group, options?: Configuration): Promise<Group> {
        const result = this.api.addGroup(fields, body, options);
        return result.toPromise();
    }

    /**
     * Add a role with the specific scope to the matching user group.
     * @param groupLocator 
     * @param roleId 
     * @param scope 
     */
    public addRoleAtScopeToGroup(groupLocator: string, roleId: string, scope: string, options?: Configuration): Promise<Role> {
        const result = this.api.addRoleAtScopeToGroup(groupLocator, roleId, scope, options);
        return result.toPromise();
    }

    /**
     * Add a role to the matching user group.
     * @param groupLocator 
     * @param body 
     */
    public addRoleToGroup(groupLocator: string, body?: Role, options?: Configuration): Promise<Role> {
        const result = this.api.addRoleToGroup(groupLocator, body, options);
        return result.toPromise();
    }

    /**
     * Delete user group matching the locator.
     * @param groupLocator 
     */
    public deleteGroup(groupLocator: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteGroup(groupLocator, options);
        return result.toPromise();
    }

    /**
     * Get all user groups.
     * @param fields 
     */
    public getAllGroups(fields?: string, options?: Configuration): Promise<Groups> {
        const result = this.api.getAllGroups(fields, options);
        return result.toPromise();
    }

    /**
     * Get parent groups of the matching user group.
     * @param groupLocator 
     * @param fields 
     */
    public getGroupParentGroups(groupLocator: string, fields?: string, options?: Configuration): Promise<Groups> {
        const result = this.api.getGroupParentGroups(groupLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Get properties of the matching user group.
     * @param groupLocator 
     * @param fields 
     */
    public getGroupProperties(groupLocator: string, fields?: string, options?: Configuration): Promise<Properties> {
        const result = this.api.getGroupProperties(groupLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Get a property of the matching user group.
     * @param groupLocator 
     * @param name 
     */
    public getGroupProperty(groupLocator: string, name: string, options?: Configuration): Promise<string> {
        const result = this.api.getGroupProperty(groupLocator, name, options);
        return result.toPromise();
    }

    /**
     * Get a role with the specific scope of the matching user group.
     * @param groupLocator 
     * @param roleId 
     * @param scope 
     */
    public getGroupRoleAtScope(groupLocator: string, roleId: string, scope: string, options?: Configuration): Promise<Role> {
        const result = this.api.getGroupRoleAtScope(groupLocator, roleId, scope, options);
        return result.toPromise();
    }

    /**
     * Get all roles of the matching user group.
     * @param groupLocator 
     */
    public getGroupRoles(groupLocator: string, options?: Configuration): Promise<Roles> {
        const result = this.api.getGroupRoles(groupLocator, options);
        return result.toPromise();
    }

    /**
     * Get user group matching the locator.
     * @param groupLocator 
     * @param fields 
     */
    public getUserGroupOfGroup(groupLocator: string, fields?: string, options?: Configuration): Promise<Group> {
        const result = this.api.getUserGroupOfGroup(groupLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Remove a property of the matching user group.
     * @param groupLocator 
     * @param name 
     */
    public removeGroupProperty(groupLocator: string, name: string, options?: Configuration): Promise<void> {
        const result = this.api.removeGroupProperty(groupLocator, name, options);
        return result.toPromise();
    }

    /**
     * Remove a role with the specific scope from the matching user group.
     * @param groupLocator 
     * @param roleId 
     * @param scope 
     */
    public removeRoleAtScopeFromGroup(groupLocator: string, roleId: string, scope: string, options?: Configuration): Promise<void> {
        const result = this.api.removeRoleAtScopeFromGroup(groupLocator, roleId, scope, options);
        return result.toPromise();
    }

    /**
     * Update parent groups of the matching user group.
     * @param groupLocator 
     * @param fields 
     * @param body 
     */
    public setGroupParentGroups(groupLocator: string, fields?: string, body?: Groups, options?: Configuration): Promise<Groups> {
        const result = this.api.setGroupParentGroups(groupLocator, fields, body, options);
        return result.toPromise();
    }

    /**
     * Update a property of the matching user group.
     * @param groupLocator 
     * @param name 
     * @param body 
     */
    public setGroupProperty(groupLocator: string, name: string, body?: string, options?: Configuration): Promise<string> {
        const result = this.api.setGroupProperty(groupLocator, name, body, options);
        return result.toPromise();
    }

    /**
     * Update roles of the matching user group.
     * @param groupLocator 
     * @param body 
     */
    public setGroupRoles(groupLocator: string, body?: Roles, options?: Configuration): Promise<Roles> {
        const result = this.api.setGroupRoles(groupLocator, body, options);
        return result.toPromise();
    }


}



import { ObservableInvestigationApi } from './ObservableAPI.ts';

import { InvestigationApiRequestFactory, InvestigationApiResponseProcessor} from "../apis/InvestigationApi.ts";
export class PromiseInvestigationApi {
    private api: ObservableInvestigationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: InvestigationApiRequestFactory,
        responseProcessor?: InvestigationApiResponseProcessor
    ) {
        this.api = new ObservableInvestigationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new investigation.
     * @param fields 
     * @param body 
     */
    public addInvestigation(fields?: string, body?: Investigation, options?: Configuration): Promise<Investigation> {
        const result = this.api.addInvestigation(fields, body, options);
        return result.toPromise();
    }

    /**
     * Create multiple new investigations.
     * @param fields 
     * @param body 
     */
    public addMultipleInvestigations(fields?: string, body?: Investigations, options?: Configuration): Promise<Investigations> {
        const result = this.api.addMultipleInvestigations(fields, body, options);
        return result.toPromise();
    }

    /**
     * Delete investigation matching the locator.
     * @param investigationLocator 
     */
    public deleteInvestigation(investigationLocator: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteInvestigation(investigationLocator, options);
        return result.toPromise();
    }

    /**
     * Get all investigations.
     * @param locator 
     * @param fields 
     */
    public getAllInvestigations(locator?: string, fields?: string, options?: Configuration): Promise<Investigations> {
        const result = this.api.getAllInvestigations(locator, fields, options);
        return result.toPromise();
    }

    /**
     * Get investigation matching the locator.
     * @param investigationLocator 
     * @param fields 
     */
    public getInvestigation(investigationLocator: string, fields?: string, options?: Configuration): Promise<Investigation> {
        const result = this.api.getInvestigation(investigationLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Update investigation matching the locator.
     * @param investigationLocator 
     * @param fields 
     * @param body 
     */
    public replaceInvestigation(investigationLocator: string, fields?: string, body?: Investigation, options?: Configuration): Promise<Investigation> {
        const result = this.api.replaceInvestigation(investigationLocator, fields, body, options);
        return result.toPromise();
    }


}



import { ObservableMuteApi } from './ObservableAPI.ts';

import { MuteApiRequestFactory, MuteApiResponseProcessor} from "../apis/MuteApi.ts";
export class PromiseMuteApi {
    private api: ObservableMuteApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MuteApiRequestFactory,
        responseProcessor?: MuteApiResponseProcessor
    ) {
        this.api = new ObservableMuteApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get all muted tests.
     * @param locator 
     * @param fields 
     */
    public getAllMutedTests(locator?: string, fields?: string, options?: Configuration): Promise<Mutes> {
        const result = this.api.getAllMutedTests(locator, fields, options);
        return result.toPromise();
    }

    /**
     * Get a muted test.
     * @param muteLocator 
     * @param fields 
     */
    public getMutedTest(muteLocator: string, fields?: string, options?: Configuration): Promise<Mute> {
        const result = this.api.getMutedTest(muteLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Mute multiple tests.
     * @param fields 
     * @param body 
     */
    public muteMultipleTests(fields?: string, body?: Mutes, options?: Configuration): Promise<Mutes> {
        const result = this.api.muteMultipleTests(fields, body, options);
        return result.toPromise();
    }

    /**
     * Mute a test.
     * @param fields 
     * @param body 
     */
    public muteTest(fields?: string, body?: Mute, options?: Configuration): Promise<Mute> {
        const result = this.api.muteTest(fields, body, options);
        return result.toPromise();
    }

    /**
     * Unmute the matching test.
     * @param muteLocator 
     * @param body 
     */
    public unmuteTest(muteLocator: string, body?: string, options?: Configuration): Promise<void> {
        const result = this.api.unmuteTest(muteLocator, body, options);
        return result.toPromise();
    }


}



import { ObservableProblemApi } from './ObservableAPI.ts';

import { ProblemApiRequestFactory, ProblemApiResponseProcessor} from "../apis/ProblemApi.ts";
export class PromiseProblemApi {
    private api: ObservableProblemApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ProblemApiRequestFactory,
        responseProcessor?: ProblemApiResponseProcessor
    ) {
        this.api = new ObservableProblemApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get all build problems.
     * @param locator 
     * @param fields 
     */
    public getAllBuildProblems(locator?: string, fields?: string, options?: Configuration): Promise<Problems> {
        const result = this.api.getAllBuildProblems(locator, fields, options);
        return result.toPromise();
    }

    /**
     * Get a matching build problem.
     * @param problemLocator 
     * @param fields 
     */
    public getBuildProblem(problemLocator: string, fields?: string, options?: Configuration): Promise<Problem> {
        const result = this.api.getBuildProblem(problemLocator, fields, options);
        return result.toPromise();
    }


}



import { ObservableProblemOccurrenceApi } from './ObservableAPI.ts';

import { ProblemOccurrenceApiRequestFactory, ProblemOccurrenceApiResponseProcessor} from "../apis/ProblemOccurrenceApi.ts";
export class PromiseProblemOccurrenceApi {
    private api: ObservableProblemOccurrenceApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ProblemOccurrenceApiRequestFactory,
        responseProcessor?: ProblemOccurrenceApiResponseProcessor
    ) {
        this.api = new ObservableProblemOccurrenceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get all build problem occurrences.
     * @param locator 
     * @param fields 
     */
    public getAllBuildProblemOccurrences(locator?: string, fields?: string, options?: Configuration): Promise<ProblemOccurrences> {
        const result = this.api.getAllBuildProblemOccurrences(locator, fields, options);
        return result.toPromise();
    }

    /**
     * Get a matching build problem occurrence.
     * @param problemLocator 
     * @param fields 
     */
    public getBuildProblemOccurrence(problemLocator: string, fields?: string, options?: Configuration): Promise<ProblemOccurrence> {
        const result = this.api.getBuildProblemOccurrence(problemLocator, fields, options);
        return result.toPromise();
    }


}



import { ObservableProjectApi } from './ObservableAPI.ts';

import { ProjectApiRequestFactory, ProjectApiResponseProcessor} from "../apis/ProjectApi.ts";
export class PromiseProjectApi {
    private api: ObservableProjectApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ProjectApiRequestFactory,
        responseProcessor?: ProjectApiResponseProcessor
    ) {
        this.api = new ObservableProjectApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Assign the matching project to the agent pool.
     * @param projectLocator 
     * @param body 
     */
    public addAgentPoolsProject(projectLocator: string, body?: AgentPool, options?: Configuration): Promise<AgentPool> {
        const result = this.api.addAgentPoolsProject(projectLocator, body, options);
        return result.toPromise();
    }

    /**
     * Add a build configuration to the matching project.
     * @param projectLocator 
     * @param fields 
     * @param body 
     */
    public addBuildType(projectLocator: string, fields?: string, body?: NewBuildTypeDescription, options?: Configuration): Promise<BuildType> {
        const result = this.api.addBuildType(projectLocator, fields, body, options);
        return result.toPromise();
    }

    /**
     * Add a feature.
     * @param projectLocator 
     * @param fields 
     * @param body 
     */
    public addFeature(projectLocator: string, fields?: string, body?: ProjectFeature, options?: Configuration): Promise<any> {
        const result = this.api.addFeature(projectLocator, fields, body, options);
        return result.toPromise();
    }

    /**
     * Create a new project.
     * @param body 
     */
    public addProject(body?: NewProjectDescription, options?: Configuration): Promise<Project> {
        const result = this.api.addProject(body, options);
        return result.toPromise();
    }

    /**
     * Create a new secure token for the matching project.
     * @param projectLocator 
     * @param body 
     */
    public addSecureToken(projectLocator: string, body?: string, options?: Configuration): Promise<string> {
        const result = this.api.addSecureToken(projectLocator, body, options);
        return result.toPromise();
    }

    /**
     * Add a build configuration template to the matching project.
     * @param projectLocator 
     * @param fields 
     * @param body 
     */
    public addTemplate(projectLocator: string, fields?: string, body?: NewBuildTypeDescription, options?: Configuration): Promise<BuildType> {
        const result = this.api.addTemplate(projectLocator, fields, body, options);
        return result.toPromise();
    }

    /**
     * Create a build parameter.
     * @param projectLocator 
     * @param fields 
     * @param body 
     */
    public createBuildParameter(projectLocator: string, fields?: string, body?: Property, options?: Configuration): Promise<Property> {
        const result = this.api.createBuildParameter(projectLocator, fields, body, options);
        return result.toPromise();
    }

    /**
     * Delete build parameter.
     * @param name 
     * @param projectLocator 
     */
    public deleteBuildParameter(name: string, projectLocator: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteBuildParameter(name, projectLocator, options);
        return result.toPromise();
    }

    /**
     * Delete all build parameters.
     * @param projectLocator 
     */
    public deleteBuildParameters(projectLocator: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteBuildParameters(projectLocator, options);
        return result.toPromise();
    }

    /**
     * Delete a matching feature.
     * @param featureLocator 
     * @param projectLocator 
     */
    public deleteFeature(featureLocator: string, projectLocator: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteFeature(featureLocator, projectLocator, options);
        return result.toPromise();
    }

    /**
     * Delete project matching the locator.
     * @param projectLocator 
     */
    public deleteProject(projectLocator: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteProject(projectLocator, options);
        return result.toPromise();
    }

    /**
     * Get agent pools appointed to the matching project.
     * @param projectLocator 
     * @param fields 
     */
    public getAgentPoolsProject(projectLocator: string, fields?: string, options?: Configuration): Promise<AgentPools> {
        const result = this.api.getAgentPoolsProject(projectLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Get all branches of the matching project.
     * @param projectLocator 
     * @param locator 
     * @param fields 
     */
    public getAllBranches(projectLocator: string, locator?: string, fields?: string, options?: Configuration): Promise<Branches> {
        const result = this.api.getAllBranches(projectLocator, locator, fields, options);
        return result.toPromise();
    }

    /**
     * Get all projects.
     * @param locator 
     * @param fields 
     */
    public getAllProjects(locator?: string, fields?: string, options?: Configuration): Promise<Projects> {
        const result = this.api.getAllProjects(locator, fields, options);
        return result.toPromise();
    }

    /**
     * Get all subprojects ordered of the matching project.
     * @param projectLocator 
     * @param field 
     */
    public getAllSubprojectsOrdered(projectLocator: string, field?: string, options?: Configuration): Promise<Projects> {
        const result = this.api.getAllSubprojectsOrdered(projectLocator, field, options);
        return result.toPromise();
    }

    /**
     * Get build parameter.
     * @param name 
     * @param projectLocator 
     * @param fields 
     */
    public getBuildParameter(name: string, projectLocator: string, fields?: string, options?: Configuration): Promise<Property> {
        const result = this.api.getBuildParameter(name, projectLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Get build parameter specification.
     * @param name 
     * @param projectLocator 
     */
    public getBuildParameterSpecification(name: string, projectLocator: string, options?: Configuration): Promise<string> {
        const result = this.api.getBuildParameterSpecification(name, projectLocator, options);
        return result.toPromise();
    }

    /**
     * Get type of build parameter.
     * @param name 
     * @param projectLocator 
     */
    public getBuildParameterType(name: string, projectLocator: string, options?: Configuration): Promise<Type> {
        const result = this.api.getBuildParameterType(name, projectLocator, options);
        return result.toPromise();
    }

    /**
     * Get value of build parameter.
     * @param name 
     * @param projectLocator 
     */
    public getBuildParameterValue(name: string, projectLocator: string, options?: Configuration): Promise<string> {
        const result = this.api.getBuildParameterValue(name, projectLocator, options);
        return result.toPromise();
    }

    /**
     * Get build parameters.
     * @param projectLocator 
     * @param locator 
     * @param fields 
     */
    public getBuildParameters(projectLocator: string, locator?: string, fields?: string, options?: Configuration): Promise<Properties> {
        const result = this.api.getBuildParameters(projectLocator, locator, fields, options);
        return result.toPromise();
    }

    /**
     * Get the default template of the matching project.
     * @param projectLocator 
     * @param fields 
     */
    public getDefaultTemplate(projectLocator: string, fields?: string, options?: Configuration): Promise<BuildType> {
        const result = this.api.getDefaultTemplate(projectLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Get a matching feature.
     * @param featureLocator 
     * @param projectLocator 
     * @param fields 
     */
    public getFeature(featureLocator: string, projectLocator: string, fields?: string, options?: Configuration): Promise<any> {
        const result = this.api.getFeature(featureLocator, projectLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Get all features.
     * @param projectLocator 
     * @param locator 
     * @param fields 
     */
    public getFeatures(projectLocator: string, locator?: string, fields?: string, options?: Configuration): Promise<any> {
        const result = this.api.getFeatures(projectLocator, locator, fields, options);
        return result.toPromise();
    }

    /**
     * Get project matching the locator.
     * @param projectLocator 
     * @param fields 
     */
    public getProject(projectLocator: string, fields?: string, options?: Configuration): Promise<Project> {
        const result = this.api.getProject(projectLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Get a field of the matching project.
     * @param projectLocator 
     * @param field 
     */
    public getProjectField(projectLocator: string, field: string, options?: Configuration): Promise<string> {
        const result = this.api.getProjectField(projectLocator, field, options);
        return result.toPromise();
    }

    /**
     * Get the parent project of the matching project.
     * @param projectLocator 
     * @param fields 
     */
    public getProjectParentProject(projectLocator: string, fields?: string, options?: Configuration): Promise<Project> {
        const result = this.api.getProjectParentProject(projectLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Get the settings file of the matching build configuration.
     * @param projectLocator 
     */
    public getProjectSettingsFile(projectLocator: string, options?: Configuration): Promise<string> {
        const result = this.api.getProjectSettingsFile(projectLocator, options);
        return result.toPromise();
    }

    /**
     * Get all templates of the matching project.
     * @param projectLocator 
     * @param fields 
     */
    public getProjectTemplates(projectLocator: string, fields?: string, options?: Configuration): Promise<BuildTypes> {
        const result = this.api.getProjectTemplates(projectLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Get a secure token of the matching project.
     * @param projectLocator 
     * @param token 
     */
    public getSecureValue(projectLocator: string, token: string, options?: Configuration): Promise<string> {
        const result = this.api.getSecureValue(projectLocator, token, options);
        return result.toPromise();
    }

    /**
     * Remove the default template from the matching project.
     * @param projectLocator 
     * @param fields 
     */
    public removeDefaultTemplate(projectLocator: string, fields?: string, options?: Configuration): Promise<void> {
        const result = this.api.removeDefaultTemplate(projectLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Unassign a project from the matching agent pool.
     * @param projectLocator 
     * @param agentPoolLocator 
     */
    public removeProjectFromAgentPool(projectLocator: string, agentPoolLocator: string, options?: Configuration): Promise<void> {
        const result = this.api.removeProjectFromAgentPool(projectLocator, agentPoolLocator, options);
        return result.toPromise();
    }

    /**
     * Update agent pools apppointed to the matching project.
     * @param projectLocator 
     * @param fields 
     * @param body 
     */
    public setAgentPoolsProject(projectLocator: string, fields?: string, body?: AgentPools, options?: Configuration): Promise<AgentPools> {
        const result = this.api.setAgentPoolsProject(projectLocator, fields, body, options);
        return result.toPromise();
    }

    /**
     * Update all build configurations order of the matching project.
     * @param projectLocator 
     * @param field 
     * @param body 
     */
    public setBuildTypesOrder(projectLocator: string, field?: string, body?: BuildTypes, options?: Configuration): Promise<BuildTypes> {
        const result = this.api.setBuildTypesOrder(projectLocator, field, body, options);
        return result.toPromise();
    }

    /**
     * Update the default template of the matching project.
     * @param projectLocator 
     * @param fields 
     * @param body 
     */
    public setDefaultTemplate(projectLocator: string, fields?: string, body?: BuildType, options?: Configuration): Promise<BuildType> {
        const result = this.api.setDefaultTemplate(projectLocator, fields, body, options);
        return result.toPromise();
    }

    /**
     * Update the parent project of the matching project.
     * @param projectLocator 
     * @param fields 
     * @param body 
     */
    public setParentProject(projectLocator: string, fields?: string, body?: Project, options?: Configuration): Promise<Project> {
        const result = this.api.setParentProject(projectLocator, fields, body, options);
        return result.toPromise();
    }

    /**
     * Update a field of the matching project.
     * @param projectLocator 
     * @param field 
     * @param body 
     */
    public setProjectField(projectLocator: string, field: string, body?: string, options?: Configuration): Promise<string> {
        const result = this.api.setProjectField(projectLocator, field, body, options);
        return result.toPromise();
    }

    /**
     * Update all subprojects order of the matching project.
     * @param projectLocator 
     * @param field 
     * @param body 
     */
    public setSubprojectsOrder(projectLocator: string, field?: string, body?: Projects, options?: Configuration): Promise<Projects> {
        const result = this.api.setSubprojectsOrder(projectLocator, field, body, options);
        return result.toPromise();
    }

    /**
     * Update build parameter.
     * @param name 
     * @param projectLocator 
     * @param fields 
     * @param body 
     */
    public updateBuildParameter(name: string, projectLocator: string, fields?: string, body?: Property, options?: Configuration): Promise<Property> {
        const result = this.api.updateBuildParameter(name, projectLocator, fields, body, options);
        return result.toPromise();
    }

    /**
     * Update build parameter specification.
     * @param name 
     * @param projectLocator 
     * @param body 
     */
    public updateBuildParameterSpecification(name: string, projectLocator: string, body?: string, options?: Configuration): Promise<string> {
        const result = this.api.updateBuildParameterSpecification(name, projectLocator, body, options);
        return result.toPromise();
    }

    /**
     * Update type of build parameter.
     * @param name 
     * @param projectLocator 
     * @param body 
     */
    public updateBuildParameterType(name: string, projectLocator: string, body?: Type, options?: Configuration): Promise<Type> {
        const result = this.api.updateBuildParameterType(name, projectLocator, body, options);
        return result.toPromise();
    }

    /**
     * Update value of build parameter.
     * @param name 
     * @param projectLocator 
     * @param body 
     */
    public updateBuildParameterValue(name: string, projectLocator: string, body?: string, options?: Configuration): Promise<string> {
        const result = this.api.updateBuildParameterValue(name, projectLocator, body, options);
        return result.toPromise();
    }

    /**
     * Update build parameters.
     * @param projectLocator 
     * @param fields 
     * @param body 
     */
    public updateBuildParameters(projectLocator: string, fields?: string, body?: Properties, options?: Configuration): Promise<Properties> {
        const result = this.api.updateBuildParameters(projectLocator, fields, body, options);
        return result.toPromise();
    }

    /**
     * Update a matching feature.
     * @param featureLocator 
     * @param projectLocator 
     * @param fields 
     * @param body 
     */
    public updateFeature(featureLocator: string, projectLocator: string, fields?: string, body?: ProjectFeature, options?: Configuration): Promise<any> {
        const result = this.api.updateFeature(featureLocator, projectLocator, fields, body, options);
        return result.toPromise();
    }

    /**
     * Update all features.
     * @param projectLocator 
     * @param fields 
     * @param body 
     */
    public updateFeatures(projectLocator: string, fields?: string, body?: ProjectFeatures, options?: Configuration): Promise<any> {
        const result = this.api.updateFeatures(projectLocator, fields, body, options);
        return result.toPromise();
    }


}



import { ObservableRootApi } from './ObservableAPI.ts';

import { RootApiRequestFactory, RootApiResponseProcessor} from "../apis/RootApi.ts";
export class PromiseRootApi {
    private api: ObservableRootApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RootApiRequestFactory,
        responseProcessor?: RootApiResponseProcessor
    ) {
        this.api = new ObservableRootApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get the API version.
     */
    public getApiVersion(options?: Configuration): Promise<string> {
        const result = this.api.getApiVersion(options);
        return result.toPromise();
    }

    /**
     * Get the plugin info.
     * @param fields 
     */
    public getPluginInfo(fields?: string, options?: Configuration): Promise<Plugin> {
        const result = this.api.getPluginInfo(fields, options);
        return result.toPromise();
    }

    /**
     * Get root endpoints.
     */
    public getRootEndpointsOfRoot(options?: Configuration): Promise<string> {
        const result = this.api.getRootEndpointsOfRoot(options);
        return result.toPromise();
    }

    /**
     * Get the TeamCity server version.
     */
    public getVersion(options?: Configuration): Promise<string> {
        const result = this.api.getVersion(options);
        return result.toPromise();
    }


}



import { ObservableServerApi } from './ObservableAPI.ts';

import { ServerApiRequestFactory, ServerApiResponseProcessor} from "../apis/ServerApi.ts";
export class PromiseServerApi {
    private api: ObservableServerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ServerApiRequestFactory,
        responseProcessor?: ServerApiResponseProcessor
    ) {
        this.api = new ObservableServerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add license keys.
     * @param fields 
     * @param body 
     */
    public addLicenseKeys(fields?: string, body?: string, options?: Configuration): Promise<LicenseKeys> {
        const result = this.api.addLicenseKeys(fields, body, options);
        return result.toPromise();
    }

    /**
     * Delete a license key.
     * @param licenseKey 
     */
    public deleteLicenseKey(licenseKey: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteLicenseKey(licenseKey, options);
        return result.toPromise();
    }

    /**
     * Download specific file.
     * @param path 
     * @param areaId 
     */
    public downloadFileOfServer(path: string, areaId: string, options?: Configuration): Promise<void> {
        const result = this.api.downloadFileOfServer(path, areaId, options);
        return result.toPromise();
    }

    /**
     * Get metrics.
     * @param fields 
     */
    public getAllMetrics(fields?: string, options?: Configuration): Promise<Metrics> {
        const result = this.api.getAllMetrics(fields, options);
        return result.toPromise();
    }

    /**
     * Get all plugins.
     * @param fields 
     */
    public getAllPlugins(fields?: string, options?: Configuration): Promise<Plugins> {
        const result = this.api.getAllPlugins(fields, options);
        return result.toPromise();
    }

    /**
     * Get the latest backup status.
     */
    public getBackupStatus(options?: Configuration): Promise<string> {
        const result = this.api.getBackupStatus(options);
        return result.toPromise();
    }

    /**
     * Get metadata of specific file.
     * @param path 
     * @param areaId 
     * @param fields 
     */
    public getFileMetadataOfServer(path: string, areaId: string, fields?: string, options?: Configuration): Promise<any> {
        const result = this.api.getFileMetadataOfServer(path, areaId, fields, options);
        return result.toPromise();
    }

    /**
     * List files under this path.
     * @param path 
     * @param areaId 
     * @param basePath 
     * @param locator 
     * @param fields 
     */
    public getFilesListForSubpathOfServer(path: string, areaId: string, basePath?: string, locator?: string, fields?: string, options?: Configuration): Promise<Files> {
        const result = this.api.getFilesListForSubpathOfServer(path, areaId, basePath, locator, fields, options);
        return result.toPromise();
    }

    /**
     * List all files.
     * @param areaId 
     * @param basePath 
     * @param locator 
     * @param fields 
     */
    public getFilesListOfServer(areaId: string, basePath?: string, locator?: string, fields?: string, options?: Configuration): Promise<Files> {
        const result = this.api.getFilesListOfServer(areaId, basePath, locator, fields, options);
        return result.toPromise();
    }

    /**
     * Get a license key.
     * @param licenseKey 
     * @param fields 
     */
    public getLicenseKey(licenseKey: string, fields?: string, options?: Configuration): Promise<LicenseKey> {
        const result = this.api.getLicenseKey(licenseKey, fields, options);
        return result.toPromise();
    }

    /**
     * Get all license keys.
     * @param fields 
     */
    public getLicenseKeys(fields?: string, options?: Configuration): Promise<LicenseKeys> {
        const result = this.api.getLicenseKeys(fields, options);
        return result.toPromise();
    }

    /**
     * Get the licensing data.
     * @param fields 
     */
    public getLicensingData(fields?: string, options?: Configuration): Promise<LicensingData> {
        const result = this.api.getLicensingData(fields, options);
        return result.toPromise();
    }

    /**
     * Get a field of the server info.
     * @param field 
     */
    public getServerField(field: string, options?: Configuration): Promise<string> {
        const result = this.api.getServerField(field, options);
        return result.toPromise();
    }

    /**
     * Get the server info.
     * @param fields 
     */
    public getServerInfo(fields?: string, options?: Configuration): Promise<Server> {
        const result = this.api.getServerInfo(fields, options);
        return result.toPromise();
    }

    /**
     * Get specific file zipped.
     * @param path 
     * @param areaId 
     * @param basePath 
     * @param locator 
     * @param name 
     */
    public getZippedFileOfServer(path: string, areaId: string, basePath?: string, locator?: string, name?: string, options?: Configuration): Promise<void> {
        const result = this.api.getZippedFileOfServer(path, areaId, basePath, locator, name, options);
        return result.toPromise();
    }

    /**
     * Start a new backup.
     * @param fileName 
     * @param addTimestamp 
     * @param includeConfigs 
     * @param includeDatabase 
     * @param includeBuildLogs 
     * @param includePersonalChanges 
     * @param includeRunningBuilds 
     * @param includeSupplimentaryData 
     */
    public startBackup(fileName?: string, addTimestamp?: boolean, includeConfigs?: boolean, includeDatabase?: boolean, includeBuildLogs?: boolean, includePersonalChanges?: boolean, includeRunningBuilds?: boolean, includeSupplimentaryData?: boolean, options?: Configuration): Promise<string> {
        const result = this.api.startBackup(fileName, addTimestamp, includeConfigs, includeDatabase, includeBuildLogs, includePersonalChanges, includeRunningBuilds, includeSupplimentaryData, options);
        return result.toPromise();
    }


}



import { ObservableTestApi } from './ObservableAPI.ts';

import { TestApiRequestFactory, TestApiResponseProcessor} from "../apis/TestApi.ts";
export class PromiseTestApi {
    private api: ObservableTestApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TestApiRequestFactory,
        responseProcessor?: TestApiResponseProcessor
    ) {
        this.api = new ObservableTestApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get a matching test.
     * @param testLocator 
     * @param fields 
     */
    public getTest(testLocator: string, fields?: string, options?: Configuration): Promise<Test> {
        const result = this.api.getTest(testLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Get all tests.
     * @param locator 
     * @param fields 
     */
    public getTests(locator?: string, fields?: string, options?: Configuration): Promise<Tests> {
        const result = this.api.getTests(locator, fields, options);
        return result.toPromise();
    }


}



import { ObservableTestOccurrenceApi } from './ObservableAPI.ts';

import { TestOccurrenceApiRequestFactory, TestOccurrenceApiResponseProcessor} from "../apis/TestOccurrenceApi.ts";
export class PromiseTestOccurrenceApi {
    private api: ObservableTestOccurrenceApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TestOccurrenceApiRequestFactory,
        responseProcessor?: TestOccurrenceApiResponseProcessor
    ) {
        this.api = new ObservableTestOccurrenceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get all test occurrences.
     * @param locator 
     * @param fields 
     */
    public getAllTestOccurrences(locator?: string, fields?: string, options?: Configuration): Promise<TestOccurrences> {
        const result = this.api.getAllTestOccurrences(locator, fields, options);
        return result.toPromise();
    }

    /**
     * Get a matching test occurrence.
     * @param testLocator 
     * @param fields 
     */
    public getTestOccurrence(testLocator: string, fields?: string, options?: Configuration): Promise<TestOccurrence> {
        const result = this.api.getTestOccurrence(testLocator, fields, options);
        return result.toPromise();
    }


}



import { ObservableUserApi } from './ObservableAPI.ts';

import { UserApiRequestFactory, UserApiResponseProcessor} from "../apis/UserApi.ts";
export class PromiseUserApi {
    private api: ObservableUserApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UserApiRequestFactory,
        responseProcessor?: UserApiResponseProcessor
    ) {
        this.api = new ObservableUserApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add a role to the matching user.
     * @param userLocator 
     * @param body 
     */
    public addRoleToUser(userLocator: string, body?: Role, options?: Configuration): Promise<Role> {
        const result = this.api.addRoleToUser(userLocator, body, options);
        return result.toPromise();
    }

    /**
     * Add a role with the specific scope to the matching user.
     * @param userLocator 
     * @param roleId 
     * @param scope 
     */
    public addRoleToUserAtScope(userLocator: string, roleId: string, scope: string, options?: Configuration): Promise<Role> {
        const result = this.api.addRoleToUserAtScope(userLocator, roleId, scope, options);
        return result.toPromise();
    }

    /**
     * Create a new user.
     * @param fields 
     * @param body 
     */
    public addUser(fields?: string, body?: User, options?: Configuration): Promise<User> {
        const result = this.api.addUser(fields, body, options);
        return result.toPromise();
    }

    /**
     * Create a new authentication token for the matching user.
     * @param userLocator 
     * @param fields 
     * @param body 
     */
    public addUserToken(userLocator: string, fields?: string, body?: Token, options?: Configuration): Promise<Token> {
        const result = this.api.addUserToken(userLocator, fields, body, options);
        return result.toPromise();
    }

    /**
     * Delete user matching the locator.
     * @param userLocator 
     */
    public deleteUser(userLocator: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteUser(userLocator, options);
        return result.toPromise();
    }

    /**
     * Remove a property of the matching user.
     * @param userLocator 
     * @param field 
     */
    public deleteUserField(userLocator: string, field: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteUserField(userLocator, field, options);
        return result.toPromise();
    }

    /**
     * Remove an authentication token from the matching user.
     * @param userLocator 
     * @param name 
     */
    public deleteUserToken(userLocator: string, name: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteUserToken(userLocator, name, options);
        return result.toPromise();
    }

    /**
     * Get a field of the matching user.
     * @param userLocator 
     * @param field 
     */
    public gerUserField(userLocator: string, field: string, options?: Configuration): Promise<string> {
        const result = this.api.gerUserField(userLocator, field, options);
        return result.toPromise();
    }

    /**
     * Get all groups of the matching user.
     * @param userLocator 
     * @param fields 
     */
    public getAllUserGroups(userLocator: string, fields?: string, options?: Configuration): Promise<Groups> {
        const result = this.api.getAllUserGroups(userLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Get all user roles of the matching user.
     * @param userLocator 
     */
    public getAllUserRoles(userLocator: string, options?: Configuration): Promise<Roles> {
        const result = this.api.getAllUserRoles(userLocator, options);
        return result.toPromise();
    }

    /**
     * Get all users.
     * @param locator 
     * @param fields 
     */
    public getAllUsers(locator?: string, fields?: string, options?: Configuration): Promise<Users> {
        const result = this.api.getAllUsers(locator, fields, options);
        return result.toPromise();
    }

    /**
     * Get user matching the locator.
     * @param userLocator 
     * @param fields 
     */
    public getUser(userLocator: string, fields?: string, options?: Configuration): Promise<User> {
        const result = this.api.getUser(userLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Get a user group of the matching user.
     * @param userLocator 
     * @param groupLocator 
     * @param fields 
     */
    public getUserGroup(userLocator: string, groupLocator: string, fields?: string, options?: Configuration): Promise<Group> {
        const result = this.api.getUserGroup(userLocator, groupLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Get all permissions effective for the matching user.
     * @param userLocator 
     * @param locator 
     * @param fields 
     */
    public getUserPermissions(userLocator: string, locator?: string, fields?: string, options?: Configuration): Promise<PermissionAssignments> {
        const result = this.api.getUserPermissions(userLocator, locator, fields, options);
        return result.toPromise();
    }

    /**
     * Get all properties of the matching user.
     * @param userLocator 
     * @param fields 
     */
    public getUserProperties(userLocator: string, fields?: string, options?: Configuration): Promise<Properties> {
        const result = this.api.getUserProperties(userLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Get a property of the matching user.
     * @param userLocator 
     * @param name 
     */
    public getUserProperty(userLocator: string, name: string, options?: Configuration): Promise<string> {
        const result = this.api.getUserProperty(userLocator, name, options);
        return result.toPromise();
    }

    /**
     * Get a user role with the specific scope from the matching user.
     * @param userLocator 
     * @param roleId 
     * @param scope 
     */
    public getUserRolesAtScope(userLocator: string, roleId: string, scope: string, options?: Configuration): Promise<Role> {
        const result = this.api.getUserRolesAtScope(userLocator, roleId, scope, options);
        return result.toPromise();
    }

    /**
     * Get all authentication tokens of the matching user.
     * @param userLocator 
     * @param fields 
     */
    public getUserTokens(userLocator: string, fields?: string, options?: Configuration): Promise<Tokens> {
        const result = this.api.getUserTokens(userLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Remove the matching user from the specific group.
     * @param userLocator 
     * @param groupLocator 
     * @param fields 
     */
    public removeUserFromGroup(userLocator: string, groupLocator: string, fields?: string, options?: Configuration): Promise<void> {
        const result = this.api.removeUserFromGroup(userLocator, groupLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Remove a property of the matching user.
     * @param userLocator 
     * @param name 
     */
    public removeUserProperty(userLocator: string, name: string, options?: Configuration): Promise<void> {
        const result = this.api.removeUserProperty(userLocator, name, options);
        return result.toPromise();
    }

    /**
     * Remove the RememberMe data of the matching user.
     * @param userLocator 
     */
    public removeUserRememberMe(userLocator: string, options?: Configuration): Promise<void> {
        const result = this.api.removeUserRememberMe(userLocator, options);
        return result.toPromise();
    }

    /**
     * Remove a role with the specific scope from the matching user.
     * @param userLocator 
     * @param roleId 
     * @param scope 
     */
    public removeUserRoleAtScope(userLocator: string, roleId: string, scope: string, options?: Configuration): Promise<void> {
        const result = this.api.removeUserRoleAtScope(userLocator, roleId, scope, options);
        return result.toPromise();
    }

    /**
     * Update user matching the locator.
     * @param userLocator 
     * @param fields 
     * @param body 
     */
    public replaceUser(userLocator: string, fields?: string, body?: User, options?: Configuration): Promise<User> {
        const result = this.api.replaceUser(userLocator, fields, body, options);
        return result.toPromise();
    }

    /**
     * Update a field of the matching user.
     * @param userLocator 
     * @param field 
     * @param body 
     */
    public setUserField(userLocator: string, field: string, body?: string, options?: Configuration): Promise<string> {
        const result = this.api.setUserField(userLocator, field, body, options);
        return result.toPromise();
    }

    /**
     * Update groups of the matching user.
     * @param userLocator 
     * @param fields 
     * @param body 
     */
    public setUserGroups(userLocator: string, fields?: string, body?: Groups, options?: Configuration): Promise<Groups> {
        const result = this.api.setUserGroups(userLocator, fields, body, options);
        return result.toPromise();
    }

    /**
     * Update a property of the matching user.
     * @param userLocator 
     * @param name 
     * @param body 
     */
    public setUserProperty(userLocator: string, name: string, body?: string, options?: Configuration): Promise<string> {
        const result = this.api.setUserProperty(userLocator, name, body, options);
        return result.toPromise();
    }

    /**
     * Update user roles of the matching user.
     * @param userLocator 
     * @param body 
     */
    public setUserRoles(userLocator: string, body?: Roles, options?: Configuration): Promise<Roles> {
        const result = this.api.setUserRoles(userLocator, body, options);
        return result.toPromise();
    }


}



import { ObservableVcsRootApi } from './ObservableAPI.ts';

import { VcsRootApiRequestFactory, VcsRootApiResponseProcessor} from "../apis/VcsRootApi.ts";
export class PromiseVcsRootApi {
    private api: ObservableVcsRootApi

    public constructor(
        configuration: Configuration,
        requestFactory?: VcsRootApiRequestFactory,
        responseProcessor?: VcsRootApiResponseProcessor
    ) {
        this.api = new ObservableVcsRootApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add a new VCS root.
     * @param fields 
     * @param body 
     */
    public addVcsRoot(fields?: string, body?: VcsRoot, options?: Configuration): Promise<VcsRoot> {
        const result = this.api.addVcsRoot(fields, body, options);
        return result.toPromise();
    }

    /**
     * Delete all properties of the matching VCS root.
     * @param vcsRootLocator 
     */
    public deleteAllVcsRootProperties(vcsRootLocator: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteAllVcsRootProperties(vcsRootLocator, options);
        return result.toPromise();
    }

    /**
     * Remove VCS root matching the locator.
     * @param vcsRootLocator 
     */
    public deleteVcsRoot(vcsRootLocator: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteVcsRoot(vcsRootLocator, options);
        return result.toPromise();
    }

    /**
     * Delete a property of the matching VCS root.
     * @param vcsRootLocator 
     * @param name 
     */
    public deleteVcsRootProperty(vcsRootLocator: string, name: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteVcsRootProperty(vcsRootLocator, name, options);
        return result.toPromise();
    }

    /**
     * Get all properties of the matching VCS root.
     * @param vcsRootLocator 
     * @param fields 
     */
    public getAllVcsRootProperties(vcsRootLocator: string, fields?: string, options?: Configuration): Promise<Properties> {
        const result = this.api.getAllVcsRootProperties(vcsRootLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Get all VCS roots.
     * @param locator 
     * @param fields 
     */
    public getAllVcsRoots(locator?: string, fields?: string, options?: Configuration): Promise<VcsRoots> {
        const result = this.api.getAllVcsRoots(locator, fields, options);
        return result.toPromise();
    }

    /**
     * Get root endpoints.
     * @param vcsRootLocator 
     * @param fields 
     */
    public getRootEndpoints(vcsRootLocator: string, fields?: string, options?: Configuration): Promise<VcsRoot> {
        const result = this.api.getRootEndpoints(vcsRootLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Get a field of the matching VCS root.
     * @param vcsRootLocator 
     * @param field 
     */
    public getVcsRootField(vcsRootLocator: string, field: string, options?: Configuration): Promise<string> {
        const result = this.api.getVcsRootField(vcsRootLocator, field, options);
        return result.toPromise();
    }

    /**
     * Get all VCS root instances of the matching VCS root.
     * @param vcsRootLocator 
     * @param fields 
     */
    public getVcsRootInstances(vcsRootLocator: string, fields?: string, options?: Configuration): Promise<VcsRootInstances> {
        const result = this.api.getVcsRootInstances(vcsRootLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Get a property on the matching VCS root.
     * @param vcsRootLocator 
     * @param name 
     */
    public getVcsRootProperty(vcsRootLocator: string, name: string, options?: Configuration): Promise<string> {
        const result = this.api.getVcsRootProperty(vcsRootLocator, name, options);
        return result.toPromise();
    }

    /**
     * Get the settings file of the matching VCS root.
     * @param vcsRootLocator 
     */
    public getVcsRootSettingsFile(vcsRootLocator: string, options?: Configuration): Promise<string> {
        const result = this.api.getVcsRootSettingsFile(vcsRootLocator, options);
        return result.toPromise();
    }

    /**
     * Update a field of the matching VCS root.
     * @param vcsRootLocator 
     * @param field 
     * @param body 
     */
    public setVcsRootField(vcsRootLocator: string, field: string, body?: string, options?: Configuration): Promise<string> {
        const result = this.api.setVcsRootField(vcsRootLocator, field, body, options);
        return result.toPromise();
    }

    /**
     * Update all properties of the matching VCS root.
     * @param vcsRootLocator 
     * @param fields 
     * @param body 
     */
    public setVcsRootProperties(vcsRootLocator: string, fields?: string, body?: Properties, options?: Configuration): Promise<Properties> {
        const result = this.api.setVcsRootProperties(vcsRootLocator, fields, body, options);
        return result.toPromise();
    }

    /**
     * Update a property of the matching VCS root.
     * @param vcsRootLocator 
     * @param name 
     * @param body 
     */
    public setVcsRootProperty(vcsRootLocator: string, name: string, body?: string, options?: Configuration): Promise<string> {
        const result = this.api.setVcsRootProperty(vcsRootLocator, name, body, options);
        return result.toPromise();
    }


}



import { ObservableVcsRootInstanceApi } from './ObservableAPI.ts';

import { VcsRootInstanceApiRequestFactory, VcsRootInstanceApiResponseProcessor} from "../apis/VcsRootInstanceApi.ts";
export class PromiseVcsRootInstanceApi {
    private api: ObservableVcsRootInstanceApi

    public constructor(
        configuration: Configuration,
        requestFactory?: VcsRootInstanceApiRequestFactory,
        responseProcessor?: VcsRootInstanceApiResponseProcessor
    ) {
        this.api = new ObservableVcsRootInstanceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Remove a field of the matching VCS root instance.
     * @param vcsRootInstanceLocator 
     * @param field 
     */
    public deleteVcsRootInstanceField(vcsRootInstanceLocator: string, field: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteVcsRootInstanceField(vcsRootInstanceLocator, field, options);
        return result.toPromise();
    }

    /**
     * Delete the last repository state of the matching VCS root instance.
     * @param vcsRootInstanceLocator 
     */
    public deleteVcsRootInstanceRepositoryState(vcsRootInstanceLocator: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteVcsRootInstanceRepositoryState(vcsRootInstanceLocator, options);
        return result.toPromise();
    }

    /**
     * Download specific file.
     * @param path 
     * @param vcsRootInstanceLocator 
     */
    public downloadFile(path: string, vcsRootInstanceLocator: string, options?: Configuration): Promise<void> {
        const result = this.api.downloadFile(path, vcsRootInstanceLocator, options);
        return result.toPromise();
    }

    /**
     * Get all VCS root instances.
     * @param locator 
     * @param fields 
     */
    public getAllVcsRootInstances(locator?: string, fields?: string, options?: Configuration): Promise<VcsRootInstances> {
        const result = this.api.getAllVcsRootInstances(locator, fields, options);
        return result.toPromise();
    }

    /**
     * Get metadata of specific file.
     * @param path 
     * @param vcsRootInstanceLocator 
     * @param fields 
     */
    public getFileMetadata(path: string, vcsRootInstanceLocator: string, fields?: string, options?: Configuration): Promise<any> {
        const result = this.api.getFileMetadata(path, vcsRootInstanceLocator, fields, options);
        return result.toPromise();
    }

    /**
     * List all files.
     * @param vcsRootInstanceLocator 
     * @param basePath 
     * @param locator 
     * @param fields 
     */
    public getFilesList(vcsRootInstanceLocator: string, basePath?: string, locator?: string, fields?: string, options?: Configuration): Promise<Files> {
        const result = this.api.getFilesList(vcsRootInstanceLocator, basePath, locator, fields, options);
        return result.toPromise();
    }

    /**
     * List files under this path.
     * @param path 
     * @param vcsRootInstanceLocator 
     * @param basePath 
     * @param locator 
     * @param fields 
     */
    public getFilesListForSubpath(path: string, vcsRootInstanceLocator: string, basePath?: string, locator?: string, fields?: string, options?: Configuration): Promise<Files> {
        const result = this.api.getFilesListForSubpath(path, vcsRootInstanceLocator, basePath, locator, fields, options);
        return result.toPromise();
    }

    /**
     * Get VCS root instance matching the locator.
     * @param vcsRootInstanceLocator 
     * @param fields 
     */
    public getVcsRootInstance(vcsRootInstanceLocator: string, fields?: string, options?: Configuration): Promise<VcsRootInstance> {
        const result = this.api.getVcsRootInstance(vcsRootInstanceLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Get the creation date of the matching VCS root instance.
     * @param vcsRootInstanceLocator 
     */
    public getVcsRootInstanceCreationDate(vcsRootInstanceLocator: string, options?: Configuration): Promise<string> {
        const result = this.api.getVcsRootInstanceCreationDate(vcsRootInstanceLocator, options);
        return result.toPromise();
    }

    /**
     * Get a field of the matching VCS root instance.
     * @param vcsRootInstanceLocator 
     * @param field 
     */
    public getVcsRootInstanceField(vcsRootInstanceLocator: string, field: string, options?: Configuration): Promise<string> {
        const result = this.api.getVcsRootInstanceField(vcsRootInstanceLocator, field, options);
        return result.toPromise();
    }

    /**
     * Get all properties of the matching VCS root instance.
     * @param vcsRootInstanceLocator 
     * @param fields 
     */
    public getVcsRootInstanceProperties(vcsRootInstanceLocator: string, fields?: string, options?: Configuration): Promise<Properties> {
        const result = this.api.getVcsRootInstanceProperties(vcsRootInstanceLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Get the repository state of the matching VCS root instance.
     * @param vcsRootInstanceLocator 
     * @param fields 
     */
    public getVcsRootInstanceRepositoryState(vcsRootInstanceLocator: string, fields?: string, options?: Configuration): Promise<Entries> {
        const result = this.api.getVcsRootInstanceRepositoryState(vcsRootInstanceLocator, fields, options);
        return result.toPromise();
    }

    /**
     * Get specific file zipped.
     * @param path 
     * @param vcsRootInstanceLocator 
     * @param basePath 
     * @param locator 
     * @param name 
     */
    public getZippedFile(path: string, vcsRootInstanceLocator: string, basePath?: string, locator?: string, name?: string, options?: Configuration): Promise<void> {
        const result = this.api.getZippedFile(path, vcsRootInstanceLocator, basePath, locator, name, options);
        return result.toPromise();
    }

    /**
     * Check for the pending changes for all VCS root instances.
     * @param locator 
     * @param requestor 
     * @param fields 
     */
    public requestPendingChangesCheck(locator?: string, requestor?: string, fields?: string, options?: Configuration): Promise<VcsRootInstances> {
        const result = this.api.requestPendingChangesCheck(locator, requestor, fields, options);
        return result.toPromise();
    }

    /**
     * Get a field of the matching VCS root instance.
     * @param vcsRootInstanceLocator 
     * @param field 
     * @param body 
     */
    public setVcsRootInstanceField(vcsRootInstanceLocator: string, field: string, body?: string, options?: Configuration): Promise<string> {
        const result = this.api.setVcsRootInstanceField(vcsRootInstanceLocator, field, body, options);
        return result.toPromise();
    }

    /**
     * Update the repository state of the matching VCS root instance.
     * @param vcsRootInstanceLocator 
     * @param fields 
     * @param body 
     */
    public setVcsRootInstanceRepositoryState(vcsRootInstanceLocator: string, fields?: string, body?: Entries, options?: Configuration): Promise<Entries> {
        const result = this.api.setVcsRootInstanceRepositoryState(vcsRootInstanceLocator, fields, body, options);
        return result.toPromise();
    }

    /**
     * Send the commit hook notification.
     * @param locator 
     * @param okOnNothingFound 
     */
    public triggerCommitHookNotification(locator?: string, okOnNothingFound?: boolean, options?: Configuration): Promise<void> {
        const result = this.api.triggerCommitHookNotification(locator, okOnNothingFound, options);
        return result.toPromise();
    }


}



