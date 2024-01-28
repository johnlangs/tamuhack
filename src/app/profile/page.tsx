export default function Page() {
    return (

        <div className="flex flex-col gap-4 w-52">
         <div className="flex gap-4 items-center">
    <div className="skeleton w-16 h-16 rounded-full shrink-0">
    <img src="https://p7.hiclipart.com/preview/282/256/961/user-profile-avatar-computer-icons-google-account.jpg" />
    </div>
    <div className="flex flex-col gap-4">
      <div className="skeleton h-4 w-20"></div>
      <div className="skeleton h-4 w-28"></div>
    </div>
  </div>
  <div className="skeleton h-32 w-full"></div>
</div> 
    );
}

{/* <div className="flex items-center justify-center h-screen">
            <div className="avatar justify-center g-10">
                <div>
                    <div className="w-20 rounded-full">
                        <img src="https://p7.hiclipart.com/preview/282/256/961/user-profile-avatar-computer-icons-google-account.jpg" />
                    </div>
                </div>
                <div className="mb-5 flex text-400">
                        <p>Last </p>
                </div>
            </div>
            
        </div> */}