import React, { Component } from "react";
import { connect } from "react-redux"; /* code change */
import "./App.css";

class App extends Component {

    handleOnClick = () => {
        this.props.dispatch({
          type: "INCREASE_COUNT",
        });
    }

    render() {
        return (
            <div className="App">
                <button onClick={this.handleOnClick}>Click</button>
                <p>{this.props.clicks}</p> {/* code change */}
            </div>
        );
    }
	// state is no longer being directly passed down to App because of Provider
}

const mapStateToProps = (state) => {
    return { clicks: state.clicks };
};

export default connect(mapStateToProps)(App);
// The connect function is taking care of task 1; it is synced up to our store, listening to each change in the state that occurs. When a change occurs, it calls a function that we write called mapStateToProps(), and in mapStateToProps() we specify exactly which slice of the state we want to provide to our component. Here, we want to provide state.clicks, and allow our component to have access to them through a prop called clicks. We are then able to render the number of clicks in our render method using this.props.clicks. 