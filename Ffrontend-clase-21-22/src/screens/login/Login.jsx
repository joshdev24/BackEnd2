import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { extractFormData } from '../../utils/extractFormData'
import { getUnnauthenticatedHeaders, POST, } from '../../fetching/http.fetching'
import React from 'react'
import ENVIROMENT from '../../enviroment'

const Login = () => {	
	const navigate = useNavigate()

	const handleSubmitLoginForm = async (e) => {
		try{
			e.preventDefault()
			const form_HTML = e.target
			const form_Values = new FormData(form_HTML)
			const form_fields = {
				'email': '',
				'password': ''
			}
			const form_values_object = extractFormData(form_fields, form_Values)
			console.log('form_values_object', form_values_object)
			const response = await POST(
				`${ENVIROMENT.URL_BACKEND}/api/auth/login`,
				{
					headers: getUnnauthenticatedHeaders(),
					body: JSON.stringify(form_values_object)
				} 
			)
			console.log('response', response)
			const access_token = response.payload.token
			sessionStorage.setItem('access_token', access_token)
			sessionStorage.setItem('user_info', JSON.stringify(response.payload.user))
			navigate('/home')
		}
		catch(error){
			console.error('An error occurred:', error)
		}
	}

	return (
		<div>
			<h1>Inicia sesion</h1>
			<form onSubmit={handleSubmitLoginForm}>
				<div>
					<label htmlFor='email'>Ingrese su email:</label>
					<input name='email' id='email' placeholder='pepe@gmail.com' />
				</div>
				<div>
					<label htmlFor='password'>Ingrese su contraseña:</label>
					<input name='password' id='password' placeholder='pepe@gmail.com' />
				</div>
				<button type='submit'>Iniciar sesion</button>
			</form>
			<span>Si aun no tienes cuenta puedes <Link to='/register'>Registrarte</Link></span>
			<br />
			<span>Has olvidado la contraseña?, puedes <Link to='/forgot-password'>Recuperarla</Link></span>
		</div>
	)
}

export default Login