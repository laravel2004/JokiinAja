import React, { useState } from "react";
import Button from "../component/Button";
import Card from "../component/Card";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import MobileGame from './../assets/mobilegame.jpg'

const ContactUs = () => {

    const [tipe, setTipe] = useState('')
    const [id, setId] = useState('')
    const [wa, setWa] = useState('')
    const [invoice, setInvoice] = useState('')
    const [info, setInfo] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(tipe, id, wa, invoice, info);
    }
    

    return(
        <>
            <div className="overflow-x-hidden">
                <Navbar />
                <div className="bg-secondary pt-48 pb-10">
                    <div className="mx-36 flex gap-8">
                        <div>
                            <Card
                                image = {MobileGame}
                            >
                                <h2 className="text-2xl text-slate-50">Ada Masalah apa?</h2>
                                <p className="text-slate-50">kami standby 24 jam untuk anda</p>
                            </Card>
                        </div>
                        <div>
                            <Card>
                                <label className="text-2xl text-slate-50 font-semibold">ContactUs</label>
                                <form className="grid grid-cols-2 gap-4 text-white mt-4">
                                    <div>
                                        <label>
                                            Tipe :
                                            <input 
                                                type="text" 
                                                onChange={(e) =>setTipe(e.target.value)}
                                                placeholder="Type here"
                                                className="input input-bordered input-info w-full text-slate-800 my-3" />
                                        </label>
                                        <label>
                                            ID :
                                            <input 
                                                type="text" 
                                                onChange={(e) =>setId(e.target.value)}
                                                placeholder="Type here"
                                                className="input input-bordered input-info w-full text-slate-800 my-3" />
                                        </label>
                                        <label>
                                            No. Whatsapp :
                                            <input 
                                                type="text"
                                                onChange={(e) =>setWa(e.target.value)} 
                                                placeholder="08xxxxxx"
                                                className="input input-bordered input-info w-full text-slate-800 my-3" />
                                        </label>
                                        <label>
                                            No. Invoice :
                                            <input 
                                                type="text"
                                                onChange={(e) =>setInvoice(e.target.value)} 
                                                placeholder="Type here"
                                                className="input input-bordered input-info w-full text-slate-800 my-3" />
                                        </label>
                                    </div>
                                    <div className="flex flex-col">
                                        <label>
                                            Keterangan :
                                            <textarea 
                                            onChange={(e) =>setInfo(e.target.value)}
                                            className="textarea text-slate-800 textarea-info w-full my-3" placeholder="Keterangan"></textarea>
                                        </label>
                                        <label>
                                            Kirim Bukti Tranfer :
                                            <input 
                                                type="file" 
                                                placeholder="Type here"
                                                className="w-full text-slate-800 my-3" />
                                        </label>
                                        <div className="flex gap-4">
                                            <Button
                                                    title = "Tes Bukan Robot"
                                                    style = {`my-3 bg-danger`}
                                                />
                                            <Button
                                                title = "Kirim !"
                                                style = {`my-3 bg-succes`}
                                                onClick = {handleSubmit}
                                            />
                                        </div>
                                    </div>
                                </form>
                            </Card>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default ContactUs;