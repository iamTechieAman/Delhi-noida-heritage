import React, { useState } from 'react';
import Modal from 'react-modal';
import { X, Calendar, Users, MapPin, Clock, Check, CreditCard } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './ui/Button';
import { toast } from 'react-hot-toast';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  tourName: string;
  price: number;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, tourName, price }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [bookingReference, setBookingReference] = useState('');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('card');
  const [cardDetails, setCardDetails] = useState({
    number: '',
    expiry: '',
    cvv: '',
    name: ''
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    participants: 1,
    checkIn: '',
    checkOut: '',
    roomType: '',
    rooms: 1,
    pickupLocation: '',
    dropLocation: '',
    pickupTime: '',
    carType: '',
    paymentMethod: 'card'
  });

  const generateBookingReference = () => {
    const prefix = 'TR';
    const timestamp = Date.now().toString().slice(-6);
    const random = Math.random().toString(36).substring(2, 5).toUpperCase();
    return `${prefix}-${timestamp}-${random}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate form data
      if (!formData.name || !formData.email || !formData.phone || !formData.date) {
        throw new Error('Please fill in all required fields');
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error('Please enter a valid email address');
      }

      // Phone validation
      const phoneRegex = /^\+?[\d\s-]{10,}$/;
      if (!phoneRegex.test(formData.phone)) {
        throw new Error('Please enter a valid phone number');
      }

      // Card validation if card payment selected
      if (selectedPaymentMethod === 'card') {
        if (!cardDetails.number || !cardDetails.expiry || !cardDetails.cvv || !cardDetails.name) {
          throw new Error('Please fill in all card details');
        }
        
        // Basic card validation
        if (!/^\d{16}$/.test(cardDetails.number.replace(/\s/g, ''))) {
          throw new Error('Invalid card number');
        }
        
        if (!/^\d{3,4}$/.test(cardDetails.cvv)) {
          throw new Error('Invalid CVV');
        }
        
        const [month, year] = cardDetails.expiry.split('/');
        const now = new Date();
        const expiry = new Date(2000 + parseInt(year), parseInt(month) - 1);
        if (expiry < now) {
          throw new Error('Card has expired');
        }
      }

      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const reference = generateBookingReference();
      setBookingReference(reference);
      setShowConfirmation(true);

      toast.success('Payment processed successfully!');
    } catch (error) {
      toast.error(error.message || 'Failed to process booking. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    value = value.replace(/(\d{4})/g, '$1 ').trim();
    setCardDetails({ ...cardDetails, number: value });
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
      value = value.slice(0, 2) + '/' + value.slice(2, 4);
    }
    setCardDetails({ ...cardDetails, expiry: value });
  };

  const calculateTotal = () => {
    let total = price * formData.participants;
    return total;
  };

  const customModalStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem'
    },
    content: {
      position: 'relative',
      top: 'auto',
      left: 'auto',
      right: 'auto',
      bottom: 'auto',
      maxWidth: '800px',
      width: '100%',
      padding: 0,
      border: 'none',
      background: 'transparent',
      maxHeight: '90vh',
      overflow: 'visible'
    }
  };

  if (showConfirmation) {
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={customModalStyles}
        contentLabel="Booking Confirmation"
      >
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md mx-auto relative"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <Check className="w-8 h-8 text-green-600" />
          </motion.div>
          <h2 className="text-2xl font-bold mb-4 text-gray-900 text-center">Booking Confirmed!</h2>
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <p className="text-gray-600 mb-2 text-center">Your booking reference number is:</p>
            <p className="font-mono text-lg font-bold text-gray-900 text-center">{bookingReference}</p>
          </div>
          <div className="text-left mb-6">
            <h3 className="font-semibold mb-2">Booking Details:</h3>
            <p className="text-sm text-gray-600">Tour: {tourName}</p>
            <p className="text-sm text-gray-600">Date: {formData.date}</p>
            <p className="text-sm text-gray-600">Participants: {formData.participants}</p>
            <p className="text-sm text-gray-600">Total Amount: ₹{calculateTotal()}</p>
          </div>
          <p className="text-sm text-gray-600 mb-6 text-center">
            A confirmation email has been sent to {formData.email} with all the details.
          </p>
          <Button onClick={onClose} fullWidth>Close</Button>
        </motion.div>
      </Modal>
    );
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customModalStyles}
      contentLabel="Booking Modal"
    >
      <motion.div 
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="bg-white rounded-lg shadow-xl p-6 w-full relative"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <X size={24} />
        </button>
        
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Book Your Experience</h2>
        <p className="text-gray-600 mb-6">{tourName}</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email *
              </label>
              <input
                type="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone *
              </label>
              <input
                type="tel"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date *
              </label>
              <input
                type="date"
                required
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Number of Participants *
            </label>
            <input
              type="number"
              required
              min="1"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              value={formData.participants}
              onChange={(e) => setFormData({ ...formData, participants: parseInt(e.target.value) })}
            />
          </div>

          {/* Payment Method Selection */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Payment Method</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button
                type="button"
                onClick={() => setSelectedPaymentMethod('card')}
                className={`p-4 border rounded-lg text-left transition-all ${
                  selectedPaymentMethod === 'card'
                    ? 'border-red-500 bg-red-50'
                    : 'border-gray-200 hover:border-red-200'
                }`}
              >
                <CreditCard className={`mb-2 ${
                  selectedPaymentMethod === 'card' ? 'text-red-500' : 'text-gray-400'
                }`} />
                <p className="font-medium">Credit/Debit Card</p>
                <p className="text-sm text-gray-500">All major cards accepted</p>
              </button>

              <button
                type="button"
                onClick={() => setSelectedPaymentMethod('upi')}
                className={`p-4 border rounded-lg text-left transition-all ${
                  selectedPaymentMethod === 'upi'
                    ? 'border-red-500 bg-red-50'
                    : 'border-gray-200 hover:border-red-200'
                }`}
              >
                <svg
                  className={`w-6 h-6 mb-2 ${
                    selectedPaymentMethod === 'upi' ? 'text-red-500' : 'text-gray-400'
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M12 7v10M7 12h10" />
                </svg>
                <p className="font-medium">UPI</p>
                <p className="text-sm text-gray-500">Google Pay, PhonePe, etc.</p>
              </button>

              <button
                type="button"
                onClick={() => setSelectedPaymentMethod('netbanking')}
                className={`p-4 border rounded-lg text-left transition-all ${
                  selectedPaymentMethod === 'netbanking'
                    ? 'border-red-500 bg-red-50'
                    : 'border-gray-200 hover:border-red-200'
                }`}
              >
                <svg
                  className={`w-6 h-6 mb-2 ${
                    selectedPaymentMethod === 'netbanking' ? 'text-red-500' : 'text-gray-400'
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect x="2" y="5" width="20" height="14" rx="2" />
                  <path d="M12 2v20M2 12h20" />
                </svg>
                <p className="font-medium">Net Banking</p>
                <p className="text-sm text-gray-500">All major banks</p>
              </button>
            </div>

            {/* Card Details Form */}
            {selectedPaymentMethod === 'card' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4 bg-gray-50 p-4 rounded-lg"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Card Number *
                  </label>
                  <input
                    type="text"
                    maxLength={19}
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    value={cardDetails.number}
                    onChange={handleCardNumberChange}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Expiry Date *
                    </label>
                    <input
                      type="text"
                      maxLength={5}
                      placeholder="MM/YY"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      value={cardDetails.expiry}
                      onChange={handleExpiryChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      CVV *
                    </label>
                    <input
                      type="password"
                      maxLength={4}
                      placeholder="123"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      value={cardDetails.cvv}
                      onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Card Holder Name *
                  </label>
                  <input
                    type="text"
                    placeholder="JOHN DOE"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    value={cardDetails.name}
                    onChange={(e) => setCardDetails({ ...cardDetails, name: e.target.value.toUpperCase() })}
                  />
                </div>
              </motion.div>
            )}

            {/* UPI Section */}
            {selectedPaymentMethod === 'upi' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gray-50 p-4 rounded-lg"
              >
                <p className="text-sm text-gray-600 mb-4">
                  Enter your UPI ID to proceed with the payment
                </p>
                <input
                  type="text"
                  placeholder="username@upi"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </motion.div>
            )}

            {/* Net Banking Section */}
            {selectedPaymentMethod === 'netbanking' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gray-50 p-4 rounded-lg"
              >
                <p className="text-sm text-gray-600 mb-4">
                  Select your bank to proceed with net banking
                </p>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="">Select Bank</option>
                  <option value="sbi">State Bank of India</option>
                  <option value="hdfc">HDFC Bank</option>
                  <option value="icici">ICICI Bank</option>
                  <option value="axis">Axis Bank</option>
                  <option value="kotak">Kotak Mahindra Bank</option>
                </select>
              </motion.div>
            )}
          </div>

          {/* Order Summary */}
          <div className="border-t pt-4 mt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h3>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Base Price</span>
                <span className="font-medium">₹{price}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Participants</span>
                <span className="font-medium">x {formData.participants}</span>
              </div>
              {/* Add any applicable taxes or fees here */}
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Taxes & Fees (18%)</span>
                <span className="font-medium">₹{Math.round(calculateTotal() * 0.18)}</span>
              </div>
              <div className="border-t pt-2 mt-2 flex justify-between">
                <span className="font-semibold text-gray-900">Total Amount</span>
                <span className="text-xl font-bold text-gray-900">
                  ₹{calculateTotal() + Math.round(calculateTotal() * 0.18)}
                </span>
              </div>
            </div>

            <Button 
              type="submit" 
              fullWidth
              disabled={isSubmitting}
              className="py-3 text-lg"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing Payment...
                </div>
              ) : (
                `Pay ₹${calculateTotal() + Math.round(calculateTotal() * 0.18)}`
              )}
            </Button>

            <p className="text-xs text-gray-500 text-center mt-4">
              By clicking "Pay", you agree to our terms and conditions and privacy policy.
            </p>
          </div>
        </form>
      </motion.div>
    </Modal>
  );
};

export default BookingModal;