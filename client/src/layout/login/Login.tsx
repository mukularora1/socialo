import loginImage from "../../assets/images/login.png";
import GoogleIcon from "../../assets/svg/GoogleIcon";
import Button from "../../components/button/Button";
import InputBox from "../../components/input-box/InputBox";
import "./login.css";
function Login() {
  return (
    <div className="login">
      <div className="login__left">
        <div>Fill you login detail</div>
        <div className="login__detail-wrapper">
          <InputBox placeholder="Enter email" width="100%" />
          <InputBox placeholder="Enter password" width="100%" />
          <Button variant="contained">Login</Button>
        </div>
        <div className="login__login-or">
          <div className="login__login-or__line"></div>
          or
          <div className="login__login-or__line"></div>
        </div>
        <Button variant="outlined" className="login__google-login">
          <GoogleIcon />
          Continue with google
        </Button>
      </div>
      <div className="login__right">
        <img src={loginImage} alt="" />
      </div>
    </div>
  );
}

export default Login;
