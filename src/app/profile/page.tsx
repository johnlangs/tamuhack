export default function Page() {
    return (
        <div className="hero min-h-screen bg-base-200 p-100" style={{backgroundImage: 'url(https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/blurred-gray-background-brandon-bourdages.jpg)'}}>
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg" className="max-w-sm rounded-lg shadow-2xl" />
            <div className="p-10000"></div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 px-30">
                <div className="text-5xl font-bold pl-11 pt-4">
                    <h1 className="text-5xl font-bold">Your Profile</h1>
                </div>
                <form className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-bold">Email</span>
                    </label>
                    <input type="email" placeholder="Email Address" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-bold">Phone Number</span>
                    </label>
                    <input type="password" placeholder="Phone Number" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-bold">Address</span>
                    </label>
                    <input type="password" placeholder="  " className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-bold">Birthday</span>
                    </label>
                    <input type="password" placeholder="mm-dd-yyyy" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-bold">SSN</span>
                    </label>
                    <input type="password" placeholder="xxx-xx-xxxx" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-bold">Instagram</span>
                    </label>
                    <input type="password" placeholder="@Handle" className="input input-bordered" required />
                    </div>
                </form>
            </div>
            </div>
        </div>

    );
    }
