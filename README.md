# fst

[![github release](https://img.shields.io/github/v/release/flex-development/fst.svg?include_prereleases\&sort=semver)](https://github.com/flex-development/fst/releases/latest)
[![npm](https://img.shields.io/npm/v/@flex-development/fst.svg)](https://npmjs.com/package/@flex-development/fst)
[![module type: esm](https://img.shields.io/badge/module%20type-esm-brightgreen)](https://github.com/voxpelli/badges-cjs-esm)
[![license](https://img.shields.io/github/license/flex-development/fst.svg)](LICENSE.md)
[![conventional commits](https://img.shields.io/badge/-conventional%20commits-fe5196?logo=conventional-commits\&logoColor=ffffff)](https://conventionalcommits.org)
[![typescript](https://img.shields.io/badge/-typescript-3178c6?logo=typescript\&logoColor=ffffff)](https://typescriptlang.org)
[![vitest](https://img.shields.io/badge/-vitest-6e9f18?style=flat\&logo=vitest\&logoColor=ffffff)](https://vitest.dev)
[![yarn](https://img.shields.io/badge/-yarn-2c8ebb?style=flat\&logo=yarn\&logoColor=ffffff)](https://yarnpkg.com)

**F**ile **S**ystem **T**ree.

---

**fst** is a specification for representing file systems as [abstract syntax trees][unist-syntax-tree].

It implements the [**unist**][unist] spec.

## Contents

- [Introduction](#introduction)
  - [Where this specification fits](#where-this-specification-fits)
- [Types](#types)
- [Nodes (abstract)](#nodes-abstract)
- [Nodes](#nodes)
- [Content model](#content-model)
- [Glossary](#glossary)
- [List of utilities](#list-of-utilities)
- [Contribute](#contribute)

## Introduction

This document defines a format for representing file systems as abstract syntax trees. Development of fst started in
January 2025. This specification is written in a [TypeScript][]-like grammar.

### Where this specification fits

fst extends [unist][], a format for syntax trees, to benefit from its [ecosystem of utilities](#list-of-utilities).

## Types

TypeScript users can integrate `fst` type definitions into their project by installing the appropriate packages:

```sh
yarn add @flex-development/fst
```

## Nodes (abstract)

**TODO**: nodes (abstract)

## Nodes

**TODO**: nodes

## Content model

**TODO**: content model

## Glossary

See the [unist glossary][unist-glossary] for more terms.

## List of utilities

See the [unist list of utilities][unist-utilities] for more utilities.

- [`fst-util-from-fs`][fst-util-from-fs] — create trees from file systems
- [`unist-util-builder`][unist-util-builder] — build trees
- [`unist-util-inspect`][unist-util-inspect] — inspect trees
- [`unist-util-visit`][unist-util-visit] — visit nodes using [preorder][] or [postorder][] traversal

## Contribute

See [`CONTRIBUTING.md`](CONTRIBUTING.md).

Ideas for new utilities and tools can be posted in [fst/ideas][fst-ideas].

This project has a [code of conduct](CODE_OF_CONDUCT.md). By interacting with this repository, organization, or
community you agree to abide by its terms.

[fst-ideas]: https://github.com/flex-development/fst/discussions/new?category=idea

[fst-util-from-fs]: https://github.com/flex-development/fst-util-from-fs

[postorder]: https://github.com/syntax-tree/unist#postorder

[preorder]: https://github.com/syntax-tree/unist#preorder

[typescript]: https://www.typescriptlang.org

<!-- [unist-child]: https://github.com/syntax-tree/unist#child -->

<!-- [unist-file]: https://github.com/syntax-tree/unist#file -->

[unist-glossary]: https://github.com/syntax-tree/unist#glossary

<!-- [unist-leaf]: https://github.com/syntax-tree/unist#leaf -->

<!-- [unist-node]: https://github.com/syntax-tree/unist#node -->

<!-- [unist-parent]: https://github.com/syntax-tree/unist#parent -->

<!-- [unist-root]: https://github.com/syntax-tree/unist#root -->

[unist-syntax-tree]: https://github.com/syntax-tree/unist#syntax-tree

<!-- [unist-tree]: https://github.com/syntax-tree/unist#tree -->

[unist-util-builder]: https://github.com/flex-development/unist-util-builder

[unist-util-inspect]: https://github.com/flex-development/unist-util-inspect

[unist-util-visit]: https://github.com/flex-development/unist-util-visit

[unist-utilities]: https://github.com/syntax-tree/unist#list-of-utilities

[unist]: https://github.com/syntax-tree/unist
