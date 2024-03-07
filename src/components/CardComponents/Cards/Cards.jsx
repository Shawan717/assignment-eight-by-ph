import Card from "../Card/Card";


const Cards = ({cards}) => {
    console.log(cards);
    
    
    return (
        <div className="mt-10 lg:my-[100px] grid grid-cols-1 lg:grid-cols-4 gap-6 ">
            {
                cards?.map(card=><Card key={card.id} card={card}></Card>)
            }
        </div>
    );
};

export default Cards;