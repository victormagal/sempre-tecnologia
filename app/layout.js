'use client';
import { client } from './graphql/config';
import { ApolloProvider } from '@apollo/client';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ApolloProvider client={client}>{children}</ApolloProvider>
      </body>
    </html>
  );
}
