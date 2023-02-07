import React from "react";
import Button from "../component/Button";
import Card from "../component/Card";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import MobileGame from './../assets/mobilegame.jpg'

const GameMobile = () => {
    return(
        <>
            <div className="overflow-x-hidden">
                <Navbar />
                <div className="bg-primary pt-48 pb-10">
                    <div className="relative">
                        <div className="mx-14 gap-4 border p-5 rounded-3xl h-[32rem]"></div>
                        <div className="flex gap-8 p-5 bg-secondary absolute z-30 top-6 w-screen justify-center">
                            <div className="text-white flex justify-between pt-10 flex-col">
                                <h1 className="text-2xl font-semibold">Choose Your <br /> Mobile Game</h1>
                                <div className="pb-10">
                                    <p>Tidak menemukan game anda ?</p>
                                    <Button 
                                        title = "Contact Us"
                                        style = {`mt-4 bg-slate-50 secondary hover:text-slate-50`}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-4 gap-4 w-2/3">
                                <Card 
                                    image = {MobileGame}
                                    style = {`hover:shadow-slate-900 hover:z-40`}
                                >
                                    <p className="text-slate-50">Mobile Legends </p>
                                </Card>
                                <Card 
                                    image = {MobileGame}
                                    style = {`hover:shadow-slate-900 hover:z-40`}
                                >
                                    <p className="text-slate-50">Mobile Legends </p>
                                </Card>
                                <Card 
                                    image = {MobileGame}
                                    style = {`hover:shadow-slate-900 hover:z-40`}
                                >
                                    <p className="text-slate-50">Mobile Legends </p>
                                </Card>
                                <Card 
                                    image = {MobileGame}
                                    style = {`hover:shadow-slate-900 hover:z-40`}
                                >
                                    <p className="text-slate-50">Mobile Legends </p>
                                </Card>
                                <Card 
                                    image = {MobileGame}
                                    style = {`hover:shadow-slate-900 hover:z-40`}
                                >
                                    <p className="text-slate-50">Mobile Legends </p>
                                </Card>
                                <Card 
                                    image = {MobileGame}
                                    style = {`hover:shadow-slate-900 hover:z-40`}
                                >
                                    <p className="text-slate-50">Mobile Legends </p>
                                </Card>
                                <Card 
                                    image = {MobileGame}
                                    style = {`hover:shadow-slate-900 hover:z-40`}
                                >
                                    <p className="text-slate-50">Mobile Legends </p>
                                </Card>
                                <Card 
                                    image = {MobileGame}
                                    style = {`hover:shadow-slate-900 hover:z-40`}
                                >
                                    <p className="text-slate-50">Mobile Legends </p>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}
export default GameMobile;