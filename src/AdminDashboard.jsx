
import React, { useState } from 'react';

function AdminDashboard() {
    const [admined, setAdmined] = useState(false);

    const AdminName = 'Edwin Metto';
    const AdminEmail = 'edwin@gmail.com';
    const AdminPass = 'potstore254';

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const checkAdmin = (e) =>{
        e.preventDefault();
        if(name === AdminName && email === AdminEmail && pass === AdminPass){
            setAdmined(true)
        }
    }

    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }
    const handlePassChange = (event) => {
        setPass(event.target.value)
    }

  return (
    <div>
    <div className='text-black m-10'>
        <div className='bg-gray-100 flex  justify-center p-5 rounded-xl'>
            <form action="" className=''>
                <h2 className='font-bold m-2 text-[18px]'>Enter your admin details</h2>
                <h2>Admin Name</h2>
                <input 
                value={name}
                onChange={handleNameChange}
                type="text"
                placeholder='Admin Name' 
                className='p-1 text-center text-black bg-white rounded-2xl w-[300px] m-2' 
                required/>
                <h2>Email</h2>
                <input 
                value={email}
                onChange={handleEmailChange}
                type="email" placeholder='Email' className='p-1 text-center text-black bg-white rounded-2xl w-[300px] m-2' required/>
                <h2>Password</h2>
                <input 
                value={pass}
                onChange={handlePassChange}
                type="password" placeholder='Password' className='p-1 text-center text-black bg-white rounded-2xl w-[300px] m-2' required/>
                <br />
                <button className=' w-[200px] p-1 border-none rounded-l bg-blue-500 hover:bg-blue-600 hover:text-white' onClick={checkAdmin}>Login</button>
            </form>

        </div>
        <div>
        {admined ? ( <div>
            <p>{name}</p>
            <p>{email}</p>
            <p>{pass}</p></div> ): ''}
        </div>
    </div>
    
    </div>
  );
}

export default AdminDashboard;