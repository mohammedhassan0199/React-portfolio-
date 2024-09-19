// import { DevTool } from "@hookform/devtools";
import { ErrorMessage } from "@hookform/error-message";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser'
import Demo from './Demo'

function Form(){

    const {register,handleSubmit,control,formState: {errors} , } = useForm()
    const onSubmit =(data) =>{
        console.log(data);
    }

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_3plo9zb' , 'template_u3vkuwv' , form.current , {
            publicKey:'rfhzIWf8KqcsKWgvt',
        })

        .then(
            ()=>{
                console.log('success');
        },

        (error) =>{
            console.log('fail...',error.text)
        },
    );
    };
 

    return(
        <>
            <section className="my-[5%] px-[20%] flex  lg:px-[15%] md:px-[10%] sm:px-[1.5%]" id="contact">
                
            <div className="py-[4%] backdrop-blur-sm shadow-[5px 5px 30px rgba(0,0,0,0.2)] border-l border-t border-[rgba(255,255,255,0.2)] bg-white
               rounded-xl flex  justify-center w-full flex-col">

               <div className="text-center ">
                
               <h1 className="mb-10 text-[#1B732E] text-4xl font-semibold  lg:text-3xl md:text-2xl sm:text-xl"><Demo head="Contact Me"/></h1>
               </div>

                <form ref={form} onSubmit={handleSubmit(onSubmit)} onChange={sendEmail} className="flex flex-col w-full px-16 text-white items-center relative sm:px-5" >

                    <input type="text" placeholder="First name" className="bg-[#333F68] border-2 border-[#4a5781] rounded-md mb-3 pl-3 w-full  focus:outline-none py-2 focus:placeholder:text-white" {...register("firstName" ,{required:"* This feild is required"})}/>

                    <ErrorMessage  

                            errors={errors}
                            name="firstName"
                            render={({message}) =><h2 className="text-red-700">{message}</h2>}
                    />

                    <input type="text" placeholder="Last name" className="bg-[#333F68] border-2 border-[#4a5781] rounded-md mb-3 pl-3 w-full  focus:outline-none py-2 focus:placeholder:text-white" {...register("lastName" ,{required:"This feild is required "})}/>

                    <ErrorMessage 
                    
                        errors={errors}
                        name="lastName"
                        render={({message}) =><h2 className="text-red-700">{message}</h2>}
                    
                    />

                    <input type="email" placeholder="Email" className="bg-[#333F68] border-2 border-[#4a5781] rounded-md mb-3 pl-3 w-full  focus:outline-none py-2 focus:placeholder:text-white" {...register("email" ,{required:"This feild is required"})} aria-invalid={errors.mail ? "true" : "falese"} id="email"/>

                    <ErrorMessage 
                    
                        errors={errors}
                        name="email"
                        render={({message}) =><h2 className="text-red-700">{message}</h2>}
                    
                    />

                    <input type="password" placeholder="Password" className="bg-[#333F68] border-2 border-[#4a5781] rounded-md mb-3 pl-3 w-full  focus:outline-none py-2 focus:placeholder:text-white" {...register("password" ,{required:"This feild is required"})} id="pasword"/>

                    <ErrorMessage
                    
                        errors={errors}
                        name="password"
                        render={({message})=><h2 className="text-red-700">{message}</h2>}
                    
                    />

                    <input type="tel"  placeholder="Contact no." className="bg-[#333F68] border-2 border-[#4a5781] rounded-md mb-3 pl-3 w-full  focus:outline-none py-2 focus:placeholder:text-white" {...register("phone" ,{required:"This feild is required"})} aria-invalid={errors.tel ? "true" : "false"} id="phone" />

                    <ErrorMessage 
                    
                    errors={errors}
                    name="phone"
                    render={({message}) =><h2 className="text-red-700">{message}</h2> }
                    
                    />

                    <input type="text" placeholder="Address" className="bg-[#333F68] border-2 border-[#4a5781] rounded-md pl-3 w-full mb-5 focus:outline-none py-2 focus:placeholder:text-white" {...register("address" ,{required:"This feild is required"})} id="address"/>

                    <ErrorMessage
                    
                        errors={errors}
                        name="address"
                        render={({message}) =><h2 className="text-red-700">{message}</h2>}
                    
                    />

                    <button type="submit" className=" rounded-md w-1/4 bg-[#1B732E] text-white py-3 text-lg sm:w-1/2">Submit</button>
                
                {/* <img src="react.png" alt=""  className="w-[60px] h-[60px] object-cover absolute top-[422px] -left-[32px] rounded-lg drop-shadow-2xl shadow-black"/> */}
                </form>
                {/* <DevTool control={control} /> */}
            </div>
            </section>
        </>
    )
}
export default Form;