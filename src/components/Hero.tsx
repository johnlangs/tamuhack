import { redirect } from "next/navigation";

export default function Hero() {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(/temple.svg)'}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Your Privacy Starts Here.</h1>
                    <p className="mb-5">Your Privacy Starts Here.</p>
                    <a href = "/login" >< button className="btn btn-primary">Get Started</button> </a>
                </div>
            </div>
      </div>
    );
}