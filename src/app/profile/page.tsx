export default function Page() {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                <h1 className="text-3xl font-bold">Profile</h1>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your name</span>
                        </label>
                        <input type="email" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="password" placeholder="email" className="input input-bordered" required />
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
}