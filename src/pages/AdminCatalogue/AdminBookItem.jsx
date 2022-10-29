import React, {useState} from "react";
import CardMedium from '../../components/Cards/CardMedium';
import bin from '../../assets/images/bin.png';

const AdminBookItem = () => {
    const [description, setDescription] = useState("Description");
    const [showDescription, setShowDescription] = useState(false);

    const descriptionHandler = () => {
        if(showDescription == true) {
            setShowDescription(false);
        } else if(showDescription == false) {
            setShowDescription(true);
        }

    }

    return (
        <div className=" mt-50">
        <CardMedium>
            <div>
                <div className="flex align-center">
                    <h1 className="h5 fw-600 mb-20 mt-0">Lord of the rings</h1>
                    <div className="last-item"><button className="bin-button"><img src={bin}/></button></div>
                </div>

                <div className="flex align-center mb-20">
                    <p className="p1 mt-0 mb-0 fw-600 red mr-10">Author:</p>
                    <p className="p1 mt-0 mb-0 ">J.R.R Tolkien</p>
                </div>
                <div className="flex align-center mb-20">
                    <p className="p1 mt-0 mb-0 fw-600 red mr-10">Status:</p>
                    <p className="p1 mt-0 mb-0 mr-30">Checked out</p>
                    <p className="p1 mt-0 mb-0 fw-600 red mr-10">Available on:</p>
                    <p className="p1 mt-0 mb-0 ">17/22/22</p>
                </div>
                <div className="flex align-center">
                    <button className="primary-button small">Edit Book</button>
                    <button className="ml-20 secondary-button small" onClick={descriptionHandler}>{description}</button>
                </div>
                {showDescription && 
                    <div>
                        <p className="p1 mt-30 mb-0 fw-600 red mr-10">Description</p>
                        <p className="p2 mt-0 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mi 
                            tellus, fermentum non felis nec, bibendum vehicula urna. Fusce eu tempor 
                            leo. Mauris quis felis vestibulum, varius massa vitae, rutrum risus. 
                            Phasellus sit amet est in erat facilisis tempor quis sit amet mauris. 
                            Donec viverra ex vitae ante rhoncus, non blandit dolor varius.</p>
                    </div>
                }

            </div>
        </CardMedium>
        </div>

    )
}

export default AdminBookItem;