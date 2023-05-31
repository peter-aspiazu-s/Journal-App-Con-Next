import { NextApiRequest, NextApiResponse } from 'next';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import firebaseApp from './firebase';


const loginUser = async(req:NextApiRequest, res:NextApiResponse) => {

    const { email, password } = req.body;

    const auth = getAuth(firebaseApp);

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        res.status(200).json({ message: 'IsAuthenticated!' });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ error: 'Failed login' });
    }
}

export default loginUser;