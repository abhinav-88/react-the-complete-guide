import { Component } from "react";
class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }
  // This lifecycle method will be triggered whenever one of the child components throws an error.
  componentDidCatch(error) {
    console.log(error);
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      return <p>Something went wrong!</p>;
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
