import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect, withRouter } from 'react-router-dom';
import SWFPage from '../components/pages/SWF';
import DOTEPage from '../components/pages/DOTE';
import '../App.css';

/*class AppRouter extends React.Component {
    constructor(props){
        super(props);
      
    }
  render() {

    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route
            path="/"
            render={(props) => {
              if (this.isLoggedIn()) {
                return <LoggedInRoutes {...props} />;
              } else {
             
                sessionStorage.setItem('path', props.location.pathname);
                return <Redirect to="/login" />;
              }
            }}
          />
        </Switch>
      </Router>
    );
  }

  isLoggedIn() {
    return sessionStorage.getItem('user') != null;
  }
}

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', validated: false, counter: 0 };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }
  
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    const password = 'monkey';
    sessionStorage.setItem('user', 1);
    if (this.state.counter > 9) {
      alert('Too many tries');
      return;
    }
    if (this.state.value === password) {
      this.setState({ validated: true });
    } else {
      this.setState({ counter: this.state.counter + 1 });
    }

    // alert('A name was submitted: ' + this.state.value);

    event.preventDefault();
  }
  render() {
    if (this.state.validated === true) {
      return <Redirect to= {sessionStorage.getItem('path')} />;
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
  isLoggedIn() {
    return sessionStorage.getItem('user') != null;
  }
}

class LoggedInRoutes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/dote" component={DOTEPage} />
        <Route path="/" component={SWFPage} />
      </Switch>
    );
  }
}
*/
const AppRouter = (props) => (
  <Router>
    <div>
      <Switch>
        <Route path="/" component={SWFPage} exact={true}/>
        <Route path="/dote" component={DOTEPage}/>
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
