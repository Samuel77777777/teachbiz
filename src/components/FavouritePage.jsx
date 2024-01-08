
import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";



const FavouritePage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <Div>

            <button onClick={openModal}>Open Modal</button>

            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <button className="close-button" onClick={closeModal}>
                            Close
                        </button>
                        <h2>Modal Content Goes Here</h2>
                        {/* Additional content for your modal */}


                        <div className="favourite-heading">
                            <h2>Favourite </h2>
                            <FontAwesomeIcon icon={faHeart} className="love-icon" />
                        </div>
                    </div>
                </div>
            )}
        </Div>
    );
};

export default FavouritePage;


const Div = styled.div`

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent black overlay */
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 100%;
  text-align: center;
}

.close-button {
  background: #007bff;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

.close-button:hover {
  background: #0056b3;
}




.favourite-heading{
    display:flex;
    gap:10px;
    align-items:center;
    flex-wrap:wrap;
  
  }
  
  
  .favourite-heading h2{
    color: #000;
  text-align: center;
  font-family: "Josefin Sans",sans-serif;
  font-size: 21px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  }
  
  
  .love-icon{
  color:red;
    width:24px;
    height:24px;
  
  }




`;




