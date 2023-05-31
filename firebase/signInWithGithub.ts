import { 
    getAuth, 
    signInWithPopup, 
    GithubAuthProvider,
    fetchSignInMethodsForEmail,
} from 'firebase/auth';
import firebaseApp from "./config";
import { FirebaseError } from 'firebase/app';

export const signInWithGithub = async () => {
  const auth = getAuth(firebaseApp);
  const githubProvider = new GithubAuthProvider();

  try {
    const result = await signInWithPopup(auth, githubProvider);
    const credentials = GithubAuthProvider.credentialFromResult(result);
    if (credentials?.providerId) {

        const user = auth.currentUser;
        const email = user?.email;

        // Verificar los proveedores de autenticación asociados al correo electrónico
        const signInMethods = await fetchSignInMethodsForEmail(auth, email!);

      return {
        accessToken: credentials.accessToken,
        providerId: credentials.providerId
      };
    }
  } catch (error) {
    if (error instanceof FirebaseError && error.code === 'auth/account-exists-with-different-credential') {
        return 'El correo electrónico ya está registrado con Google.'
    } else {
        return 'Error al inciar sesión intentelo nuevamente.'
      }
  }
};
