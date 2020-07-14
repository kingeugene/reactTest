import React from "react";

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cnt: 0,
        }
    }

    increment = () =>  {
        this.setState({
            cnt: this.state.cnt + 1,
        })
    };

    render() {
        return (
            <div>
                <strong>{this.state.cnt}</strong>
                <br/>
                <button onClick={this.increment}>Plus 1</button>
            </div>
        )
    }
}
