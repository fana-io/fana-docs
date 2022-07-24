---
id: using-react-sdk
---

# Using the React SDK

1. Install the Fana React SDK in your project by running _npm command_
2. Import it in your React project's `App.js` file

`import { FanaSDK } from 'fana-react-sdk'`

3. Use the `FanaSDK`'s `Config` class constructor to instantiate a `config` object. This constructor takes three arguments:

- **SDK key** (from your dashboard's settings page)
- The **address** of your Flag Bearer
- **User Context**: This is an object containing the attributes pertaining to the current user

```javascript
const config = new FanaSDK.Config('sdk_key_0', 'http://localhost:3001', { userId: 'jjuy', beta: true })
                                   ^SDK Key     ^Flag Bearer Address      ^User Context Object
```

4. Next, wrap your outermost component in the `<FanaSDK.Provider>` component. You will pass in your newly created `config` object as an argument to the `config` prop.

```javascript
function App() {
  return (
    <FanaSDK.Provider config={config}>
      <main>
        <Header />
        <Body />
      </main>
    </FanaSDK.Provider>
  );
}
```

Now you can evaluate flags in any component you wish! Make sure to import React's `useContext` hook, as well as the `FanaSDK`.

Within your component, call `useContext(FanaSDK.FanaContext)`. This will provide you with the SDK client, which has access to the `evaluateFlag` method.

```javascript
const sdkClient = useContext(FanaSDK.FanaContext);
const betaHeader = sdkClient.evaluateFlag("beta_header", true);
```

The `evaluateFlag` method takes two arguments: the flag key that you wish to evaluate, and an optional argument for a default value.

The optional argument will be false if no value is provided. This optional argument will only apply in cases where it cannot determine the value of the provided flag key. This may happen when connection with the Flag Bearer fails, or if the flag key simply does not exist.

`evaluateFlag` returns `true` or `false` depending on how the user context was evaluated. Use this to determine what experience this particular user should receive.

```javascript
const experienceText = betaHeader ? "beta" : "regular";

return <h1>Welcome to the {experienceText} experience!</h1>;
```
