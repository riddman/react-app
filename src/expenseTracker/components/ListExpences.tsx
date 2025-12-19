
import { categoryType, expenceType } from "../types";

import { useState } from "react";

interface Props {
    categories: categoryType[],
    expences: expenceType[],
    deleteExpence: (expence: expenceType) => void
};

export default ({ categories, expences, deleteExpence }: Props ) => {
    const [ selectedCategory, setSelectedCategory ] = useState('');

    const handleChange = (event) => {
        const value = event.target.value;
        setSelectedCategory(value);
    };

    const filteredItems = expences.filter(
        item => !selectedCategory || (item.categoryId == parseInt(selectedCategory))
    )

    const catrgoryName = (categoryId: number): string => {
        const category = categories.find(item => item.id == categoryId);

        return category ? category.name : '';
    }

    const totalSum = filteredItems.reduce(
        (accumulator, item) => accumulator + item.amount,
        0
    );

    return (
        <div>
            <div>
                <select
                    value={selectedCategory}
                    onChange={ handleChange }
                    className="form-select" aria-label="Default select example">
                    <option

                        value="">Select category</option>
                        {
                            categories.map((category) => {
                                return (
                                    <option key={category.id} value={category.id}>{ category.name }</option>
                                );
                            })
                        }
                </select>
            </div>
            <br/>
            <div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Description</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Category</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredItems.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{ item.description }</td>
                                    <td>{ item.amount }</td>
                                    <td>{ catrgoryName(item.categoryId) }</td>
                                    <td><button
                                        type="submit"
                                        className="btn btn-danger mb-3"
                                        onClick={ () => deleteExpence(item) }
                                        >Delete</button></td>
                                </tr>
                            );
                        })
                    }

                        <tr>
                            <td>Total</td>
                            <td>{ totalSum }</td>
                            <td></td>
                            <td></td>
                        </tr>

                </tbody>
                </table>
            </div>
        </div>
    );
}