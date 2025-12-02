import { useState, useContext } from "react";
import { Button } from "@/components/ui/button";
import Swal from "sweetalert2";
import { CartContext } from "@/context/CartContext";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CheckOut = () => {
    const navigate = useNavigate();
    const {cart, clearCart} = useContext(CartContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [payment, setPayment] = useState("cod");
    
    const total = cart.reduce((acc, curr) => acc + curr.price * curr.quantity ,0)
  
  const handleCheckout = () => {
    if (
      !name ||
      !email ||
      !phone ||
      !address ||
      !city
    ) {
      Swal.fire({
        icon: "error",
        title: "Missing Information",
        text: "Please complete all fields",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Order Placed Successfully 🎉",
      text: "Your order has been received!",
      timer: 1500,
      showConfirmButton: false,
    });
    clearCart();
    navigate("/");
  };

  return (
    <div className="container mx-auto px-4 py-10 grid md:grid-cols-3 gap-10">
      <div className="md:col-span-2 bg-white shadow-lg rounded-2xl p-6 border">
        <h2 className="text-2xl font-bold mb-6">Checkout Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            className="p-3 border rounded-lg"
            placeholder="Full Name"
            name="fullName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="p-3 border rounded-lg"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="p-3 border rounded-lg"
            placeholder="Phone Number"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            className="p-3 border rounded-lg"
            placeholder="City"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <textarea
          className="w-full mt-4 p-3 border rounded-lg"
          placeholder="Full Shipping Address"
          rows={3}
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <h3 className="text-xl font-semibold mt-6 mb-3">Payment Method</h3>

        <div className="flex gap-4">
          <label className="flex items-center gap-2 text-lg">
            <input
              type="radio"
              name="payment"
              value="cod"
              checked={payment === "cod"}
              onChange={(e) => setPayment(e.target.value)}
            />
            Cash on Delivery
          </label>

          <label className="flex items-center gap-2 text-lg">
            <input
              type="radio"
              name="payment"
              value="card"
              checked={payment === "card"}
              onChange={(e) => setPayment(e.target.value)}
            />
            Credit/Debit Card
          </label>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-2xl p-6 border">
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>

        <div className="space-y-4 md:overflow-y-auto md:h-[400px]">
          {cart.length === 0 ? (
            <p className="text-gray-500">Your cart is empty</p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-3"
              >
                <div>
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-sm text-gray-600 flex items-center">
                    {item.quantity} <X size={15} /> ${item.price}
                  </p>
                </div>
                <img
                  src={item.images[2]}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded-lg"
                />
              </div>
            ))
          )}
        </div>

        <div className="mt-6 border-t pt-4">
          <div className="flex justify-between text-lg font-semibold">
            <span>Total:</span>
            <span>${total}</span>
          </div>
        </div>

        <Button
          className="w-full mt-6 bg-[#0d98a5] hover:bg-[#0d98a5]/90"
          onClick={handleCheckout}
        >
          Confirm Order
        </Button>
      </div>
    </div>
  );
};

export default CheckOut;
