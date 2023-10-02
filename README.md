# Serverless Framework with Express and TypeScript Template

## Overview

This template provides a ready-to-use boilerplate for deploying serverless applications to AWS Lambda and API Gateway. It's built with Express for handling HTTP requests and TypeScript for type safety and improved code quality.

## Why Use This Boilerplate?

You could fork this repository, but for an even easier setup, you can use the Serverless Framework's install command. This template includes pre-configured settings for linting, type-checking, and more, making it an ideal starting point for Serverless-Express-TypeScript projects.

## Quick Start

### Installation

First, download this boilerplate to your local machine using the following command:

```bash
serverless install -u https://github.com/46ki75/aws-node-typescript-express -n my-project
```

Note: `my-project` is a placeholder. Replace it with the name you want for your new project.

### Dependency Installation

Navigate to the root folder of your new project and install the necessary npm packages:

```bash
cd my-project  # Replace "my-project" with your chosen project name
npm install
```

### Serverless Framework Setup

Initialize the Serverless Framework to set up your new project:

```bash
serverless
```

This will guide you through configuring your AWS credentials and setting up the environment.

### Running Locally

To run the Express server in your local environment, use:

```bash
npm start
```

This will start the server on a predefined port, and it will be accessible via browser or Postman.

### Development with Live Reloading

For a more productive development experience, use live reloading with nodemon:

```bash
npm run dev
```

This command will start the server and watch for changes in your source files, automatically reloading the server when changes are detected.

## File Descriptions

| File             | Description                                                                                                                                        |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/index.ts`   | Defines and exports the root handler for the Express application. It comes with minimal setup, allowing you to add various logic as you see fit.   |
| `src/server.ts`  | This file enables you to run the Express server in a local environment.                                                                            |
| `src/lambda.ts`  | Exports the handler to be passed to AWS Lambda. This handler wraps your Express application for serverless deployment.                             |
| `serverless.yml` | The configuration file for the Serverless Framework. It contains all the settings needed for deploying your service to AWS Lambda and API Gateway. |

This section gives you an overview of the core files in the project, each serving a specific purpose to make the serverless deployment as smooth as possible. For instance, `src/index.ts` serves as the entry point for your Express application, but it's flexible enough for you to extend its functionalities. `src/server.ts` is useful for local testing and development, whereas `src/lambda.ts` prepares your application for serverless deployment.
