package Test1_SubProject1

import Test1_SubProject1.buildTypes.*
import jetbrains.buildServer.configs.kotlin.v2019_2.*
import jetbrains.buildServer.configs.kotlin.v2019_2.Project

object Project : Project({
    uuid = "22aea7e5-28e2-4fdd-b726-8411a0c665ba"
    id("Test1_SubProject1")
    parentId("Test1")
    name = "SubProject1"
    description = "This is a sub project"

    buildType(Test1_SubProject1_Deploy)
    buildType(Test1_SubProject1_BuildWin)
    buildType(Test1_SubProject1_PackageWin)
    buildType(Test1_SubProject1_PackageLin)
    buildType(Test1_SubProject1_Test)
    buildType(Test1_SubProject1_BuildLin)
})
