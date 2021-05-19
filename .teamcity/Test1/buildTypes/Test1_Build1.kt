package Test1.buildTypes

import Test1.vcsRoots.Test1_GithubComBradJonesTeamcityPlayground
import jetbrains.buildServer.configs.kotlin.v2019_2.*
import jetbrains.buildServer.configs.kotlin.v2019_2.buildFeatures.AutoMerge
import jetbrains.buildServer.configs.kotlin.v2019_2.buildFeatures.FileContentReplacer
import jetbrains.buildServer.configs.kotlin.v2019_2.buildFeatures.JiraCloudIntegration
import jetbrains.buildServer.configs.kotlin.v2019_2.buildFeatures.Swabra
import jetbrains.buildServer.configs.kotlin.v2019_2.buildFeatures.XmlReport
import jetbrains.buildServer.configs.kotlin.v2019_2.buildFeatures.commitStatusPublisher
import jetbrains.buildServer.configs.kotlin.v2019_2.buildFeatures.dockerSupport
import jetbrains.buildServer.configs.kotlin.v2019_2.buildFeatures.freeDiskSpace
import jetbrains.buildServer.configs.kotlin.v2019_2.buildFeatures.golang
import jetbrains.buildServer.configs.kotlin.v2019_2.buildFeatures.investigationsAutoAssigner
import jetbrains.buildServer.configs.kotlin.v2019_2.buildFeatures.jiraCloudIntegration
import jetbrains.buildServer.configs.kotlin.v2019_2.buildFeatures.merge
import jetbrains.buildServer.configs.kotlin.v2019_2.buildFeatures.notifications
import jetbrains.buildServer.configs.kotlin.v2019_2.buildFeatures.nuGetFeedCredentials
import jetbrains.buildServer.configs.kotlin.v2019_2.buildFeatures.nuGetPackagesIndexer
import jetbrains.buildServer.configs.kotlin.v2019_2.buildFeatures.perfmon
import jetbrains.buildServer.configs.kotlin.v2019_2.buildFeatures.pullRequests
import jetbrains.buildServer.configs.kotlin.v2019_2.buildFeatures.replaceContent
import jetbrains.buildServer.configs.kotlin.v2019_2.buildFeatures.sshAgent
import jetbrains.buildServer.configs.kotlin.v2019_2.buildFeatures.swabra
import jetbrains.buildServer.configs.kotlin.v2019_2.buildFeatures.vcsLabeling
import jetbrains.buildServer.configs.kotlin.v2019_2.buildFeatures.xmlReport
import jetbrains.buildServer.configs.kotlin.v2019_2.buildSteps.ExecBuildStep
import jetbrains.buildServer.configs.kotlin.v2019_2.buildSteps.exec
import jetbrains.buildServer.configs.kotlin.v2019_2.buildSteps.script
import jetbrains.buildServer.configs.kotlin.v2019_2.failureConditions.BuildFailureOnMetric
import jetbrains.buildServer.configs.kotlin.v2019_2.failureConditions.failOnMetricChange
import jetbrains.buildServer.configs.kotlin.v2019_2.triggers.ScheduleTrigger
import jetbrains.buildServer.configs.kotlin.v2019_2.triggers.VcsTrigger
import jetbrains.buildServer.configs.kotlin.v2019_2.triggers.finishBuildTrigger
import jetbrains.buildServer.configs.kotlin.v2019_2.triggers.mavenArtifact
import jetbrains.buildServer.configs.kotlin.v2019_2.triggers.mavenSnapshot
import jetbrains.buildServer.configs.kotlin.v2019_2.triggers.retryBuild
import jetbrains.buildServer.configs.kotlin.v2019_2.triggers.schedule
import jetbrains.buildServer.configs.kotlin.v2019_2.triggers.vcs

