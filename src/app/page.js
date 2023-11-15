"use client"
// pages/RegisterPage.js

import React,{useState} from 'react';
import {FaInstagram, FaFacebook, FaLinkedin} from 'react-icons/fa';
import Modal from 'react-modal';
import Payment200 from '../../public/Payment200.jpeg';
import Payment70 from '../../public/Payment70.jpeg';

const Page = () => {
const [isUGI, setIsUGI] = useState(true);
const [playerType, setPlayerType] = useState('');
const [isModalOpen, setIsModalOpen] = useState(false);

const showUgi = () => {
    setIsUGI(!isUGI);
}
const handleSubmit = (e) => {
  e.preventDefault();
  console.log(playerType);
  setIsModalOpen(true);
}
 
  return (
    <div className="parent">
    <div className="container mx-auto bg-black text-white flex flex-col items-center justify-center ">
      <div className="form-box w-3/4 bg-white text-black p-4 rounded-lg">
        <div className="Button-box flex justify-between my-4">
          <button
            type="button"
            className={`toggle-btn p-2 rounded ${isUGI ? 'font-bold  bg-black text-white' : ''}`}
            onClick={showUgi}
          >
            UGI
          </button>
          <button
            type="button"
            className={`toggle-btn2 p-2 rounded ${!isUGI ? 'font-bold  bg-black text-white' : ''}`}
            onClick={showUgi}
          >
            Non-UGI
          </button>
        </div>

        <div className="social flex justify-center mb-4">
          <FaFacebook className="text-black ml-3" />
          <FaInstagram className="text-black ml-3" />
          <FaLinkedin className="text-black ml-3" />
        </div>

        <form className="text-black" onSubmit={handleSubmit}>
          <input
            type="text"
            className="team-name block w-full p-2 mb-2 border border-black rounded"
            placeholder="Enter team name"
            required
          />
          <span className="fas fa-user"></span>
          <br />
          <label htmlFor="game" className="block mb-1">
            Select College:
          </label>
          <br />
          <select
            name="Select College"
            className="college block w-full p-2 mb-2 border border-black rounded"
            id="College"
          >
            <option value="ucer">United College Of engineering and Research</option>
            <option value="uit">United institute Of Technology</option>
            <option value="uim">United institute of Management</option>
            <option value="uip">United institute of Pharmecy</option>
          </select>
          <br />
          <div className="form-section">
            <h2 className="mb-2">Game Selection</h2>
            <p className="text-red-500"> Note: BGMI is Only for the students of UGI</p>
            <input type="radio" id="valorant" name="game" value="valorant" className="mr-1" />
            <label htmlFor="valorant" className="mr-2">
              Valorant
            </label>

            {isUGI && (
              <>
                <input type="radio" id="bgmi" name="game" value="bgmi" className="mr-1" />
                <label htmlFor="bgmi">BGMI</label>
              </>
            )}
          </div>
          <br />

          <div className="form-section">
            <h2 className="mb-2">Player Selection</h2>
            <input
              type="radio"
              id="Single"
              onClick={(e) => setPlayerType(e.target.value)}
              name="game"
              value="Single"
              className="mr-1"
            />
            <label htmlFor="Single" className="mr-2">
              Single
            </label>
            <input
              type="radio"
              id="Multi"
              onClick={(e) => setPlayerType(e.target.value)}
              name="game"
              value="Multi"
              className="mr-1"
            />
            <label htmlFor="Multi">Multi</label>

            <div />
            <br />

            <button
              type="submit"
              style={{ marginTop: '27px', marginLeft: '67px' }}
              className="paynow bg-black text-white p-2 rounded"
            >
              Pay Now
            </button>
          </div>
        </form>
      </div>

      <p className="text-red-500">
        To complete the Registration make sure to fill the below given google form after you have done the payment
      </p>
      <a
        href="https://drive.google.com/drive/folders/119kbXH0nTSrMSoeD-i94P9nB3ACCoSKT"
        target="_blank"
        rel="noreferrer"
        className="text-blue-500"
      >
        Click here to fill the form
      </a>
      <Modal isOpen={isModalOpen} style={{ content: { backgroundColor: 'white' } }}>
        {playerType === 'Single' && <img className="w-70 h-100 object-contain" src="/Payment70.jpeg" alt="Single Player" />}
        {playerType === 'Multi' && <img className="w-70 h-100 object-contain" src="/Payment200.jpeg" alt="Multi" />}
        <button style={{ marginLeft: '115px' }} className="paynow" onClick={() => setIsModalOpen(false)}>
          Done
        </button>
      </Modal>
    </div>
  </div>
  );
}; export default Page;