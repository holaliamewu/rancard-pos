import React, { useContext, useState } from 'react';
import { AuthContext } from '../App';

export default function Login() {

  const [ isAuthenticated, setAuthenticated ] = useContext( AuthContext )
  const [allCorrect, setAllCorrect] = useState(false);
  const [form, setForm] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
    setError((prev) => ({
      ...prev,
      [name]: ''
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, password } = form;
    let formValid = true;

    if (!username) {
      setError((prev) => ({
        ...prev,
        username: 'Username is required'
      }));
      formValid = false;
    } else if (username !== 'me@rancard233') {
      setError((prev) => ({
        ...prev,
        username: 'Username does not exist.'
      }));
      formValid = false;
    }

    if (!password) {
      setError((prev) => ({
        ...prev,
        password: 'You forgot to enter your Password.'
      }));
      formValid = false;
    } else if (password.length < 8) {
      setError((prev) => ({
        ...prev,
        password: 'Password characters should not be less than 8.'
      }));
      formValid = false;
    } else if (password !== 'rancard233') {
      setError((prev) => ({
        ...prev,
        password: 'Wrong password.'
      }));
      formValid = false;
    }

    if (!formValid) {
      return;
    }

    setAllCorrect(true);

    try {
      setAuthenticated(true)
      console.log('Form submitted:', { username, password });
      setForm({ username: '', password: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className='flex'>
      <section className='hidden lg:inline-block bg-red-300 lg:w-1/2 h-[100vh]'>photo here</section>
      <section className='flex flex-col gap-[80px] items-center justify-center w-full lg:w-1/2 h-[100vh] lg:pl-[100px]'>
        <h1 className='text-[35px] lg:mr-auto font-[600] leading-[42px]'>Login to Syst</h1>
        <form onSubmit={handleSubmit} className='flex flex-col mx-auto lg:mr-auto gap-[40px] w-full max-w-[600px]'>
          <span className='flex flex-col'>
            <label htmlFor='username' className='text-[16px] text-[#707070] leading-[19.2px] font-[400]'>
              Username
            </label>
            <input
              className='border-b border-b-[#cccccc] w-[90%]'
              type='text'
              name='username'
              value={form.username}
              onChange={handleChange}
            />
            {error.username && <span style={{ color: 'red' }}>{error.username}</span>}
          </span>
          <span className='flex flex-col'>
            <label htmlFor='password' className='text-[16px] text-[#707070] leading-[19.2px] font-[400]'>
              Password
            </label>
            <input
              className='border-b border-b-[#cccccc] w-[90%]'
              type='password'
              name='password'
              value={form.password}
              onChange={handleChange}
            />
            {error.password && <span style={{ color: 'red' }}>{error.password}</span>}
          </span>
          <button 
          style={{
            backgroundColor: allCorrect ? '#0dd983' : '#0dd9834f'
          }}
          type='submit' 
          className='flex items-center justify-center bg-[#] h-[60px] px-[16px] py-[24px] rounded-full text-[23px] text-[#16CB7F] font-[500] leading-[27.6px]'>
            Log in
          </button>
        </form>
      </section>
    </div>
  );
}
