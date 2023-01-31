import SignUpForm from "../Components/SignUpForm";
import SignInForm from "../Components/SignInForm";
import "./SignIn.scss";

const SignIn = () => {
  return (
    <div className="auth-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default SignIn;
