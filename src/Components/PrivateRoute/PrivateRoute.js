import {React, useState} from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();
  const [input, setInput] = useState("");

  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? (
          <Component
            {...props}
            user={currentUser}
            inputProp={input}
            setInputProp={setInput}
          />
        ) : (
          <Redirect to="/login" />
        );
      }}
    ></Route>
  );
}
