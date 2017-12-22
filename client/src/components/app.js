import React from 'react';
import { Link, Route} from 'react-router-dom';
import Home from './home';
import GetData from './get_data';

const App = () => (
    <div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/mickey-mouse">Mickey Mouse</Link></li>
        </ul>

        <Route exact path="/" component={Home}/>
        <Route path="/mickey-mouse" component={GetData}/>
    </div>
);

export default App;
