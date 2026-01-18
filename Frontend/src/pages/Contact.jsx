import React, { useState } from "react";
import axios from 'axios'
import {toast} from 'react-toastify'
const Contact = () => {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [message,setMessage] = useState("")
  const [loading ,setLoading] = useState(false)
  const backendUrl = import.meta.env.VITE_BACKEND_URL
  const onSubmitHandler = async (e)=>
  {
     e.preventDefault()
     try {
        setLoading(true)
        const response = await axios.post(backendUrl+'/api/contact',{name,email,message})
        if(response.data.success)
        {
          toast.success(response.data.message)
        }
        else{
         
          toast.error(response.data.message)
        }
     } catch (error) {
      setLoading(false)
        console.log(error.message)
        toast.error(error.message)
     }

     setEmail('')
     setMessage('')
     setName('')
     setLoading(false)

  }

  return (
    <div id="contact" className="px-3 reveal">
      <div className="bg-[#f7f7f2] min-h-screen w-full rounded-t-[4rem] px-4 sm:px-6">

        <div className="flex flex-col items-center pt-16 sm:pt-20 text-center">

          {/* HEADINGS */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#676664]">
            LET&apos;S CONNECT
          </h1>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#676664]">
            AND
          </h1>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#676664]">
            MAKE IT MEMORABLE
          </h1>

          {/* FORM */}
          <form onSubmit={onSubmitHandler}
            className="flex flex-col border border-[#483522] rounded-2xl gap-5
            w-full max-w-[550px] h-auto lg:h-[550px]
            px-6 sm:px-8 lg:px-10 py-8 sm:py-10 my-12 sm:my-20"
          >
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#676664]">
              Welcome!
            </h1>

            <input
              className="border border-[#483522] rounded-xl px-3 py-3"
              type="text" required
              placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}
            />

            <input
              className="border border-[#483522] rounded-xl px-3 py-3"
              type="email" value={email} onChange={(e)=>setEmail(e.target.value)}
              placeholder="Email" required
            />

            <textarea
            required
              className="border border-[#483522] rounded-xl px-3 py-3 h-32 sm:h-36 lg:h-40 resize-none"
              placeholder="Just write..." value={message} onChange={(e)=>setMessage(e.target.value)}
            />

            <button type="submit"
              className="border border-[#483522] rounded-xl px-3 py-3
              text-white bg-[#483522] hover:bg-[#6e583f] transition"
            >
              {loading?"sending":"Send"}
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Contact;
