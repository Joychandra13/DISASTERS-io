import React, { useState } from "react";

const ProgressBarWithSteps = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCard, setSelectedCard] = useState(null); // Track selected card
  const [isOpen, setIsOpen] = useState(true); // Track visibility of the component

  // Function to go to the next step
  const goToNextStep = () => {
    setCurrentStep((prevStep) => (prevStep < 3 ? prevStep + 1 : prevStep));
  };

  // Function to go to the previous step
  const goToPreviousStep = () => {
    setCurrentStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
  };

  // Function to handle card selection
  const selectCard = (cardIndex) => {
    setSelectedCard(cardIndex);
  };

  // Function to close the component
  const closeComponent = () => {
    setIsOpen(false);
  };

  // Step Content
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="grid grid-cols-3 gap-4">
            {/* Selectable Cards */}
            {[1, 2, 3].map((card, index) => (
              <div
                key={index}
                onClick={() => selectCard(index)} // Handle card click
                className={`border p-4 text-center cursor-pointer rounded-md transition-colors ${
                  selectedCard === index
                    ? "bg-orange-500 text-white" // Selected card styles
                    : "bg-white hover:bg-orange-100" // Hover color
                }`}
              >
                {`Card ${card}`}
              </div>
            ))}
          </div>
        );
      case 2:
        return (
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Name:</label>
              <input
                type="text"
                className="border border-gray-300 p-2 rounded-md w-full"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email:</label>
              <input
                type="email"
                className="border border-gray-300 p-2 rounded-md w-full"
                placeholder="Enter your email"
              />
            </div>
          </form>
        );
      case 3:
        return (
          <div className="w-full h-64 bg-gray-200 flex justify-center items-center">
            {/* Placeholder for Map */}
            <p>Map with location search (You can integrate a map library here)</p>
          </div>
        );
      default:
        return null;
    }
  };

  if (!isOpen) return null; // Return null if the component is closed

  return (
    <div className="flex flex-col items-center">
      

      {/* Progress Bar and Buttons Container */}
      <div className="bg-[#f2f2f3] w-full">
            <div className="mx-auto gap-[123px] container md:flex md:mx-auto justify-between ms-[20%] items-center pt-[32px] pb-[23px] sm:p-3">
                <div className="flex items-center gap-3">
                    {/* Close Button */}
                    <button 
                    onClick={closeComponent} 
                    className="w-[41px] h-[41px] bg-[#FAFAFA]  rounded-full flex items-center justify-center border[1px]">
                        <img src="/Frame(1).png" alt="Close" className="w-[20px] h-[20px] "/>
                    </button>
                    <div className='pb-[13px] md:p-0'>
                        <p className='text-secondary'>Home - Incidents - New Incident</p>
                        <h1 className='text-[26px] font-bold font-Onest'>New Incident</h1>
                    </div>
                </div>

        {/* Progress Bar */}
        <div className="relative flex-1 h-2 bg-gray-300 w-[527px] rounded-full">
          {/* Completed Steps */}
          <div
            className={`absolute h-2 bg-orange-500 rounded-full`}
            style={{ width: `${(currentStep / 3) * 100}%` }}
          ></div>
        </div>

        {/* Buttons to control the steps */}
        <div className="flex gap-[15px]">
          <button
            onClick={goToPreviousStep}
            className="py-[8px] px-[25px] bg-[#FAFAFA] text-primary border-[1px] rounded-md"
            disabled={currentStep === 1}
          >
            Previous
          </button>
          <button
            onClick={goToNextStep}
            className="py-[8px] px-[25px] bg-orange-500 text-white rounded-md"
            disabled={currentStep === 3}
          >
            {currentStep === 3 ? "Finish" : "Next step"}
          </button>
        </div>
      </div>
      </div>


      {/* Step Content */}
      <div className="mb-6 w-full max-w-lg">
        {renderStepContent()}
      </div>
    </div>
  );
};

export default ProgressBarWithSteps;
