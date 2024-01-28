export default function Page() {
    return (
        <div className="px-30 pt-20 pb-30 pl-20 pr-20 h-screen" style={{ backgroundImage: 'url(/temple.svg)' }}>
        <div className="hero h-[85vh] bg-base-100">
            <div className="hero-content flex-col lg:flex-row-reverse px-10">
                <div>
                    <h1 className="text-5xl font-bold">About This Site</h1>
                    <p className="pt-6 mb-5 text-xl pr-60">
                        The internet has an extensive distribution of personally identifiable information
                        including birthdays, personal interests, family, connections, professional roles, and much more across multiple platforms
                        and regions you might not know exist. These vulnerable information provides a ground for threats to fertilize, orchestrating
                        various ways to attack and impersonate individuals without their knowledge. In response to this challenge, we created this
                        website to serve the purpose of developing an innovative tool that can help educate and provide preventative resources for you.
                        This website provides resources to proactively detect potential phishing attempts and open-source intelligence
                        impersonations. We hope to bring awareness and security in the face of evolving online threats.
                        Check out the &quot;How Does it Work?&quot; page next.
                    </p>
                    <p></p>
                    <div className="images flex justify-between pt-1">
                            <div className="photo">
                                <div className="w-55 rounded-xl">
                                    <img
                                        src="https://exactitconsulting.com/wp-content/uploads/2017/12/Exact-IT-Security-Comes-In-Two-Parts-Don%E2%80%99t-Neglect-The-Physical-Half-256x256.jpg"
                                        alt="photo"
                                    />
                                </div>
                            </div>
                            <div className="photo">
                                <div className="w-55 rounded-xl">
                                    <img
                                        src="https://i0.wp.com/securityaffairs.co/wordpress/wp-content/uploads/2012/01/KeyCard.gif?resize=256%2C256"
                                        alt="photo"
                                    />
                                </div>
                            </div>
                            
                            <div className="photo">
                                <div className="w-55 rounded-xl">
                                    <img
                                        
                                        src="https://exactitconsulting.com/wp-content/uploads/2017/08/Exact-IT-Are-You-Prepared-For-Incoming-Threats-To-Your-Systems-Category-Security-256x256.jpg"
                                        alt="photo"
                                    />
                                </div>
                            </div>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>

    );
}