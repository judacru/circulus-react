import React from 'react'
import { Routes, Route, Link, HashRouter } from 'react-router-dom'
import { PublicLayout } from '../components/layout/public/PublicLayout'
import { Login } from '../components/user/Login'
import { Register } from '../components/user/Register'
import { PrivateLayout } from '../components/layout/private/PrivateLayout'
import { Feed } from '../components/publication/Feed'
import { AuthProvider } from '../context/AuthProvider'
import { Logout } from '../components/user/Logout'
import { People } from '../components/user/People'
import { Config } from '../components/user/Config'
import { Followings } from '../components/follow/Followings'
import { Followers } from '../components/follow/Followers'
import { Profile } from '../components/user/Profile'

export const Routing = () => {
  return (
    <HashRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<Login />} />
            <Route path="login" index element={<Login />} />
            <Route path="registro" index element={<Register />} />
          </Route>

          <Route path="/social" element={<PrivateLayout />}>
            <Route index element={<Feed />} />
            <Route path="feed" index element={<Feed />} />
            <Route path="logout" index element={<Logout />} />
            <Route path="people" index element={<People />} />
            <Route path="config" index element={<Config />} />
            <Route path="following/:userId" index element={<Followings />} />
            <Route path="followers/:userId" index element={<Followers />} />
            <Route path="profile/:userId" index element={<Profile />} />
          </Route>

          <Route
            path="*"
            element={
              <>
                <p>
                  <h1>Error 404</h1>
                  <Link to="/">Volver al inicio</Link>
                </p>
              </>
            }
          />
        </Routes>
      </AuthProvider>
    </HashRouter>
  )
}
