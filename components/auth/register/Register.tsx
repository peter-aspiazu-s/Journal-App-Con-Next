import { FC, useContext } from 'react';
import Link from 'next/link';
import { AuthContext } from '@/context/auth/AuthContext';
import { FormAuth } from '../form/FormAuth';

const formData = {
    email: '',
    password: '',
    confirmPassword: ''
}

export const Register:FC = ():JSX.Element => {

    const { 
        messageError, 
        buttonGithubLoading, 
        buttonGoogleLoading, 
        handleLoginByGithub,
        handleLoginByGoogle
    } = useContext(AuthContext);

  return (
    <div className='register'>
        <div className='register-box'>
            {
                messageError && <div className='message-error-autheticated'>{messageError}</div>
            }
            <div className='register-text'>Registrarse en Journal App</div>
            
            <FormAuth formData={formData} formName='register' />

            {
                buttonGoogleLoading 
                ? <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                : <button className='register-google' onClick={handleLoginByGoogle}>Regístrate con Google</button>
            }
            {
                buttonGithubLoading 
                ? <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                : <button onClick={handleLoginByGithub} className='login-github'>Regístrate con Github</button>
            }

            <Link style={{
                marginTop: '10px'
            }} href='/login'>¿Ya tienes cuenta? Ingresa</Link>
        </div>
    </div>
  )
}
