import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error here or report it to an error tracking service.
    console.error("Error caught by error boundary:", error);
  }

  render() {
    if (this.state.hasError) {
      // You can render a custom error UI here.
      return <p>Something went wrong.</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
