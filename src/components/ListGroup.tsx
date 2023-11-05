import { Fragment } from 'react';

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

    return (
        <Fragment>
            <h1>List</h1>
            {emptyMessage()}
            <ul className="list-group">
                {items.map((item, index) => {
                    return <li key={index} className="list-group-item">{item}</li>
                })}
                <li className="list-group-item">An item</li>
         </ul>
        </Fragment>
    
    );
}

export default ListGroup;
