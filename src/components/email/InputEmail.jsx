
const InputEmail = (props) => {
    const{handleChange, label, name, type, value} = props;
    return (
        <div> 
            <div> 
                <label className="text-sm after:content-['*'] after:ml-0.5 after:text-red-500" htmlFor={name}>
                    Correo Electrónico </label>

                <input  type={type} onChange={handleChange} value={value} name={name} required 
                        className="peer w-full rounded-md px-4 py-2 outline-none ring-1 ring-gray-300 focus:ring-2 
                        focus:ring-teal-300 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 
                        focus:invalid:ring-pink-500" 
                   />
                    <p className="peer-valid:invisible text-pink-600 text-sm">
                        Por favor introduce un E-mail valido.
                    </p> 
            </div> 
        </div>
    ) 
}

export default InputEmail
