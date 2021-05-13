# Teamcity Playground

I hate the TeamCity Kotlin DSL because:

- I'm not that familar with Java and thus not that familar with Kotlin

  - To clarify Kotlin as a language looks pretty cool but it's also just
    that much different to other more main stream languages that it creates
    a barrier to entry.

- Java/Kotlin tooling support sucks in VsCode, if it was better I might be more
  inclined to learn the tech. Sorry but IMHO the tooling around a language or
  platform really does make or break it. And I really do not want to run
  something like IntelliJ what a behemoth...

- But most of all the DSL docs suck, not the Kotlin language docs, no they look
  adequate, it's the actual documentation for TeamCity's Kotlin DSL that is
  severly lacking. Or at least it was at the time of writing.

  - Also even if you want to use XML instead of Kotlin, there really are no docs.
    None. Zip. Zilch. Zero.

  - This is the most frustating thing in my day to day life at the moment.
    Yeah you heard me, my "LIFE"! :rage: :cursing_face:

## Rant Over

Ok with that out of the way, what is this? Essentially I created a local
teamcity server running inside docker, I then created a new project and
connected it to this repo but I set it to use XML instead of Kotlin.

I then manually went through the UI and modfied every concieviable option one
thing at a time. Each time I took a screenshot of the change I made and TeamCity
pushed a new commit with the XML changes. I then attached the screenshot to the
commit via a Github comment.

So essentially you should be able to do a blame on a particular line in the xml
and see a commit with a screenshot of where that value surfaces in the UI. From
there you can go a read the TeamCity docs that have been written from UIs
perspective.

Longer term my plan is to take this data, create a decent JSON/YAML Schema and
then create a little Go tool that will convert YAML to XML for you. And then you
can build a TeamCity pipeline using the easy famlarity of YAML.

## Noteable Exceptions

Ok so most of the time teamCity didn't care to actually check that the values I
provided actually make sense which was great as I was able to speed through most
things just inputting non-sensical data. But some things did require actual
validation and other infrastructure to actuially for realz exist and thus those
things are are currently missing:

- Cloud Profiles
- Meta-Runners
- Maven Settings
- Artifacts Storage
