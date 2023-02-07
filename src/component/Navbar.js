import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    const [scrollProps, setScrollProps] = useState(0);
    
    useEffect(() => {
        const handleScroll = () => {
            setScrollProps(window.pageYOffset);
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    return (
        <>
            <nav className="fixed w-screen z-50">
                <div className={  scrollProps> 50 ? 'bg-slate-900 py-6' : 'bg-transparent py-6' }>
                    <div className="mx-36 flex justify-between">
                        <a href="index2.html" className="text-slate-100 font-extrabold text-2xl"><h4>JokiinAja</h4></a>
                        <ul className="flex justify-center gap-4 text-slate-50 text-base">
                            <Link to='/'>Home</Link>
                            <li><a href="index2.html">Check Invoice</a></li>
                            <li><a href="index2.html">Calculator Joki</a></li>
                            <li><a href="index2.html">Contact Us</a></li>
                            <Link to='/signin'><span className="bg-white primary rounded-lg p-3">Sign In</span></Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar