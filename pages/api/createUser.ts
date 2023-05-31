import { NextApiRequest, NextApiResponse } from 'next';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import firebaseApp from './firebase';

const createUser = async(req:NextApiRequest, res:NextApiResponse) => {
    const { email, password } = req.body;

    const auth = getAuth(firebaseApp);

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log('User created:', user);
        res.status(200).json({ message: 'User created successfully' });

    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Failed to create user' });
    }
}

export default createUser;