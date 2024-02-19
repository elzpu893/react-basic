import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import home from './screens/Home';
 
function App() {
  return (
    <Router>
      <Route path='/' component={home} exact/>
      <Route path='/homescreen' component={home} exact/>
    </Router>
  );
}

export default App;
