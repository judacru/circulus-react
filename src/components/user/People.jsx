import React, { useEffect, useState } from 'react'
import { Global } from '../../helpers/Global';
import { UserList } from './UserList';

export const People = () => {

    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [following, setFollowing] = useState([]);
    const [more, setMore] = useState(true);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getUsers(1);
    }, [])

    const getUsers = async (nextPage = 1) => {
        setLoading(true);

        const request = await fetch(Global.url + "user/list/" + nextPage, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("token")
            }
        });
        const data = await request.json();

        if (data.users && data.status === "success") {
            let newUsers = data.users;

            if (users.length > 0) {
                newUsers = [...users, ...data.users];
            }

            setUsers(newUsers);
            setFollowing(data.following);
            setLoading(false);

            if (data.page >= data.pages) {
                setMore(false);
            }
        }
    }

    return (
        <>

            <header className="content__header">
                <h1 className="content__title">Gente</h1>
            </header>

            <UserList users={users}
                getUsers={getUsers}
                following={following}
                setFollowing={setFollowing}
                page={page}
                setPage={setPage}
                more={more}
                loading={loading} />

            <br />
        </>
    )
}
