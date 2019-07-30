import React, { Component } from "react";
import Loader from "../components/common/loader/loader";
export const Loading = loadingMessage => WrappedComponent =>
  class extends Component {
    componentDidMount() {
        this.props.fetchData();
    }
    render() {
      return this.props.isloading ? (
        <Loader>{loadingMessage}</Loader>
      ) : (
        <WrappedComponent {...this.props} />
      );
    }
  };
