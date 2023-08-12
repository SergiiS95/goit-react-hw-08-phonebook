import { LoginForm } from 'components/LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <div>
      <h1
        style={{
          textAlign: 'center',
        }}
      >
        Login Into Your Account
      </h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
