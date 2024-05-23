import './App.css';
import AboutUs from './components/AboutUs/AboutUs.jsx'
import Home from "./components/Home/Home.jsx"
import NavBar from "./components/NavBar/NavBar.jsx"
import Footer from "./components/Footer/footer.jsx"
import ContactUs from './components/ContactUs/ContactUs.jsx'
import Services from "./components/Services/AboutUs.jsx"
import { Redirect, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar/>
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
