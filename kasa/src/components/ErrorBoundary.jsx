// ErrorBoundary.jsx

import React, { Component } from 'react';
import ErrorPage from './ErrorPage';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: '' };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error, errorInfo) {
    // Vous pouvez aussi logguer l'erreur dans un service de rapport d'erreurs
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorPage message={this.state.errorMessage} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
