import {Route } from 'react-router-dom';
import Planets from "./components/Planets";
import People from "./components/People";

const Routes = () => {
    return (
        <>
            <Route path="/" exact component={Planets}></Route>
            <Route path="/Planets" component={Planets}></Route>
            <Route path="/People" component={People}></Route> 
        </> 
    );
}

export default Routes;
