import { useEffect, useState } from "react";
import firebaseInitialization from "../../Firebase/Firebase.init";
import {
	getAuth,
	updateProfile,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	GoogleAuthProvider,
	signInWithPopup,
	onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

firebaseInitialization();

const useFirebase = () => {
	const [user, setUser] = useState({});
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [email, setEmail] = useState("");
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	const navigate = useNavigate();
	const auth = getAuth();
	console.log(user);
	// get user name
	const getUserName = (e) => {
		const userName = e.target.value;
		setName(userName);
	};
	// get user email
	const getUserEmail = (e) => {
		const userEmail = e.target.value;
		setEmail(userEmail);
	};
	// get user password
	const getUserPassword = (e) => {
		const userPassword = e.target.value;
		setPassword(userPassword);
	};
	const getConfirmPassword = (e) => {
		const userConfirmPassword = e.target.value;
		setConfirmPassword(userConfirmPassword);
	};

	// update user name
	const updateUserName = () => {
		updateProfile(auth.currentUser, {
			displayName: name,
		});
	};

	// register user with email and password
	const registerWithEmailAndPassword = (e) => {
		e.preventDefault();
		if (password === confirmPassword) {
			createUserWithEmailAndPassword(auth, email, password)
				.then(() => {
					updateUserName();
					// sendUserInfoToDb();
					setError("");
					e.target.reset();
					navigate("/home");
					// created
				})
				.catch((err) => setError(err.message));
		} else setError("Password is not matched");
	};

	// login user
	const loginWithEmailAndPassword = () => {
		return signInWithEmailAndPassword(auth, email, password);
	};

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
			setIsLoading(false);
		});
	}, []);

	// logOut user
	const logOut = () => {
		signOut(auth)
			.then(() => {
				setError("");
				setUser({});
				navigate("/home");
			})
			.catch((err) => setError(err.message));
	};

	return {
		user,
		error,
		logOut,
		setError,
		isLoading,
		getUserName,
		setIsLoading,
		getUserEmail,
		loginWithGoogle,
		getUserPassword,
		getConfirmPassword,
		loginWithEmailAndPassword,
		registerWithEmailAndPassword,
	};
};

export default useFirebase;
