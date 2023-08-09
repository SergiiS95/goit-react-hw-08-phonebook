import { useDispatch } from 'react-redux';
import { registerUserThunk } from 'redux/operations';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;

    const name = form.elements.userName.value;
    const email = form.elements.userEmail.value;
    const password = form.elements.userPassword.value;

    dispatch(
      registerUserThunk({
        name,
        email,
        password,
      })
    );
  };

  return (
    <div>
      <h1>Register Your Account</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Name:</p>
          <input type="text" name="userName" required />
        </label>
        <br />
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

export default RegisterPage;
