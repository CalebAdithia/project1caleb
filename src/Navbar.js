import { FaRegLightbulb } from "react-icons/fa6";

const Navbar = () => {
    return ( 
        <div className="Navbar flex flex-row justify-between items-center">
            <div className="logo w-1/3">
                <FaRegLightbulb className="text-5xl text-white"></FaRegLightbulb>
            </div>
            <div className="middle-navbar flex flex-row text-stone-400 justify-around w-1/3">
                <h2 className="">About</h2>
                <h2>Cases</h2>
                <h2 className="">Resources</h2>
            </div>
            <h2 className="text-stone-400 font-bold w-1/3 text-end">Contact Us</h2>
        </div> 
    );
}
 
export default Navbar;