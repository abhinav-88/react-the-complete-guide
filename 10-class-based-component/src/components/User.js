import classes from './User.module.css';
import { Component } from 'react';
// Functional Component
// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };
// Equivalent Class Component for above Functional Compo
class User extends Component {
  render () {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}
export default User;
