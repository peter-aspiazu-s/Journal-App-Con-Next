import { FC, useContext, FormEvent, FocusEvent } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import validator from 'validator';
import { Loading } from '@/components/loading/Loading';
import { AuthContext } from '@/context/auth/AuthContext';
import { useForm } from '@/hooks/useForm';


type PropsAuth = {
    email: string;
    password: string
}

interface FormProps{
    formData: PropsAuth;
    formName?: string;
}

export const FormAuth:FC<FormProps> = ({formData, formName}) => {

    const {
        message, 
        buttonLoading, 
        touchEmail,
        touchPassword,
        touchConfirmPassword,
        setButtonLoading,
        setMessage,
        setTouchEmail,
        setTouchPassword,
        setTouchConfirmPassword,
    } = useContext(AuthContext);


    const router = useRouter();

    const { formState, handleChange } = useForm(formData);

    const { email, password, confirmPassword } = formState;

    const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!validFormData()) return;
        
        setButtonLoading(true);
        
        try {
            const response = await axios.post(`/api/${formName === 'login' ? 'loginUser' : 'createUser'}`, {
                email,
                password
            })

            if(response.status === 200){
                console.log('User login successfully');
                router.push('/');
            } else {
                console.error('Failed to login user');
            }
        } catch (error) {
            console.error('Error login user:', error);
        }

        setButtonLoading(false);
    }

    const validFormData = ():boolean => {
        if(!validator.isEmail(email)){
            setMessage('Tiene que ser un email válido');
            return false;
        }

        if(password.trim().length < 6){
            setMessage('La contraseña debe tener una longitud minímo de 6');
            return false;
        }

        if(formName === 'register'){
            if(password.trim() !== confirmPassword?.trim()){
                setMessage('Las contraseñas no son las mismas');
                return false;
            }
        }else {
            return true;
        }

        return true;
    }

    const handleBlur = (e: FocusEvent<HTMLInputElement>):void => {

        const arr = ['email', 'password'];

        if(!arr.includes(e.target.name)) return;

        if(e.target.name === 'email'){
            if(!validator.isEmail(email)){
                setMessage('Tiene que ser un email válido');
                setTouchEmail(true);
            }else{
                setTouchEmail(false);
                setMessage('')
            }
        } 
        
        if(e.target.name === 'password'){
            if(password.trim().length < 6){
                setMessage('La contraseña debe tener una longitud minímo de 6');
                setTouchPassword(true);
            } else{
                setTouchPassword(false);
                setMessage('')
            }
        }

        if(e.target.name === 'confirmPassword'){
            if(password.trim() !== confirmPassword?.trim()){
                setMessage('Las contraseñas no son las mismas');
                setTouchConfirmPassword(true);
            } else{
                setTouchConfirmPassword(false);
                setMessage('')
            }
        }
    }


  return (
    <form 
        onSubmit={handleSubmit} 
        className='login-form'
    >
        <label className='login-label' htmlFor="login-email">Correo Electrónico</label>
        <input 
            className={(touchEmail || message === 'Tiene que ser un email válido')  ? 'login-input-text-error' : 'login-input-text'} 
            type="email" 
            name='email'
            id='login-email'
            value={email}
            onChange={handleChange}
            onBlur={handleBlur}
        />
        {
            message === 'Tiene que ser un email válido'
            && <div className='login-message'>{message}</div>
        }

        <label className='login-label' htmlFor="login-password">Contraseña</label>
        <input
            className={(touchPassword || message === 'La contraseña debe tener una longitud minímo de 6') ? 'login-input-password-error' : 'login-input-password'}
            type="password" 
            name='password'
            id='login-password'
            value={password}
            onChange={handleChange}
            onBlur={handleBlur}
        />
        {
            message === 'La contraseña debe tener una longitud minímo de 6'
            && <div className='login-message'>{message}</div>
        }

        {
            formName === 'register' &&
            <>
                <label className='register-label' htmlFor="register-confirmpassword">Confirmar Contraseña</label>
                <input
                    className={(touchConfirmPassword || message === 'Las contraseñas no son las mismas') ? 'register-input-password-error' : 'register-input-password'}
                    type="password" 
                    name='confirmPassword'
                    id='register-confirmpassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            </>
        }
        {
            (formName === 'register' && message === 'Las contraseñas no son las mismas')
            && <div className='register-message'>{message}</div>
        }

        {
            buttonLoading 
            ? <Loading />
            : <button type='submit' className='login-button'>
                { formName === 'login' ? 'Iniciar sesión' : 'Registrarse'}
              </button>
        }
    </form>
  )
}
