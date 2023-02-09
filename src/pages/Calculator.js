import React, { useState } from "react";
import Button from "../component/Button";
import Card from "../component/Card";
import Dropdown from "../component/Dropdown";
import Footer from "../component/Footer";
import Modals from "../component/Modals";
import Navbar from "../component/Navbar";
import MobileGame from './../assets/mobilegame.jpg'

const Calculator = () => {
    
    const menu = [{
        id : 1,
        name : "Mobile Legends"
    },
    {
        id : 2,
        name : "Free Fire"
    },
    {
        id : 3,
        name : "Dota"
    }
]

    const [match, setMatch] = useState(0)
    const [wr, setWr] = useState(0)
    const [promis, setPromis] = useState(0)
    const [result, setResult] = useState(0);


    const handleSubmit = (e) => {
        let tWin = match * wr / 100;
        let tLose = match - tWin;
        let sisaWr = 100 - promis;
        let wrResult = 100 / sisaWr;
        let seratusPersen = tLose * wrResult;
        setResult(Math.round(seratusPersen - match))
    }

    return(
        <>
            <div className="overflow-x-hidden">
                <Navbar />
                <div className="bg-secondary pt-48 pb-10">
                    <div className="mx-36 grid grid-cols-2 gap-8">
                        <Card
                            image = {MobileGame}
                        >
                            <div className="text-slate-50">
                                <h1 className="text-2xl font-semibold">Calculator Joki</h1>
                                <p className="mt-4 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, veniam?</p>
                            </div>
                        </Card>
                        <Card>
                            <div>
                                <h1 className="text-2xl font-semibold text-slate-50 pb-5">Prakiraan Harga</h1>
                                <form className="flex flex-col gap-6 text-slate-50">
                                    <div>
                                        <p>Game :</p>
                                        <Dropdown
                                            menu = {menu}
                                        />
                                    </div>
                                    <label>
                                        Total Pertandingan Anda :
                                        <input 
                                        type="number" 
                                        placeholder="0" 
                                        onChange={(e) => setMatch(e.target.value)}
                                        className="input input-bordered input-info w-full text-slate-800" />
                                    </label>
                                    <label>
                                        Total Winrate Anda :
                                        <input 
                                        type="number" 
                                        placeholder="0" 
                                        onChange={(e) => setWr(e.target.value)}
                                        className="input input-bordered input-info w-full text-slate-800" />
                                    </label>
                                    <label>
                                        Winrate yang Anda inginkan :
                                        <input 
                                        type="number" 
                                        placeholder="0" 
                                        onChange={(e) => setPromis(e.target.value)}
                                        className="input input-bordered input-info w-full text-slate-800" />
                                    </label>
                                    <div className="flex gap-8">
                                        <Modals
                                            onClick = {handleSubmit}
                                            title = "Hasil"
                                        > 
                                            <div>
                                                <h3 className="font-bold text-lg">Calculator Joki Menyatakan</h3>
                                                <p className="py-4">Kamu memerlukan sekitar {result} win tanpa lose untuk mendapatkan win rate {promis}%</p>
                                            </div>
                                        </Modals>
                                        
                                        <Button
                                            title = "Order Joki"
                                        />
                                    </div>
                                </form>
                            </div>
                        </Card>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Calculator;