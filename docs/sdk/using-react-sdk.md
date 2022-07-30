---
id: using-react-sdk
---

# Using the React SDK

1. Install the Fana React SDK in your project by running `npm i fana-react-sdk`
2. Import the following files into your React project's `App.js` file

`import { FanaConfig, FanaProvider } from 'fana-react-sdk'`

3. Use the `FanaSDK`'s `FanaConfig` class constructor to instantiate a `config` object. This constructor takes three arguments:

- **React SDK key** (from your dashboard's settings page)
- The **address** of your Flag Bearer
- **User Context**: This is an object containing the attributes pertaining to the current user

```javascript
const config = new FanaConfig('react_key', 'http://localhost:3001', { userId: 'jjuy', beta: true })
                              ^React SDK Key     ^Flag Bearer Address      ^User Context Object
```

4. Next, wrap your outermost component in the `<FanaProvider>` component. You will pass in your newly created `config` instance as an argument to the `config` prop.

```jsx
function App() {
  return (
    <FanaProvider config={config}>
      <main>
        <Header />
        <Body />
      </main>
    </FanaProvider>
  );
}
```

Now you can evaluate flags in any component you wish! Make sure to import React's `useContext` hook, as well as the `FanaContext`.

Within your component, import React's `useContext` as well as Fana's `FanaContext`. Invoke `useContext(FanaContext)`. This will provide you with the client instance which has access to the `evaluateFlag` method.

```javascript
const fanaClient = useContext(FanaContext);
const betaHeader = fanaClient.evaluateFlag("beta_header", true);
```

The `evaluateFlag` method takes two arguments: the flag key that you wish to evaluate, and an optional argument for a default value.

The optional argument will be false if no value is provided. This optional argument will only apply in cases where it cannot determine the value of the provided flag key. This may happen when connection with the Flag Bearer fails, or if the flag key simply does not exist.

`evaluateFlag` returns `true` or `false` depending on how the user context was evaluated. Use this to determine what experience this particular user should receive.

```jsx
const experienceText = betaHeader ? "beta" : "regular";

return <h1>Welcome to the {experienceText} experience!</h1>;
```

> Note that this is a very simple example. You can use the `evaluateFlag` result to conditionally render entire components rather than just simple strings. Example below:

```jsx
// if the beta_header flag key evaluates to true, render the <BetaHeader> component
// otherwise, render the <RegularHeader> component
return (
  {fanaClient.evaluateFlag("beta_header", true) ?
    <BetaHeader /> :
    <RegularHeader />
  }
)
```
