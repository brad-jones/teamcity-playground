package Test1

import Test1.buildTypes.*
import Test1.vcsRoots.*
import Test1.buildTypes.Test1_Build1
import Test1.vcsRoots.Test1_GithubComBradJonesTeamcityPlayground
import jetbrains.buildServer.configs.kotlin.v2019_2.*
import jetbrains.buildServer.configs.kotlin.v2019_2.Project
import jetbrains.buildServer.configs.kotlin.v2019_2.projectFeatures.ProjectReportTab
import jetbrains.buildServer.configs.kotlin.v2019_2.projectFeatures.VersionedSettings
import jetbrains.buildServer.configs.kotlin.v2019_2.projectFeatures.azureDevopsConnection
import jetbrains.buildServer.configs.kotlin.v2019_2.projectFeatures.bitbucketCloudConnection
import jetbrains.buildServer.configs.kotlin.v2019_2.projectFeatures.bugzilla
import jetbrains.buildServer.configs.kotlin.v2019_2.projectFeatures.buildReportTab
import jetbrains.buildServer.configs.kotlin.v2019_2.projectFeatures.dockerECRRegistry
import jetbrains.buildServer.configs.kotlin.v2019_2.projectFeatures.dockerRegistry
import jetbrains.buildServer.configs.kotlin.v2019_2.projectFeatures.gheConnection
import jetbrains.buildServer.configs.kotlin.v2019_2.projectFeatures.githubConnection
import jetbrains.buildServer.configs.kotlin.v2019_2.projectFeatures.gitlabConnection
import jetbrains.buildServer.configs.kotlin.v2019_2.projectFeatures.gitlabEEConnection
import jetbrains.buildServer.configs.kotlin.v2019_2.projectFeatures.jira
import jetbrains.buildServer.configs.kotlin.v2019_2.projectFeatures.nuGetFeed
import jetbrains.buildServer.configs.kotlin.v2019_2.projectFeatures.projectReportTab
import jetbrains.buildServer.configs.kotlin.v2019_2.projectFeatures.slackConnection
import jetbrains.buildServer.configs.kotlin.v2019_2.projectFeatures.spaceConnection
import jetbrains.buildServer.configs.kotlin.v2019_2.projectFeatures.tfsIssueTracker
import jetbrains.buildServer.configs.kotlin.v2019_2.projectFeatures.versionedSettings
import jetbrains.buildServer.configs.kotlin.v2019_2.projectFeatures.youtrack

