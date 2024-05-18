import React,{useState} from 'react';
import Cover_image from "./nice-business-desk-black-background.jpg";
import Google_image from "./google-icon-256x256-hqxhu7j7.png";
import swal from 'sweetalert';

export default function Signup1() {
 
const [name,setName] = useState('');
const [email, setEmail] =useState('')
const [password, setPassword] = useState('')

const handleSubmit = async (e)=>{
  e.preventDefault();
  const response = await fetch("http://localhost:5000/registe",{
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
  // console.log(data);
  if(data.message == 'Successfull'){
    swal("Success","Registered","success")
  }else{
    swal("Failed","Registration Failed","error")
  }
}



  return (
    <div className="w-full h-screen flex items-start">
      <div className="relative w-1/2 h-full flex flex-col">
        <div className="absolute top-[30%] left-[10%] flex flex-col">
          <h1 className="text-4xl font-bold my-4 text-slate-400">
            Hello react
          </h1>
          <p className="text-xl font-normal text-slate-50">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
            molestiae iusto veniam animi, in voluptatum error .
          </p>
        </div>
        <img src={Cover_image} alt="" className="h-full w-full object-cover" />
      </div>
      {/*-----------------------------Right side------------------------------------*/}
      <div className="w-1/2 h-full bg-zinc-300 flex flex-col p-14 justify-between items-center">
        <h1 className="text-xl text-black font-semibold ">Clothing Brand</h1>

        <div className="w-full flex flex-col max-w-[500px]">
          <div className="w-full flex flex-col mb-2">
            <h1 className="text-3xl font-semibold text-black mb-2">Signup</h1>
            <p className="text-base mb-2">Enter ur details here</p>
          </div>

{/*--------------------------------form submission---------------------------------------------------*/}
          <form onSubmit={handleSubmit}>
          <div className="w-full flex flex-col">
          
          <input
              type="text" value={name} onChange={(e)=>{setName(e.target.value)}}
              className="w-full my-2 py-2 bg-transparent text-black border-b border-black outline-none focus:outline-none"
              placeholder="Name"
            />

            <input
              type="email"  value={email} onChange={(e)=>{setEmail(e.target.value)}}
              className="w-full my-2 py-2 bg-transparent text-black border-b border-black outline-none focus:outline-none"
              placeholder="Email"
            />

            <input
              type="password" value={password} onChange={(e) =>{setPassword(e.target.value)}}
              className="w-full my-2 py-2 bg-transparent text-black border-b border-black outline-none focus:outline-none"
              placeholder="password"
            />
          </div>

          <div className="w-full flex justify-between items-center">
            <div className="w-full flex items-center">
              <input type="checkbox" className="w-4 h-4 mr-2" />
              <p className="text-sm">Remember me</p>
            </div>
            <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2">
              Forget Password
            </p>
          </div>

          <div className="w-full flex flex-col my-4">
            <button type='submit' className="w-full text-white my-2 bg-black rounded-md p-4 font-semibold text-center flex items-center justify-center cursor-pointer">
              Signup
            </button>
            <button type='submit' className="w-full text-black my-2 bg-slate border-2 border-black font-semibold rounded-md p-4 text-center flex items-center justify-center cursor-pointer ">
              Login
            </button>
          </div>
         </form>
         {/*-------------------------------------------------------------------------------------*/}

          <div className="w-full flex items-center justify-center relative py-2">
            <div className="w-full h-[1px] bg-black"></div>
            <p className="text-lg absolute text-black/80 bg-slate">OR</p>
          </div>

          <div className="w-full text-black my-2 bg-slate border-1 border-black/40 font-semibold rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
            <img src={Google_image} alt="" className="h-6 mr-2" />
            Sign in with Google
          </div>
        </div>

        <div className="w-full flex justify-center items-center">
          <p className="text-sm font-normal text-gray-800">
            Don't have account then{" "}
            <span className="font semibold underline underline-offset-2 cursor-pointer">
              signup
            </span>
          </p>
        </div>

        {/*-----------------------------main login------------------------------------*/}
      </div>
    </div>
  );
}
