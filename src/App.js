import Footer from './Airbnb/Footer';
import Header from './Airbnb/Header';
import Home from './Airbnb/Home';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import SearchPage from './Airbnb/SearchPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
          <Switch>

            <Route path='/search'>
              <SearchPage/>
            </Route>

            <Route path='/'>
              <Home/>
            </Route>

          </Switch>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
