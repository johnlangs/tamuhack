export default function LoginCard() {
    return (
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">New User? Create an Account Here!</a> 
                </label>
                </div>
                <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Login</button>
                </div>
            </form>
      </div>
    );
}