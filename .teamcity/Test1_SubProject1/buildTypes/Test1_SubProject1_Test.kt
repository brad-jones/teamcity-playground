package Test1_SubProject1.buildTypes

import jetbrains.buildServer.configs.kotlin.v2019_2.*
import jetbrains.buildServer.configs.kotlin.v2019_2.buildSteps.script

object Test1_SubProject1_Test : BuildType({
    uuid = "a314f3d4-8055-41cc-b2c6-e8802f4b5dc9"
    name = "Test"

    vcs {
        root(Test1.vcsRoots.Test1_GithubComBradJonesTeamcityPlayground)
    }

    steps {
        script {
            scriptContent = """echo "Hello World";"""
        }
    }

    dependencies {
        snapshot(Test1_SubProject1_BuildLin) {
            reuseBuilds = ReuseBuilds.NO
            onDependencyFailure = FailureAction.CANCEL
            onDependencyCancel = FailureAction.CANCEL
            synchronizeRevisions = false
        }
        snapshot(Test1_SubProject1_BuildWin) {
        }
    }
})
