import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '@/src/features/auth/authSlice';
import Input from '@/src/components/comman/Input';
import Button from '@/src/components/comman/Button';
import { useRouter } from 'next/router';
import { RootState, AppDispatch } from '@/src/redux/store';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useSelector((state: RootState) => state.auth);
  const router = useRouter();

  const handleRegister = () => {
    dispatch(register({ email, password })).then((result) => {
      if (!result.error) {
        router.push('/dashboard');  // Redirect to dashboard after registration
      }
    });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded">
      <h1 className="text-2xl font-bold mb-6">Register</h1>
      <Input label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      {error && <p className="text-red-500">{error}</p>}
      <Button label="Register" onClick={handleRegister} disabled={loading} />
      <p className="mt-4">Already have an account? <a href="/login" className="text-blue-500">Login</a></p>
    </div>
  );
};

export default RegisterPage;
