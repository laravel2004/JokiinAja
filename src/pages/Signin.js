import React, { useState } from "react";
import Button from "../component/Button";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import  PCgame from './../assets/pcgame.png'
import Card from "../component/Card";

const SignIn = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password);
    } 

    return(
        <div className="overflow-x-hidden">
            <Navbar />
            <div className="bg-secondary pt-48">
                <div className="mx-36 grid grid-cols-2 gap-16 pb-5">
                    <div>
                            <Card
                                style = {`rounded-3xl bg-tridary hover:shadow-slate-900 hover:z-40`}
                                image = {PCgame}
                            >
                                <div className="grid gap-5">
                                    <div className="text-slate-50 mt-5">
                                        <h2 className="font-semibold">Login to reward</h2>
                                        <p className="text-sm mt-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, libero.</p>
                                    </div>
                                </div>
                            </Card>
                    </div>
                    <div className="text-slate-50">
                        <h1 className="text-center text-xl font-semibold">Customers Sign In</h1>
                        <form className="flex flex-col gap-5 pt-10" onSubmit={handleSubmit}>
                            <label>
                                Username * :
                                <br />
                                <input 
                                type="text" 
                                placeholder="Type here"
                                onChange={(e) => setUsername(e.target.value)} 
                                className="input input-bordered input-info w-full text-slate-800" />
                            </label>
                            <label>
                                Password * :
                                <br />
                                <input 
                                type="password" 
                                placeholder="Type password" 
                                onChange={(e) => setPassword(e.target.value)}
                                className="input input-bordered input-info w-full text-slate-800" />
                            </label>
                            <label className="flex gap-4">
                                <input type='checkbox' />
                                <span>Remember me</span>
                            </label>

                            <div>
                                <Button
                                    title = "Sign In"
                                />
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SignIn;