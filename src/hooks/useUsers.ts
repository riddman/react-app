import { useState, useEffect } from "react";
import { CanceledError } from "../services/api-client";
import userService, { User } from "../services/user-services";

const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(true);

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
    }, []);

    return { users, error, isLoading, setUsers, setError };
}

export default useUsers;