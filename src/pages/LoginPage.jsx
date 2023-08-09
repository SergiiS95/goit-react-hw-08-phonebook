import { useDispatch } from "react-redux";
import { loginUserThunk } from "redux/operations";

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;

    const email = form.elements.userEmail.value;
    const password = form.elements.userPassword.value;

    dispatch(
      loginUserThunk({
        email,
        password,
      })
    );
  };

  return (
    <div>
      <h1>Login Into Your Account</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Email:</p>
          <input type="email" name="userEmail" required />
        </label>
        <br />
        <label>
          <p>Password:</p>
          <input type="password" name="userPassword" required />
        </label>
        <br />
        <button tupy="submit">Sign Up </button>
      </form>
    </div>
  );
};


export default LoginPage