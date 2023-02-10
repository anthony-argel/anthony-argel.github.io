import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscTriangleUp } from "react-icons/vsc";

function NavBar(props) {
    const [showNav, setShowNav] = useState(false);

    const toggleNav = (e) => {
        e.preventDefault();
        setShowNav((prev) => !prev);
    };

    const clickMenuItem = (e) => {
        setShowNav(false);
    };
    return (
        <nav className="text-white sticky top-0 p-3 z-50" style={{ backgroundColor: "#061621" }}>
            <div className="hidden md:flex">
                <ul className="flex gap-5">
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#experience">Experience</a>
                    </li>
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="flex justify-end md:hidden">
                {showNav ? (
                    <VscTriangleUp className="text-4xl cursor-pointer border border-white rounded p-1 select-none" onClick={toggleNav} />
                ) : (
                    <GiHamburgerMenu className="text-4xl cursor-pointer border border-white rounded p-1 select-none" onClick={toggleNav} />
                )}
            </div>
            {showNav ? (
                <div className="pt-5 flex justify-end md:hidden">
                    <ul className="flex flex-col items-end gap-5">
                        <li onClick={clickMenuItem}>
                            <a href="#home">Home</a>
                        </li>
                        <li onClick={clickMenuItem}>
                            <a href="#experience">Experience</a>
                        </li>
                        <li onClick={clickMenuItem}>
                            <a href="#skills">Skills</a>
                        </li>
                        <li onClick={clickMenuItem}>
                            <a href="#projects">Projects</a>
                        </li>
                        <li onClick={clickMenuItem}>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            ) : null}
        </nav>
    );
}

export default NavBar;
