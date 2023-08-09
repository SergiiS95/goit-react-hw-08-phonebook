// import { ContactForm } from 'components/ContactForm/ContactForm';
// import { ContactList } from 'components/ContactList/ContactList';
// import { Filter } from 'components/Filter/Filter';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchContactsThunk } from 'redux/operations';
// import { selectError, selectIsLoading } from 'redux/selectors';
// import css from './ContactsPage.module.css';

// const Contacts = () => {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);

//   useEffect(() => {
//     dispatch(fetchContactsThunk());
//   }, [dispatch]);

//   return (
//     <div className={css.container}>
//       <h1 className={css.title}>Phonebook</h1>
//       <ContactForm />
//       <h2 className={css.titleContact}>Contacts</h2>
//       <Filter />
//       {isLoading && !error && <b className={css.loader}>Loading...</b>}
//       <ContactList />
//     </div>
//   );
// };

// export default Contacts;
