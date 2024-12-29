import React from 'react'
import { useState } from 'react'
import { produce } from 'immer';

function App() {
    const [customers, setCustomers] = useState([
        {
            name: 'John',
            address: {
                city: 'San Francisco',
                zipCode: 94111
            }
        },
        {
            name: 'Neal',
            address: {
                city: ' Indiana',
                zipCode: 40170
            }
        },
        {
            name: 'Jake',
            address: {
                city: 'New York',
                zipCode: 10007
            }
        }
    ]);

    const handleClick = () => {
        setCustomers(produce(customers, draft => {
            let customer = draft.find(item => item.name == 'Neal');

            if (customer) {
                customer.address.city = 'New York';
            }
        }));
        // setCustomers({
        //     ...customer,
        //     address: { ...customer.address, zipCode: 94112}
        // });
    }

  return (
    <div>
        <button onClick={handleClick}>Click me</button>
        { customers.map(customer => <p>{customer.name}: {customer.address.city}</p>) }
    </div>
  )
}

export default App