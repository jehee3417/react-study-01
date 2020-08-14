import React, { createContext, useMemo, useReducer, useEffect} from 'react';
import {BrowserRouter, HashRouter, Route, Link, Switch} from 'react-router-dom';
import GameMatcher from "./GameMatcher"

const Games = () => {
  return (
    // <div>test</div>
    <BrowserRouter>
      <div>
        <Link to="/game/Baseball">baseball</Link>
      </div>
      <div>
        <Link to="/game/ResponseCheck">response</Link>
      </div>
      <div>
        <Link to="/game/Lotto">lotto</Link>
      </div>
      <div>
        <Link to="/game/Amugoto">amugoto</Link>
      </div>
      <p></p>
      <div>
        {/* <Route path="/game/:name" component={() => <GameMatcher props="123123111" />}></Route> */}
        <Switch>
          <Route exact path="/" render={(props) => <GameMatcher {...props} />}></Route>
          <Route path="/game/:name" render={(props) => <GameMatcher {...props} />}></Route>
          <Route path="/game/Baseball" render={(props) => <GameMatcher {...props} />}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default Games;