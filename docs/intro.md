---
slug: "/"
id: intro
sidebar_position: 2
---

# Introduction

![Fána logo](/img/fana_logo_color_forwhitebg.png)

## Welcome to Fána!👋

Fána is an open-source feature flagging platform specializing in audience targeting. Using Fána's robust audience targeting capabilities, developers can build confidence in their feature releases by progressively deploying to larger subsets of users and controlling feature toggles in real-time.

📃 To read more about why and how we built Fána, check out our [technical case study](https://Fana-io.github.io/).

## Getting Started

- 🐳 Deploy locally in one step [using Docker](https://github.com/fana-io/fana-deploy#using-docker), or
- ☁️ Use [Fána's AWS Cloud Development Kit](https://github.com/fana-io/fana-deploy#using-fanas-javascript-cdk)

## About Fána

Fána offers a simple, straightforward frontend interface to manage flags and their audiences, making for an intuitive user experience with a minimal learning curve. Fána allows developers to selectively serve experiences to particular audiences, while allowing for remote toggling in real-time.

### Fána Entities

Fána has three closely related entities at its core: Attributes, Audiences, and Flags. Together, they enable Fána users to target intentional segments of users within their application. To get started using Fána, users should first create these entities in the Fána dashboard.

- Attributes are qualities that serve to describe a user. The values can be of data types strings, numbers, or booleans, and are used to evaluate a user’s eligibility against the conditions within an audience.
- Audiences are reusable collections of logical conditions.
  - Conditions are made up of attributes, operators, and a target value.
  - Users can create robust audiences by evaluating conditions with the `ANY` or `ALL` combinations.
- Flags are the core entity of Fána. Each flag is meant to represent a specific feature that the Fána user wishes to test.
  - Flags are toggled off by default when created
  - Users can specify audiences within a flag to target specific users

### Architecture

At a high level, Fána's main components are:

1. [Manager Platform](https://github.com/Fana-io/Fana-manager):

- Backend API & PostgreSQL database
- React dashboard UI for developers to manage feature flags and create audiences

2. Fána Software Development Kits (SDKs) to embed in either client-side or server-side applications that want to use Fána's feature flagging service

- [React](https://github.com/Fana-io/Fana-react-sdk)
- [NodeJS](https://github.com/Fana-io/Fana-node-sdk)

3. [Flag Bearer](https://github.com/Fana-io/Fana-flag-bearer) reverse proxy designed to stream and serve flag data to SDKs
