import React, {Component} from 'react';
import axios from 'axios'; 


class GetData extends Component{

    componentDidMount(){
        this.getData();
        this.getBetter();
    }
    
    async getData(){
        const response = await axios.get('/api/get-data');

        console.log("Response:", response);
    }

    async getBetter(){
        const response = await axios.get('/api/better-stuff');

        console.log("Better Response:", response);
    }

    render(){
        return (
            <div>
                <h1>This is get data!</h1>
            </div>
        )
    }
}

export default GetData; 