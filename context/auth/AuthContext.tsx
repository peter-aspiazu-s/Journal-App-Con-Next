import { createContext, Dispatch, SetStateAction } from "react";

interface Props {
    message: string;
    touchEmail: boolean;
    touchPassword: boolean;
    touchConfirmPassword: boolean;
    buttonLoading: boolean;
    buttonGoogleLoading: boolean;
    buttonGithubLoading: boolean;
    messageError: string;
    setMessage: Dispatch<SetStateAction<string>>;
    setTouchEmail: Dispatch<SetStateAction<boolean>>;
    setTouchPassword: Dispatch<SetStateAction<boolean>>;
    setTouchConfirmPassword: Dispatch<SetStateAction<boolean>>;
    setButtonLoading: Dispatch<SetStateAction<boolean>>;
    setButtonGoogleLoading: Dispatch<SetStateAction<boolean>>;
    setButtonGithubLoading: Dispatch<SetStateAction<boolean>>;
    setMessageError: Dispatch<SetStateAction<string>>;
    handleLoginByGithub: () => Promise<void>;
    handleLoginByGoogle: () => Promise<void>;
}

export const AuthContext = createContext<Props>({
    message: '',
    touchEmail: false,
    touchPassword: false,
    touchConfirmPassword: false,
    buttonLoading: false,
    buttonGoogleLoading: false,
    buttonGithubLoading: false,
    messageError: '',
    setMessage: () => {},
    setTouchEmail: () => {},
    setTouchPassword: () => {},
    setTouchConfirmPassword: () => {},
    setButtonLoading: () => {},
    setButtonGoogleLoading: () => {},
    setButtonGithubLoading: () => {},
    setMessageError: () => {},
    handleLoginByGithub: async() => {},
    handleLoginByGoogle: async() => {},
});