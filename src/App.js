import React, { useState } from "react";

import "./App.css";

import Button from "./components/Button";

function App() {
  const [counter, setCounter] = useState(0);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const incrementCounter = (n) => () => {
  //   setCounter(counter + n);
  // };

  // const decrementCounter = (n) => () => {
  //   setCounter(counter - n);
  // };

  function incrementCounter(n) {
    return function () {
      setCounter((state) => state + n);
      // setCounter(counter + n);
    };
  }

  function decrementCounter(n) {
    return function () {
      setCounter((state) => state - n);
      // setCounter(counter - n);
    };
  }

  console.log("email", email);
  console.log("password", password);

  return (
    <div className="App">
      <h1>My Birkbeck Project</h1>
      <Button name="Login" onClick={() => alert("Successfully logged in")} />
      <Button name="Register" onClick={() => alert("Successfully registered")} />
      <Button name="Contact" onClick={() => alert("Successfully entered contact page")} />

      <div id="counter">
        <Button name="-10" onClick={decrementCounter(10)} />
        <Button name="-5" onClick={decrementCounter(5)} />
        <Button name="-1" onClick={decrementCounter(1)} />
        <h2>{counter}</h2>
        <Button name="+1" onClick={incrementCounter(1)} />
        <Button name="+5" onClick={incrementCounter(5)} />
        <Button name="+10" onClick={incrementCounter(10)} />
      </div>

      <div id="registration-form">
        <form onSubmit={() => alert(`Successfully logged in as ${email} with ${password}`)}>
          <div className="email-input">
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="password-input">
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <Button type="submit" name="Log in" />
        </form>
      </div>
    </div>
  );
}

export default App;
