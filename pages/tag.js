import React, { Component } from "react";

export default class Tag extends Component {
    static async getInitialProps(context) {
        return {
            id: context.query.id
        };
    }
    render() {
        return (
            <h1>this page is tag {this.props.id}</h1>
        )
    }
}