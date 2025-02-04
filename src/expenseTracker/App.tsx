import AddExpenceForm from './components/AddExpenceForm';
import ListExpences from './components/ListExpences';
import { expenceType } from './types';
import { useState } from 'react';

export default () => {
    const [expences, setExpences] = useState<expenceType[]>([
        {
            id: 1,
            description: "Milk",
            amount: 5.00,
            categoryId: 1
        },
        {
            id: 2,
            description: "Eggs",
            amount: 10.00,
            categoryId: 1
        }
    ]);

    const categories = [
        {
            id: 1,
            name: "Groceries"
        },
        {
            id: 2,
            name: "Utilities"
        },
        {
            id: 3,
            name: "Entertainment"
        }
    ];

    const addExpence = (expence: expenceType) => {
        const result = [];
        result.push(expence);

        setExpences(
            result.concat(expences)
        );
    };

    const deleteExpence = (expence: expenceType) => {
        setExpences(expences.filter((item) => item.id !== expence.id));
    };

    return (
        <div>
            <AddExpenceForm
                categories={categories}
                addExpence={addExpence}
            />

            <ListExpences
                categories={categories}
                expences={expences}
                deleteExpence={deleteExpence} />
        </div>
    )
}