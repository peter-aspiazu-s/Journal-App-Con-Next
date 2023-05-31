import {
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider,
    fetchSignInMethodsForEmail
} from 'firebase/auth';
import firebaseApp from "./config";
import { FirebaseError } from 'firebase/app';

export const signInWithGoogle = async() => {

    const auth = getAuth(firebaseApp);
    const googleProvider = new GoogleAuthProvider();

    try {
        const result = await signInWithPopup(auth, googleProvider);
        const credentials = GoogleAuthProvider.credentialFromResult(result);

        if(credentials?.accessToken && credentials.idToken){

            const user = auth.currentUser;
            const email = user?.email;

            // Verificar los proveedores de autenticación asociados al correo electrónico
            const signInMethods = await fetchSignInMethodsForEmail(auth, email!);
            
            return {
                accessToken: credentials?.accessToken,
                idToken: credentials.idToken,
                providerId: credentials.providerId
            }
        }
    } catch (error) {
        if (error instanceof FirebaseError && error.code === 'auth/account-exists-with-different-credential') {
            return 'El correo electrónico ya está registrado con Github.'
        } else {
            return 'Error al inciar sesión intentelo nuevamente.'
          }
    }
}