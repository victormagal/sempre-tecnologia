/* eslint-disable no-unused-vars */
import dynamic from 'next/dynamic';
import { useState } from 'react';
// import ReactDatePicker from 'react-datepicker';
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';
// import 'react-datepicker/dist/react-datepicker.css';
import * as Yup from 'yup';

const StepperComponent = dynamic(() => import('../CustomStepper'), {
  ssr: false
});
export default function FormSteps() {
  const [data, setData] = useState({
    first_name: '',
    last_name: '',
    gender: '',
    country: '',
    email: '',
    password: '',
    preExperience: null,
    info1: null,
    info2: null,
    info3: null,
    numberOfYears: undefined,
    specificDate: null,
    rangeStartDate: null,
    rangeEndDate: null,
    educationBackground: [
      {
        type: '',
        entityName: '',
        grade: '',
        gradeFromYr: null,
        gradeToYr: null,
        details: ''
      }
    ]
  });
  const [currentStep, setCurrentStep] = useState(0);

  const makeRequest = (formData) => {
    console.log('Form Submitted', formData);
  };

  const handleNextStep = (newData, final = false) => {
    setData((prev) => ({ ...prev, ...newData }));
    if (final) {
      makeRequest(newData);
      return;
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevStep = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };

  const steps = [
    {
      label: 'Dados do contato',
      content: <StepOne next={handleNextStep} data={data} />
    },
    {
      label: 'Tipo de atendimento',
      content: (
        <StepTwo next={handleNextStep} prev={handlePrevStep} data={data} />
      )
    },
    {
      label: 'Forma de pagamento',
      content: (
        <StepThree next={handleNextStep} prev={handlePrevStep} data={data} />
      )
    },
    {
      label: 'Resumo',
      content: (
        <StepFour next={handleNextStep} prev={handlePrevStep} data={data} />
      )
    }
  ];

  //   console.log('data', data);
  return (
    <>
      <div className="App">
        {' '}
        <StepperComponent
          steps={steps}
          currentStep={currentStep}
          showNumber={false}
          onNext={handleNextStep}
          onPrevious={handlePrevStep}
          activeStep={currentStep}
        />
        {steps[currentStep].content}
      </div>
    </>
  );
}

const stepOneValidationSchema = Yup.object({
  first_name: Yup.string().required().label('First Name'),
  last_name: Yup.string().required().label('Last Name'),
  gender: Yup.string().required('Gender is required'),
  country: Yup.string().required('Country is required')
});

const StepOne = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };

  return (
    <Formik
      validationSchema={stepOneValidationSchema}
      initialValues={props.data}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form>
          <p>First Name</p>
          <Field name="first_name" />
          <ErrorMessage name="first_name" />

          <p>Last Name</p>
          <Field name="last_name" />
          <ErrorMessage name="last_name" />

          <p>Gender</p>
          <div role="group" aria-labelledby="gender-label">
            <label id="gender-label">
              <Field type="radio" name="gender" value="male" />
              Male
            </label>
            <label>
              <Field type="radio" name="gender" value="female" />
              Female
            </label>
          </div>
          <ErrorMessage name="gender" />

          <p>Country</p>
          <Field name="country" as="select">
            <option value="" label="Select a country" />
            <option value="us" label="United States" />
            <option value="ca" label="Canada" />
            <option value="uk" label="United Kingdom" />
          </Field>
          <ErrorMessage name="country" />

          <button
            type="submit"
            onClick={() => props.next(values)}
            disabled={!stepOneValidationSchema.isValidSync(values)}
          >
            Next
          </button>
        </Form>
      )}
    </Formik>
  );
};

const stepTwoValidationSchema = Yup.object({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().label('Password'),
  preExperience: Yup.boolean()
    .oneOf([true, false], 'You must Choose an option')
    .required('You must Choose an option')
});

