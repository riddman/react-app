import { Fragment } from 'react';
import { MouseEvent } from "react";

function ListGroup() {
    let items = [
        'New York',
        'San Francisco',
        'Tokyo',
        'London',
        'Paris'
    ];

    // items = [];

    const emptyMessage = () => {
        return items.length === 0 ? <p>No item found</p> : null;
    }

    const handleClick = (event:MouseEvent, item: String, index: Number) => {
        console.log(`Clicked item: ${item} ${index}`, event)
    }

    return (
        <Fragment>
            <h1>List</h1>
            {emptyMessage()}
            <ul className="list-group">
                {items.map((item, index) => {
                    return <li key={index}
                        onClick={(event) => { handleClick(event, item, index) }}
                        className="list-group-item">{item}</li>
                })}
                <li className="list-group-item">An item</li>
         </ul>
        </Fragment>

    );
}

export default ListGroup;
