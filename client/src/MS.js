import React from 'react';
import {Add} from './Add.js';
import {Home} from './Home.js';
import {News} from './News.js';
export class MS extends React.Component {
    render(){
    return (
      <div className="App">
        <div>
         <Home/>
        </div>
       
        <div>
            <p>
                <br/><br/><br/><br/><br/><br/>
            </p>
        </div>
        <div>
          <Add/>
        </div>
        <div>
            <p>
                <br/><br/><br/><br/><br/><br/>
            </p>
        </div>
       <div className='button'>
      
       <News/>
       </div>
       <div>
            <p>
                <br/><br/><br/><br/><br/><br/>
            </p>
        </div>
      </div>
      
    );
  }
}
  
  export default MS;
  
