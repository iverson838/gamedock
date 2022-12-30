import {
  auth,
  signInWithGooglePopup,
  createUserDoc,
  signInWithGoogleRedirect,
} from "../Utilities/firebase";
import SignUpForm from "../Components/SignUpForm";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDoc(user);
  };

  return (
    <div>
      <button onClick={logGoogleUser}>google</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
