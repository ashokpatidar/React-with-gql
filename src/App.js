import React, { Component } from 'react';
// import {ApolloClient}  from 'apollo-boost';
import logo from './logo.svg';
import './App.css';
import Courses from './Courses';



import ApolloClient from "apollo-boost";
import {ApolloProvider} from 'react-apollo';

const client = new ApolloClient({
  uri: "https://vm8mjvrnv3.lp.gql.zone/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
    <div className="container">
    <img src={logo} className="App-logo" alt="logo" />
      
      <nav className='navbar navbar-dark bg-primary'>
      <a className='navbar-brand'>My first React Apollo App 🚀</a>
      </nav>
      <Courses/>
      
    </div>
  </ApolloProvider>
);



// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

export default App;
