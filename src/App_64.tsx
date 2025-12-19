import { useState } from "react";
import Form from "./components/Form";
import ProductList from "./components/ProductList";

export default () => {
    const [ category, setCategory ] = useState('');
    return (
        <div>
            {/* <Form></Form> */}
            <select className="form-select" onChange={(event) => setCategory(event.target.value)}>
                <option value=""></option>
                <option value="Clothing">Clothing</option>
                <option value="Household">Household</option>
            </select>
            <ProductList category={ category } />
        </div>
    );
}