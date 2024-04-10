import { gql } from '@apollo/client';

const sendMail = gql`
  mutation (
    $name: String!
    $mail: String!
    $phone: String!
    $message: String!
  ) {
    createContato(
      data: { name: $name, mail: $mail, phone: $phone, message: $message }
    ) {
      data {
        attributes {
          name
          mail
          phone
          message
        }
      }
    }
  }
`;

const sendMailSupport = gql`
  mutation (
    $name: String!
    $mail: String!
    $phone: String!
    $message: String!
  ) {
    createSuporte(
      data: { name: $name, mail: $mail, phone: $phone, message: $message }
    ) {
      data {
        attributes {
          name
          mail
          phone
          message
        }
      }
    }
  }
`;

export { sendMail, sendMailSupport };
