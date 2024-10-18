import React, { useState } from "react";
import { IncidentIconCard } from "../../components/common/card";
import { Link, useNavigate } from 'react-router-dom';

const ProgressBarWithSteps = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  
  const navigate = useNavigate(); // Initialize useNavigate hook

  const goToNextStep = () => {
    setCurrentStep((prevStep) => (prevStep < 3 ? prevStep + 1 : prevStep));
  };

  const goToPreviousStep = () => {
    if (currentStep === 1) {
      navigate("/NewIncident"); // Navigate to NewIncident if on the first step
    } else {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const closeComponent = () => {
    setIsOpen(false);
  };

  // Navigate to Locations page on finish
  const handleFinish = () => {
    navigate("/Locations"); // Navigate to home page
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="container mx-auto md:mt-[40px] p-10 md:p-0">
            <div className="flex justify-center mb-4">
              <IncidentIconCard />
            </div>
          </div>
        );
      case 2:
        return (
            <form className="space-y-6 container mx-auto md:w-[752px] mt-[40px] transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-md p-5 mb-5 hover:rounded-md ">
              <div className="space-y-3">
                  <div className="space-y-3"> 
                  <h1 className="text-[24px] font-bold text-primary">Let’s give the incident a title?</h1>
                  <p className="text-sm text-secondary">Make a title that will easily identify the incidents</p>
                  </div>
                <label className="block text-sm font-medium"></label>
                <input
                  type="text"
                  className="border block bg-[#F4F4F5] p-2 rounded-[6px] w-full focus:outline-button "
                  placeholder="Add title here"
                />
              </div>
              <div className="space-y-3">
                  <div className="space-y-3">
                  <h1 className="text-[24px] font-bold text-primary">Describe what happened during the incident?</h1>
                  <p className="text-sm text-secondary">Share some information about the incident. The when, where, how. </p>
                  </div>
                <label className="block text-sm font-medium"></label>
                <textarea
                rows="5"
                className="mt-2 block w-full bg-[#F4F4F5] p-3 border border-gray-300 rounded-[6px] focus:outline-button "
                placeholder="Type here"
                />
       
              </div>
            </form>
          );
      case 3:
        return (
            <div className="container mx-auto md:w-[752px] mt-[40px] space-y-3">
            <div className="space-y-3">
                <h1 className="text-[24px] font-bold text-primary">Where’s the incident?</h1>
                <p className="text-sm text-secondary">Enter a GPS, address. or pin point on the map. Try to be as <br /> accurate as possible, or click:Jurisdiction Wide</p>
            </div>
            <div>
                <div>
                   <div className="absolute ms-[10px] mt-[10px] w-[230px] h-[42px] rounded-[6px] ">
                        <img
                        src="/Frame.png"
                        alt="Search Icon"
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 w-[18px] h-[18px]"
                        />
                        <input
                        type="text"
                        placeholder="Enter incident address or GPS"
                        className="w-full py-2 ps-[33px] pe-2 text-sm border-[#E4E4E7] bg-white rounded-[6px] focus:outline-none"
                        />
                   </div>
                   <div className="absolute ms-[10px] mt-[55px] w-[230px] h-[42px] rounded-[6px]">
                        <img
                        src="/Frame.png"
                        alt="Search Icon"
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-[18px] h-[18px]"
                        />
                        <input
                        type="text"
                        placeholder="Pinpoint damage"
                        className="w-full py-2 ps-[33px] pe-2 text-sm border-[#E4E4E7] bg-white rounded-[6px] focus:outline-none"
                        />
                    </div>
                </div>   

                <img className="rounded-[10px]" src="/map2.png" alt="" />
            </div>

        </div>
        );
      default:
        return null;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="overflow-hidden p-5 md:p-0 font-Onest">
      <div className="bg-[#f2f2f3] w-full">
        <div className="md:mx-auto gap-[123px] md:container md:flex justify-between items-center pt-[32px] pb-[23px] sm:p-3 p-5 md:p-0 border rounded-md md:border-none md:rounded-none">
          <div className="flex items-center gap-3">
            {/* Close Button */}
            <Link to="/">
              <button 
                onClick={closeComponent} 
                className="w-[41px] h-[41px] bg-[#FAFAFA] rounded-full flex items-center justify-center border[1px]"
              >
                <img src="/Frame(1).png" alt="Close" className="w-[20px] h-[20px]" />
              </button>
            </Link>
            <div className="pb-[13px] md:p-0">
              <p className="text-secondary">Home - Incidents - New Incident</p>
              <h1 className="text-[26px] font-bold">New Incident</h1>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="relative flex-1 h-2 bg-gray-300 hidden md:w-[527px] rounded-full">
            <div className={`absolute h-2 bg-orange-500 rounded-full`} style={{ width: `${(currentStep / 3) * 100}%` }}></div>
          </div>

          {/* Step Buttons */}
          <div className="flex gap-[15px] mt-3 md:mt-0">
            <button
              onClick={goToPreviousStep}
              className="py-[8px] px-[25px] w-[139px] text-sm bg-[#FAFAFA] text-primary border-[1px] rounded-md"
            >
              {currentStep === 1 ? "Back " : "Back"}
            </button>
            <button
              onClick={currentStep === 3 ? handleFinish : goToNextStep}
              className="py-[8px] px-[25px] w-[139px] bg-orange-500 text-sm text-white rounded-md"
            >
              {currentStep === 3 ? "Finish" : "Next step"}
            </button>
          </div>
        </div>
      </div>

      {/* Step Content */}
      <div>{renderStepContent()}</div>
    </div>
  );
};

export default ProgressBarWithSteps;
