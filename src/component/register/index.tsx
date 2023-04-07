import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { registerUser } from '../../store/user/actions';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contact, setContact] = useState('');

  const dispatch = useDispatch<ThunkDispatch<RootState, unknown, AnyAction>>();
  const error = useSelector((state: RootState) => state.user.error);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(registerUser(name, email, password, contact));
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div>{error}</div>}
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </div>
      <div>
        <label htmlFor="contact">Contact:</label>
        <input type="text" id="contact" value={contact} onChange={(event) => setContact(event.target.value)} />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
