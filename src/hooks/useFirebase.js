/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import initAuthentication from "../pages/Login/Firebase/Firebase.init";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    updateProfile,
    getIdToken,
} from "firebase/auth";


// initalize firebase
initAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    // reserve jwt token
    const [jwtToke, setJwtToken] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    // Create a new user
    const registerUser = (email, password, name, history) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password,)
            // Copy into documentation
            .then((userCredential) => {
                // Cleare text message
                setAuthError('');
                //    First time create user start  (set name)
                //    Create profile  &  Update profileUser(By ysing Firebase);
                const newUser = { email, displayName: name };
                setUser(newUser);
                // save user to the database
                saveUserToDatabase(email, name, 'POST');

                // Copy from documentation 
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                //    First time create user end
                history.replace('/');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setLoading(false));
    }
    // Create a singInUser
    const logInUser = (email, password, location, history) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            // Copy into documentation
            .then((userCredential) => {
                // Go to redirect page after login
                const redirectPage = location?.state?.from || '/';
                history.replace(redirectPage);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setLoading(false));
    }
    // Using Google SingIn
    const singInUsingGoogle = (location, history) => {
        setLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUserToDatabase(user.email, user.displayName, 'PUT');
                setAuthError('');
                // Go to redirect page after login
                const redirectPage = location?.state?.from || '/';
                history.replace(redirectPage);
                setAuthError('');
                // ...
            }).catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setLoading(false));
    }

    // SingOut Method
    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {
            })
            .finally(() => setLoading(false));
    }
    // Observer By Using UseEffect by one into onther tab to changing tabs on website pages
    useEffect(() => {
        const unsebscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                // get jwt token
                getIdToken(user)
                    .then(idToken => {
                        setJwtToken(idToken);
                    })
            } else {
                setUser({})
            }
            setLoading(false);
        });
        return () => unsebscribe;
    }, []);

    // UseEffect for Admin
    useEffect(() => {
        fetch(`https://boiling-reaches-79167.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    // Save User to Database
    const saveUserToDatabase = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://boiling-reaches-79167.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    return {
        user,
        admin,         //Use into Admin Part
        jwtToke,       //Use for anyOther location 
        registerUser,  //Use into Register part
        logInUser,    //Use into LogIn part
        logOut,      //Use into Nevegation part
        loading,
        authError,
        singInUsingGoogle,

    }
}

export default useFirebase;