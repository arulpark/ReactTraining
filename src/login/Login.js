import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Implement login logic here
    console.log('Logging in with:', username, password);
  };

  return (
    <div>
        <div id='contact' className='py-16'>
        <div className='w-9/12 mx-auto'>
            <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
        <div className='sm:col-span-3'>
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} className='block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6' />
      </label>
      </div>
      <div className='sm:col-span-3'>
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} className='block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400sm:text-sm sm:leading-6' />
      </label>
      </div>
      <div className='sm:col-span-3'>
      <button onClick={handleLogin} className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 '>Login</button>
      </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Login;