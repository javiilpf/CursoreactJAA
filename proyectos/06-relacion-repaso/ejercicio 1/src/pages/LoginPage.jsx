import { useState } from "react"


const LoginPage = () => {
    const initialState={email:"", password:""};
    const [formData, setformData] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setformData(initialState);
    }

    // const handleChange = (e) => {
    //     const {name, value} = e.target;
    //     setformData(preValue=>(
    //         {...preValue, [name]:value}
    //     ))
    // }
  return (
    <div>
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6">
            <div className="max-w-md w-full space-y-8">
                <h2 className="max-w-md w-full space-y-8">Iniciar sesión</h2>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    {/* Div para mostrar los errores */}
                    <div>
                        <div>
                            
                        </div>
                        <div>
                            <label htmlFor="">Email</label>
                            <input type="text" />
                        </div>
                    </div>
                </form>

            </div>
        </div>
    </div>
  )
}

export default LoginPage