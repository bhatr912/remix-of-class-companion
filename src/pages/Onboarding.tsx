import { useState } from "react";
import OnboardingLayout from "@/components/onboarding/OnboardingLayout";
import InstituteDetails from "@/components/onboarding/steps/InstituteDetails";
import OwnerInfo from "@/components/onboarding/steps/OwnerInfo";

export interface OnboardingData {
  instituteName: string;
  category: string;
  address: string;
  fullName: string;
  email: string;
  phone: string;
  password: string;
}

const INITIAL_DATA: OnboardingData = {
  instituteName: "",
  category: "",
  address: "",
  fullName: "",
  email: "",
  phone: "",
  password: "",
};

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState<OnboardingData>(INITIAL_DATA);

  const updateData = (fields: Partial<OnboardingData>) => {
    setData((prev) => ({ ...prev, ...fields }));
  };

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 1));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  const handleComplete = () => {
    console.log("Onboarding complete:", data);
    // TODO: Submit data to backend
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <InstituteDetails data={data} updateData={updateData} onNext={nextStep} />;
      case 1:
        return <OwnerInfo data={data} updateData={updateData} onBack={prevStep} onComplete={handleComplete} />;
      default:
        return null;
    }
  };

  return (
    <OnboardingLayout currentStep={currentStep}>
      {renderStep()}
    </OnboardingLayout>
  );
};

export default Onboarding;
