import React, { useState } from 'react';
import NavBar from  "./components/NavBar";
import Planets from "./components/Planets";
import People from "./components/People";
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const queryClient = new QueryClient();

function App() {

  const [page, setPage] = useState('people');


  return (
    <>
    <QueryClientProvider client = {queryClient}>
      <Router>
        <div className="App">
          <header className="App-header">
            <h1>STAR WARS</h1>        
          </header>
          <NavBar setPage={setPage}></NavBar>
          <Switch>
            {page === 'planets' ? 
                <Route path="/Planets" component={Planets}></Route>
                : 
                <Route path="/People" component={People}></Route>
            }
          </Switch>
          <div>
            
          </div>
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </Router>
    </QueryClientProvider>
    </>
  );
}

export default App;
