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
