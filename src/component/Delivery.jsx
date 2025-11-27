import React, { useState } from 'react';

// Reusable Product Component (from previous)
function ProductItem({ name, price, quantity = 1, imageUrl }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      padding: '10px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      marginBottom: '10px',
      backgroundColor: '#fff',
    }}>
      {imageUrl && (
        <img
          src={imageUrl}
          alt={name}
          style={{
            width: '60px',
            height: '60px',
            objectFit: 'cover',
            borderRadius: '4px',
            marginRight: '15px',
          }}
        />
      )}
      <div style={{ flex: 1 }}>
        <h3 style={{ margin: '0 0 5px 0', fontSize: '16px' }}>{name}</h3>
        <p style={{ margin: '0 0 5px 0', color: '#666', fontSize: '14px' }}>
          Quantity: {quantity}
        </p>
      </div>
      <div style={{ textAlign: 'right' }}>
        <p style={{ margin: '0', fontSize: '18px', fontWeight: 'bold' }}>
          ${(price * quantity).toFixed(2)}
        </p>
        {quantity > 1 && (
          <p style={{ margin: '0', color: '#666', fontSize: '12px' }}>
            x{quantity}
          </p>
        )}
      </div>
    </div>
  );
}

export default function Delivery() {
  const [selectedAddress, setSelectedAddress] = useState('Home');
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [notes, setNotes] = useState('');

  // Mock order data (integrated with ProductItem)
  const orderItems = [
    { id: 1, name: 'Margherita Pizza', quantity: 1, price: 12.99, imageUrl: 'https://via.placeholder.com/60?text=Pizza' },
    { id: 2, name: 'Garlic Bread', quantity: 2, price: 5.99, imageUrl: 'https://via.placeholder.com/60?text=Bread' },
  ];

  const subtotal = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.1;
  const deliveryFee = 2.99;
  const total = subtotal + tax + deliveryFee;

  const addresses = [
    { id: 'home', label: 'Home - 123 Main St, City, State 12345' },
    { id: 'work', label: 'Work - 456 Office Ave, City, State 67890' },
    { id: 'other', label: 'Add New Address' },
  ];

  const handlePlaceOrder = () => {
    alert(`Order placed! Total: $${total.toFixed(2)}\nAddress: ${selectedAddress}\nPayment: ${paymentMethod}\nNotes: ${notes}`);
    // In a real app, integrate with API here
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Delivery Details</h1>
      
      {/* Delivery Address Section */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Delivery Address</h2>
        {addresses.map(addr => (
          <label key={addr.id} style={styles.radioLabel}>
            <input
              type="radio"
              value={addr.id}
              checked={selectedAddress === addr.id}
              onChange={(e) => setSelectedAddress(e.target.value)}
              style={styles.radio}
            />
            {addr.label}
          </label>
        ))}
        {selectedAddress === 'other' && (
          <input
            type="text"
            placeholder="Enter new address"
            style={styles.input}
            onChange={(e) => setSelectedAddress(e.target.value)}
          />
        )}
      </div>

      {/* Order Summary with ProductItem */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Order Summary</h2>
        {orderItems.map((item) => (
          <ProductItem
            key={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            imageUrl={item.imageUrl}
          />
        ))}
        <div style={styles.lineItem}>
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div style={styles.lineItem}>
          <span>Tax (10%)</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div style={styles.lineItem}>
          <span>Delivery Fee</span>
          <span>${deliveryFee.toFixed(2)}</span>
        </div>
        <div style={styles.total}>
          <strong>Total</strong>
          <strong>${total.toFixed(2)}</strong>
        </div>
      </div>

      {/* Payment Method */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Payment Method</h2>
        <label style={styles.radioLabel}>
          <input
            type="radio"
            value="cash"
            checked={paymentMethod === 'cash'}
            onChange={(e) => setPaymentMethod(e.target.value)}
            style={styles.radio}
          />
          Cash on Delivery
        </label>
        <label style={styles.radioLabel}>
          <input
            type="radio"
            value="card"
            checked={paymentMethod === 'card'}
            onChange={(e) => setPaymentMethod(e.target.value)}
            style={styles.radio}
          />
          Credit/Debit Card
        </label>
      </div>

      {/* Order Notes */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Order Notes (Optional)</h2>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Any special instructions?"
          style={styles.textarea}
        />
      </div>

      {/* Place Order Button */}
      <button onClick={handlePlaceOrder} style={styles.button}>
        Place Order - ${total.toFixed(2)}
      </button>
    </div>
  );
}

// Inline Styles (same as before)
const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
  },
  title: {
    textAlign: 'center',
    color: '#e23744', // Zomato red
    marginBottom: '30px',
  },
  section: {
    backgroundColor: 'white',
    marginBottom: '20px',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  sectionTitle: {
    marginBottom: '15px',
    color: '#333',
  },
  radioLabel: {
    display: 'block',
    marginBottom: '10px',
    cursor: 'pointer',
  },
  radio: {
    marginRight: '10px',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginTop: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
  },
  lineItem: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '5px',
  },
  total: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '10px',
    paddingTop: '10px',
    borderTop: '1px solid #ddd',
    fontSize: '18px',
  },
  textarea: {
    width: '100%',
    height: '80px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    resize: 'vertical',
  },
  button: {
    width: '100%',
    padding: '15px',
    backgroundColor: '#e23744',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '18px',
    cursor: 'pointer',
    marginTop: '10px',
  },
};