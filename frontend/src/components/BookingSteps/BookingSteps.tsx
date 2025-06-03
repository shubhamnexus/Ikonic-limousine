import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, CreditCard, CheckCircle } from 'lucide-react';
import { useBooking } from '../../contexts/BookingContext';

const steps = [
  { label: 'Route', icon: MapPin },
  { label: 'Details', icon: Calendar },
  { label: 'Payment', icon: CreditCard },
  { label: 'Confirmation', icon: CheckCircle },
];

export function BookingSteps() {
  const { state } = useBooking();
  const [isLoading, setIsLoading] = useState(false);
  const [prevStep, setPrevStep] = useState(state.step);

  useEffect(() => {
    if (prevStep !== state.step) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1500); // 1.5 second loading animation
      setPrevStep(state.step);
      return () => clearTimeout(timer);
    }
  }, [state.step, prevStep]);

  return (
    <div className="w-full max-w-5xl mx-auto mb-8">
      <div className="py-6">
        <nav aria-label="Progress">
          <ol className="flex items-center justify-between relative">
            {/* Progress Line */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-gray-200">
              <div 
                className="h-full bg-[#FF6600] transition-all duration-1500 ease-in-out"
                style={{ width: `${((state.step - 1) / (steps.length - 1)) * 100}%` }}
              />
            </div>

            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = state.step === index + 1;
              const isCompleted = state.step > index + 1;

              return (
                <li key={step.label} className="relative flex-1 flex flex-col items-center">
                  <div 
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ease-in-out z-10
                      ${isLoading && isActive ? 'animate-pulse' : ''}
                      ${isCompleted ? 'bg-[#FF6600] text-white scale-110' : 
                        isActive ? 'bg-[#FF6600] text-white scale-110 shadow-lg ring-4 ring-orange-100' : 
                        'bg-white border-2 border-gray-200 text-gray-400'}`}
                  >
                    <Icon className={`w-6 h-6 ${isCompleted || isActive ? 'transform scale-110' : ''} 
                      ${isLoading && isActive ? 'animate-spin' : ''}`} />
                  </div>
                  
                  <span 
                    className={`absolute -bottom-6 text-sm font-medium whitespace-nowrap transition-all duration-300
                      ${isActive ? 'text-[#FF6600] transform scale-105' : 
                        isCompleted ? 'text-[#FF6600]' : 
                        'text-gray-500'}`}
                  >
                    {step.label}
                  </span>
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
}