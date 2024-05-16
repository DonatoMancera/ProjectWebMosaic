import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import ContactUs from './components/ContactUs'
import { Redirect, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/aboutus" component={AboutUs} />
        <Route exact path="/contactus" component={ContactUs} />
        <Redirect to="/" />
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
