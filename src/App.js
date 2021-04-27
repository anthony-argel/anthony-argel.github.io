import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/home';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Switch>
          <Route exact path='/'><Home/></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
