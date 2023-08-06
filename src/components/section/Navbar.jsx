
const Navber = () => {

    const nabPage = <>
        <li>Home</li>
        <li className="mr-3 ms-3">about</li>
        <li>Conatact</li>
    </>
    return (
        <div className="navbar bg-red-100 font-bold bg-opacity-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 dropdown-end">
                       {nabPage}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-2xl"><span className="font-bold text-3xl">Marry</span> <span className="text-red-600 text-4xl">Hardy</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {nabPage}
                </ul>
            </div>
            <div className="navbar-end">
                <a className='btn'>Button</a>
            </div>
        </div>
    );
};

export default Navber;