import logo from "../assets/icons/user.png";
import facebook from "../assets/icons/facebook.png";
import instagram from "../assets/icons/instagram.png";
import line from "../assets/icons/line.png";

const Navbar = () => {
    return (
        <div className="flex justify-between item-center">
            <img src={logo} alt="logo" width={60}  className="cursor-grab" />
            <ul className= "hidden md:flex">
                <li className="px-3">
                    <a href="https://www.facebook.com/" target="_blank">
                        <img src={facebook} alt="facebook" width={40} className="cursor-none"/>
                    </a>
                </li>
                <li className="px-3">
                    <a href="https://www.instagram.com/" target="_blank">
                        <img src={instagram} alt="instagram" width={40} className="cursor-no-drop" />
                    </a>
                </li>
                <li className="px-3">
                <a href="https://line.me/en/" target="_blank">
                    <img src={line} alt="line" width={40}  className="cursor-wait"/>
                </a>
                </li>
            </ul>
        </div>

    )
}

export default Navbar;