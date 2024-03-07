

const SetDonation = ({ donation }) => {
    const { id, picture, card_bg, category, category_bg, description, text_button_bg, title, price } = donation;
    return (
        <div>
            <div className="card card-side shadow-xl " style={{ background: `${card_bg}` }}>
                <figure><img className="h-full " src={picture} alt="Movie" /></figure>
                <div className="card-body">
                    <h1 style={{ background: `${category_bg}`, color: `${text_button_bg}` }} className=' text-[14px] px-2 py-1 w-32 text-center'>{category}</h1>
                    <h1 className='text-xl font-bold'>{title}</h1>
                    <p className="text-[14px] font-semibold" style={{ color: `${text_button_bg}` }}>Price : {price}$</p>

                    <p className="px-2 py-1 w-32 text-center text-[16px] font-semibold text-white" style={{ background: `${text_button_bg}` }}>View Details</p>

                </div>
            </div>
        </div>
    );
};

export default SetDonation;