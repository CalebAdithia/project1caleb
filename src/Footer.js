import { FaWhatsapp, FaInstagram, FaRegEnvelope, FaRegLightbulb } from "react-icons/fa6";

const Footer = () => {
    return (  
        <div className="Footer flex bg-slate-800 text-slate-100 px-7 py-10 flex-col sm:flex-row sm:justify-between sm:h-60">
            <div className="company  border-b-2 border-stone-400 flex flex-col justify-center items-center sm:w-1/3 sm:border-r-2 sm:border-b-0">
                <FaRegLightbulb className="text-5xl"></FaRegLightbulb>
                <p className="text-sm md:text-base mt-2">Creative Digital Design Agency</p>
            </div>
            <ul className="border-b-2 sm:border-r-2 sm:w-1/3 border-stone-400 flex flex-col justify-center sm:border-b-0">
                <li>About Us</li>
                <li>Cases</li>
                <li>Rescources</li>
            </ul>
            <div className="contactus sm:w-1/3 flex flex-col justify-center ">
                <p className="text-xl font-bold">Our Contacts</p>
                <div className="flex flex-row justify-center p-5">
                    <a href="" className="px-5"><FaWhatsapp className="text-3xl"></FaWhatsapp></a>
                    <a href="" className="px-5"><FaInstagram className="text-3xl"></FaInstagram></a>
                    <a href="" className="px-5"><FaRegEnvelope className="text-3xl"></FaRegEnvelope></a>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;