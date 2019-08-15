import React, { Component } from 'react';
import { View } from 'react-vr'
import Button from './Button.js'

class UI extends Component {

    constructor(props){
        super(props);
        this.buttons = this.props.buttonConfig;
    }

    render(){
        const buttonBoxs = this.buttons.map((button) =>
            <Button
                key={button.key}
                onClick={()=>{
                    this.props.onClick(button.key);
                }}
                src={button.buttonImageSrc}
            />
        );

        return (
            <View
                style={
                  { flexDirection:'row', flexWrap: 'wrap', transform: [
                      { rotateX: -12},{ translate:[-1.5, 0, -5] }
                  ], width: 3 }  
                }
            >
            { buttonBoxs }
            </View>
        )
    }

    
}

export default UI;
