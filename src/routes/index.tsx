import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { loadPeople, loadStarships } from "../utils";
import History from "../pages/History";
import Play from "../pages/Play";

function Routes() {
  const [people, setPeople] = useState<person[]>([]);
  const [starships, setStarships] = useState<starship[]>([]);
  const [stack, setStack] = useState<stack>([]);

  useEffect(() => {
    loadPeople(setPeople);
    loadStarships(setStarships);
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/history">
          <History stack={stack} />
        </Route>
        <Route path="/">
          <Play setStack={setStack} people={people} starships={starships} stack={stack} />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
