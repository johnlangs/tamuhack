import { redirect } from "next/navigation";

export default function Hero() {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(/temple.svg)'}}>
            <div className="hero-overlay bg-opacity-65"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md mb-20">
                    <h1 className="mb-8 text-6xl font-bold">Your Privacy Starts Here. </h1>
                    <p className="mb-6 font-bold">Your Privacy is important, so is protecting it. Learn more about how to protect yourself in the digital world. </p>
                    <a href={"/checkyourself"}><button className="btn btn-primary">Get Started</button></a>
                </div>
            </div>
      </div>
    );
}