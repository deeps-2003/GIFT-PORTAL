import { useState } from "react";
import '../assets/css/pay.css';

const Pay = () => {
    const [amount, setAmount] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (amount > 10) {
            const options = {
                key: 'rzp_test_fzNTCDxq1sz3f3',
                key_secret: 'Vi6tWpAXNau3xopqfHonnMWd',
                amount: amount * 100,
                currency: "INR",
                name: 'DEEPIKA',
                handler: (res) => {
                    alert(res.razorpay_payment_id)
                },
                prefill: {
                    name: 'Deepika',
                    email: 'deepikathirumalaisamy2003@gmail.com',
                    contact: '9345615766'
                },
                notes: {
                    address: " office",
                },
                theme: {
                    color: '#f5f5f7'
                }
            };
            const pay = new window.Razorpay(options);
            pay.open();
        } else {
            alert("Invalid amount. Please enter an amount greater than 1000");
        }
    }

    return (
        <div className="payment-container">
            <h1 className="payment-header">Payment Page</h1>
            <form onSubmit={handleSubmit}>
                <label className="amount-label">Amount:</label>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="amount-input"
                />
                <button type="submit" className="pay-button">
                    Pay Now
                </button>
            </form>
        </div>
    );
}

export default Pay;