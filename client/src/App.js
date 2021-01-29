

import './App.css';
import FirstPage from './Components/FirstPage';
import Header from './Components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (<>
	<Router>
	<Switch>
	<Route exact path="/"> 
		
	<Header/>
	<FirstPage/>
	</Route>
 
	</Switch>
	</Router>
	</>
  );
}

export default App;
