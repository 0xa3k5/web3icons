# @token-icons/utils

`@token-icons/utils` is a suite of utility scripts and shared functionalities designed to support the development of the `token-icons` project. It contains a variety of build and optimization tasks for handling SVG assets and generating TypeScript types and React components for the other packages in `token-icons`.

- `core:optimize-svgs`: optimizes SVG files for `@token-icons/core`
- `core:svgs-module`: generate svg module for `@token-icons/core`
- `core:index`: generates index file for `@token-icons/core`
- `react:components`: generates optimized React components fro `@token-icons/react`
- `react:index`: generates index file for `@token-icons/react`
- **Component Scaffolding**: Tools for generating base React components and type definitions.
- **Metadata Generation**: Utilities for creating and managing token metadata.

## Usage

The scripts in `@token-icons/utils` are primarily intended for internal use within the `token-icons` project. They are invoked as part of the build processes of other packages like `@token-icons/core` and `@token-icons/react`.