object Project : Project({
    uuid = "0f711432-9f13-47f6-acb5-66a8c3c31374"
    id("Test1")
    parentId("_Root")
    name = "Test1"
    description = "This is a test project"

    vcsRoot(Test1_GithubComBradJonesTeamcityPlayground)
    vcsRoot(ABC123)

    buildType(Test1_Build1)

    params {
        param("env.xyz", "abc")
        param("system.baz", "qux")
        param("testpwd", "")
        select("foo", "abc", label = "baz", description = "this param is a test", display = ParameterDisplay.PROMPT,
                allowMultiple = true, valueSeparator = "|",
                options = listOf("Abc Option" to "abc", "Xyz Option" to "xyz", "Number Options" to "123"))
        param("teamcity.ui.settings.readOnly", "false")
    }

    features {
        dockerECRRegistry {
            id = "PROJECT_EXT_10"
            displayName = "Amazon ECR"
            registryId = "baz"
            credentialsProvider = defaultCredentialsProvider()
            regionCode = "us-east-1"
            credentialsType = tempCredentials {
                iamRoleArn = "arn::foobar"
                externalId = "xyz"
            }
            param("secure:aws.secret.access.key", "credentialsJSON:602e0159-4599-4a18-ba96-ff1dc49507c2")
            param("aws.access.key.id", "foo")
        }
        azureDevopsConnection {
            id = "PROJECT_EXT_11"
            displayName = "Azure DevOps"
            serverUrl = "https://dev.azure.com/foobar"
            accessToken = "credentialsJSON:d76c6ecd-d6d5-48fb-91c9-57c92ebba160"
        }
        bitbucketCloudConnection {
            id = "PROJECT_EXT_12"
            displayName = "Bitbucket Cloud"
            key = "foo"
            clientSecret = "credentialsJSON:602e0159-4599-4a18-ba96-ff1dc49507c2"
        }
        gheConnection {
            id = "PROJECT_EXT_13"
            displayName = "GitHub Enterprise"
            serverUrl = "https://example.org/"
            clientId = "foo"
            clientSecret = "credentialsJSON:602e0159-4599-4a18-ba96-ff1dc49507c2"
        }
        githubConnection {
            id = "PROJECT_EXT_14"
            displayName = "GitHub.com"
            clientId = "foo"
            clientSecret = "credentialsJSON:602e0159-4599-4a18-ba96-ff1dc49507c2"
        }
        gitlabEEConnection {
            id = "PROJECT_EXT_15"
            displayName = "GitLab CE/EE"
            serverUrl = "https://example.org/"
            applicationId = "foo"
            clientSecret = "credentialsJSON:602e0159-4599-4a18-ba96-ff1dc49507c2"
        }
        gitlabConnection {
            id = "PROJECT_EXT_16"
            displayName = "GitLab.com"
            applicationId = "foo"
            clientSecret = "credentialsJSON:602e0159-4599-4a18-ba96-ff1dc49507c2"
        }
        feature {
            id = "PROJECT_EXT_17"
            type = "IssueTracker"
            param("secure:password", "credentialsJSON:602e0159-4599-4a18-ba96-ff1dc49507c2")
            param("name", "foo")
            param("pattern", """#(\d+)""")
            param("authType", "anonymous")
            param("repository", "http://example.org/")
            param("type", "BitBucketIssues")
            param("username", "foo")
        }
        bugzilla {
            id = "PROJECT_EXT_18"
            displayName = "foo"
            host = "https://example.org/"
            userName = "baz"
            password = "credentialsJSON:39a55d53-faa1-40ed-85e3-c21910aad35d"
            issueIdPattern = "abc"
        }
        feature {
            id = "PROJECT_EXT_19"
            type = "IssueTracker"
            param("secure:password", "credentialsJSON:602e0159-4599-4a18-ba96-ff1dc49507c2")
            param("name", "foo")
            param("pattern", """#(\d+)""")
            param("authType", "accesstoken")
            param("repository", "https://example.org")
            param("type", "GithubIssues")
            param("secure:accessToken", "credentialsJSON:a5788c60-b523-4b3a-bfc7-2fb96494f426")
            param("username", "foo")
        }
        versionedSettings {
            id = "PROJECT_EXT_2"
            mode = VersionedSettings.Mode.ENABLED
            buildSettingsMode = VersionedSettings.BuildSettingsMode.PREFER_SETTINGS_FROM_VCS
            rootExtId = "${Test1_GithubComBradJonesTeamcityPlayground.id}"
            showChanges = true
            settingsFormat = VersionedSettings.Format.KOTLIN
            storeSecureParamsOutsideOfVcs = true
        }
        tfsIssueTracker {
            id = "PROJECT_EXT_20"
            displayName = "foo"
            host = "https://dev.azure.com/foo/bar"
            userName = ""
            password = ""
            pattern = """#(\d+)"""
        }
        youtrack {
            id = "PROJECT_EXT_21"
            displayName = "foo"
            host = "http://example.org"
            userName = ""
            password = ""
            projectExtIds = "foo bar baz"
            accessToken = "credentialsJSON:4c2378d4-ac5b-422c-babd-06f9065f99d8"
            useAutomaticIds = true
            param("authType", "accesstoken")
        }
        projectReportTab {
            id = "PROJECT_EXT_22"
            title = "adsfgadsfgh"
            startPage = "index.html"
            buildType = "${Test1_Build1.id}"
            sourceBuildRule = ProjectReportTab.SourceBuildRule.LAST_SUCCESSFUL
        }
        projectReportTab {
            id = "PROJECT_EXT_23"
            title = "sdgfhjyghsfjkdytguj"
            startPage = "index.html"
            buildType = "${Test1_Build1.id}"
            sourceBuildRule = ProjectReportTab.SourceBuildRule.LAST_PINNED
        }
        projectReportTab {
            id = "PROJECT_EXT_24"
            title = "zcdfgbhdsgfhbn"
            startPage = "index.html"
            buildType = "${Test1_Build1.id}"
            sourceBuildRule = ProjectReportTab.SourceBuildRule.LAST_FINISHED
        }
        projectReportTab {
            id = "PROJECT_EXT_25"
            title = "zdfghdfgh"
            startPage = "index.html"
            buildType = "${Test1_Build1.id}"
            sourceBuildRule = ProjectReportTab.SourceBuildRule.BUILD_NUMBER
            sourceBuildNumber = "ZADSFgdhg"
        }
        feature {
            id = "PROJECT_EXT_26"
            type = "JetBrains.SharedResources"
            param("quota", "-1")
            param("name", "bar")
            param("type", "quoted")
            param("enabled", "false")
        }
        feature {
            id = "PROJECT_EXT_27"
            type = "JetBrains.SharedResources"
            param("quota", "123")
            param("name", "baz")
            param("type", "quoted")
        }
        feature {
            id = "PROJECT_EXT_3"
            type = "JetBrains.SharedResources"
            param("values", """
                foo
                bar
                baz
            """.trimIndent())
            param("name", "foo")
            param("type", "custom")
            param("enabled", "true")
        }
        spaceConnection {
            id = "PROJECT_EXT_4"
            displayName = "JetBrains Space"
            serverUrl = "https://example.foo"
            clientId = "abc123"
            clientSecret = "credentialsJSON:bb0770d8-25e7-4bc3-8475-96a101c11769"
        }
        dockerRegistry {
            id = "PROJECT_EXT_5"
            name = "Docker Registry"
            url = "https://docker.io"
            userName = "foo"
            password = "credentialsJSON:602e0159-4599-4a18-ba96-ff1dc49507c2"
        }
        jira {
            id = "PROJECT_EXT_6"
            displayName = "foo"
            host = "https://example.org"
            userName = "user.name"
            password = "credentialsJSON:ff2ed01c-bca8-441b-9182-c03e59a5f127"
            projectKeys = "abc123"
            useAutomaticKeys = true
            cloudClientID = "baz"
            cloudSecret = "credentialsJSON:27ae21a3-146c-4448-a5bc-59fd89b33586"
        }
        slackConnection {
            id = "PROJECT_EXT_7"
            displayName = "Slack"
            botToken = "credentialsJSON:602e0159-4599-4a18-ba96-ff1dc49507c2"
            clientId = "abc"
            clientSecret = "credentialsJSON:a5788c60-b523-4b3a-bfc7-2fb96494f426"
        }
        projectReportTab {
            id = "PROJECT_EXT_8"
            title = "FooBarBaz"
            startPage = "index.html"
            buildType = "${Test1_Build1.id}"
            sourceBuildRule = ProjectReportTab.SourceBuildRule.TAG
            sourceBuildTag = "v1.5.6"
        }
        buildReportTab {
            id = "PROJECT_EXT_9"
            title = "Abctest123"
            startPage = "index.html"
        }
        nuGetFeed {
            id = "repository-nuget-foobarbaz"
            name = "foobarbaz"
            description = "abc123"
            indexPackages = true
        }
    }

    cleanup {
        keepRule {
            id = "KEEP_RULE_2"
            keepAtLeast = allBuilds()
            applyToBuilds {
                inBranches {
                    branchFilter = patterns("""
                        +:foo
                        -:bar
                    """.trimIndent())
                    branchState = active()
                }
                inPersonalBuilds = onlyPersonal()
                withStatus = successful()
                withTags = anyOf("v1.2.3", "v4.5.6")
            }
            dataToKeep = everything()
            preserveArtifactsDependencies = true
        }
        baseRule {
            artifacts(builds = 45, days = 123, artifactPatterns = """
                +:foo
                -:bar
            """.trimIndent())
        }
    }
})
