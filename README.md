# Teamcity Playground

I hate the TeamCity Kotlin DSL because:

- I'm not that familiar with Java and thus not that familiar with Kotlin

  - To clarify Kotlin as a language looks pretty cool but it's also just
    that much different to other more main stream languages that it creates
    a barrier to entry.

- Java/Kotlin tooling support sucks in VsCode, if it was better I might be more
  inclined to learn the tech. Sorry but IMHO the tooling around a language or
  platform really does make or break it. And I really do not want to run
  something like IntelliJ what a behemoth...

- But most of all the DSL docs suck, not the Kotlin language docs, no they look
  adequate, it's the actual documentation for TeamCity's Kotlin DSL that is
  severely lacking. Or at least it was at the time of writing.

  - Also even if you want to use XML instead of Kotlin, there really are no docs.
    None. Zip. Zilch. Zero.

  - This is the most frustrating thing in my day to day life at the moment.
    Yeah you heard me, my "LIFE"! :rage: :cursing_face:

## Rant Over

Ok with that out of the way, what is this? Essentially I created a local
teamcity server running inside docker, I then created a new project and
connected it to this repo but I set it to use XML instead of Kotlin.

I then manually went through the UI and modified every conceivable option one
thing at a time. Each time I took a screenshot of the change I made and TeamCity
pushed a new commit with the XML changes. I then attached the screenshot to the
commit via a Github comment.

So essentially you should be able to do a blame on a particular line in the xml
and see a commit with a screenshot of where that value surfaces in the UI. From
there you can go a read the TeamCity docs that have been written from UIs
perspective.

Longer term my plan is to take this data, create a decent JSON/YAML Schema and
then create a little Go tool that will convert YAML to XML for you. And then you
can build a TeamCity pipeline using the easy familiarity of YAML.

## Notable Exceptions

Ok so most of the time teamCity didn't care to actually check that the values I
provided actually make sense which was great as I was able to speed through most
things just inputting nonsensical data. But some things did require actual
validation and other infrastructure to actually for realz exist and thus those
things are are currently missing:

- Cloud Profiles
- Meta-Runners
- Maven Settings
- Artifacts Storage

Also anything to do with templating as that can be handled by a higher level DSL, eg: TypeScript.

> Yes while the goal here is to provide a simple YAML to XML conversion tool
> because we are going to build that tool with Deno we will also get a TypeScript
> lib for free that one could use programmatically if they wished.

Oh and also I have only modeled Git VcsRoots, who doesn't use git these days?
Probs the same people that use TeamCity, oh well PRs welcome...

And one last thing I promise, basically all the different type of Build Runners.
The only one we are going to model is the `simpleRunner` as anything can be built
on top of that in a loosely coupled & portable manner. Instead of relying on
TeamCity servers to have XYZ Runner/Plugin installed.

## OpenAPI Rest API

Ok so I always knew TeamCity had a REST API & I guess I always knew that the
Swagger spec existed. I started to ask myself why don't I just generate an
OpenAPI client and call it a day?

Well for starters the spec is not nicely documented. Not anywhere near to the
degree we have documented the types we have written so far.

Secondly the REST API is not a 1:1 mapping to the underlying XML files that go
into a `.teamcity` folder. It's similar but it's not similar enough that you can
just give the REST API a `project-config.xml` (or part of that file) for example.

And so I could only then offer a workflow where one created/updated the pipeline
before pushing anything to git. I guess at the end of the day this not that dissimilar
to having to generate the XML from YAML first.

But then why not just use <https://github.com/cvbarros/terraform-provider-teamcity>?

I tried that and it too is lacking & does not model enough of the API surface IMO.
So undoubtedly we would run into things we would want to do and couldn't because
the tf provider didn't support the calls.

_cvbarros is locking for maintainers, maybe we take it on?_

Additionally I feel not having the XML files in the `.teamcity` folder is less
explicit and harder to audit. At least if your converting YAML to XML and for
whatever reason you forget to do that & push a commit and then wonder why the
pipeline didn't change (or wonder why it did change in the case of some other
dev pushing a commit) it should be pretty easy to work out what happened in such
a case as it's all in the git log.

Where as if any dev could update the pipeline by using the REST API and not have
it strictly tied to a git commit then all hell could break lose...

