import { useContext, useState } from "react";

import { CardContext } from "../CardContext/CardContext";


const AddPost = () => {

    const [CardData, setCardData] = useContext(CardContext);

    const [newCard, setNewCard] = useState([
        
        {
            user: "",
            title: "",
            disc: "",
            reaction: ""
        }]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setCardData([ newCard , ...CardData]);
        setNewCard({
            user: " ",
            title: " ",
            disc: " ",
            reaction: " ",
        });
    };

    return (

        <>
            <form style={{ width: "40rem" }} onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Enter Your  name </label>
                    <input
                    required
                        value={newCard.user}

                        onChange={(e) => setNewCard({ ...newCard, user: e.target.value })}

                        type="text" className="form-control" id="exampleInputEmail1" placeholder="enter your name" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Enter Your Post Title </label>
                    <input
                        value={newCard.title}
                        required
                        onChange={(e) => setNewCard({ ...newCard, title: e.target.value })}
                        type="text" className="form-control" id="exampleInputEmail1" placeholder="enter your post title" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Enter About Your Post </label>
                    <textarea
                        value={newCard.disc}
                        required
                        onChange={(e) => setNewCard({ ...newCard, disc: e.target.value })}
                        rows="5" type="text" className="form-control" id="exampleInputEmail1" placeholder="enter about your post " />
                </div>
                <div className="mb-3">
                    <label className="form-label">Enter Total Reaction</label>
                    <input
                        value={newCard.reaction}
                        required
                        onChange={(e) => setNewCard({ ...newCard, reaction: e.target.value })}
                        type="text" className="form-control" id="exampleInputEmail1" placeholder="enter total reaction" />
                </div>


                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}
export default AddPost;