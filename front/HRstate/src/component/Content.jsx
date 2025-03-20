import React, { useState } from 'react';
import { ModalPopup } from './ModalPopup';
import { Form } from './Form';

const Content = ({ items = [] }) => {
  const [itemById, setItemById] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Handle item click and set the selected item
  const handleItemClick = (itemName) => {
    const selectedItem = items.find((item) => item.name === itemName);
    if (selectedItem) {
      setItemById(selectedItem);
      setModalOpen(true); // Open the modal after setting the item
    }
  };

  return (
    <>
      {items.length ? (
        <ul className="grid-container">
          {items.map((item) => (
            <li
              className="item"
              key={item.name}
              onClick={() => handleItemClick(item.name)}
            >
              <label>
                <div>
                  <h2>{item.name}</h2>
                </div>

                <div className="content-div">
                  <div className="item-row">
                    <img src=".\src\assets\tel.svg" alt="telephone" />
                    <p>{item.phone}</p>
                  </div>
                  <div className="item-row">
                    <img src=".\src\assets\email.svg" alt="email" />
                    <p>{item.email}</p>
                  </div>
                </div>
              </label>
            </li>
          ))}
        </ul>
      ) : (
        <p className="noText">Your list is Empty!</p>
      )}

      {/* Modal Window */}
      <ModalPopup isOpen={modalOpen} setModalOpen={setModalOpen}>
        <Form item={itemById} />
      </ModalPopup>
    </>
  );
};

export default Content;