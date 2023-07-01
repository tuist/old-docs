# Documentation 📄

[![Netlify Status](https://api.netlify.com/api/v1/badges/dee914f4-76ce-48db-9803-d1a1279c6289/deploy-status)](https://app.netlify.com/sites/tuist-docs/deploys)
[![Tuist Docs](https://github.com/tuist/docs/actions/workflows/docs.yml/badge.svg)](https://github.com/tuist/docs/actions/workflows/docs.yml)

Tuist's documentation is powered by [Docusaurus](https://docusaurus.io). Originally, this documentation resided in the [tuist/tuist](https://github.com/tuist/tuist) repository but was eventually moved to its own repository. This move was made to reduce the complexity of the monorepo's setup and to make the repository more accessible for contributions.

## Development

### Set up

1. Git clone the repository: `git clone git@github.com:tuist/docs.git`.
2. Install dependencies: `pnpm install`.
3. Run: `pnpm start`

### System dependencies

- Node 20.3.1
- PNPM 8.6.5

## Deployment

Every commit in `main` is continuously deployed and accessible via [docs.tuist.io](https://docs.tuist.io).
