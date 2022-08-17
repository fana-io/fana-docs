---
id: getting-started
slug: "/getting-started"
---

# Getting Started

There are two options to deploy Fana to get started quickly.

- [Docker](#using-docker): Developers interested in using Fana in a self-hosted environment (non-AWS) or are interested in testing out Fana in their local development environment can deploy the entire Fana stack with one command using Docker.
- [Cloud deployment](#using-fanas-javascript-cdk): Developers that are already familiar with the AWS environment can quickly deploy the Fana stack using the provided AWS Cloud Development Kit (CDK) template.

## Using Docker

This option works well for teams that want to test Fana out in a local developement environment or would like to run Fana on self-hosted infrastructure.

1. Navigate to the `Fana-Docker` directory.

```bash
$ cd Fana-Docker
```

2. Edit the`.env` file to the appropriate environment variable configurations for connecting to the PostgreSQL database. A template `.env` with defaults has been provided.
3. To deploy, run the following command in the same directory as the `docker-compose.yml`:

```bash
$ docker-compose up -d
```

4. Navigate to `localhost:3000` to access the developer dashboard. The Flag Bearer is available for SDK connections at `localhost:3001`.

## Using Fana's Javascript CDK

Fana's CDK uses the Elastic Container Services hosted on AWS Fargate, a serverless, pay as you go compute engine.

## Prerequisite

To use the CDK App, you need the following:

- AWS CLI installed and configured with your credentials and AWS region.
- Bootstrap (create dedicated Amazon S3 buckets and other containers to be available to AWS CloudFormation during deployment) using:

```bash
$ npm install -g aws-cdk
$ cdk boostrap aws://YOUR-ACCOUNT-NUMBER/YOUR-REGION
```

## Deploy Fana App

1. Navigate to the `Fana-CDK` directory.

```bash
$ cd Fana-CDK
```

2. Run `cdk list` to list the stacks in the app.

```bash
$ cdk list
```

3. Deploy the Fana App and related stacks to AWS

```bash
$ cdk deploy --all
```

4. Use the load balancer DNS output to access the UI dashboard. Port over the load balancer URI into the SDKs configuration to specify Flag Bearer endpoint.

### Resources Deployed

There are two different stacks defined in our CDK:

1. `fana-shared-resources` which includes:

- AWS VPC and subnets
- an ECS cluster
- an instance of Relational Database Service (RDS), and
- an Elasticache Redis cluster.

2. `FanaPlatformStack` includes:

- the Fana Manager and Bearer containers defined as tasks for the Fargate service,
- the application load balancer configured with listener rules, and
- the security groups.

The `fana-shared-resources` are referenced in the `FanaPlatformStack`.
