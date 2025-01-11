import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm'
import { Global } from '../../helpers/Global'

export const Register = () => {
  const { form, changed } = useForm({})
  const [saved, setSaved] = useState('not_sended')

  const saveUser = async (e) => {
    e.preventDefault()
    let newUser = form

    const request = await fetch(Global.url + 'user/create', {
      method: 'POST',
      body: JSON.stringify(newUser),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data = await request.json()

    if (data.status === 'success') {
      setSaved('sended')
    } else {
      setSaved('error')
    }
  }
  return (
    <>
      <header className="content__header content__header--public">
        <h1 className="content__title">Registro</h1>
      </header>

      <div className="content__posts">
        {saved == 'sended' ? (
          <strong className="alert alert-success">Registro exitoso!! </strong>
        ) : (
          ''
        )}

        {saved == 'error' ? (
          <strong className="alert alert-danger">
            {' '}
            Ocurrió un error al registrar el usuario!!
          </strong>
        ) : (
          ''
        )}

        <form className="register-form" onSubmit={saveUser}>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input type="text" name="name" onChange={changed} />
          </div>

          <div className="form-group">
            <label htmlFor="surname">Apellidos</label>
            <input type="text" name="surname" onChange={changed} />
          </div>

          <div className="form-group">
            <label htmlFor="nick">Nick</label>
            <input type="text" name="nick" onChange={changed} />
          </div>

          <div className="form-group">
            <label htmlFor="bio">Bio</label>
            <textarea name="bio" onChange={changed} />
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input type="email" name="email" onChange={changed} />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" onChange={changed} />
          </div>

          <input type="submit" value="Registrate" className="btn btn-success" />
        </form>
      </div>
    </>
  )
}
