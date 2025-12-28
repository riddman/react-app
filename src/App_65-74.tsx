import { useState, useEffect } from "react";
import { CanceledError } from "./services/api-client";
import userService, { User } from "./services/user-services";


export default () => {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(true);

    const deleteUser = (user: User) => {
        setUsers(users.filter(item => item.id != user.id));

        userService.delete(user.id);
    }

    const updateUser = (user: User) => {
        const updatedUser = { ...user, name: user.name + '!' };
        const originalUsers = [...users];

        setUsers(users.map(u => u.id === updatedUser.id ? updatedUser : u));

        const { request } = userService.update(updatedUser);

        request.catch(err => {
            setError(err.message);
            setUsers(originalUsers);
        });
    }

    const addUser = () => {
        const newUser = { id: 0, name: 'Mosh' };
        setUsers([ newUser, ...users ]);

        const { request } = userService.create(newUser);

        request.then(response => {
            console.log(
                response.data,
                users
            );
            setUsers([response.data, ...users ]);
        });
    }

    useEffect(() => {
        const controller = new AbortController();

        // const fetchUsers = async () => {
        //     try {
        //         const result = await axios.get<User[]>(
        //             'https://jsonplaceholder.typicode.com/users',
        //             {signal: controller.signal}
        //         );
        //         setUsers(result.data);
        //     }
        //     catch (error) {
        //         setError((error as AxiosError).message)
        //     }
        // }

        // fetchUsers();

        setLoading(true);

        const {request, cancel } = userService.getAll<User>()

        request.then(result => {
                setUsers(result.data);
                setLoading(false);
            })
            .catch((err) => {
                if (err instanceof CanceledError) {
                   return;
                }

                setLoading(false);

                setError(err.message);
            });

        return () => cancel();
    }, [])
    return (
        <>
            { error && <p className="text-danger">{error}</p> }
            { isLoading && <div className="spinner-border"></div> }
            <button className="btn btn-primary mb-3" onClick={ addUser }>Add</button>
            <ul className="list-group">
                { users.map(user => (
                    <li key={ user.id } className="list-group-item d-flex justify-content-between">
                        { user.name }
                        <div>
                            <button className="btn btn-outline-secondary mx-1"
                                onClick={ () => updateUser(user) }>Update</button>
                            <button className="btn btn-outline-danger" onClick={ () => deleteUser(user) }>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}
