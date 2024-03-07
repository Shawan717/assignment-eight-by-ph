

const Banner = () => {
    return (
        <div className="h-[500px] lg:h-[60vh] flex justify-center items-center bg-cover bg-center  " style={{ backgroundImage: "url('./image/background.jpg')" }}>
            
            
            <div >
                <h1 className="text-[25px] lg:text-[48px] font-bold">I Grow By Helping People In Need</h1>
                <div className="flex justify-center items-center mt-10">
                    <input type="text" className="file-input file-input-bordered w-full max-w-xs text-center" placeholder="Search here...." />
                    <button className=" btn bg-[#FF444A]">Search</button>
                </div>
            </div>
        </div>
      
    );
};

export default Banner;