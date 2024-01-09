const Header = () => {
    return ( 
        <div className="Header flex flex-col pt-12 items-center sm:flex-row ">
            <div className="title flex flex-col grow text-slate-100 order-2 sm:order-1">
                <hr class="h-px w-5 bg-slate-100 mt-12 sm:w-8"></hr>
                <h1 className="text-3xl text-left pb-12 sm:text-4xl md:text-5xl lg:w-5/6">Creative Digital Design Agency is looking for new <p className="underline underline-offset-4 inline">talent</p></h1>
                <button className=" border-2 border-gray-600 rounded-md p-2 px-6 w-fit hover:bg-indigo-400 hover:text-black hover:border-indigo-400">Send a resume</button>
            </div>
            <img src="img/keyboard-bgremove.png" alt="" className="order-1 sm:order-2 sm:size-2/5"/>
        </div>
     );
}
 
export default Header;