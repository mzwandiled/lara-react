import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import RenderName from "./RenderName";
class App extends  Component{
    constructor(props) {
        super(props);
        this.state = {
            names:['Mzwandile','Lucy','Lloyd','Phumzile','Fana']
        }
    }
    render() {
         const names = this.state.names.map((name)=>{
             return <RenderName name={name} key={name} />
         })
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Example Component</div>

                            <div className="card-body">{names}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
