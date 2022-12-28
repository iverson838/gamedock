import { signInWithGooglePopup } from "../Utilities/firebase";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };

  return (
    <div>
      <button onClick={logGoogleUser}>google</button>
    </div>
  );
};

export default SignIn;
