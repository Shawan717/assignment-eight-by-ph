import swal from "sweetalert";



const SingleCardItem = ({ singleCardItem }) => {
    console.log(singleCardItem);
    const {id, picture, price, title, category_bg, description } = singleCardItem || {}
    const handleDonatePrice=()=>{
        const addToDonate=[];
        const donationItem=JSON.parse(localStorage.getItem('donation'))
        if(!donationItem){
            addToDonate.push(singleCardItem)
            localStorage.setItem("donation",JSON.stringify(addToDonate))

            swal({
                title: "Good job!",
                text: "Added To Donation",
                icon: "success",
                button: "Back",
              });
        }
        else{
            const isExst=donationItem.find(donate=>parseInt(donate.id)===parseInt(id))
            if(!isExst){
                addToDonate.push(...donationItem,singleCardItem)
                localStorage.setItem("donation",JSON.stringify(addToDonate))
                swal({
                    title: "Good job!",
                    text: "Added To Donation",
                    icon: "success",
                    button: "Back",
                  });
            }
            else{
                swal({
                    title: "Error",
                    text: "No Duplicte",
                    icon: "error",
                    button: "Back",
                  });
            }
        }
        // localStorage.setItem("hello",JSON.stringify([{name:"shawan"}]))
    }
    return (
        <div className="max-w-[1400px] mx-auto">
            <div className=" ">
                <img className="w-full lg:h-[550px]" src={picture} alt="" />
                <div onClick={handleDonatePrice} className=" w-full  bg-[#0b0b0b80] py-6 text-white">
                    <p className="p-2 w-36 mx-2 rounded-lg" style={{ background: `${category_bg}` }}>Donate : {price}$</p>
                </div>
                <h3 className="font-bold text-4xl my-8">hello {title}</h3>
                <p className="text-[16px]">{description}</p>            
            </div>
        </div>

    );
};

export default SingleCardItem;