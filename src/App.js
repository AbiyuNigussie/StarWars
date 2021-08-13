import React from 'react';
import NavBar from  "./components/NavBar";
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Routes from './Routes';

const queryClient = new QueryClient();

function App() {
  return (
    <>
    <QueryClientProvider client = {queryClient}>
      <Router>
        <div className="App">
          <header className="App-header">
            <h1>STAR WARS</h1>        
          </header>          
          <NavBar></NavBar>      
          <Switch>    
            <Routes/>
          </Switch>        
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </Router>
    </QueryClientProvider>
    </>
  );
}

export default App;
