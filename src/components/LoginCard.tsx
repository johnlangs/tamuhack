'use client'

import { useState } from "react";

export default function LoginCard() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" onChange={(e) => setPassword(e.target.value)} required />
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">New User? Create an Account Here!</a> 
                </label>
                </div>
                <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                </div>
            </form>
      </div>
    );
}