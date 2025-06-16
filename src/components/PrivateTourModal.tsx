import React, { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './ui/Button';
import { toast } from 'react-hot-toast';

interface PrivateTourModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivateTourModal: React.FC<PrivateTourModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    groupSize: '',
    interests: '',
    budget: '',
    duration: '',
    requirements: '',
    preferredGuideLanguage: '',
    dietaryRestrictions: '',
    transportPreference: '',
    accommodationType: '',
    photographyServices: false,
    guideGender: '',
    specificMonuments: '',
    preferredStartTime: '',
    needVisaAssistance: false,
    needAirportTransfer: false,
    needWheelchairAccess: false,
    childrenInGroup: false,
    childrenAges: '',
    preferredCuisine: '',
    shoppingInterests: '',
    photoSpots: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success('Your inquiry has been submitted successfully! We will contact you shortly.');
      onClose();
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        groupSize: '',
        interests: '',
        budget: '',
        duration: '',
        requirements: '',
        preferredGuideLanguage: '',
        dietaryRestrictions: '',
        transportPreference: '',
        accommodationType: '',
        photographyServices: false,
        guideGender: '',
        specificMonuments: '',
        preferredStartTime: '',
        needVisaAssistance: false,
        needAirportTransfer: false,
        needWheelchairAccess: false,
        childrenInGroup: false,
        childrenAges: '',
        preferredCuisine: '',
        shoppingInterests: '',
        photoSpots: false,
      });
      setCurrentStep(1);
    } catch (error) {
      toast.error('Failed to submit inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
      >
        <motion.div 
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4 relative max-h-[90vh] overflow-y-auto"
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Customize Your Private Tour</h2>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                {[1, 2, 3].map((step) => (
                  <div
                    key={step}
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step === currentStep
                        ? 'bg-red-600 text-white'
                        : step < currentStep
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {step < currentStep ? '✓' : step}
                  </div>
                ))}
              </div>
              <div className="relative h-2 bg-gray-200 rounded">
                <div
                  className="absolute h-full bg-red-600 rounded transition-all duration-300"
                  style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
                />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Basic Information */}
              {currentStep === 1 && (
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 20, opacity: 0 }}
                >
                  <h3 className="text-lg font-semibold mb-4">Basic Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
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
                        Preferred Date *
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
                </motion.div>
              )}

              {/* Step 2: Tour Preferences */}
              {currentStep === 2 && (
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 20, opacity: 0 }}
                >
                  <h3 className="text-lg font-semibold mb-4">Tour Preferences</h3>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Group Size *
                        </label>
                        <input
                          type="number"
                          required
                          min="1"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                          value={formData.groupSize}
                          onChange={(e) => setFormData({ ...formData, groupSize: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Preferred Duration *
                        </label>
                        <select
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                          value={formData.duration}
                          onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                        >
                          <option value="">Select duration</option>
                          <option value="half-day">Half Day (4-5 hours)</option>
                          <option value="full-day">Full Day (8-9 hours)</option>
                          <option value="two-days">Two Days</option>
                          <option value="custom">Custom Duration</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Specific Monuments/Sites
                      </label>
                      <textarea
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="List any specific monuments or sites you'd like to visit..."
                        value={formData.specificMonuments}
                        onChange={(e) => setFormData({ ...formData, specificMonuments: e.target.value })}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Preferred Start Time
                        </label>
                        <input
                          type="time"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                          value={formData.preferredStartTime}
                          onChange={(e) => setFormData({ ...formData, preferredStartTime: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Preferred Guide Language
                        </label>
                        <select
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                          value={formData.preferredGuideLanguage}
                          onChange={(e) => setFormData({ ...formData, preferredGuideLanguage: e.target.value })}
                        >
                          <option value="">Select language</option>
                          <option value="english">English</option>
                          <option value="hindi">Hindi</option>
                          <option value="french">French</option>
                          <option value="spanish">Spanish</option>
                          <option value="german">German</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Additional Requirements */}
              {currentStep === 3 && (
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 20, opacity: 0 }}
                >
                  <h3 className="text-lg font-semibold mb-4">Additional Requirements</h3>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Transport Preference
                        </label>
                        <select
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                          value={formData.transportPreference}
                          onChange={(e) => setFormData({ ...formData, transportPreference: e.target.value })}
                        >
                          <option value="">Select transport type</option>
                          <option value="car">Private Car</option>
                          <option value="suv">SUV</option>
                          <option value="luxury">Luxury Vehicle</option>
                          <option value="tempo">Tempo Traveller</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Preferred Cuisine
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                          placeholder="Any specific cuisine preferences..."
                          value={formData.preferredCuisine}
                          onChange={(e) => setFormData({ ...formData, preferredCuisine: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="needAirportTransfer"
                          className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                          checked={formData.needAirportTransfer}
                          onChange={(e) => setFormData({ ...formData, needAirportTransfer: e.target.checked })}
                        />
                        <label htmlFor="needAirportTransfer" className="ml-2 block text-sm text-gray-700">
                          Need airport transfer
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="needWheelchairAccess"
                          className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                          checked={formData.needWheelchairAccess}
                          onChange={(e) => setFormData({ ...formData, needWheelchairAccess: e.target.checked })}
                        />
                        <label htmlFor="needWheelchairAccess" className="ml-2 block text-sm text-gray-700">
                          Wheelchair accessibility required
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="photoSpots"
                          className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                          checked={formData.photoSpots}
                          onChange={(e) => setFormData({ ...formData, photoSpots: e.target.checked })}
                        />
                        <label htmlFor="photoSpots" className="ml-2 block text-sm text-gray-700">
                          Include photography spots
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Additional Requirements
                      </label>
                      <textarea
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Any other special requirements or preferences..."
                        value={formData.requirements}
                        onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                {currentStep > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                  >
                    Previous
                  </Button>
                )}
                {currentStep < totalSteps ? (
                  <Button
                    type="button"
                    onClick={nextStep}
                    className={currentStep === 1 ? 'ml-auto' : ''}
                  >
                    Next
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                  </Button>
                )}
              </div>
            </form>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PrivateTourModal;