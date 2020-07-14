import React from "react";
import CounterClass from "./counters/function/counterInputValidProps"

export default class extends React.Component {
    state = {
        products: [
            {
                id: 0,
                title: "phone 4",
                price: 500,
                rest: 10,
                selected: 1,
            },
            {
                id: 1,
                title: "phone 5",
                price: 600,
                rest: 10,
                selected: 1,
            },
            {
                id: 2,
                title: "phone 6",
                price: 700,
                rest: 10,
                selected: 1,
            },
            {
                id: 3,
                title: "phone 7",
                price: 800,
                rest: 10,
                selected: 1,
            },
            {
                id: 4,
                title: "phone 8",
                price: 900,
                rest: 10,
                selected: 1,
            },
        ]
    };

    changeCount(id, cnt) {
        let newProducts = [...this.state.products],
            newProduct = {...(newProducts[id])};

        newProduct.selected = cnt;
        newProducts[id] = newProduct;

        this.setState({
            products: newProducts,
        });
    }

    render() {
        const products = this.state.products.map(item => {
            return (
                <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>
                        <CounterClass
                            value={item.selected}
                            min={1}
                            max={item.rest}
                            onChange={(cnt) => this.changeCount(item.id, cnt)}
                        />
                    </td>
                    <td>{item.selected * item.price}</td>
                </tr>
            )
        });

        return (
            <div>
                <table>
                    <tbody>
                        {products}
                    </tbody>
                </table>
            </div>
        )
    }
}
