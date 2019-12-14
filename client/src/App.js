import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import home from "./pages/home";
import search from "./pages/search";
import addItems from "./pages/addItems";
import inviteFriends from "./pages/inviteFriends";
import cart from "./pages/cart";

import NavIn from "./components/NavIn";
import NavOut from "./components/NavOut";

import { useAuth0 } from "./react-auth0-spa";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

import "./components/Slider/style.css";

function App() {
  const { isAuthenticated, loading } = useAuth0();

  const slides = [
    {
      title: '209 to 254 pounds',
      description: 'of food thrown away each year'
    },
    {
      title: '40% of food',
      description: 'in the US is never eaten'
    },
    {
      title: 'If the US wasted just 5% less food',
      description: 'it would be enough to feed 4 million Americans'
    },
    {
      title: '$750 million per year',
      description: 'just to dispose of the food tossed in the trash'
    }
  ];

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div>
        {/* <NavBar /> */}
        {isAuthenticated
          ? <React.Fragment>
            <NavOut />
            <div>
              {/* <Nav /> */}
              <Slider>
                {slides.map((slide, index) =>
                  <div
                    key={index}
                    className="slider-content"
                  >
                    <div className="inner">
                      <h1>{slide.title}</h1>
                      <h3>{slide.description}</h3>
                    </div>
                  </div>
                )}
              </Slider>
              <Switch>
                <Route exact path="/" component={home} />
                <Route exact path="/search" component={search} />
                <Route exact path="/addItems" component={addItems} />
                <Route exact path="/inviteFriends" component={inviteFriends} />
                <Route exact path="/cart" component={cart} />
              </Switch>
            </div>
          </React.Fragment>
          : <React.Fragment>
            <NavIn />
            <Slider>
              {slides.map((slide, index) =>
                <div
                  key={index}
                  className="slider-content"
                >
                  <div className="inner">
                    <h1>{slide.title}</h1>
                    <h3>{slide.description}</h3>
                  </div>
                </div>
              )}
            </Slider>
            <Switch>
              {/* <Route exact path="/" component={Carousel} /> */}
              <Route exact path="/" component={home} />
            </Switch>
          </React.Fragment>
        }
      </div>
    </Router>
  );
}


export default App;
