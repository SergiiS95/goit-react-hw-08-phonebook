import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { registerUserThunk } from 'redux/operations';
import { selectAuthentificated } from 'redux/selectors';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const authentificated = useSelector(selectAuthentificated);
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
  if (authentificated) return <Navigate to="/contacts" />;
  return (
    <div>
      <form onSubmit={handleSubmit} className={css.registerForm}>
        <label className={css.registerTitle}>
          <p>Name:</p>
          <input
            type="text"
            name="userName"
            required
            className={css.registerInput}
          />
        </label>

        <label>
          <p className={css.registerTitle}>Email:</p>
          <input
            type="email"
            name="userEmail"
            required
            className={css.registerInput}
          />
        </label>

        <label>
          <p className={css.registerTitle}>Password:</p>
          <input
            type="password"
            name="userPassword"
            required
            className={css.registerInput}
          />
        </label>

        <button tupy="submit" className={css.registerBtn}>
          Sign Up{' '}
        </button>
      </form>
    </div>
  );
};
