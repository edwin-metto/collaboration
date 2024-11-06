import React from 'react';

const Location = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }} className='w-full flex flex-wrap'>
      <div style={{ width: '60%' }}>
        <h2>Delivery Information</h2>
        <form style={{ display: 'grid', gap: '10px' }}>
          <div style={{ display: 'flex', gap: '10px' }}>
            <input type="text" placeholder="First name" style={{ flex: 1 }}  className='p-1 px-5 rounded-xl m-2 bg-white text-black '/>
            <input type="text" placeholder="Last name" style={{ flex: 1 }}  className='p-1 px-5 rounded-xl m-2 bg-white text-black '/>
          </div>
          <input type="email" placeholder="Email address"  className='p-1 px-5 rounded-xl m-2 bg-white text-black '/>
          <input type="text" placeholder="Street"  className='p-1 px-5 rounded-xl m-2 bg-white text-black '/>
          <div style={{ display: 'flex', gap: '10px' }}>
            <input type="text" placeholder="City" style={{ flex: 1 }}  className='p-1 px-5 rounded-xl m-2 bg-white text-black '/>
            <input type="text" placeholder="State" style={{ flex: 1 }}  className='p-1 px-5 rounded-xl m-2 bg-white text-black '/>
          </div>
          <input type="text" placeholder="Phone"  className='p-1 px-5 rounded-xl m-2 bg-white text-black '/>
        </form>
      </div>

      <div style={{ width: '35%', textAlign: 'center' }}>
        <h2>Cart Totals</h2>
        <table style={{ width: '100%', marginBottom: '20px' }}>
          <tbody>
            <tr>
              <td>Subtotal</td>
              <td>$60</td>
            </tr>
            <tr>
              <td>Delivery Fee</td>
              <td>$5</td>
            </tr>
            <tr>
              <td><strong>Total</strong></td>
              <td><strong>$65</strong></td>
            </tr>
          </tbody>
        </table>
        <button className=' w-[200px] p-1 border-none rounded-l bg-blue-500 hover:bg-blue-600 hover:text-white'>
          Proceed To Payment
        </button>
      </div>
    </div>
  );
};

export default Location;