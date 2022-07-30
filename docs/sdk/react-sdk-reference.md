---
id: react-sdk-reference
---

# React SDK Reference

The React SDK exports four pieces of functionality:

- `FanaConfig` class
- `FanaClient` class
- `FanaProvider` React component
- `FanaContext` React context

## `FanaConfig`

The `FanaConfig` class is used to instantiate a `config` object which is the first step to getting set up with the React SDK.

### `FanaConfig` Constructor Parameters:

- `sdkKey`: Expects a **string** representing your React SDK key. This is provided in the Dashboard's Settings page.
- `bearerAddress`: Expects a **string** representing the address where the Flag Bearer is being hosted.
- `userContext`: Expects an **object** containing the attributes pertaining to a user or session.
  - `{ userId: 'jjuy', beta: true, state: 'CA' }`
  - This is an example. The attributes you provide will be dependent on your setup.

### `FanaConfig` Instance Methods:

#### `FanaConfig.prototype.connect()`

1. Instantiates a `FanaClient` instance
2. Asynchronously invokes and awaits the new client instance's `getEvals` method
3. Returns the client instance object

- Note that this method is automatically invoked when the `FanaProvider` component is passed the `config` prop. You will not need to invoke `FanaConfig.prototype.connect()` yourself.

## `FanaClient`

The `FanaClient` class instantiates an object responsible for holding flag evaluation data and providing the essential `evaluateFlags()` method.

### `FanaClient` Constructor Parameters:

- `config`: Expects a **`FanaConfig` instance**.
- Note that `FanaConfig.prototype.connect()` automatically instantiates the client instance for you, so you needn't do this yourself.

### `FanaClient` Instance Methods:

#### `FanaClient.prototype.evaluateFlag(flagKey, defaultValue)`

This method takes two arguments:

- `flagKey`: Expects a **string** representing the key of the flag that you wish to evaluate.
- `defaultValue`: Expects a **boolean** representing what the evaluation should be in cases where flag data is unavailable, or the provided `flagKey` is invalid. This is optional and is `false` by default.

This method returns `true` or `false` based on the evaluation data held in the client instance.

> The below methods are called automatically and are only here for reference. You needn't invoke these.

#### `FanaClient.prototype.getEvals()`

This method sends the User Context object to the Flag Bearer in a POST request. The Flag Bearer then evaluates all flags based on the provided User Context, and returns an object containing those evaluations. The client instance then stores it in its `evals` instance property.

This method is automatically invoked during `Config.prototype.connect()`.

> It's important that the React SDK Client never has access to the raw ruleset since it can contain sensitive user information. This is why the Flag Bearer pre-evaluate all flags before sending any data to the client.

#### `FanaClient.prototype.setEval(newEval)`

This method simply updates the client instance's `evals` instance property with new evaluation data. This occurs when updates are streamed via the SSE connection with the Flag Bearer.

## `FanaProvider` and `FanaContext`

`FanaProvider` is a React Component that you use to wrap your other app components. It provides access to the `FanaContext` for all of your React components, allowing you to use the client instance's `evaluateFlag()` method anywhere.

The `FanaProvider` component takes a `config` prop where you should pass your initialized `FanaConfig` instance. It will then take care of setting up the `FanaClient` instance based on the `config` settings. It also creates a React Context (holding the client instance object), which you can access via the `FanaContext` export.

The `FanaProvider` component also sets up an `EventSource` with the Flag Bearer to allow for real-time flag updates.

> Currently, only flags being toggled OFF will be streamed in real time. If the user refreshes the page, however, the SDK instance will be reinitialized with all of the latest updates.

To get access to the client instance's `evaluateFlag()` method in your components, simply use React's `useContext` hook and supply it with the `FanaContext` imported from the Fana React SDK. This will return the client instance object with access to the `evaluateFlag()` method.

For code examples, see the section on [Using the React SDK](using-react-sdk.md).
