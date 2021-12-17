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
	const [image, setImage] = useState(null);
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	const navigate = useNavigate();
	const auth = getAuth();
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
	// get user Image
	const getUserImage = (e) => {
		const image = e.target.files[0];
		setImage(image);
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

	// Send google user info to Database
	const sendUserInfoToDb = (displayName, email, photo) => {
		const userInfo = {
			displayName,
			email,
			photo,
			role: "user",
		};
		console.log(userInfo);
		fetch("http://localhost:5000/users", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(userInfo),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			})
			.catch((err) => setError(err.message));
	};
	console.log(user);
	// send signUp user info to db
	const sendSignUpUserToDb = () => {
		const formData = new FormData();
		formData.append("displayName", name);
		formData.append("email", email);
		formData.append("photo", image);
		formData.append("role", "user");

		fetch("http://localhost:5000/users", {
			method: "POST",
			body: formData,
		})
			.then((response) => response.json())
			.then((result) => {
				console.log("Success:", result);
			})
			.catch((error) => {
				console.error("Error:", error);
				setError(error.message);
			});
	};

	// register user with email and password
	const registerWithEmailAndPassword = (e) => {
		e.preventDefault();
		if (password === confirmPassword) {
			createUserWithEmailAndPassword(auth, email, password)
				.then((result) => {
					const user = result.user;
					setUser(user);
					updateUserName();
					sendSignUpUserToDb();
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

	const loginWithGoogle = (redirectURL) => {
		const googleProvider = new GoogleAuthProvider();
		signInWithPopup(auth, googleProvider)
			.then((result) => {
				const user = result.user;
				sendUserInfoToDb(user.displayName, user.email, user.photoURL);
				navigate(redirectURL);
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
	}, [auth]);

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
		getUserImage,
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
