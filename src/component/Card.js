import React, { useContext } from "react";
import { CardContext } from "../CardContext/CardContext";

const Card = () => {
    const [CardData, setCardData] = useContext(CardContext);

    const handleDelete = (index) => {
        const updatedCardData = CardData.filter((_, i) => i !== index);
        setCardData(updatedCardData);
    };

    return (
        <>

            {CardData.length === 0 ? (

                <div class="alert alert-danger" role="alert">
                    No posts available
                </div>
            ) : (
                CardData.map((data, index) => (
                    <div className="card my-3" style={{ width: "50rem" }} key={index}>
                        <div className="card-body">
                            <h1 className="card-title">{data.user}</h1>
                            <h5 className="card-title">{data.title}</h5>
                            <p className="card-text">{data.disc}</p>
                            <div className="alert alert-success" role="alert">
                                {data.reaction} people reacted to this post!
                            </div>
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() => handleDelete(index)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))
            )}
        </>
    );
};

export default Card;
