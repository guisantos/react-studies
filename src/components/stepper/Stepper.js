import React, { useState } from "react";
import './Stepper.css';

const Stepper = ({ steps }) => {
    const [ currentStep, setCurrentStep ] = useState(0);
    const totalSteps = steps.length;

    const goNext = () => {
        if (currentStep < totalSteps - 1) {
            setCurrentStep(currentStep + 1);
        }
    }

    const goBack = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    }

    return (
        <div className="stepper-wrapper">
            <div className="stepper-header">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className={`step ${index === currentStep ? 'active' : ''}
                        ${index < currentStep ? 'completed' : ''}`} 
                        
                    >
                        <div className="step-number">{index + 1}</div>
                        <div className="step-label">{step.label}</div>
                    </div>
                ))}
            </div>

            <div className="stepper-content">{steps[currentStep].content}</div>

            <div className="stepper-controls">
                <button disabled={currentStep === 0} onClick={goBack}>
                    Back
                </button>
                <button disabled={currentStep === totalSteps - 1} onClick={goNext}>
                    Next
                </button>
            </div>
        </div>
    )
}

export default Stepper;