import { useState, ReactNode, FC } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { AuthContext } from './AuthContext';
import { signInWithGithub } from '../../firebase/signInWithGithub';
import { signInWithGoogle } from '../../firebase/signInWithGoogle';

interface Props {
    children: ReactNode;
}

export const AuthProvider:FC<Props> = ({children}) => {

    const router = useRouter()

    const [message, setMessage] = useState<string>('');
    const [touchEmail, setTouchEmail] = useState<boolean>(false);
    const [touchPassword, setTouchPassword] = useState<boolean>(false);
    const [touchConfirmPassword, setTouchConfirmPassword] = useState<boolean>(false);
    const [buttonLoading, setButtonLoading] = useState<boolean>(false);
    const [buttonGoogleLoading, setButtonGoogleLoading] = useState<boolean>(false);
    const [buttonGithubLoading, setButtonGithubLoading] = useState<boolean>(false);
    const [messageError, setMessageError] = useState<string>('');

    const handleLoginByGithub = async():Promise<void> => {
        setButtonGithubLoading(true);
        try {
            const result = await signInWithGithub();
            
            if (typeof result === 'string') {
                // En caso de error, result es un string
                console.log(result);
                setButtonGithubLoading(false);

                setMessageError(result);
                setTimeout(() => {
                    setMessageError('');
                }, 5000)
            } else {
                // En caso de éxito, result es un objeto con accessToken y providerId
                const data = {
                    accessToken: result?.accessToken,
                    providerId: result?.providerId
                };
                await axios.post('/api/checkAuth', data);
                setButtonGithubLoading(false);
                router.push('/');
            }
        } catch (error) {
            console.log(error);
            setButtonGithubLoading(false);
        }
    }


    const handleLoginByGoogle = async() => {
        setButtonGoogleLoading(true);
        try {
            const result = await signInWithGoogle();

            if (typeof result === 'string') {
                // En caso de error, result es un string
                console.log(result);
                setButtonGithubLoading(false);

                setMessageError(result);
                setTimeout(() => {
                    setMessageError('');
                }, 5000)
            } else {
                // En caso de éxito, result es un objeto con accessToken y providerId
                const data = {
                    accessToken: result?.accessToken,
                    idToken: result?.idToken,
                    providerId: result?.providerId
                }

                await axios.post('/api/checkAuth', data);
                setButtonGoogleLoading(false);
                router.push('/');
            }


        } catch (error) {
            console.log(error);
            setButtonGoogleLoading(false);
        }

    }

    return (
        <AuthContext.Provider
            value={{ 
                message, setMessage,
                touchEmail, setTouchEmail,
                touchPassword, setTouchPassword,
                touchConfirmPassword, setTouchConfirmPassword,
                buttonLoading, setButtonLoading,
                buttonGoogleLoading, setButtonGoogleLoading,
                buttonGithubLoading, setButtonGithubLoading,
                messageError, setMessageError,
                handleLoginByGithub,
                handleLoginByGoogle,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}