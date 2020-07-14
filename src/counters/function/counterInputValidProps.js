import React from 'react';
import PropTypes from 'prop-types';

export default class extends React.Component {
    static propTypes = {
        value: PropTypes.number.isRequired,
        min: PropTypes.number.isRequired,
        max: PropTypes.number,
        onChange: PropTypes.func.isRequired,
    };

    increment = () => {
        this.props.value !== this.props.max && this.props.onChange(this.props.value + 1);
    };

    decrement = () => {
        this.props.value !== this.props.min && this.props.onChange(this.props.value - 1);
    };

    setValue = (e) => {
        const val = e.target.value;

        val < this.props.max && val > this.props.min && this.props.onChange(val);
    };

    render() {
        return (
            <div>
                <button onClick={this.decrement}>Minus 1</button>
                <input value={this.props.value} onChange={this.setValue}  style={{margin: 20}} />
                <button onClick={this.increment}>Plus 1</button>
            </div>
        )
    }
}
