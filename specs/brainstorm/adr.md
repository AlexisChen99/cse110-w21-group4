# Deciding time interval for timer

* Status: [accepted]
* Deciders: [team decision]
* Date: [2021-1-26]

## Context and Problem Statement

How should the time intervals for our pomodoro timer be decided? Should the user have input?

## Considered Options

* Hard-code specific (widely accepted) time intervals
* Suggest time intervals, but allow users to make changes
* Choose specific (widely accepted) time intervals for MVP, but leave possibilty for user changes (code around option 2)

## Decision Outcome

Chose option 3, coding around the possibility for user changes in the future, because we want to produce a complete MVP ASAP, but user input may be a feature we want to implement down the line.

### Positive Consequences

* N/A (yet)
* …

### Negative Consequences 

* N/A (yet)
* …

## Pros and Cons of the Options

### Hard-coded

* Good, because it's simple to implement
* Bad, because it limits user input and prevents a potentially desired feature

### User input

* Good, because it gives users the freedom to cater to their needs/wants
* Bad, because it takes longer to code/test
* Bad, because it is an extraneous feature at the moment

### Flexible coding

* Good, because it allows us to code simply (with forethought) and more quickly
* Good, because it allows us the freedom to add a feature later on with minimal issues
* Bad, because it is more difficult and time-consuming than hard-coding
* Bad, because we may not benefit from this time investment down the line

***

# Create Dev Mode to Test and View Features

* Status: [accepted, not implemented]
* Deciders: [team decision]
* Date: [2021-1-26]

## Context and Problem Statement

We want to be able to run tests and view features that may be hidden from or unavailable to users in able to have full access to our product. How can we implement this in a manner that doesn't compromise the security and integrity of our product?

## Considered Options

* Have all features open to users, only hide tests
* Have features that can be hidden/locked, but use careful tests to access them
* Developer mode, inaccessible to users with full permissions to view features and tests

## Decision Outcome

Chose option 3, "developer mode", because it gives us the freedom to make design decisions (locked features) in the future and will make things easier for testing and viewing our product

### Positive Consequences

* N/A (yet)
* …

### Negative Consequences 

* N/A (yet)
* …

## Pros and Cons of the Options

### Open features, tests only

* Good, because it's simple to implement
* Bad, because it limits our design decisions

### Flexible feature design, tests only

* Good, because it allows us to design features freely
* Bad, because we may encounter issues with testing features that are locked at certain times
* Bad, because it forces developers to follow use diagrams to access features

### Developer mode

* Good, because it allows developers and QA full access to product, including locked features
* Good, because it allows for a variety of feature designs
* Bad, because it creates potential security issues (if users gain access)
* Bad, because it diverges from use diagrams (may affect how developers see UX/UI)

***

# Include Accessibility Features

* Status: [accepted]
* Deciders: [team decision]
* Date: [2021-1-30]

## Context and Problem Statement

We want our product to be accessible to all kinds of users, including those with disabilities or personal preferences that make standard website design inaccessible. What features can we implement to reach this goal?

## Considered Options

* Dark mode option that is different from the standard bright/white screen
* Colorblind option that makes color distinctions clear for those with any of various kinds of colorblindness
* Sound options to allow those with sound sensitivity or other circumstances to turn off the aural alarm

## Decision Outcome

All of the above, to best include every user (and their story) that we can.

### Positive Consequences

* N/A (yet)
* …

### Negative Consequences 

* N/A (yet)
* …

## Pros and Cons of the Options

### All 

* Good, because it broadens our audience and allows more of our users to enjoy our features
* Bad, because it is not a comprehensive inclusion of all accessibility features

***

# Product design layout/ideology

* Status: [accepted]
* Deciders: [froend-end developer decision]
* Date: [2021-1-31]

## Context and Problem Statement

We want to have a consistent design plan in place to structure our UI around. What sort of design ideology should we keep in mind while developing our front end?

## Considered Options

* Minimalism -- very simple layout, minimal features/images
* Themed -- play with animations, images, colors, etc

## Decision Outcome

Chose option 1, minimalism, at least for the time being--this will prevent distractions on the part of the user and allow us to streamline the user story. 

### Positive Consequences

* N/A (yet)
* …

### Negative Consequences 

* N/A (yet)
* …

## Pros and Cons of the Options

### Minimalism

* Good, because it is simple, functional, and ideally intuitive for the user
* Good, because it prevents distractions for the user
* Good, because it embodies our purpose of being productive and efficient
* Bad, because it can be boring or unattractive
* Bad, because it can emphasize flaws (nothing to hide behind)

### Creative design

* Good, because it is exciting, attractive, and engaging
* Good, because an appealing design can encourage users to return or even share our product with others
* Good, because it can be used to show our team's personality and ideology through creativity
* Good, because themes and designs give us more to work on/with
* Bad, because themes can divide the audience (appealing to some but not to others)
* Bad, because design requires experience and significant time to see returns
* Bad, because design can distract the team and the user from the actual purpose of the product
* Bad, because poor design can complicate the user story or how we implement our features
