import React from 'react';

const Location = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
      <div style={{ width: '60%' }}>
        <h2>Delivery Information</h2>
        <form style={{ display: 'grid', gap: '10px' }}>
          <div style={{ display: 'flex', gap: '10px' }}>
            <input type="text" placeholder="First name" style={{ flex: 1 }} />
            <input type="text" placeholder="Last name" style={{ flex: 1 }} />
          </div>
          <input type="email" placeholder="Email address" />
          <input type="text" placeholder="Street" />
          <div style={{ display: 'flex', gap: '10px' }}>
            <input type="text" placeholder="City" style={{ flex: 1 }} />
            <input type="text" placeholder="State" style={{ flex: 1 }} />
          </div>
          <input type="text" placeholder="Phone" />
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
        <button style={{ padding: '10px 20px', backgroundColor: '#FF6A3D', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Proceed To Payment
        </button>
      </div>
    </div>
  );
};

export default Location;