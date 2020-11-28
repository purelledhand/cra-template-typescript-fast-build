# cra-template-typescript-fast-build

[![npm version](https://badge.fury.io/js/cra-template-typescript-fast-build.svg)](https://badge.fury.io/js/cra-template-typescript-fast-build)

The Create React App TypeScript template for improving build performance. 🚀

> Original Create React App README available [here](./README_CRA.md)

## Usage

```bash
yarn create react-app your-project-name --template typescript-fast-build
```

```bash
npx create-react-app your-project-name --template typescript-fast-build
```

## Motivation

As the CRA project's scale grows and crosses the threshold, the build speed will exponentially slow. This is because the CRA built-in plugin in charge of the TS type check process is slow.

This template removes the plugin and provides a lighter and faster type check process, providing 10 times faster speed than the existing CRA built-in plugin.