object Test1_Build1 : BuildType({
    uuid = "7d63c45e-300f-4cde-b3d4-6a87c15216c2"
    name = "Build1"
    description = "This is a build config"

    allowExternalStatus = true
    enablePersonalBuilds = false
    artifactRules = """
        +:foo
        +:./bar/xyz/*
        +:baz
    """.trimIndent()
    type = BuildTypeSettings.Type.DEPLOYMENT
    detectHangingBuilds = false
    maxRunningBuilds = 1

    params {
        param("env.RBENV_ROOT", "/foo/bar")
    }

    vcs {
        root(Test1.vcsRoots.Test1_GithubComBradJonesTeamcityPlayground, "+:foo", "-:bar")

        cleanCheckout = true
        branchFilter = """
            +:master
            +:foo
        """.trimIndent()
        checkoutDir = "/foo/bar/baz"
        excludeDefaultBranchChanges = true
        showDependenciesChanges = true
    }

    steps {
        exec {
            name = "Step1"
            executionMode = BuildStep.ExecutionMode.ALWAYS

            conditions {
                exists("teamcity.build.branch.is_default")
                equals("teamcity.build.branch", "release")
            }
            workingDir = "/foo/bar/baz"
            path = "foo"
            arguments = "bar -baz=adsfg -e.t foo etc"
            formatStderrAsError = true
            dockerImagePlatform = ExecBuildStep.ImagePlatform.Windows
            dockerPull = true
            dockerImage = "node:latest"
            dockerRunParameters = "--entrypoint /foo"
        }
        script {
            name = "Step 2"
            scriptContent = """echo "Hello World";"""
        }
    }

    triggers {
        vcs {
            quietPeriodMode = VcsTrigger.QuietPeriodMode.USE_CUSTOM
            quietPeriod = 345
            triggerRules = """
                +:**
                -:**
                +:user=foo;root=${Test1_GithubComBradJonesTeamcityPlayground.id};comment=.*:**
            """.trimIndent()

            perCheckinTriggering = true
            groupCheckinsByCommitter = true
            enableQueueOptimization = false
        }
        schedule {
            schedulingPolicy = weekly {
                dayOfWeek = ScheduleTrigger.DAY.Thursday
                hour = 5
                minute = 20
                timezone = "Australia/Melbourne"
            }
            branchFilter = "+:master"
            triggerRules = "+:**"
            triggerBuild = onWatchedBuildChange {
                buildType = "${Test1_Build1.id}"
                watchedBuildRule = ScheduleTrigger.WatchedBuildRule.TAG
                watchedBuildTag = "v1.0.0"
                promoteWatchedBuild = false
            }
            withPendingChangesOnly = false
            triggerBuildOnAllCompatibleAgents = true
            enableQueueOptimization = false
            enforceCleanCheckout = true
            enforceCleanCheckoutForDependencies = true
        }
        finishBuildTrigger {
            buildType = "${Test1_Build1.id}"
            successfulOnly = true
            branchFilter = """
                +:<default>
                -:xyz
            """.trimIndent()
        }
        trigger {
            type = "remoteRunOnBranch"
            param("branchy:jetbrains.git", "pattern:jetbrains.git")
        }
        retryBuild {
            delaySeconds = 120
            attempts = 5
            moveToTheQueueTop = true
            retryWithTheSameRevisions = false
        }
        trigger {
            type = "nuget.simple"
            param("nuget.include.prerelease", "true")
            param("nuget.source", "https://foo.example.org")
            param("nuget.exe", "/path/to/nuget.exe")
            param("nuget.username", "bar")
            param("secure:nuget.password", "credentialsJSON:38a028f3-e750-4e0c-a5a6-a949fe620c94")
            param("nuget.package", "abc")
        }
        mavenArtifact {
            groupId = "abc"
            artifactId = "xyz"
            version = "1.2.3"
            classifier = "foo"
            repoUrl = "http://example.org"
            repoId = "bar"
            skipIfRunning = true
            userSettingsSelection = "userSettingsSelection:byPath"
            userSettingsPath = "/settings/path"
        }
        mavenSnapshot {
            skipIfRunning = true
        }
    }

    failureConditions {
        executionTimeoutMin = 60
        testFailure = false
        nonZeroExitCode = false
        javaCrash = false
        supportTestRetry = true
        errorMessage = true
        failOnMetricChange {
            metric = BuildFailureOnMetric.MetricType.ARTIFACTS_TOTAL_SIZE
            threshold = 123
            units = BuildFailureOnMetric.MetricUnit.PERCENTS
            comparison = BuildFailureOnMetric.MetricComparison.MORE
            compareTo = build {
                buildRule = buildWithTag {
                    tag = "v1.0.4"
                }
            }
            stopBuildOnFailure = true
            param("buildNumberPattern", "123")
        }
    }

    features {
        feature {
            type = "JetBrains.AssemblyInfo"
            param("file-format", "foo")
            param("patch-global-assembly-info", "true")
            param("info-format", "bar")
        }
        merge {
            branchFilter = "+:foo"
            destinationBranch = "bar"
            mergePolicy = AutoMerge.MergePolicy.FAST_FORWARD
            mergeCondition = "noNewTests"
            runPolicy = AutoMerge.RunPolicy.BEFORE_BUILD_FINISH
        }
        swabra {
            forceCleanCheckout = true
            lockingProcesses = Swabra.LockingProcessPolicy.KILL
            verbose = true
            paths = """
                +:/a/b/c
                -:/1/2/3
            """.trimIndent()
        }
        commitStatusPublisher {
            vcsRootExtId = "${Test1_GithubComBradJonesTeamcityPlayground.id}"
            publisher = space {
                authType = connection {
                    connectionId = "PROJECT_EXT_4"
                }
                displayName = "abc123"
            }
        }
        dockerSupport {
            cleanupPushedImages = true
            loginToRegistry = on {
                dockerRegistryId = "PROJECT_EXT_5"
            }
        }
        replaceContent {
            fileRules = """
                +:foo
                -:bar
            """.trimIndent()
            pattern = "xyz"
            caseSensitivePattern = false
            failBuildIfNoFilesMatchPattern = false
            regexMode = FileContentReplacer.RegexMode.REGEX_MIXED
            replacement = "adsfgdafg"
            encoding = FileContentReplacer.FileEncoding.CUSTOM
            customEncodingName = "IBM866"
        }
        freeDiskSpace {
            failBuild = true
        }
        golang {
            testFormat = "json"
        }
        investigationsAutoAssigner {
            defaultAssignee = "brad.jones"
            excludeUsers = """
                foo
                bar
                baz
            """.trimIndent()
            ignoreCompilationProblems = "true"
            ignoreExitCodeProblems = "true"
            assignOnSecondFailure = true
        }
        jiraCloudIntegration {
            issueTrackerConnectionId = "PROJECT_EXT_6"
            isDeploymentConfiguration = true
            deploymentEnvironmentType = JiraCloudIntegration.EnvironmentType.PRODUCTION
            deploymentEnvironmentName = "prod"
        }
        notifications {
            notifierSettings = slackNotifier {
                connection = "PROJECT_EXT_7"
                sendTo = "abc123"
                messageFormat = verboseMessageFormat {
                    addBranch = true
                    addChanges = true
                    addStatusText = true
                    maximumNumberOfChanges = 10
                }
            }
            branchFilter = """
                +:master
                -:archived
            """.trimIndent()
            buildStarted = true
            buildFailedToStart = true
            buildFailed = true
            firstFailureAfterSuccess = true
            newBuildProblemOccurred = true
            buildFinishedSuccessfully = true
            firstSuccessAfterFailure = true
            firstBuildErrorOccurs = true
            buildProbablyHanging = true
        }
        nuGetFeedCredentials {
            feedUrl = "https://example.oirg"
            username = "foo"
            password = "credentialsJSON:602e0159-4599-4a18-ba96-ff1dc49507c2"
        }
        nuGetPackagesIndexer {
            feed = "Test1/foobarbaz"
        }
        perfmon {
        }
        pullRequests {
            vcsRootExtId = "${Test1_GithubComBradJonesTeamcityPlayground.id}"
            provider = gitlab {
                serverUrl = "https://example.org/"
                authType = token {
                    token = "credentialsJSON:d76c6ecd-d6d5-48fb-91c9-57c92ebba160"
                }
                filterSourceBranch = """
                    +:foo
                    -:bar
                """.trimIndent()
                filterTargetBranch = """
                    +:abc
                    -:xyz
                """.trimIndent()
            }
        }
        feature {
            type = "ruby.env.configurator"
            param("ui.ruby.configurator.rbenv.version.name", "jruby-1.7.5")
            param("ui.ruby.configurator.rvm.ruby_version.path", "/foo/bar/baz")
            param("ui.ruby.configurator.rbenv.root.path", "%env.RBENV_ROOT%")
            param("ui.ruby.configurator.use.rvm", "rbenv_file")
            param("ui.ruby.configurator.ruby.interpreter.path", "/path/to/ruby")
            param("ui.ruby.configurator.rvm.sdk.name", "system")
            param("ui.ruby.configurator.rbenv.file.path", "/foo/bar/abc")
            param("ui.ruby.configurator.rvm.gemset.name", "foobar")
        }
        feature {
            type = "JetBrains.SharedResources"
            param("locks-param", "foo readLock bar")
        }
        sshAgent {
            teamcitySshKey = "foo"
        }
        vcsLabeling {
            vcsRootId = "${Test1_GithubComBradJonesTeamcityPlayground.id}"
            successfulOnly = true
            branchFilter = "+:*"
        }
        xmlReport {
            reportType = XmlReport.XmlReportType.VSTEST
            rules = """
                +:foo
                -:bar
            """.trimIndent()
            verbose = true
            findBugsHome = "/foo/bar"
        }
    }

    requirements {
        exists("foo")
        doesNotExist("bar")
        equals("baz", "foo")
        doesNotEqual("qux", "foo")
        moreThan("abc", "1")
        noMoreThan("xyz", "1")
        lessThan("qwe", "1")
        noLessThan("rty", "1")
        startsWith("uio", "foo")
        contains("asd", "foo")
        doesNotContain("fgh", "foo")
        endsWith("jkl", "foo")
        matches("zxc", "foo")
        doesNotMatch("vbn", "foo")
        moreThanVer("verA", "1.0.0")
        noMoreThanVer("verB", "1.0.0")
        lessThanVer("verC", "1.0.0")
        noLessThanVer("verD", "1.0.0")
    }
})
