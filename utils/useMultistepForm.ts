import { ReactElement, useState } from 'react';

/**
 * It takes an array of React elements and returns an object with the current step index, a function to
 * go to the next step, a function to go to the previous step, a boolean to check if it's the first
 * step, a boolean to check if it's the last step, and the current step
 * @param {ReactElement[]} steps - ReactElement[] - an array of React elements that represent each step
 * of the form
 * @returns An object with the following properties:
 * currentStepIndex,
 * setCurrentStepIndex,
 * nextStep,
 * prevStep,
 * isFirstStep,
 * isLastStep,
 * currentStep
 */
export const useMultiStepForm = (steps: ReactElement[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const nextStep = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const prevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  return {
    currentStepIndex,
    setCurrentStepIndex,
    nextStep,
    prevStep,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    currentStep: steps[currentStepIndex],
  };
};
