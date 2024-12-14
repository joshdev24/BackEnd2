import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { extractFormData } from '../../utils/extractFormData'
import useForm from '../../Hooks/useForm'
import { getUnnauthenticatedHeaders, POST} from '../../fetching/http.fetching'
import ENVIROMENT from '../../enviroment'



const Register = () => {
    const [error, setError] = useState("")
    const [success, setSuccess] = useState(false)

    const handleSubmitRegisterForm = async (event) => {
        event.preventDefault();
        event.preventDefault();
        setError('');

        const form_HTML = event.target;
        const form_Values = new FormData(form_HTML);
        const form_fields = {
            name: '',
            email: '',
            password: ''
        };
        const form_values_object = extractFormData(form_fields, form_Values);

        if (!form_values_object.email || !form_values_object.password) {
            setError('Por favor, complete todos los campos.');
            setLoading(false);
            return;
        }

        try {
            const response = await POST(

                `${ENVIROMENT.URL_BACKEND}/api/auth/register`,
                {
                    headers: getUnnauthenticatedHeaders(),
                    body: JSON.stringify(form_values_object)
                }
            )

            if (response.ok) {
                setSuccess("Te has registrado con exito")
            } else {
                setError("Error al registrarte")
            }
            console.log(body)
        } catch (error) {
            console.error(error);
        }
    return (
        <div>
            <h1>Registrate en nuesta web</h1>
            <form onSubmit={handleSubmitRegisterForm}>
                <div>
                    <label htmlFor='name'>Ingrese su nombre:</label>
                    <input name='name'
                        id='name'
                        placeholder='Pepe Suarez'
                        onChange={handleChangeInputValue} />
                </div>
                <div>
                    <label htmlFor='email'>Ingrese su email:</label>
                    <input name='email'
                        id='email'
                        placeholder='pepe@gmail.com'
                        onChange={handleChangeInputValue} />
                </div>
                <div>
                    <label htmlFor='password'>Ingrese su contraseña:</label>
                    <input name='password'
                        id='password'
                        placeholder='pepe@gmail.com'
                        onChange={handleChangeInputValue} />
                </div>
                <button type='submit'>Registrar</button>
            </form>
            <span>Si ya tienes cuenta puedes ir a <Link to='/login'>login</Link></span>

        </div>
    )
}
}

export default Register