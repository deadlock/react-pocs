import React, { Component } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  Redirect,
} from "react-router-dom";
import Courses from "./containers/Courses/Courses";
import Users from "./containers/Users/Users";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <nav>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                <li style={{ marginRight: "10px" }}>
                  <NavLink to="/courses">Courses</NavLink>
                </li>
                <li>
                  <NavLink to="/users">Users</NavLink>
                </li>
              </ul>
            </nav>
          </header>

          <Switch>
            <Redirect from="/all-courses" to="/courses" />
            <Route path="/courses" component={Courses} />
            <Route path="/users" component={Users} />
            <Route render={() => <h1>401 - Page not found</h1>} />}
            <Route path="/" />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
