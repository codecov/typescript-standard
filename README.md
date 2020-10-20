# TypeScript-Standard

[![Build Status](https://travis-ci.org/codecov/TypeScript-Standard.svg?branch=master)](https://travis-ci.org/codecov/TypeScript-Standard) [![codecov](https://codecov.io/gh/codecov/TypeScript-Standard/branch/master/graph/badge.svg)](https://codecov.io/gh/codecov/TypeScript-Standard)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fcodecov%2Ftypescript-standard.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fcodecov%2Ftypescript-standard?ref=badge_shield)

### Last Updated: 10/20/20 20:08:54

## What is this?

This is a **TypeScript** application, with basic unit tests, for which coverage is uploaded to Codecov on a daily basis. It can also serve as an example for how to integrate Codecov into your TypeScript project. If the build is passing for this project, then Codecov's TypeScript report processing is functional and correct on codecov.io.

## Configuration

This project is written in `TypeScript 3.5.3`. Unit tests are written with the `Jest` testing framework. Coverage reports are also generated via `Jest`. 

Unit tests: `src/index.test.ts` which tests `src/index.ts`

## Errors Generating TypeScript Reports

In some instances, there may be errors where coverage reports target transpiled JavaScript files instead of TypeScript files. This is most likely due to the fact that your test runner configuration is not set properly. 

[Example repository with Jest config](https://github.com/drazisil/mco-server/blob/master/package.json#L71-L96)


## Reporting Issues

If you've discovered an issue with this repository or with TypeScript processing in general, it is recommended to email support@codecov.io rather than post an issue here. This repository will not be checked regularly for open issues.

## Contributing

Contributions are welcome! If you'd like to contribute to this repository, feel free to open a pull request or flag an issue. If you would like to contribute a new lanaguage standard, [you can get more information here](https://github.com/codecov/standards-scripts/blob/master/README.md#contributing). 


## License
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fcodecov%2Ftypescript-standard.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fcodecov%2Ftypescript-standard?ref=badge_large)