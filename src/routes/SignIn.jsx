import { signInWithGooglePopup, createUserDoc } from "../Utilities/firebase";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDoc(user);
  };

  return (
    <div>
      <button onClick={logGoogleUser}>google</button>
    </div>
  );
};

export default SignIn;
