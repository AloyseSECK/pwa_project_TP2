import { useState } from 'react'


function Login() {
    const [isLogged, setLogging] = useState(false)
    return (  
        <div className="grid bg-zinc-800 rounded-lg place-self-center">
            <img src='./images/bowser.webp' className="w-32 py-2 bg-contain h-auto place-self-center" />
            <p className="text-gray-100 px-4 " >Hey pas si vite ! Vous n'êtes pas connecté !</p>
            <button  onClick={() => setLogging(true)} className="bg-gray-300 text-black mx-20 my-4 py-1 place-self-center">Se connecter</button>
        </div>
    )
    
}    

export default Login ; 
