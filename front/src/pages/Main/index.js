import React, { Fragment } from "react"; // Novo elemento importado { Fragment }
import './style.css';

class Main extends React.Component {
  //component
  //let history = this.props.history;
 // constructor(props) {
   // super(props)
  //}
    render(){
    return (
      <Fragment>
        <a href="/feed">feed</a>
      </Fragment>
    );
  }
};
export default Main;