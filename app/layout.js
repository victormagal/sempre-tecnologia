'use client';
import { Footer, Header, Locations } from './components/Foundation';
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
          <Locations />
          <Footer />
        </ApolloProvider>
      </body>
    </html>
  );
}
