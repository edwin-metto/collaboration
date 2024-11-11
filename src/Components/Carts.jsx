import React, { useState } from 'react';
<<<<<<< HEAD
import OrderHistory from '../Payment/OrderHistory';
=======
import Number from './Number';
>>>>>>> 99d19b680f22ebe65db7d6b96db706171f02e3a0

function Carts() {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem('count');
    return savedCount ? parseInt(savedCount, 10) : 0;
  });

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);

  const increaseCount = () => {
    const newCount = count + 1;
    setCount(newCount);
    localStorage.setItem('count', newCount);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsModalVisible(true);
    setPaymentStatus(null);
  };


  const handleComplete = () => {
    setPaymentStatus('succeeded');

  };


  const handleFail = () => {
    setPaymentStatus('failed');
  };


  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="text-black flex flex-wrap justify-center items-center h-screen">

      <div className="bg-gray-100 flex justify-center p-5 w-[400px] rounded-xl">
        <form onSubmit={handleSubmit}>
          <h2 className="font-bold m-2 text-[18px]">Pay with card</h2>
          <div className="mb-4">
            <label htmlFor="email" className="block">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="p-1 text-center text-black bg-white rounded-2xl w-[300px] m-2"
              required
            />
          </div>


          <div className="mb-4">
            <label htmlFor="cardNumber" className="block">Card number</label>
            <input
              type="text"
              id="cardNumber"
              placeholder="1234 1234 1234"
              className="p-1 text-center text-black bg-white rounded-2xl w-[300px] m-2"
              required
            />
          </div>


          <div className="mb-4">
            <label htmlFor="cardholderName" className="block">Cardholder name</label>
            <input
              type="text"
              id="cardholderName"
              placeholder="Equity/VISA"
              className="p-1 text-center text-black bg-white rounded-2xl w-[300px] m-2"
              required
            />
          </div>


          <div className="mb-4">
            <label htmlFor="country" className="block">Country/Region</label>
            <input
              type="text"
              id="country"
              placeholder="Nairobi/..."
              className="p-1 text-center text-black bg-white rounded-2xl w-[300px] m-2"
              required
            />
          </div>


          <button
            type="submit"
            className="w-[200px] p-1 border-none rounded-l bg-blue-500 hover:bg-blue-600 hover:text-white"
          >
            Pay
          </button>
        </form>
      </div>


      {isModalVisible && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50"
          onClick={closeModal}
        >
          <div
            className="bg-white p-6 rounded-xl w-[350px] text-center"
            onClick={(e) => e.stopPropagation()}
          >
            {paymentStatus === null ? (

              <>
                <h2 className="font-bold text-xl">Payment Status</h2>
                <p className="mt-2">Please choose whether the payment was successful or failed.</p>
                <div className="mt-4">
                  <button
                    onClick={() => {
                      handleComplete();
                      increaseCount();

                    }}
                    className="p-2 bg-green-500 hover:bg-green-600 text-white rounded-full w-[120px] m-2"
                  >
                    Complete
                  </button>
                  <button
                    onClick={handleFail}
                    className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-full w-[120px] m-2"
                  >
                    Fail
                  </button>
                </div>
              </>
            ) : paymentStatus === 'succeeded' ? (

              <>
                <h2 className="font-bold text-2xl text-green-500">Payment Succeeded</h2>
                <div className="mt-4 text-green-500 text-4xl">
                  <span role="img" aria-label="checkmark">✅</span>
                </div>
                <p className="mt-2">Your payment was successfully processed!</p>
                <button
                  onClick={closeModal}
                  className="mt-4 p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full w-full"
                >
                  Close
                </button>
              </>
            ) : (

              <>
                <h2 className="font-bold text-2xl text-red-500">Payment Failed</h2>
                <div className="mt-4 text-red-500 text-4xl">
                  <span role="img" aria-label="cross">❌</span>
                </div>
                <p className="mt-2">Your payment could not be processed. Please try again.</p>
                <button
                  onClick={closeModal}
                  className="mt-4 p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full w-full"
                >
                  Close
                </button>
              </>
            )}
          </div>
          <OrderHistory/>
        </div>
      )}
    </div>
  );
}

export default Carts;
