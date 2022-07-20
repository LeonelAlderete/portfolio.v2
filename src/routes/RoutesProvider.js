import React from "react";
//Routes
import { BrowserRouter as Provider, Switch, Route } from "react-router-dom";
import routes from "./routes";

export default function RoutesProvider() {
  
  return (
    <Provider>
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            render={(props) =>
              route.layout ? (
                <route.layout>
                  <route.component {...props} />
                </route.layout>
              ) : (
                <route.component {...props} />
              )
            }
          />
        ))}
      </Switch>
    </Provider>
  );
}
