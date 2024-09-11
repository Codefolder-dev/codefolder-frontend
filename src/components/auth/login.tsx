import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '@/src/features/auth/authSlice';
import Input from '@/src/components/comman/Input';
import Button from '@/src/components/comman/Button';
import { useRouter } from 'next/router';
import { RootState,AppDispatch } from '@/src/redux/store';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useSelector((state: RootState) => state.auth);
  const router = useRouter();

  const handleLogin = () => {
    dispatch(login({ email, password })).then((result) => {
      if (!result.error) {
        router.push('/dashboard');  // Redirect to dashboard after login
      }
    });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded">
      <h1 className="text-2xl font-bold mb-6">Login</h1>
      <Input label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      {error && <p className="text-red-500">{error}</p>}
      <Button label="Login" onClick={handleLogin} disabled={loading} />
      <p className="mt-4">Don't have an account? <a href="/register" className="text-blue-500">Register</a></p>
    </div>
  );
};

export default LoginPage;
