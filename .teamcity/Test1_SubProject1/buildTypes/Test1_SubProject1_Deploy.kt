package Test1_SubProject1.buildTypes

import jetbrains.buildServer.configs.kotlin.v2019_2.*
import jetbrains.buildServer.configs.kotlin.v2019_2.buildSteps.script

object Test1_SubProject1_Deploy : BuildType({
    uuid = "e6d95376-841d-422a-95c2-69fd5ff0908a"
    name = "Deploy"

    vcs {
        root(Test1.vcsRoots.Test1_GithubComBradJonesTeamcityPlayground)
    }

    steps {
        script {
            scriptContent = """echo "Hello World";"""
        }
    }

    dependencies {
        snapshot(Test1_SubProject1_PackageLin) {
        }
        snapshot(Test1_SubProject1_PackageWin) {
        }
    }
})
