# UI-Kit Bisect

A tool to find out where bugs come from in [ui-kit](https://github.com/coveo/ui-kit)

## How to use?

1. Create a branch
2. Write a test that fails on the first commit you know where the issue is.
<!-- More utils/docs on how to write that test -->
3. Leap in the past and find a commit where the test do pass.
4. Commit your test into your branch
5. Go to the [workflow](https://github.com/coveo/ui-kit-bisect/actions/workflows/atomic-bisect.yml) and run it with:
    * Use workflow from `yourBranch`
    * The latest known good commit
    * The latest known bad commit
6. Go grab some coffee
7. Check the logs, the commit introducing the issue should've been found! 

## How does it work?

[See `git bisect` examples](https://git-scm.com/docs/git-bisect#_examples)