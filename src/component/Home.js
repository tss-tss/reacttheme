import React from "react";
import { Button } from 'antd';
import { ConfigProvider } from 'antd';
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
      
    }
   changecolor(){
    ConfigProvider.config({
        theme: {
          primaryColor: 'red',
        },
      });
   }
    render() {
        return (
            <div>
                <Button type="primary" onClick={this.changecolor}>Button</Button>
            </div>
        );
    }
}

export default Home;