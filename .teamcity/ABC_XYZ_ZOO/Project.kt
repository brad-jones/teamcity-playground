package ABC_XYZ_ZOO

import jetbrains.buildServer.configs.kotlin.v2019_2.*
import jetbrains.buildServer.configs.kotlin.v2019_2.Project

object Project : Project({
    uuid = "8b178b08-8604-47f5-a6f4-619779d3145b"
    id("ABC_XYZ_ZOO")
    parentId("Test1")
    name = "SubProject2"
    description = "This is a sub project foo dsafhg"
})
