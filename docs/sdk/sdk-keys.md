---
id: sdk-keys
---

# SDK Keys

In order to properly connect your SDK to your Flag Bearer instance, you will need to provide the instantiation methods with an SDK key. This is used to authorize your app's connection with the Flag Bearer.

You are provided one Node SDK Key and one React SDK Key. You must use them in the appropriate SDK.

> Note: If the SDK key is not valid, the connection will fail and your evaluations will all return default values. You can set the default value at each `evaluateFlag` invocation, but will be `false` if not provided.

Example of the SDK key being used to instantiate a Node SDK:

```js
const config = new FanaSDK.Config('node_key', 'http://localhost:3001')
                                   ^Node SDK Key  ^Flag Bearer Address
```

Here, the SDK key is being hardcoded, but you should keep it in an environment variable for security.

To find your SDK keys, go to your Manager Dashboard and navigate to the Settings page. Each SDK key can be copied with a click.

![img alt](/img/settings.png)

You also have the option of regenerating your SDK keys. However, be advised that this will invalidate the current one, so do this with caution.
