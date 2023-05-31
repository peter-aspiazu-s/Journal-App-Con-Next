import { useState, ChangeEvent } from 'react';

interface LoginProps {
    email: string;
    password: string;
    confirmPassword?: string;
}

interface RegisterProps {
    email: string;
    password: string;
    confirmPassword: string;
}

export const useForm = (initialForm:(LoginProps | RegisterProps)):{
    formState: LoginProps | RegisterProps,
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void,
    handleReset: () => void
} => {

    const [formState, setFormState] = useState(initialForm)

    const handleChange = (e: ChangeEvent<HTMLInputElement>):void => {

        const {name, value} = e.target;

        setFormState({
            ...formState,
            [name]: value
        })
    }

    const handleReset = ():void => {
        setFormState(initialForm)
    }

    return {
        formState,
        handleChange,
        handleReset
    }
}