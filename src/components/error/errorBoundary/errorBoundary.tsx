import { Component, ErrorInfo } from "react";
import ErrorPage from "../errorPage/errorPage";

type ErrorBoundaryProps = {
  children: React.ReactNode;
};
type ErrorBoundaryState = {
  hasError: boolean;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  handleResetError = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorPage onResetError={this.handleResetError} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
