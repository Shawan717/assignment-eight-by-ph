import { useEffect, useState } from "react";
import SetDonation from "./SetDonation/SetDonation";


const Donation = () => {
    const [donation, setDonation] = useState([]);
    const [noDataFound, setNoDataFound] = useState('')
    const [showData,setShowData]=useState(false)
    useEffect(() => {
        const donationItem = JSON.parse(localStorage.getItem('donation'))
        if (donationItem) {
            setDonation(donationItem)
        }
        else {
            setNoDataFound("No Data ")
        }
    }, [])
    const handleRemoveAll=()=>{
        localStorage.clear()
        setDonation([])
        setNoDataFound("No Data ")
    }
    
    return (
        <div className="max-w-[1400px] mx-auto ">
            {noDataFound ? <div className="w-full mt-[25%] text-center"><p className="text-4xl font-bold text-gray-500">{noDataFound}</p></div> :
                <div>
                    <div>
                        <div className="flex justify-center items-center mb-6  lg:my-10">
                            <button onClick={handleRemoveAll} className="btn btn-success">Remove All</button>
                        </div>
                        <div className="grid lg:grid-cols-2 gap-5">
                            {showData ? donation.map(donation => <SetDonation key={donation} donation={donation}></SetDonation>) :donation.slice(0,2).map(donation => <SetDonation key={donation} donation={donation}></SetDonation>)}
                        </div>
                        <div className="flex justify-center items-center my-6 lg:my-10">
                           
                           {
                             donation.length>2 &&  <button onClick={()=>setShowData(!showData)} className="btn btn-success">{showData? "See Les" : "See All"}</button>
                           }
                           
                        </div>
                    </div>
                </div>}
        </div>
    );
};

export default Donation;