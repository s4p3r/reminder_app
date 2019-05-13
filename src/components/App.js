import React, { Component } from 'react';
import '../index.css'
import { connect } from 'react-redux';
import { addReminder } from '../actions';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  addReminder() {
    this.props.addReminder(this.state.text)
  }

  render() {
    return (
      <div className="App">
        <div className="title">Reminder Pro</div>
        <div className="form-inline">
          <div className="form-group mr-2">
            <input type="text" className="form-control" placeholder="I have to ..." onChange = { (event) => this.setState({text: event.target.value })} />
          </div>
          <button className="btn btn-success" onClick={ () => this.addReminder() }>Add Reminder</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    reminders: state
  }
}

export default connect(mapStateToProps, {addReminder})(App);
