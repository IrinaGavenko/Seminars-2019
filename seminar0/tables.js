import React, { Component } from 'react';
import './tables.css';

class Tables extends Component {
    render() {
        return (
            <div className="App">
                <h3>Объединение столбцов</h3>
                <table>
                    <tr>
                        <td> One </td>
                    </tr>
                            <tr>
                                <td> Two </td>
                                <td> Three </td>
                            </tr>
                </table>
                <h3>Таблица 1: чуть-чуть получше</h3>
                <table>
                    <tr>
                        <td> One </td>
                        <td />
                    </tr>
                    <tr>
                        <td> Two </td>
                        <td> Three </td>
                    </tr>
                </table>
                <h3>Таблица 1: совсем хорошо</h3>
                <table>
                    <tr>
                        <td colSpan="2"> One </td>
                    </tr>
                    <tr>
                        <td> Two </td>
                        <td> Three </td>
                    </tr>
                </table>
                <h3>Объединение строк</h3>
                <table>
                    <caption>Здесь можно указать заголовок</caption>
                    <tr>
                        <td rowSpan="3" className="first">Zero</td>
                        <td>One</td>
                        <td>Two</td>
                    </tr>
                    <tr>
                        <td>Three</td>
                        <td>Four</td>
                    </tr>
                    <tr>
                        <td>Five</td>
                        <td>Six</td>
                    </tr>
                    <tr>
                        <td>Seven</td>
                        <td>Seven1</td>
                        <td>Seven2</td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Tables;
