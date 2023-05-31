import { NextApiRequest, NextApiResponse } from "next";
import { getAuth, signOut } from 'firebase/auth';
import firebaseApp from './firebase';

const logout = async(req:NextApiRequest, res:NextApiResponse) => {
    const auth = getAuth(firebaseApp);

    try {
        await signOut(auth);

        res.status(200).json({message: 'Logged out successfully'});
    } catch (error) {
        console.error('Error logging out:', error);
        
        res.status(500).json({ error: 'Failed to log out' });
    }
}


export default logout;