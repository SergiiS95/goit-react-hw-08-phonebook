import React, { Suspense, lazy, useEffect } from 'react';

// import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthentificated, selectToken } from 'redux/selectors';
import { refreshUserThunk } from 'redux/operations';

import { NavLink, Route, Routes } from 'react-router-dom';

const ContactsPage = lazy(() => import('pages/ContactsPage'))
const LoginPage = lazy(() => import('pages/LoginPage'))
const RegisterPage = lazy(()=> import('pages/RegisterPage'))

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken)
  const authentificated= useSelector(selectAuthentificated)

  useEffect(() => {
    if (!token) return;

    dispatch(refreshUserThunk());
  }, [dispatch, token]);

  return (
    <div>
      <header>
        <nav>
          {authentificated ? (
            <NavLink to="/contacts">Contacts</NavLink>
          ) : (
            <>
              <NavLink to="/register">Register</NavLink>
              <NavLink to="/login">Login</NavLink>
            </>
          )}
        </nav>
      </header>
      <main>
        <Suspense>
          <Routes>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};
