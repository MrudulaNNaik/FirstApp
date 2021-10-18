import AnalogClock from 'react-native-analog-clock';
import React from 'react';

const Time = () => { 

    

        return (

            <AnalogClock

            style={{

                width: 150,

                height: 150

            }}

            onTimeChange={

                ({ hours, minutes, seconds }) => console.log(`time is now : ${hours}:${minutes}:${seconds}`)

            }

        />

    );

}



export default Time;