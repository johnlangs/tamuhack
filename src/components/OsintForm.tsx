export default function OsintForm() {
    return (
        <div className= "pt-52">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
                <div className="form-control">
                <h1 className="mb-8 text-3xl font-bold">Enter your information for an anonymous privacy check. </h1>
                <label className="label">
                    <span className= "font-bold label-text">Email</span>
                </label>
                <input name="email" type="email" placeholder= "johnnyappleseed@gmail.com" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="font-bold label-text">Phone Number</span>
                </label>
                <input name="phone_number" type="text" placeholder="123-456-7890" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="font-bold label-text">Address</span>
                </label>
                <input name="address" type="text" placeholder="1234 Flower Ln..." className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="font-bold label-text">Birthday</span>
                </label>
                <input name="phone_number" type="text" placeholder="mm-dd-yyyy" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="font-bold label-text">SSN</span>
                </label>
                <input name="phone_number" type="text" placeholder="xxx-xx-xxxx" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="font-bold label-text">Instagram</span>
                </label>
                <input name="phone_number" type="text" placeholder="@handle" className="input input-bordered" required />
                </div>
                <label className="label">
                    <a href= "/howdoesitwork" className="label-text-alt link link-hover">How does this work?</a>
                </label>
                <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Check</button>
                </div>
            </form>
      </div>
      </div>
    );

}