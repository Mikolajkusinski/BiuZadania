import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const NotFound = ({location}) => {
  return <div>Nie znaleziono elementu: {location.pathname}</div>;
};

const Home = () => {
  return <div>Strona główna</div>;
};

const About = () => {
  return <div>O nas</div>;
};

const Services = () => {
  return <div>Usługi</div>;
};

const Contact = () => {
  return <div>Kontakt</div>;
};

const ContactUs = () => {
  return <div>Kontakt - O nas</div>;
};

const ContactPl = () => {
  return <div>Kontakt - PL</div>;
};

const ContactDe = () => {
  return <div>Kontakt - DE</div>;
};

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Strona główna</Link>
            </li>
            <li>
              <Link to="/about">O nas</Link>
            </li>
            <li>
              <Link to="/services">Usługi</Link>
            </li>
            <li>
              <Link to="/contact">Kontakt</Link>
            </li>
            <li>
              <Link to="/contact/us">Kontakt - US</Link>
            </li>
            <li>
              <Link to="/contact/pl">Kontakt - PL</Link>
            </li>
            <li>
              <Link to="/contact/de">Kontakt - DE</Link>
            </li>
          </ul>
        </nav>
          <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/contact/us" component={ContactUs} />
          <Route path="/contact/pl" component={ContactPl} />
          <Route path="/contact/de" component={ContactDe} />
          <Route component={NotFound} />
          </Switch>
      </div>
    </Router>
  );
};

export default App;
