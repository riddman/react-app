import React, { useRef, useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form';

interface FormData {
    name: string,
    age: number
}

function Form() {
    const { register, handleSubmit, formState: {errors} } = useForm<FormData>();

    const nameRef = useRef<HTMLInputElement>(null);
    const ageRef = useRef<HTMLInputElement>(null);
    const [person, setPerson] = useState({name: '', age: 0});

    console.log(register('name', { required: true, minLength: 3} ));

    const onSubmit = (data: FieldValues) => console.log(data);

    return (
        <form onSubmit={handleSubmit(data => console.log(data))}>
            <div className="mb-3">
                <label htmlFor="name" className="from-label">Name</label>
                <input
                    { ...register('name') }
                    // onChange={(event) => setPerson({...person, name: event.target.value})}
                    id="name" type="text" className="form-control" />
                { errors.name?.type === 'required' && <p className="text-danger">The name field is required</p> }
                { errors.name?.type === 'minLength' && <p className="text-danger">The name should be at least 3 characters</p> }
            </div>
            <div className="mb-3">
                <label htmlFor="age" className="form-label"></label>
                <input
                    { ...register('age') }
                    // onChange={(event) => setPerson({...person, age: parseInt(event.target.value)})}
                    id="age "type="number" className='form-control' />
            </div>
            <button className="btn btn-primary" type="submit">Submit</button>
        </form>
    )
}

export default Form