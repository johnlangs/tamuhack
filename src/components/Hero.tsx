import { redirect } from "next/navigation";

export default function Hero() {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(/temple.svg)'}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-lg">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <a href={"/checkyourself"}><button className="btn btn-primary">Get Started</button></a>
                </div>
            </div>
      </div>
    );
}