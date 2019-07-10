import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import FormsPage from './components/projects/AddProject';
import ListProducts from './components/projects/ListProduct';
import PreviewProduct from './components/projects/PreviewProject';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar name="Ogechi" />
          <Switch>
            <Route exact path="/" component={FormsPage} />
            <Route path="/add" component={FormsPage} />
            <Route path="/products" component={ListProducts} />
            <Route path="/preview" component={PreviewProduct} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
