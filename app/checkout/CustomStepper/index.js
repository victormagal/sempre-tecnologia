/* eslint-disable no-unused-vars */
import { Step, Stepper } from 'react-form-stepper';
import { neutralLight, red } from '@/app/base/Colors';

const CustomStepper = ({
  // steps,
  currentStep,
  onNext,
  onPrevious,
  activeStep
}) => {
  return (
    <Stepper
      // steps={steps}
      currentStep={currentStep}
      showNumber={false}
      onNext={onNext}
      onPrevious={onPrevious}
      activeStep={currentStep}
    >
      <Step
        style={{
          backgroundColor: red[900],
          borderColor: neutralLight[500],
          borderWidth: '1px',
          borderStyle: 'groove',
          fontFamily: 'Public Sans'
        }}
        label="Primeiro passo"
      />
      <Step label="Segundo passo" />
      <Step label="Terceiro passo" />
      <Step label="Quarto passo" />
    </Stepper>
  );
};

export default CustomStepper;
