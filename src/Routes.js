import {Route } from 'react-router-dom';
import Planets from "./components/Planets";
import People from "./components/People";
import Species from "./components/Species";
import Starships from "./components/Starships";
const Routes = () => {
    return (
        <>
            <Route path="/" exact component={Planets}></Route>
            <Route path="/Planets" component={Planets}></Route>
            <Route path="/People" component={People}></Route> 
            <Route path="/Species" component={Species}></Route>
            <Route path="/Starships" component={Starships}></Route> 

        </> 
    );
}

export default Routes;
