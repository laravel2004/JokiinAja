import React from "react";
import Button from "../component/Button";
import Card from "../component/Card";
import ImgHome from './../assets/home.png'
import  PCgame from './../assets/pcgame.png'
import MobileGame from './../assets/mobilegame.jpg'
import Collapse from "../component/Colappse";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { useNavigate } from "react-router";

const Home = () => {

    const navigate = useNavigate()
    const handleGame = (e) => {
        e.preventDefault();
        window.location.replace('/#game');
    }

    return (
        <div className="overflow-x-hidden">
            <div className="bg-primary">
                <div>
                    <Navbar />
                    <div className="grid grid-cols-2 mx-36">
                        <div className="flex flex-col justify-center text-slate-50">
                            <h1 className="text-4xl font-bold">Welcome to JokiinAja</h1>
                            <p className="mt-5">
                            Ayo Jokiin akun anda disini!
                            </p>
                            <div className="mt-5">
                                <Button
                                    title = "Lets Go"
                                    style = {`bg-red-500 border-red-500`}
                                    onClick = {handleGame}
                                    
                                />
                            </div>
                        </div>

                        <div>
                            <div>
                            <img src={ImgHome} alt= "ini foto" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-secondary">
                <div className="mx-36 flex relative gap-4">
                    <div className="mt-14 text-white w-1/3">
                        <h1 className="font-bold text-4xl">Categories</h1>
                        <p className="mt-10 text-base">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum distinctio consequuntur nesciunt natus ad omnis incidunt molestiae. Quas, incidunt? Quam ab, aliquam quo quisquam ratione eligendi accusantium deleniti tempore dolor? 
                        </p>
                        <div className="mt-10 pb-5">
                            <Button 
                                title = "Learn More"
                                style = {`bg-slate-50 secondary hover:text-slate-50 pb-4`}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="mt-14 grid grid-cols-2 gap-4 justify-center items-center absolute">
                            <Card
                                style = {`rounded-3xl bg-tridary hover:shadow-slate-900 hover:z-40`}
                            >
                                <div className="grid gap-5">
                                    <span className="mt-2"><i className="uil uil-coins bg-blue-600 p-3 rounded-3xl"></i></span>
                                    <div className="text-slate-50 mt-5">
                                        <h2 className="font-semibold">Premium Members</h2>
                                        <p className="text-sm mt-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, libero.</p>
                                    </div>
                                </div>
                            </Card>
                            <Card
                                style = {`rounded-3xl bg-tridary hover:shadow-slate-900 hover:z-40`}
                            >
                                <div className="grid gap-5">
                                    <span className="mt-2"><i className="uil uil-money-bill-slash bg-danger p-3 rounded-3xl"></i></span>
                                    <div className="text-slate-50 mt-5">
                                        <h2 className="font-semibold">No Fee</h2>
                                        <p className="text-sm mt-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, libero.</p>
                                    </div>
                                </div>
                            </Card>
                            <Card
                                style = {`rounded-3xl bg-tridary hover:shadow-slate-900 hover:z-40`}
                            >
                                <div className="grid gap-5">
                                    <span className="mt-2"><i className="uil uil-coins bg-warning p-3 rounded-3xl"></i></span>
                                    <div className="text-slate-50 mt-5">
                                        <h2 className="font-semibold">Special Reward</h2>
                                        <p className="text-sm mt-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, libero.</p>
                                    </div>
                                </div>
                            </Card>
                            <Card
                                style = {`rounded-3xl bg-tridary hover:shadow-slate-900 hover:z-40`}
                            >
                                <div className="grid gap-5">
                                    <span className="mt-2"><i className="uil uil-coins bg-succes p-3 rounded-3xl"></i></span>
                                    <div className="text-slate-50 mt-5">
                                        <h2 className="font-semibold">Get Advertised</h2>
                                        <p className="text-sm mt-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, libero.</p>
                                    </div>
                                </div>
                            </Card>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-primary">
                <div className="mx-36">
                    <h1 className="pt-56 text-center font-bold text-5xl text-slate-50" id="game">Choose Your Game</h1>
                    <div className="mt-10 grid grid-cols-2 text-white gap-8 pb-4">
                        <Card
                            image = {PCgame}
                            style = {` text-center border border-transparent hover:border-blue-500`}
                        >
                            <h1 className="text-center text-2xl mt-10 font-semibold px-5">PC Game</h1>
                            <p className=" px-5 mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quis sit doloremque neque error, aspernatur nam.</p>
                            <Button 
                                title ="Browse Game"
                                style = {`mt-10 bg-red-500 border-red-500`}
                                onClick = {() => navigate('/pcgame')}
                            />
                        </Card>
                        <Card
                            image = {MobileGame}
                            style = {` text-center border border-transparent hover:border-blue-500`}
                        >
                            <h1 className="text-center text-2xl mt-10 font-semibold px-5">Mobile Game</h1>
                            <p className=" px-5 mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quis sit doloremque neque error, aspernatur nam.</p>
                            <Button 
                                title ="Browse Game"
                                style = {`mt-10 bg-red-500 border-red-500`}
                                onClick = {() => navigate('/mobilegame')}
                            />
                        </Card>
                    </div>
                </div>
            </div>
            <div className="bg-secondary pb-10">
                <div className="mx-36 text-slate-50">
                    <h1 className="pt-28 font-semibold text-3xl text-center">Frequently Asked Question</h1>
                    <div className="grid grid-cols-2 mt-14 gap-4">
                        <Collapse 
                            title = "How do I know the right player?"
                            des = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit esse repellat deleniti molestias quod nulla harum tempora laboriosam doloribus fugiat et sit, autem reiciendis rerum quam architecto eum natus consequatur"
                            style = {`bg-tridary`}
                        />
                        <Collapse 
                            title = "How do I know the right player?"
                            des = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit esse repellat deleniti molestias quod nulla harum tempora laboriosam doloribus fugiat et sit, autem reiciendis rerum quam architecto eum natus consequatur"
                            style = {`bg-tridary`}
                        />
                        <Collapse 
                            title = "How do I know the right player?"
                            des = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit esse repellat deleniti molestias quod nulla harum tempora laboriosam doloribus fugiat et sit, autem reiciendis rerum quam architecto eum natus consequatur"
                            style = {`bg-tridary`}
                        />
                        <Collapse 
                            title = "How do I know the right player?"
                            des = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit esse repellat deleniti molestias quod nulla harum tempora laboriosam doloribus fugiat et sit, autem reiciendis rerum quam architecto eum natus consequatur"
                            style = {`bg-tridary`}
                        />
                        <Collapse 
                            title = "How do I know the right player?"
                            des = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit esse repellat deleniti molestias quod nulla harum tempora laboriosam doloribus fugiat et sit, autem reiciendis rerum quam architecto eum natus consequatur"
                            style = {`bg-tridary`}
                        />
                        <Collapse 
                            title = "How do I know the right player?"
                            des = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit esse repellat deleniti molestias quod nulla harum tempora laboriosam doloribus fugiat et sit, autem reiciendis rerum quam architecto eum natus consequatur"
                            style = {`bg-tridary`}
                        />
                    </div>
                </div>
            </div>
            <Footer />

        </div>
    )
}

export default Home;