const StepTwo = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
    if (values.preExperience === 'false') {
      props.next({ preExperience: false, ...values });
    }
    if (values.preExperience === 'true') {
      props.next({ preExperience: true, ...values });
    }
  };

  return (
    <Formik
      validationSchema={stepTwoValidationSchema}
      initialValues={props.data}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form>
          <p>Email</p>
          <Field name="email" />
          <ErrorMessage name="email" />

          <p>Password</p>
          <Field name="password" />
          <ErrorMessage name="password" />

          <p>do u have pre exp ?</p>
          <div role="group" aria-labelledby="terms-label">
            <label id="terms-label">
              <Field type="radio" name="preExperience" value="true" />
              Yes
            </label>
            <label>
              <Field type="radio" name="preExperience" value="false" />
              No
            </label>
          </div>
          <ErrorMessage name="preExperience" />

          {values.preExperience === 'true' && (
            <>
              <p>Additional Information</p>
              <div>
                <label htmlFor="info1">Info 1</label>
                <Field type="text" name="info1" />
                <ErrorMessage name="info1" />
              </div>
              <div>
                <label htmlFor="info2">Info 2</label>
                <Field type="text" name="info2" />
                <ErrorMessage name="info2" />
              </div>
              <div>
                <label htmlFor="info3">Info 3</label>
                <Field type="text" name="info3" />
                <ErrorMessage name="info3" />
              </div>
            </>
          )}

          <button type="button" onClick={() => props.prev(values)}>
            Back
          </button>
          <button
            type="submit"
            onClick={() => props.next(values)}
            disabled={!stepTwoValidationSchema.isValidSync(values)}
          >
            Next
          </button>
        </Form>
      )}
    </Formik>
  );
};

const stepThreeValidationSchema = Yup.object({
  numberOfYears: Yup.number().required().label('numberOfYears are required'),
  specificDate: Yup.string().required().label('Date is Requierd'),
  rangeStartDate: Yup.string().required().label('Start Date is Requierd'),
  rangeEndDate: Yup.string().required().label('End Date is Requierd')
});

const StepThree = (props) => {
  const handleSubmit = (values) => {
    const parsedValues = {
      ...values,
      numberOfYears: parseInt(values.numberOfYears, 10)
    };

    props.next(parsedValues);
    // props.next(values, true);
  };
  return (
    <Formik
      validationSchema={stepThreeValidationSchema}
      initialValues={props.data}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue }) => (
        <Form>
          <p>Country</p>
          <Field name="numberOfYears" as="select">
            <option value="" label="Select nuber of years" />
            <option value={1} label="1" />
            <option value={2} label="2" />
            <option value={3} label="3" />
            {/* Add more countries */}
          </Field>
          <ErrorMessage name="numberOfYears" />

          <p>Specific Date</p>
          {/* <ReactDatePicker
            selected={values.specificDate}
            onChange={(date) => setFieldValue('specificDate', date)}
            dateFormat="MM/dd/yyyy"
          /> */}
          <ErrorMessage name="specificDate" />

          <p>Date Range</p>
          <div>
            {/* <ReactDatePicker
              selected={values.rangeStartDate}
              onChange={(date) => setFieldValue('rangeStartDate', date)}
              selectsStart
              startDate={values.rangeStartDate}
              endDate={values.rangeEndDate}
              dateFormat="MM/dd/yyyy"
            /> */}
            <ErrorMessage name="rangeStartDate" />
            {/* <ReactDatePicker
              selected={values.rangeEndDate}
              onChange={(date) => setFieldValue('rangeEndDate', date)}
              selectsEnd
              startDate={values.rangeStartDate}
              endDate={values.rangeEndDate}
              minDate={values.rangeStartDate}
              dateFormat="MM/dd/yyyy"
            /> */}
            <ErrorMessage name="rangeEndDate" />
          </div>

          <button type="button" onClick={() => props.prev(values)}>
            Back
          </button>
          {/* <button
            type="submit"
            disabled={!stepThreeValidationSchema.isValidSync(values)}
          >
            Submit
          </button> */}
          <button
            type="submit"
            onClick={() => props.next(values)}
            disabled={!stepThreeValidationSchema.isValidSync(values)}
          >
            Next
          </button>
        </Form>
      )}
    </Formik>
  );
};

