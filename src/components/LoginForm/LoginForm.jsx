import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { loginUserThunk } from 'redux/operations';
import { selectAuthentificated } from 'redux/selectors';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const authentificated = useSelector(selectAuthentificated);

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
  if (authentificated) return <Navigate to="/contacts" />;

  return (
    <div>
      <form onSubmit={handleSubmit} className={css.loginForm}>
        <label className={css.loginTitle}>
          <p>Email:</p>
          <input
            type="email"
            name="userEmail"
            required
            className={css.loginInput}
          />
        </label>

        <label className={css.loginTitle}>
          <p>Password:</p>
          <input
            type="password"
            name="userPassword"
            required
            className={css.loginInput}
          />
        </label>

        <button tupy="submit" className={css.loginBtn}>
          Sign Up{' '}
        </button>
      </form>
    </div>
  );
};
