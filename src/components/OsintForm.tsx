'use client'

import { passwordStrength } from 'check-password-strength'
import { ChangeEvent, useState } from 'react';

export default function OsintForm() {
    const [passStr, setPassStr] = useState(-1)

    const checkPassword = (e: ChangeEvent<HTMLInputElement>) => {
        const pass = e.target.value
        setPassStr(passwordStrength(pass).id)
    }

    return (
        <div className= "pt-80">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
                <div className="form-control">
                <h1 className="mb-8 text-3xl font-bold">Enter your information for an anonymous privacy check. </h1>
                <label className="label">
                    <span className= "font-bold label-text">Email</span>
                </label>
                <input name="email" type="email" placeholder= "johnnyappleseed@gmail.com" className="input input-bordered" />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="font-bold label-text">Password</span>
                </label>
                <input name="password" type="password" placeholder="Password" className="input input-bordered" onChange={checkPassword}/>
                <label className="label">
                {passStr == 0 ? <p className="text-red-600">Password Too Weak</p> : passStr == 1 ? <p className='text-orange-600'>Weak Password</p> : passStr == 2 ? <p className='text-yellow-300'>Medium Password</p> : passStr == 3 ? <p className='text-lime-500'>Strong Password</p> : <></>}
                </label>
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="font-bold label-text">Phone Number</span>
                </label>
                <input name="phome_number" type="text" placeholder="123-456-7890" className="input input-bordered" />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="font-bold label-text">Address</span>
                </label>
                <input name="address" type="text" placeholder="1234 Flower Ln..." className="input input-bordered" />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="font-bold label-text">Birthday</span>
                </label>
                <input name="phome_number" type="text" placeholder="mm-dd-yyyy" className="input input-bordered" />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="font-bold label-text">SSN</span>
                </label>
                <input name="address" type="text" placeholder="xxx-xx-xxxx" className="input input-bordered" />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="font-bold label-text">Instagram</span>
                </label>
                <input name="address" type="text" placeholder="@Handle" className="input input-bordered" />
                </div>
                <label className="label">
                    <a href= "/howdoesitwork" className="label-text-alt link link-hover">How does this work?</a>
                </label>
                <div className="form-control mt-6">
                <a href={"/results"}><button className="btn btn-primary">Check</button></a>
                </div>
            </form>
      </div>
      </div>
    );

}