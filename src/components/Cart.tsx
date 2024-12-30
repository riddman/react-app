import React from 'react'

interface Props {
    customers: object[],
    onClear: () => void
}

function Cart({customers, onClear}: Props) {
  return (
        <>
            <div>Cart</div>
            <ul>
                {
                    customers.map((customer) => {
                        return (<li>
                            {customer.name}: {customer.address.city} ({customer.friends.join(', ')})
                        </li>)
                    })
                }
            </ul>
            <button onClick={onClear}>Clear</button>
        </>
    )
}

export default Cart