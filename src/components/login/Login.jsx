import "./Login.css";

const Login = ({setActive}) => {
  return <div onClick={() => setActive(false)} className="overflow">
    <div className="login"></div>
  </div>;
};

export default Login;
