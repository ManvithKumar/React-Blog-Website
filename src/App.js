import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Feedback from './Pages/Feedback';
import Home from './Pages/Home';

function App() {
  return (
<div className="App">
    <Router>
    <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/feedback' component={Feedback}/>
      </Switch>
    <Footer/>
    </Router>
</div>
  );
}

export default App;
