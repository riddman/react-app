import React from 'react'
import { useState } from 'react'
import { produce } from 'immer';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import Expand from './components/Expand';

function App() {
    const [customers, setCustomers] = useState([
        {
            name: 'John',
            address: {
                city: 'San Francisco',
                zipCode: 94111
            },
            friends: []
        },
        {
            name: 'Neal',
            address: {
                city: ' Indiana',
                zipCode: 40170
            },
            friends: ['Mozz']
        },
        {
            name: 'Jake',
            address: {
                city: 'New York',
                zipCode: 10007
            },
            friends: []
        }
    ]);

    const handleClick = () => {
        setCustomers(produce(customers, draft => {
            let customer = draft.find(item => item.name == 'Neal');

            if (customer) {
                customer.address.city = 'New York';
                customer.friends = ['Peter'].concat(customer.friends)
            }
        }));
        // setCustomers({
        //     ...customer,
        //     address: { ...customer.address, zipCode: 94112}
        // });
    }

  return (
    <div>
        <button onClick={handleClick}>Update address</button>

        <NavBar customersCount={customers.length}/>
        <Cart customers={customers} onClear={() => setCustomers([])}/>
        <Expand showLength={10}>
            Agent Peter Burke is one of the main protagonist in White Collar. Burke is an excellent FBI agent in white collar division, his biggest bust was arrest a con-man named Neal Cafferrty. Neal escaped from jail, when he was about to be released from jail.
        </Expand>
    </div>
  )
}

export default App