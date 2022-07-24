---
id: using-node-sdk
---

# Using the Node SDK

1. Install the Fana Node SDK in your project by running _npm command_
2. Import it into whichever files you will be evaluating flags in.

`const FanaSDK = require('fana-node-sdk')`

3. Use the `FanaSDK`'s `Config` class constructor to instantiate a `config` object. This constructor takes two arguments:

- **SDK key** (from your dashboard's settings page)
- The **address** of your Flag Bearer

```javascript
// the sdk key is hard-coded here, but you should have it as an environment variable for security reasons
const config = new FanaSDK.Config('sdk_key_0', 'http://localhost:3001')
                                   ^SDK Key     ^Flag Bearer Address
```

4. Next, you need to instantiate the `Client` by calling `config.connect()`. This will create a `Client` instance. Note that this is an asynchronous action, so you will need to use `async/await` or promises to perform this step:

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

Now you can use the `client.evaluateFlag()` method. It takes three arguments:

- The flag key that you wish to evaluate
- The user context object
- An optional argument for a default value

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
