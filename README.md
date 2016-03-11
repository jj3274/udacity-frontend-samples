# udacity-frontend-samples
Sample codes for Udacity Frontend Nanodegree Course

## Branch & Tag Strategy
* All top-level branches should be branched from master -> tag: initial-master
* Any child branch should be branched from its parent -> tag: initial-*
* Each branch should only include its own project files.
* Parent branch may include all children branches files by merge
* Children branches should be merged back to parent branch

#### Example
```
* master
| - tag: initial-master
| - add/commit: README.md
| - add/commit: Any other changes ...
| \
| * intro-to-ajax (branched from tag: initial-master)
| | - add/commit: intro-to-ajax/README.md
| | - tag: initial-intro-to-ajax
| | \
| | * minicourse-ajax-project (branched from tag: initial-intro-to-ajax)
| | | - add/commit: initial project files
| | | - tag: initial-minicourse-ajax-project
| | \
| | * another-project (branched from tag: initial-intro-to-ajax)
| | - add/commit: another-project/README.md
| | - tag: initial-another-project
| | \
| | * another-another-project (branched from tag: initial-intro-to-ajax)
| | - add/commit: another-another-project/README.md
| | - tag: initial-another-another-project
| \
| * javascript-design-patterns (branched from tag: initial-master)
| | - commit: javascript-design-patterns/README.md
| | - tag: initial-javascript-design-patterns
| | \
| | * javascript-sample-project (branched from tag: initial-javascript-design-patterns)
| | | - add/commit: initial project files
| | | - tag: initial-javascript-sample-project
```

## How to review the commits and branch history
This will show one commit per line and decorate with branch names<br/>
`
git log --graph --decorate --oneline --all
`

## How to checkout a specific sample project
`
git checkout project-branch-name
`

## How to add new sample project to the repository
e.g., intro-to-ajax/minicourse-ajax-project/*

1. Create course branch if it does not exist yet<br/>
    `git branch intro-to-ajax initial-master`

1. Checkout course branch<br/>
    `git checkout intro-to-ajax`
1. Create course directory if it does not exist yet
```
mkdir intro-to-ajax
touch intro-to-ajax/README.md
```
1. Commit and tag the initial course directory
```git
git add .
git commit -m "intro-to-ajax initial commit"
git tag "initial-intro-to-ajax"
```
1. Create and checkout new sample project branch
```git
git checkout -b minicourse-ajax-project
or
git checkout -b minicourse-ajax-project initial-intro-to-ajax
```
1. Create the sample project directory and copy all initial files except .git directory
```
mkdir intro-to-ajax/minicourse-ajax-project
copy from-source-code intro-to-ajax/minicourse-ajax-project/
```
1. Commit and tag the initial sample project directory
```git
git add .
git commit -m "minicourse-ajax-project initial commit"
git tag "initial-minicourse-ajax-project"
```
1. Push all changes and tags to github
```
git push --all
git push --tags
```
