import { FC, useContext } from 'react';
import Link from 'next/link';
import { AuthContext } from '@/context/auth/AuthContext';
import { Loading } from '../../loading/Loading';
import { FormAuth } from '../form/FormAuth';

const formData = {
    email: '',
    password: ''
}

export const Login:FC = ():JSX.Element => {

    const { 
        messageError, 
        buttonGithubLoading, 
        buttonGoogleLoading, 
        handleLoginByGithub,
        handleLoginByGoogle
    } = useContext(AuthContext);

  return (
    <div className='login'>
        <div className='login-box'>
            {
                messageError && <div className='message-error-autheticated'>{messageError}</div>
            }
            <div className='login-text'>Ingresar a Journal App</div>
            
            <FormAuth formData={formData} formName='login' />

            {
                buttonGoogleLoading 
                ? <Loading />
                : <button onClick={handleLoginByGoogle} className='login-google'>Ingresa con Google</button>
            }
            {
                buttonGithubLoading 
                ? <Loading />
                : <button onClick={handleLoginByGithub} className='login-github'>Ingresa con Github</button>
            }

            <Link style={{
                marginTop: '10px'
            }} href='/register'>¿No tienes cuenta? Regístrate</Link>
        </div>
    </div>
  )
}