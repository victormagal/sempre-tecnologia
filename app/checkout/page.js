'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import {
  neutralDark,
  neutralLight,
  neutralMid,
  red,
  success
} from '../base/Colors';
import SolidIcon from '../base/SolidIcon';
import { Overline, Text, Title } from '../base/Typography';
import { Container } from '../components/Foundation';
import {
  ContactData,
  PaymentData,
  ServiceData,
  SummaryData
} from './FormSteps';
import validationSchema from './FormValidation/validationSchema';
import { Form, Formik } from 'formik';

export default function Checkout() {
  const router = useRouter();
  const steps = [
    'Dados de contato',
    'Forma de atendimento',
    'Formas de pagamento',
    'Resumo da compra'
  ];

  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return <ContactData />;
      case 1:
        return <ServiceData />;
      case 2:
        return <PaymentData />;
      case 3:
        return <SummaryData />;
      default:
        return <div>Vazio</div>;
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const submitForm = (actions, values) => {
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);

    setActiveStep(activeStep + 1);
  };

  const handleSubmit = (actions, values) => {
    if (isLastStep) {
      submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };

  return (
    <main className="pt-24">
      <Container newClasses="py-12">
        <ul className="col-span-8 col-start-3 flex items-center justify-between">
          <li>
            <div
              className="border flex h-8 items-center justify-center rounded-full w-8"
              style={{
                backgroundColor: `${
                  activeStep === 0
                    ? red[900]
                    : activeStep > 0
                    ? success[900]
                    : 'transparent'
                }`,
                borderColor:
                  activeStep === 0
                    ? neutralLight[100]
                    : activeStep > 0
                    ? neutralLight[100]
                    : neutralMid[100]
              }}
            >
              {activeStep <= 0 && (
                <Title
                  appearance="h7"
                  color={
                    activeStep === 0
                      ? neutralLight[100]
                      : activeStep > 0
                      ? neutralLight[100]
                      : neutralMid[100]
                  }
                >
                  1
                </Title>
              )}
              {activeStep > 0 && (
                <SolidIcon
                  icon="faCheck"
                  iconColor={neutralLight[100]}
                  newClasses="h-3"
                />
              )}
            </div>
          </li>
          <hr className="border flex-grow mx-2" />
          <li>
            <div
              className="border flex h-8 items-center justify-center rounded-full w-8"
              style={{
                backgroundColor: `${
                  activeStep === 1
                    ? red[900]
                    : activeStep > 1
                    ? success[900]
                    : 'transparent'
                }`,
                borderColor:
                  activeStep === 1
                    ? neutralLight[100]
                    : activeStep > 1
                    ? neutralLight[100]
                    : neutralMid[100]
              }}
            >
              {activeStep <= 1 && (
                <Title
                  appearance="h7"
                  color={
                    activeStep === 1
                      ? neutralLight[100]
                      : activeStep > 1
                      ? neutralLight[100]
                      : neutralMid[100]
                  }
                >
                  2
                </Title>
              )}
              {activeStep > 1 && (
                <SolidIcon
                  icon="faCheck"
                  iconColor={neutralLight[100]}
                  newClasses="h-3"
                />
              )}
            </div>
          </li>
          <hr className="border flex-grow mx-2" />
          <li>
            <div
              className="border flex h-8 items-center justify-center rounded-full w-8"
              style={{
                backgroundColor: `${
                  activeStep === 2
                    ? red[900]
                    : activeStep > 2
                    ? success[900]
                    : 'transparent'
                }`,
                borderColor:
                  activeStep === 2
                    ? neutralLight[100]
                    : activeStep > 2
                    ? neutralLight[100]
                    : neutralMid[100]
              }}
            >
              {activeStep <= 2 && (
                <Title
                  appearance="h7"
                  color={
                    activeStep === 2
                      ? neutralLight[100]
                      : activeStep > 2
                      ? neutralLight[100]
                      : neutralMid[100]
                  }
                >
                  3
                </Title>
              )}
              {activeStep > 2 && (
                <SolidIcon
                  icon="faCheck"
                  iconColor={neutralLight[100]}
                  newClasses="h-3"
                />
              )}
            </div>
          </li>
          <hr className="border flex-grow mx-2" />
          <li>
            <div
              className="border flex h-8 items-center justify-center rounded-full w-8"
              style={{
                backgroundColor: `${
                  activeStep === 3
                    ? red[900]
                    : activeStep > 3
                    ? success[900]
                    : 'transparent'
                }`,
                borderColor:
                  activeStep === 3
                    ? neutralLight[100]
                    : activeStep > 3
                    ? neutralLight[100]
                    : neutralMid[100]
              }}
            >
              {activeStep <= 3 && (
                <Title
                  appearance="h7"
                  color={
                    activeStep === 3
                      ? neutralLight[100]
                      : activeStep > 3
                      ? neutralLight[100]
                      : neutralMid[100]
                  }
                >
                  4
                </Title>
              )}
              {activeStep > 3 && (
                <SolidIcon
                  icon="faCheck"
                  iconColor={neutralLight[100]}
                  newClasses="h-3"
                />
              )}
            </div>
          </li>
        </ul>
      </Container>
      <Container>
        <ul className="border col-span-10 col-start-2 flex justify-between mb-6 py-8 px-12 rounded">
          <li>
            <Title appearance="h4" color={neutralDark[500]} extra>
              Certificado
              <br />
              selecionado
            </Title>
          </li>
          <li className="flex flex-col space-y-1">
            <div
              className="py-2 rounded text-center"
              style={{ background: '#E6F8F2' }}
            >
              <Overline appearance="o1" color="#076E4F">
                25% off
              </Overline>
            </div>
            <div>
              <Title appearance="h4" color={neutralDark[400]} extra>
                e-CPF A1
              </Title>
            </div>
          </li>
          <li className="flex flex-col space-y-1">
            <Text
              appearance="p3"
              color={neutralMid[600]}
              className="line-through"
            >
              De R$169 por
            </Text>
            <Title appearance="h2" color={neutralDark[500]} extra>
              R$ 126,75
            </Title>
            <Text appearance="p3" color={neutralMid[600]}>
              3x de R$42,25 no crédito
            </Text>
            <Text appearance="p4" color={neutralDark[500]}>
              Validade de 12 meses
            </Text>
          </li>
          <li className="flex items-center">
            <button
              className="border flex items-center justify-center py-4 px-8 rounded-md space-x-3"
              style={{
                background: neutralLight[100],
                borderColor: neutralLight[500]
              }}
            >
              <Title appearance="h7" color={neutralDark[500]}>
                Trocar certificado
              </Title>
            </button>
          </li>
        </ul>
      </Container>
      <Formik
        initialValues={{
          cidade: '',
          document: '',
          estado: '',
          forma_pagamento: '',
          mail: '',
          name: '',
          phone: '',
          tipo_atendimento: ''
        }}
        onSubmit={handleSubmit}
        validationSchema={currentValidationSchema}
      >
        <Form>
          {renderStepContent(activeStep)}
          <Container>
            <div className="col-span-10 col-start-2 flex justify-between py-6">
              {activeStep !== 0 ? (
                <button
                  className="border flex items-center py-3 px-4 rounded space-x-2"
                  onClick={() => handleBack()}
                  style={{
                    background: neutralLight[100],
                    borderColor: neutralLight[500]
                  }}
                  type="button"
                >
                  <SolidIcon
                    icon="faChevronLeft"
                    iconColor={neutralDark[500]}
                    newClasses="h-3"
                  />
                  <Text appearance="p4" color={neutralDark[500]}>
                    Voltar
                  </Text>
                </button>
              ) : (
                <button
                  className="border flex items-center py-3 px-4 rounded space-x-2"
                  onClick={() => router.back()}
                  style={{
                    background: neutralLight[100],
                    borderColor: neutralLight[500]
                  }}
                  type="button"
                >
                  <SolidIcon
                    icon="faChevronLeft"
                    iconColor={neutralDark[500]}
                    newClasses="h-3"
                  />
                  <Text appearance="p4" color={neutralDark[500]}>
                    Voltar
                  </Text>
                </button>
              )}
              <div>
                <button
                  className="flex items-center py-3 px-4 rounded space-x-2"
                  style={{ background: success[900] }}
                  type="submit"
                >
                  <Text appearance="p4" color={neutralLight[100]}>
                    {isLastStep ? 'Ir para a home' : 'Continuar'}
                  </Text>
                  <SolidIcon
                    icon="faChevronRight"
                    iconColor={neutralLight[100]}
                    newClasses="h-3"
                  />
                </button>
              </div>
            </div>
          </Container>
        </Form>
      </Formik>
    </main>
  );
}
