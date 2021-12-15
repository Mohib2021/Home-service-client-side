import firebaseInitialization from "../../Firebase/Firebase.init";
import {
	getAuth,
	GoogleAuthProvider,
	signInWithPopup,
	onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";

firebaseInitialization();
const [user, setUser] = useState({});
const [error, setError] = useState("");
const auth = getAuth();
const useFirebase = () => {
	const loginWithGoogle = () => {
		const googleProvider = new GoogleAuthProvider();
		signInWithPopup(auth, googleProvider)
			.then((result) => {
				const user = result.user;
				console.log(user);
			})
			.catch((error) => setError(error.message));
	};
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) setUser(user);
			else {
				setUser({});
				setError("");
			}
		});
	}, []);
	return {
		user,
		error,
		loginWithGoogle,
	};
};

export default useFirebase;
