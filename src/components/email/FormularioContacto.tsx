'use client'

import React, {useState, useEffect, useRef} from 'react';
import {RiPhoneFill, RiMailFill} from "react-icons/ri";
import {ImLocation} from "react-icons/im";
import emailjs from '@emailjs/browser';
import InputField from './InputField';
import InputEmail from './InputEmail';
import TextAreaField from './TextAreaField' 
import ReCAPTCHA from "react-google-recaptcha";

const FormularioContacto = () => {

      useEffect(() => {
        emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string); 
    }, []);

    const [values, setValues] = useState({  
            nombreCompleto: '',
            telefonoMovil:  '',
            email:          '',
            presupuesto:    '',
            interesadoEn:   '',
            mensaje:        ''
        });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValues(values => ({
            ...values,
            [e.target.name]: e.target.value
        }));
        };

    const [status, setStatus] = useState('');
      
    const handleSubmit = (e) => {
            e.preventDefault(); 

            if (captchaValido === true) {
                emailjs.send(
                    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
                    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
                    values,
                    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
                )
                    .then(response => {
                        console.log('Success!!', response);
                        setValues({
                            nombreCompleto: '',
                            telefonoMovil: '',
                            email: '',
                            presupuesto: '',
                            interesadoEn: '',
                            mensaje: '',
                        })
                        setStatus('SUCCESS')
                        }, error => {
                            console.log ('Failed send Email', error)
                        })
             }else {
                cambiarCaptchaValido(false);
              }
                }

    const [captchaValido, cambiarCaptchaValido] = useState<boolean | null>(null); 
    
    const captcha = useRef<ReCAPTCHA>(null);
    
    const onChangeCaptcha = () => {
      if (captcha.current && captcha.current.getValue()) {
        cambiarCaptchaValido(true)
      } else {
        cambiarCaptchaValido(false)
      }
    }
              

    useEffect(() => {
        if(status === 'SUCCESS'){
            setTimeout(() => {
                setStatus('');
            }, 3000)
        };
    }, [status])

    return ( 
            <div className="antialiased bg-cyan-900 min-h-screen w-full flex items-center justify-center ">
                    <div className ="flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6 bg-cyan-800 p-8 rounded-xl shadow-lg text-white overflow-hidden">  
                        
                        <div className ="flex flex-col space-y-8 justify-berween">
                            <div>    
                                <h1 className="font-title text-5xl xl:text-7xl tracking-wide py-10 xl:py-20"> Contáctame </h1>
                                <p  className ="p-2 text-cyan-100 text-sm">Te asesoramos desde el primer momento </p>
                            </div> 
                            <div className="inline-flex space-x-2 items-center">
                                <RiPhoneFill className="text-teal-300 text-xl"/>
                                <span> +(52) 55 7563 0576 </span>  
                            </div>  
                            <div className="inline-flex space-x-2 items-center">
                                <RiMailFill className="text-teal-300 text-xl"/>
                                <span> stratik@gmail.com  </span>  
                            </div> 
                            <div className="inline-flex space-x-2 items-center"> 
                                <ImLocation className="text-teal-300 text-xl"/>
                                <span> Cd. México, Madrid </span>  
                            </div>  
                        </div>

                        <div className="relative"> 
                        <div className="absolute z-0 w-40 h-40 bg-teal-400 rounded-full -right-28 -right-top-28"></div>
                        <div className="absolute  w-40 h-40 bg-teal-400 rounded-full -left-16 -bottom-16"></div> 
 
                        <div className="relative z-10 bg-white rounded-xl shadow-lg hover:shadow-indigo-500/40 p-8 text-gray-600 md:w-90 " >

                            {status && renderAlet()}
                            <form onSubmit={handleSubmit} id="form" action ="" className="flex flex-col space-y-4 " >
                                <InputField value={values.nombreCompleto}   handleChange={handleChange} label ="Nombre Completo"        aria-labelledby="Nombre Completo" name="nombreCompleto"   type="text"     placeholder="Juan Perez" />
                                <InputField value={values.telefonoMovil}    handleChange={handleChange} label ="Telefono Móvil"         aria-labelledby="Teléfono Móvil"  name="telefonoMovil"    type="text"     placeholder="+52 55 55 55 55 55" />
                                <InputEmail value={values.email}            handleChange={handleChange} label ="E-mail"                 aria-labelledby="E-Mail"          name="email"            type="email"    placeholder="st@gmail.com " />
                                <TextAreaField value={values.mensaje}       handleChange={handleChange} label ="Mensaje"                aria-labelledby="Mensaje "                            name="mensaje" />
 
                                <button 
                                    id= "button"
                                    type="submit"
                                    className=" inline-block self-end font-semibold px-6 bg-sand text-diamonBlack rounded-xl shadow-lg shadow-indigo-500/40 py-2 uppercase text-sm"
                               >
                                    Envíar Formulario
                                </button>

                                <br></br>
                                 
                                <div className="text-center">
                                    <ReCAPTCHA
                                    ref={captcha}
                                    onChange={onChangeCaptcha}
                                    // sitekey={import.meta.env.VITE_PUBLIC_KEY_CAPTCHA}
                                    sitekey={"6LfUIlUrAAAAAEkjBb8F0jo93uMtzjVtFZeefYE_"}

                                    theme="light" 
                                    />
                                </div>
                                {captchaValido === false &&
                                    <div className="text-blue-20 br-100 text-center font-sans text-SM font-medium uppercase">
                                        Valida que no eres un Robot
                                    </div>}

                            </form> 
                          
                        </div>   
                            {status ?(
                                <div className="text-base px-4 py-3 text-axeda bg-blue-100 rounded-lg mb-1 mt-4 text-center">
                                    <p>  ¡Su mensaje ha sido enviado con éxito!. En breve nos comunicaremos con ud. ¡¡GRACIAS!! </p>
                                </div> 
                            ): <div></div>
                            }
                        </div> 
                </div>
        </div> 
        )
    }

    const renderAlet = () => ( 
        <div></div>
    )

export default FormularioContacto
