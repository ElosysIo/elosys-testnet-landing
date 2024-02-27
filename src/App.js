import './App.scss';
import Landing from './components/landing/Landing.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/landing/footer/Footer.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Fauect from './components/Fauect/Fauect.js';


function App() {
  return (
    <>
        <ToastContainer style={{ fontSize: 20 }} />
          <Router>
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route exact path="/faucet" component={Fauect} />
            </Switch>
            {/* <Footer/> */}
          </Router>
    </>
  );
}

export default App;
