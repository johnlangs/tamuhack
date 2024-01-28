export default function Navbar() {
    return (
        <div className="navbar bg-base-300 flex items-center justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a href= "/about" className="hover:no-underline label-text-alt link link-hover ">About</a></li>
                        <li><a href= "/howdoesitwork" className="hover:no-underline label-text-alt link link-hover ">How Does it Work?</a></li>
                    </ul>
                </div>
                <a href="/" className="btn btn-ghost text-3xl font-extrabold">PrivacyNow</a>
            </div>



            <div className="navbar-end flex-none">
            <ul tabIndex={0} className="mt-1 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-15">
                            <a className="justify-between">
                                Profile
                            </a>

                    </ul>
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                            <a href="/profile"><img alt="Tailwind CSS Navbar component" src="https://p7.hiclipart.com/preview/282/256/961/user-profile-avatar-computer-icons-google-account.jpg" /></a>
                        </div>

                </div>
                    </div>

            </div>
    );
}
