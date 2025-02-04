import { FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { expenceType, categoryType } from '../types';

interface Props {
    addExpence: (data: expenceType) => void,
    categories: categoryType[],
}

const schema = z.object({
    description: z.string().min(3, 'The description field should be longer than 3 characters'),
    amount: z.number({invalid_type_error: 'Amount field is required.'})
        .min(0, 'Age must be bigger than 0'),
    categoryId: z.number()
});

type FormData = z.infer<typeof schema>;

export default ({addExpence, categories}:Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid }
    } = useForm<FormData>({resolver: zodResolver(schema)});

    const onSubmit = (data: any) => {
        data.id =  Date.now();
        addExpence(data)
    }

    return (
        <form onSubmit={handleSubmit(data => onSubmit(data))}>
            <div className="mb-3">
                <label htmlFor="description-input" className="form-label">Description</label>
                <input
                    { ...register('description') }
                    className="form-control"
                    id="description-input" />
                { errors.description && <p className="text-danger">{ errors.description.message }</p> }
            </div>

            <div className="mb-3">
                <label htmlFor="amount-input" className="form-label">Amount</label>
                <input
                    { ...register('amount', { valueAsNumber: true }) }
                    className="form-control"
                    id="amount-input" />
                { errors.amount && <p className="text-danger">{ errors.amount.message }</p> }
            </div>

            <div className="mb-3">
                <label htmlFor="category-input" className="form-label">Category</label>
                <select
                    { ...register('categoryId', { valueAsNumber: true }) }
                    defaultValue=""
                    className="form-select">
                    <option value="">Category</option>
                        {
                            categories.map((category, index) => {
                                return (
                                    <option key={index} value={category.id}>{ category.name }</option>
                                );
                            })
                        }
                </select>

                { errors.categoryId && <p className="text-danger">{ errors.categoryId.message }</p> }
            </div>

            <div>
                <button type="submit" className="btn btn-primary mb-3">Submit</button>
            </div>
        </form>
    );
}