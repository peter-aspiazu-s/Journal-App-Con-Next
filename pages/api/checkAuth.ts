import { NextApiRequest, NextApiResponse } from "next";
import { 
    getAuth, 
    onIdTokenChanged, 
    GoogleAuthProvider, 
    FacebookAuthProvider, 
    signInWithCredential, 
    GithubAuthProvider 
} from "firebase/auth";
import firebaseApp from "./firebase";

const checkAuth = async(req:NextApiRequest, res:NextApiResponse) => {
    const auth = getAuth(firebaseApp);
    const { accessToken, idToken, providerId } = req.body;

    try {

        if (accessToken && idToken) {

            if(providerId === 'google.com'){
                const googleCredential = GoogleAuthProvider.credential(idToken, accessToken);
                await signInWithCredential(auth, googleCredential);
            }
        }

        if(accessToken){
            if(providerId === 'github.com'){
                const githubCredential = GithubAuthProvider.credential(accessToken);
                await signInWithCredential(auth, githubCredential);
            }
        }

        await new Promise<void>((resolve, reject) => {
            onIdTokenChanged(auth, (user) => {
                console.log({user});
                if(user){
                    res.status(200).json({ isAuthenticated: true });
                } else {
                    res.status(200).json({ isAuthenticated: false });
                }
                resolve();
            }, reject);
        })

    } catch (error) {
        console.error('Error checking authentication:', error);
        res.status(500).json({ error: 'Failed to check authentication' });
    }

}

export default checkAuth;