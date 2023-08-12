import React, { Suspense, lazy, useEffect } from 'react';

import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthentificated, selectToken } from 'redux/selectors';
import { refreshUserThunk } from 'redux/operations';

import { NavLink, Route, Routes } from 'react-router-dom';
import { UserMenu } from './UserMenu/UserMenu';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const ContactsPage = lazy(() => import('pages/ContactsPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const authentificated = useSelector(selectAuthentificated);

  useEffect(() => {
    if (!token || authentificated) return;

    dispatch(refreshUserThunk());
  }, [token, dispatch, authentificated]);

  return (
    <div className={css.container}>
      <header>
        <nav className={css.navigate}>
          {authentificated ? (
            <>
              <NavLink to="/contacts" className={css.navigateBtn}>
                Contacts
              </NavLink>
              <UserMenu />
            </>
          ) : (
            <>
              <NavLink to="/register" className={css.navigateBtn}>
                Register
              </NavLink>
              <NavLink to="/login" className={css.navigateBtn}>
                Login
              </NavLink>
            </>
          )}
        </nav>
      </header>
      <main>
        <Suspense>
          <Routes>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login">
                  <ContactsPage />
                </PrivateRoute>
              }
            />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};
