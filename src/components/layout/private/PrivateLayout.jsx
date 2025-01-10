import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Header } from './Header'
import useAuth from '../../../hooks/useAuth'
import { Sidebar } from './Sidebar'

export const PrivateLayout = () => {

    const { auth, loading } = useAuth();
    if (loading) {
        return <h1>Cargando...</h1>
    } else {
        return (
            <>
                <Header />

                <section className="layout__content">
                    {auth._id ?
                        <Outlet /> :
                        <Navigate to="/login" />}
                </section>

                <Sidebar />
            </>
        )
    }
}