Having said that I also like the ability to be able to generate a pipeline
without a git repo at all. I can see use cases for that, more on that in a sec...

The advantage of the open api spec is we can automate it's generation. Totally
could slap together a standalone Github Actions project that runs nightly or
whenever Jetbrains release a new version of TC and then generates a new version
of the client, for multiple languages too. Whatever openapi-generator supports.

**This will happen, coming soon, I promise...**

## The end goal

After further reflection this is where I see things heading.

- Build a simple OpenAPI client generator pipeline. Then no matter what tooling
  we end up writing in whatever language we have someway to easily interface
  with TeamCity.

- Finish off the types I am building here, these will then get used in this
  new higher level piece of tooling that I am going describe now.

- A new higher level tool similar to <https://github.com/nektos/act>

  - But this tool will be CI provider agnostic. At first it will support GHA & TC.
    - It will provide another layer of abstraction over these TeamCity types and
      provide an interface inspired by the GHA workflow schema.

  - It will likely be built with Deno thus it will have a TypeScript DSL
    which will provide similar features that we get from the likes of Kotlin
    but with hopefully a much friendly interface and much better tooling support.

    - This means that GHA workflows get a DSL for free too.

    - The tool will however still support ingesting workflow definitions written
      in plain old JSON/YAML to lower the barrier to entry and for very simple
      cases this may be the preferred option.
    
    - The TypeScript DSL will offer full escape hatch support, ala CDK.
      We do not want to create a tool that gets in the way.

      - In fact I have considered using JSSI for this tool. But I prefer Deno's
        Go like tooling and interface better. If JSSI gets released with deno
        instead of node I'll certainly consider it.

        - But the issue with JSSI implies that say a compiled language like Go
          could be used for this sort of DSL. And while not impossible using
          a compiled language poses it's challenges. Due to the dynamic nature
          of loading workflow modules, etc...
  
  - Actions will be TypeScript/Javascript functions, shared with deno's package
    management facilities similar to Go's. So to write a new action you just
    write & push a new deno module to a git repo somewhere.

  - It will offer 3 modes:
    
    - **Execute Local:** You write a workflow and it will do it's best effort
      to run it locally. For simple workflows this will be fine.

      - Given that workflows will be able to be written in TypeScript, so long
        as the workflow/action author has accommodated for each different OS
        where that action might be run then there should be no cross platform
        issues to worry about.
      
      - There wouldn't even be a requirement to associate this with a CI provider.
        eg: you could use this as a local task runner framework. That has the
        future possibility of being deployed as a pipeline if desired.

    - **Execute Remote:** This will execute the workflow on the CI providers
      infrastructure but in such a way that it looks like it's running locally.

      This will ensure more complex workflows that say require a Windows OS
      (or MacOS) can still easily be executed by those not running that OS locally.
      _Or they just have a low powered machine & the cloud is actually faster._

      - This is where we can use the likes of the TeamCity REST API to on demand
        build a new pipeline and execute it, streaming it's logs back to the local
        terminal. Even artifacts could be copied up/down as needed.
      
      - To support GHA we would essentially create a new Github repo on the fly
        so we have a home for the temp pipeline. As GHA doesn't support building
        out a pipeline via it's REST API like TC does.
      
      - Remote execution would allow you to make changes to the code and not
        commit them just like if you were running the workflow in local mode.

        - This would work similar to having a docker context. ie: we would
          behind the scenes upload the local source to a location that the
          pipeline could download it from.

          - There might be a few different strategies, eg: git or s3
    
    - **Generate:** This is where we generate a `.teamcity` or `.github/workflows`
      folder that contains a pipeline that then executes each individual action
      using the CI providers built-in mechanics.

      ie: Instead of relying on the tools local execution engine, the tool generates
      say some GHA workflow yaml with the appropriate jobs & steps which then
      call the tool using some special CLI args that tell the tool to only execute
      that specific action.

      - This generate mode could be connected to a git hook so that it all
        always happens before pushing any changes to the YAML (or TypeScript) DSL.
      
      - This generate mode is what the remote mode would use but it would just
        create a one time only pipeline. (maybe there would be some caching &
        re-use depending on timings)


Just had a crazy idea... We use the generated openapi client to hit a teamcity
instance, editing one thing at a time, which generates our XML diff, which we
can then use to generate the XML types. Basically automating what have done
manually in this repo.