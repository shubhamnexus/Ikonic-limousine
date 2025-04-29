import { useState } from "react";
import { Lock, Car, MapPin, Calendar } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { BACKEND_URL } from "../../../config";

interface CardOption {
  id: string;
  type: string;
  name: string;
  logo: string;
  description?: string;
}

// Initialize Stripe
const stripePromise = loadStripe(
  "pk_test_51R13BTFtwLvCEnG8CJuAz5NwyG9YSxC6nQoQ4NB9mwy4Gz97n5jPDEVduBWk9yCWpqPj2sr58Xj872PHwqaM4n6c002xFkCoDy"
);

export function PaymentForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const booking = location.state?.booking;
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Redirect if no booking data
  if (!booking) {
    navigate("/car-selection");
    return null;
  }

  const handleStripeCheckout = async () => {
    setIsProcessing(true);
    setError(null);

    try {
      const stripe = await stripePromise;
      if (!stripe) {
        throw new Error("Stripe failed to initialize");
      }

      // Call the backend API to create a checkout session
      const response = await fetch(
        `${BACKEND_URL}` + "/api/create-checkout-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: Math.round(booking.price * 100), // Convert to cents
            currency: "AED",
            bookingId: booking.id || "temp-id",
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to create checkout session");
      }

      const { sessionId } = await response.json();

      // Redirect to Stripe Checkout
      const { error } = await stripe.redirectToCheckout({
        sessionId,
      });

      if (error) {
        setError(error.message || "An error occurred during checkout.");
      }
    } catch (err: any) {
      console.error("Checkout error:", err);
      setError(err.message || "An error occurred. Please try again later.");
    } finally {
      setIsProcessing(false);
    }
  };

  const cardOptions: CardOption[] = [
    {
      id: "pay_to_drive",
      type: "Pay to Drive",
      name: "Pay to Drive",
      logo: "https://cdn-icons-png.flaticon.com/512/2489/2489756.png",
      description: "Pay cash to driver when you start your journey",
    },
    {
      id: "card",
      type: "Card",
      name: "Credit/Debit Card",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg",
    },
  ];

  const handlePayToDriverSubmit = () => {
    navigate("/booking-confirmation", {
      state: {
        booking,
        paymentMethod: "pay_to_drive",
      },
      replace: true,
    });
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Payment Details</h2>
        <Lock className="text-gray-400" />
      </div>

      {/* Booking Summary */}
      <div className="mb-6 bg-gray-50 p-3 rounded-lg">
        <h3 className="text-base font-semibold mb-2">Booking Summary</h3>
        <div className="space-y-1">
          <div className="flex items-center text-gray-600 text-sm">
            <Car className="w-4 h-4 mr-2 text-[#FF6600]" />
            <span>{booking.vehicle.name}</span>
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <MapPin className="w-4 h-4 mr-2 text-[#FF6600]" />
            <div className="flex-1">
              <p>From: {booking.pickupLocation}</p>
              <p>To: {booking.dropoffLocation}</p>
            </div>
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <Calendar className="w-4 h-4 mr-2 text-[#FF6600]" />
            <span>
              {booking.date} at {booking.time}
            </span>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Amount to Pay</span>
          <span className="text-xl font-bold text-[#FF6600]">
            AED {booking.price.toFixed(2)}
          </span>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Select Payment Method</h3>
        <div className="grid gap-4">
          {cardOptions.map((card) => (
            <button
              key={card.id}
              onClick={
                card.id === "card"
                  ? handleStripeCheckout
                  : handlePayToDriverSubmit
              }
              disabled={isProcessing}
              className={`flex items-center justify-between p-4 border rounded-lg transition-colors
                ${
                  card.id === "card"
                    ? "hover:border-[#FF6600]"
                    : "hover:border-[#FF6600]"
                }
                ${isProcessing ? "opacity-75 cursor-not-allowed" : ""}`}
            >
              <div className="flex items-center flex-1">
                <img
                  src={card.logo}
                  alt={card.name}
                  className="h-8 w-auto mr-3"
                />
                <div>
                  <span className="font-medium block">{card.name}</span>
                  {card.description && (
                    <span className="text-sm text-gray-500">
                      {card.description}
                    </span>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {error && <div className="mt-4 text-red-500 text-sm">{error}</div>}

      <div className="mt-4 text-center text-xs text-gray-500">
        <Lock className="inline-block w-3 h-3 mr-1" />
        Your payment information is secure
      </div>
    </div>
  );
}
