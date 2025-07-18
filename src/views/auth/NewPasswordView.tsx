import NewPasswordToken from "@/components/auth/NewPasswordToken"
import { useState } from "react"
import NewPasswordForm1 from "@/components/auth/NewPasswordForm";
import type { ConfirmToken } from "@/types/index";


export const NewPasswordView = () => {

    const [token, setToken] = useState<ConfirmToken['token']>('')
    const [isvalidToken, setIsvalidToken] = useState(false)


    return (
        <>
            <h1 className="text-5xl font-black text-white">Restablecer Password</h1>
            <p className="text-2xl font-light text-white mt-5">
                Ingresa el código que recibiste {''}
                <span className=" text-fuchsia-500 font-bold"> por emal</span>
            </p>

            {!isvalidToken ? <NewPasswordToken token={token} setToken={setToken} setIsvalidToken={setIsvalidToken} /> : <NewPasswordForm1 />}
        </>
    )
}
