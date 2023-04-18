'use client';
import { Footer, Header } from './components/Foundation';
import { client } from './graphql/config';
import { ApolloProvider } from '@apollo/client';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ApolloProvider client={client}>
          <Header />
          {children}
          <Footer />
        </ApolloProvider>
      </body>
    </html>
  );
}
