import React, { useRef, useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// interface FormData {
//     name: string,
//     age: number
// }

const schema = z.object({
    name: z.string().min(3, 'The name field should be longer than 3 characters'),
    age: z.number({invalid_type_error: 'Age field is required.'})
        .min(18, 'Age must be at least 18')
});

type FormData = z.infer<typeof schema>;

function Form() {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid }
    } = useForm<FormData>({resolver: zodResolver(schema)});

    const nameRef = useRef<HTMLInputElement>(null);
    const ageRef = useRef<HTMLInputElement>(null);
    const [person, setPerson] = useState({name: '', age: 0});

    // register('name', { required: true, minLength: 3} );
    register('name');

    const onSubmit = (data: FieldValues) => console.log(data);

    return (
        <form onSubmit={handleSubmit(data => console.log(data))}>
            <div className="mb-3">
                <label htmlFor="name" className="from-label">Name</label>
                <input
                    { ...register('name') }
                    // onChange={(event) => setPerson({...person, name: event.target.value})}
                    id="name" type="text" className="form-control" />
                { errors.name && <p className="text-danger">{ errors.name.message }</p> }
            </div>
            <div className="mb-3">
                <label htmlFor="age" className="form-label">Age</label>
                <input
                    { ...register('age', { valueAsNumber: true }) }
                    // onChange={(event) => setPerson({...person, age: parseInt(event.target.value)})}
                    id="age "type="number" className='form-control' />
                    { errors.age && <p className="text-danger">{ errors.age.message }</p> }
            </div>
            <button disabled={ !isValid } className="btn btn-primary" type="submit">Submit</button>
        </form>
    )
}

export default Form