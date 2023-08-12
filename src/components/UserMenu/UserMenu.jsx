import { useDispatch, useSelector } from 'react-redux';
import { logoutUserThunk } from 'redux/operations';
import { selectUserData } from 'redux/selectors';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { email } = useSelector(selectUserData);
  const handleLogOut = () => {
    dispatch(logoutUserThunk());
  };

  return (
    <div className={css.userMenuBox}>
      <p className={css.userMenuText}>`${email}`</p>
      <button onClick={handleLogOut} className={css.userMenuButton}>
        Log Out
      </button>
    </div>
  );
};
