import React from 'react'
import { appData } from '../config/data';

export default function InfoVideo(props) {
const { selected } = props;
    console.log(appData[selected]);




    return (
        <div>
            This is for Video.
        </div>
    )
}

// update youtube video