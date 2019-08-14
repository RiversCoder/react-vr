import React, { useState, useEffect } from 'react';
import { View } from 'react-vr'
import Button from './Button.js'

function UI({ buttonConfig, onClick }) {

    const [buttons, setButtons] = useState([])

    useEffect(()=>{
        setButtons(buttonConfig)
    })

    const buttonBoxs = buttons.map((button) =>
        <Button
            key={button.key}
            onClick={()=>{
                onClick(button.key);
            }}
            src={button.buttonImageSrc}
        />
    );

    return (
        <View
            style={
              { flexDirection:'row', flexWrap: 'wrap', transform: [
                  { roateX: -12, translate: [-1.5, 0, -3] }
              ], width: 3 }  
            }
        >
            { buttonBoxs }    
        </View>
    )
}

export default UI
