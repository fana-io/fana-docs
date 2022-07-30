---
id: node-sdk-reference
---

# Node SDK Reference

The Node SDK exports two classes:

- `FanaConfig` class
- `FanaClient` class

## `FanaConfig`

The `FanaConfig` class is used to instantiate a `config` object, which is the first step to setting up with the Node SDK.

### `FanaConfig` Constructor Parameters:

- `sdkKey`: Expects a **string** representing your Node SDK key. This is provided in the Dashboard's Settings page.
- `bearerAddress`: Expects a **string** representing the address where the Flag Bearer is being hosted.
- `reinitializationInterval`: (Optional) Expects an **integer** representing the number of milliseconds the client should wait between reinitializations. If not provided, there will be no reinitializations. More information about this functionality in the `FanaClient.prototype.getFlags()` section below.

### `FanaConfig` Instance Methods:

#### `FanaConfig.prototype.connect()`

1. Instantiates a `FanaClient` object
2. Has the client instance fetch flag data from Flag Bearer
3. Has the client instance set up SSE connection with Flag Bearer
4. Returns client instance object

## `FanaClient`

The `FanaClient` class generates an object responsible for holding flag data and providing the essential `evaluateFlags()` method.

### `FanaClient` Constructor Parameters:

- `config`: Expects a **`FanaConfig` object**.
- Note that `FanaConfig.prototype.connect()` automatically instantiates the client instance for you, so you needn't do this yourself.

### `FanaClient` Instance Methods:

#### `FanaClient.prototype.evaluateFlag(flagKey, userContext, defaultValue)`

This method takes three arguments:

- `flagKey`: Expects a **string** representing the key of the flag that you wish to evaluate.
- `userContext`: Expects an **object** containing the attributes pertaining to a user or session.
  - `{ userId: 'jjuy', beta: true, state: 'CA' }`
  - This is an example. The attributes you provide will be dependent on your setup.
- `defaultValue`: Expects a **boolean** representing what the evaluation should be in cases where flag data is unavailable or the provided `flagKey` is invalid. This is optional and is `false` by default.

This method processes the User Context against the flag targeting settings and returns the evaluation as `true` or `false`.

> The below methods are called automatically and are only here for reference. You needn't invoke these.

#### `FanaClient.prototype.getFlags()`

This method sends an initialization GET to the Flag Bearer. The Flag Bearer then returns the latest flag ruleset. The client instance then stores it in its `flags` instance property.

This method is automatically invoked during `FanaConfig.prototype.connect()`.

> ##### On Reinitializations/Syncing
>
> Network failures can potentially cause the SDK to fall out of sync as it may miss an update streamed from the Flag Bearer. To help with this, you can specify a `reinitializationInterval` when you instantiate your `FanaConfig` object for the first time. At each interval, the SDK will call `getFlags` again, refreshing its internal flagset with the latest data.

#### `FanaClient.prototype.setFlag(newFlagKey, newFlagData)`

This method simply updates the client instance's `flags` instance property with the new data. This occurs when updates are streamed via the SSE connection with the Flag Bearer.

#### `FanaClient.prototype.setStream()`

This method sets up an event source stream with the Flag Bearer. This allows for the client instance to receive real-time updates to flag data.
