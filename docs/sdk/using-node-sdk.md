---
id: using-node-sdk
---

# Using the Node SDK

1. Install the Fana Node SDK in your project by running `npm i fana-node-sdk`
2. Import the `FanaConfig` file into whichever files you will be evaluating flags in

`const { FanaConfig } = require('fana-node-sdk');`

3. Use the `FanaConfig` class constructor to instantiate a `config` object. This constructor takes three arguments:

- (string) **Node SDK key** (from your dashboard's settings page)
- (string) The **address** of your Flag Bearer
- (number, optional) Desired **Reinitialization Interval**
  - You can leave this blank if you do not wish for the SDK to reinitialize. You can find more information about this in the [Node SDK Reference](node-sdk-reference.md)

```javascript
// the sdk key is hard-coded here, but you should have it as an environment variable for security purposes
const config = new FanaConfig('node_key', 'http://localhost:3001', 3600000)
                                ^Node SDK Key  ^Flag Bearer Address   ^Reinitialization Interval
```

4. Next, instantiate a `FanaClient` instance by calling `config.connect()`. Note that this is an asynchronous action, so you will need to use `async/await` or promises to perform this step:

```javascript
// with async/await
let client;

const initializeFanaSDK = async () => {
  client = await config.connect();
};

initializeFanaSDK();

// with promises
let client;

config.connect().then((c) => {
  client = c;
});
```

Now you can use the `FanaClient.prototype.evaluateFlag()` method. It takes three arguments:

- (string) The flag key that you wish to evaluate
- (object) The user context object
- (boolean) An optional argument for a default value

```javascript
app.get("/", (req, res) => {
  // note that the context object is hard-coded here.
  // you will most likely be generating this dynamically
  const userContext = { userId: "jjuy", beta: true };

  if (client.evaluateFlag("beta_processor", userContext, true)) {
    // execute beta processing
  } else {
    // execute regular processing
  }
});
```
