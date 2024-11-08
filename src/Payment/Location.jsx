import React, { useState } from 'react';
import Carts from '.././Components/Carts';


const Location = ({ total }) => {
  const deliveryFee = 5;
  const grandTotal = total + deliveryFee;

  const [payment, setPayment] = useState(false)

  const paymentInfo = (e) => {
    e.preventDefault();
    setPayment(!payment)
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }} className='w-full flex flex-wrap'>

      {payment ? <Carts /> : (
        <div>
          <div style={{ width: '60%' }}>
            <h2 className='text-[30px] text-blue-500'>Delivery Information</h2>
            <form style={{ display: 'grid', gap: '10px' }}>
              <div style={{ display: 'flex', gap: '10px' }}>
                <input type="text" placeholder="First name" style={{ flex: 1 }} className='p-1 px-5 rounded-xl m-2 bg-white text-black ' required />
                <input type="text" placeholder="Last name" style={{ flex: 1 }} className='p-1 px-5 rounded-xl m-2 bg-white text-black ' required />
              </div>
              <input type="email" placeholder="Email address" className='p-1 px-5 rounded-xl m-2 bg-white text-black ' required />
              <input type="text" placeholder="Street" className='p-1 px-5 rounded-xl m-2 bg-white text-black ' required />
              <div style={{ display: 'flex', gap: '10px' }}>
                <input type="text" placeholder="City" style={{ flex: 1 }} className='p-1 px-5 rounded-xl m-2 bg-white text-black ' required />
                <input type="text" placeholder="State" style={{ flex: 1 }} className='p-1 px-5 rounded-xl m-2 bg-white text-black ' required />
              </div>
              <input type="text" placeholder="Phone" className='p-1 px-5 rounded-xl m-2 bg-white text-black ' required />
              <button
                type="submit"
                className="w-[200px] p-1 border-none rounded-l bg-blue-500 hover:bg-blue-600 hover:text-white"
                onClick={paymentInfo}
              >Proceed to payment
              </button>
            </form>
          </div>

          <div style={{ width: '35%', textAlign: 'center' }} className='text-black text-[20px]'>
            <h2>Cart Totals</h2>
            <table style={{ width: '100%', marginBottom: '20px' }}>
              <tbody>
                <tr className='text-blue-600'>
                  <td>Subtotal</td>
                  <td>${total}</td>
                </tr>
                <tr className='text-blue-600'>
                  <td>Delivery Fee</td>
                  <td>${deliveryFee}</td>
                </tr>
                <tr className='text-blue-600'>
                  <td><strong>Total</strong></td>
                  <td><strong>${grandTotal}</strong></td>
                </tr>

              </tbody>
            </table>
          </div>

        </div>
      )}

    </div>
  );
};

export default Location;