const stepFourValidationSchema = Yup.object({
  educationBackground: Yup.array().of(
    Yup.object().shape({
      type: Yup.string().required('Education Type Is Required'),
      entityName: Yup.string().required('Entity Name Is Required'),
      grade: Yup.string().required('Grade Is Required'),
      gradeFromYr: Yup.string().required('Start Date Is Required'),
      gradeToYr: Yup.string().required('End Date Is Required'),
      details: Yup.string().required('details Are Required')
    })
  )
});

const StepFour = (props) => {
  const handleSubmit = (values) => {
    props.next(values, true);
  };

  return (
    <Formik
      validationSchema={stepFourValidationSchema}
      initialValues={props.data}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue }) => (
        <Form>
          <FieldArray name="educationBackground">
            {({ insert, remove, push }) => (
              <div>
                {values.educationBackground.length > 0 &&
                  values.educationBackground.map((edu, index) => (
                    <div className="row" key={index}>
                      <div className="col">
                        <label htmlFor={`educationBackground.${index}.type`}>
                          Type
                        </label>
                        <Field
                          name={`educationBackground.${index}.type`}
                          type="text"
                        />
                        <ErrorMessage
                          name={`educationBackground.${index}.type`}
                        />
                      </div>
                      <div className="col">
                        <label
                          htmlFor={`educationBackground.${index}.entityName`}
                        >
                          Entity Name
                        </label>
                        <Field
                          name={`educationBackground.${index}.entityName`}
                          type="text"
                        />
                        <ErrorMessage name={`friends.${index}.entityName`} />
                      </div>
                      <div className="col">
                        <label htmlFor={`educationBackground.${index}.grade`}>
                          Grade
                        </label>
                        <Field
                          name={`educationBackground.${index}.grade`}
                          type="text"
                        />
                        <ErrorMessage
                          name={`educationBackground.${index}.grade`}
                        />
                      </div>
                      <div>
                        {/* <ReactDatePicker
                          selected={
                            values.educationBackground[index].gradeFromYr
                          }
                          onChange={(date) =>
                            setFieldValue(
                              `educationBackground.${index}.gradeFromYr`,
                              date
                            )
                          }
                          selectsStart
                          startDate={
                            values.educationBackground[index].gradeFromYr
                          }
                          endDate={values.educationBackground[index].gradeToYr}
                          dateFormat="MM/dd/yyyy"
                        /> */}
                        <ErrorMessage
                          name={`educationBackground.${index}.gradeFromYr`}
                        />

                        {/* <ReactDatePicker
                          selected={values.educationBackground[index].gradeToYr}
                          onChange={(date) =>
                            setFieldValue(
                              `educationBackground.${index}.gradeToYr`,
                              date
                            )
                          }
                          selectsEnd
                          startDate={
                            values.educationBackground[index].gradeFromYr
                          }
                          endDate={values.educationBackground[index].gradeToYr}
                          minDate={
                            values.educationBackground[index].gradeFromYr
                          }
                          dateFormat="MM/dd/yyyy"
                        /> */}
                        <ErrorMessage
                          name={`educationBackground.${index}.gradeToYr`}
                        />
                      </div>
                      <div className="col">
                        <label htmlFor={`educationBackground.${index}.details`}>
                          details
                        </label>
                        <Field
                          name={`educationBackground.${index}.details`}
                          type="text"
                        />
                        <ErrorMessage
                          name={`educationBackground.${index}.details`}
                        />
                      </div>
                      <div className="col">
                        {index > 0 && (
                          <button
                            type="button"
                            className="secondary"
                            onClick={() => remove(index)}
                          >
                            Remove
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                <button
                  type="button"
                  className="secondary"
                  onClick={() =>
                    push({
                      type: '',
                      entityName: '',
                      grade: '',
                      gradeFromYr: null,
                      gradeToYr: null,
                      details: ''
                    })
                  }
                >
                  Add Education
                </button>
              </div>
            )}
          </FieldArray>
          <button type="button" onClick={() => props.prev(values)}>
            Back
          </button>
          <button
            type="submit"
            disabled={!stepFourValidationSchema.isValidSync(values)}
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};
