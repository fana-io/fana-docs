---
id: node-sdk-reference
---

# Node SDK Reference

The Node SDK exports two classes:

- `Config` class
- `Client` class

## `Config`

The `Config` class is used to instantiate a `config` object, which is the first step to setting up with the Node SDK.

### `Config` Constructor Parameters:

- `sdkKey`: Expects a **string** representing your SDK key. This is provided in the Dashboard's Settings page.
- `bearerAddress`: Expects a **string** representing the address where the Flag Bearer is being hosted.

### `Config` Instance Methods:

#### `Config.prototype.connect()`

1. Instantiates a `Client` object
2. Asynchronously invokes and awaits the new `Client`'s `getFlags` method
3. Synchronously invokes the new `Client`'s `setStream()` method
4. Returns the `Client` object

## `Client`

The `Client` class is responsible for holding flag data, as well as the essential `evaluateFlags()` method.

### `Client` Constructor Parameters:

- `config`: Expects a **`Config` object**.
- Note that `Config.prototype.connect()` automatically instantiates the `Client` for you, so you needn't do this yourself.

### `Client` Instance Methods:

#### `Client.prototype.getFlags()`

This method sends an initialization GET to the Flag Bearer. The Flag Bearer then returns the latest flag ruleset. The `Client` then stores it in its `flags` instance property.

This method is automatically invoked during `Config.prototype.connect()`. You will not need to invoke this yourself.

#### `Client.prototype.setFlag(newFlag)`

This method simply replaces the `Client`'s `flags` instance property with the new data. This is meant to occur when updates are streamed via the SSE connection with the Flag Bearer.

You will not need to invoke this yourself.

#### `Client.prototype.evaluateFlag(flagKey, userContext, defaultValue)`

This method takes three arguments:

- `flagKey`: Expects a **string** representing the key of the flag that you wish to evaluate.
- `userContext`: Expects an **object** containing the attributes pertaining to a user or session.
  - `{ userId: 'jjuy', beta: true, state: 'CA' }`
  - This is an example. The attributes you provide will be dependent on your setup.
- `defaultValue`: Expects a **boolean** representing what the evaluation should be in cases where flag data is unavailable, or the provided `flagKey` is invalid. This is optional and is `false` by default.

This method processes the User Context against its flag data and returns the evaluation as `true` or `false`.

#### `Client.prototype.setStream()`
////////////
