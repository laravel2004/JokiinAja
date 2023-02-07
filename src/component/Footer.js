import React from "react";

const Footer = () => {
    return (
        <>
            <div className="bg-primary">
                <div className="mx-36 flex text-slate-50 pt-10 pb-4">
                    <div className="grid grid-cols-3 gap-4">
                        <div>
                            <a href="index2.html" className="text-xl font-semibold"><h4>JokiinAja</h4></a>
                            <p className="mt-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, veniam?
                            </p>
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold">Primacy</h4>
                            <ul className="mt-6">
                                <li><a href="index.html">Privacy Policy</a></li>
                                <li><a href="index.html">Terms and conditions</a></li>
                                <li><a href="index.html">Refund Policy</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold">Contact Us</h4>
                            <div className="mt-6">
                                <p>+62 8888 9999 100</p>
                                <p>jokiinaja@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ul className="flex gap-4 pb-4">
                            <li><a href="index.html"><i className="uil uil-facebook-f"></i></a></li>
                            <li><a href="index.html"><i className="uil uil-instagram-alt"></i></a></li>
                            <li><a href="index.html"><i className="uil uil-twitter"></i></a></li>
                            <li><a href="index.html"><i className="uil uil-linkedin-alt"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="text-slate-50 text-center mt-4  pb-5 grid grid-cols-1">  
                    <small className="border-t border-slate-400 pt-5 w-screen">Copyright &copy; JokiinAja 2023</small>
                </div>
            </div>
        </>
    )
}

export default Footer;