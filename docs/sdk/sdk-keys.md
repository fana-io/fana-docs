---
id: sdk-keys
---

# SDK Keys

In order to properly connect your SDK to your Flag Bearer instance, you will need to provide the instantiation methods with an SDK key. This is used to authorize your app's connection with the Flag Bearer.

> Note: If the SDK key is not valid, the connection will fail and your evaluations will all return default values. You can set the default value at each `evaluateFlag` invocation, but will be `false` if not provided.

Example of the SDK key being used to instantiate a Node SDK:

```js
const config = new FanaSDK.Config('sdk_key_0', 'http://localhost:3001')
                                   ^SDK Key     ^Flag Bearer Address
```

Here, the SDK key is being hardcoded, but you should keep it in an environment variable for security.

To find your SDK key, go to your Manager Dashboard and navigate to the Settings page. Your SDK key can be copied with a click.

// image of the settings page here

![img alt](/img/docusaurus.png)

You also have the option of regenerating your SDK key. However, be advised that this will invalidate your current SDK key, so do this with caution.
