const header = () => {
    return (
        <div className="fixed top-0 z-50 w-[100%] bg-lighter">
            <div className="grid justify-items-center m-auto">
                <div className="px-5 my-5 w-full grid grid-cols-2">
                    <h1 className="text-2xl font-logo text-main w-fit hover:text-joobo-gray hover:cursor-pointer lg:text-[1.7rem]">Joobo<span className="font-light text-joobo-gray">.it</span> </h1>
                    <div className="justify-self-end flex flex-row items-center">
                        <img src="https://api.lorem.space/image/face?w=200&h=200" alt="" className="rounded-full w-7 lg:w-8 hover:cursor-pointer" />
                        <h2 className="px-2 font-logo text-joobo-gray">Mikolaj Socha</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 lg:h-7 cursor-pointer pr-2" fill="none" viewBox="0 0 24 24" stroke="gray"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        <div className="dropdown dropdown-end dropdown-hover ml-1">
                            <label tabIndex={0} className="cursor-pointer">
                                <div className="w-10 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 lg:h-7" fill="none" viewBox="0 0 24 24" stroke="gray"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content p-2 shadow bg-[#fafafa] rounded-box w-24">
                                <li><a className="active:bg-joobo-gray">Settings</a></li>
                                <li><a className="active:bg-joobo-gray">Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default header