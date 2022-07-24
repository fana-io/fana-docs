---
id: react-sdk-reference
---

# React SDK Reference

The React SDK exports four pieces of functionality:

- `Config` class
- `FanaClient` class
- `Provider` React component
- `FanaContext` React context

## `Config`
The `Config` class is used to instantiate a `config` object, which is the first step to setting up with the React SDK.

### `Config` Constructor Parameters:
- `sdkKey`: Expects a **string** representing your SDK key. This is provided in the Dashboard's Settings page. 
- `bearerAddress`: Expects a **string** representing the address where the Flag Bearer is being hosted.
- `userContext`: Expects an **object** containing the attributes pertaining to a user or session.
  - `{ userId: 'jjuy', beta: true, state: 'CA' }`
  - This is an example. The attributes you provide will be dependent on your setup. 

### `Config` Instance Methods:
#### `Config.prototype.connect()`
1. Instantiates a `Client` object
2. Asynchronously invokes and awaits the new `Client`'s `getEvals` method
3. Returns the `Client` object

## `Client`
The `Client` class is responsible for holding flag evaluation data, as well as the essential `evaluateFlags()` method.

### `Client` Constructor Parameters:
- `config`: Expects a **`Config` object**. 
- Note that `Config.prototype.connect()` automatically instantiates the `Client` for you, so you needn't do this yourself.

### `Client` Instance Methods:
#### `Client.prototype.getEvals()`
This method sends the User Context object to the Flag Bearer in a POST request. The Flag Bearer then evaluates all flags based on the provided User Context, and returns an object containing those evaluations. The `Client` then stores it in its `evals` instance property.

This method is automatically invoked during `Config.prototype.connect()`. You will not need to invoke this yourself.

> It's important that the React SDK Client never has access to the raw ruleset since it can contain sensitive user information. This is why the Flag Bearer pre-evaluate all flags, and the Client only holds that evaluation data.

#### `Client.prototype.setEval(newEval)`
This method simply updates the `Client`'s `evals` instance property with new evaluation data. This is meant to occur when updates are streamed via the SSE connection with the Flag Bearer.

You will not need to invoke this yourself.

#### `Client.prototype.evaluateFlag(flagKey, defaultValue)`
This method takes two arguments:
- `flagKey`: Expects a **string** representing the key of the flag that you wish to evaluate.
- `defaultValue`: Expects a **boolean** representing what the evaluation should be in cases where flag data is unavailable, or the provided `flagKey` is invalid. This is optional and is `false` by default.

This method returns `true` or `false` based on the evaluation data held in the `Client` instance.

## `Provider` and `FanaContext`
`Provider` is a React Component that you use to wrap your other app components. It provides access to the `FanaContext` for all of your React components, allowing you to use the `Client`'s `evaluateFlag()` method anywhere.

The `Provider` component also sets up an `EventSource` with the Flag Bearer to allow for real-time flag updates. 
> Currently, only flags being toggled OFF will be streamed in real time. If the user refreshes the page, however, they will be re-initialized with all of the latest updates.

To get access to the `Client`'s `evaluateFlag()` method in your components, simply use React's `useContext` hook and supply it with the `FanaContext` imported from the Fana React SDK. This will return the `Client` object with access to the `evaluateFlag()` method. 

For code examples, see the section on [Using the React SDK](using-react-sdk.md).