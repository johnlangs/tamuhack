export default function OsintForm() {
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
                    <span className="label-text">Phone Number</span>
                </label>
                <input name="phome_number" type="text" placeholder="1234567890" className="input input-bordered" required />
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">How does this work?</a>
                </label>
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Address</span>
                </label>
                <input name="address" type="text" placeholder="Address" className="input input-bordered" required />
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">How does this work?</a>
                </label>
                </div>
                <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Check</button>
                </div>
            </form>
      </div>
    );
}