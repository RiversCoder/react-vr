import React, { Component } from 'react';
import { asset, Image, View, VrButton } from 'react-vr'

class Button extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return (
            <View
                style={ {
                    alignItems: 'center',
                    flexDirection: 'row',
                    margin: 0.0125,
                    width: 0.7
                } }
            >
                <VrButton onClick={ onClick() }>
                    <Image 
                        style={ {width:0.7,height:0.7} }
                        source={asset(this.props.src)} 
                    ></Image>
                </VrButton>
            </View>
        )
    }
}

export default Button
