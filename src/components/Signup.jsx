import React,{useState} from 'react';

const Signup = ()=>{

const [name,setName] = useState('');
const [email, setEmail] =useState('')
const [password, setPassword] = useState('')

 

const handleSubmit = async (e)=>{
    e.preventDefault();
    const response = await fetch("http://localhost:5000/register",{
        method:"POST",    
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name:name,
            email:email,
            password:password
        })
    })
    const data = await response.json();
    console.log(data);

}


    return(
        <>
            <div className='p-10 bg-zinc-600 flex justify-center'>
                <form onSubmit={handleSubmit} className='flex flex-col gap-5 w-1/3'>
                    <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} className='p-2 rounded-md' placeholder='Name' />
                    <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} className='p-2 rounded-md'  placeholder='Email' />
                    <input type="password" value={password} onChange={(e) =>{setPassword(e.target.value)}} className='p-2 rounded-md'  placeholder='Password' />
                    <button type='submit' className='p-2 rounded-md bg-gradient-to-r from-cyan-500 to-purple-500 text-white' >Submit Form</button>
                </form>
            </div>
        </>
    )
}

export default Signup;