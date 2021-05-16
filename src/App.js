import Sidebar from "./components/sidebar/Sidebar";
import Feed from "./components/feed/Feed";
import SignInSignUp from "./components/signin-signup/SignInSignUp";

import "./App.css";
const App = () => {
  return (
    <div className="app">
      {/* <h1>Asserter</h1> */}
      <Sidebar className="app__sidebar" />
      <Feed className="app__feed" />
      <SignInSignUp className="app__auth" />
    </div>
  );
};

export default App;
