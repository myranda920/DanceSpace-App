import React from 'react'
import { appData } from '../config/data';

import YouTube from 'react-youtube';

export default function InfoVideo(props) {
    const { selected } = props;
    const selectedData = appData[selected];
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    }

    const onReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
    const videos = [];
    if (selectedData?.videoIds) {
        selectedData.videoIds.forEach((videoId) => {
            // you can push extra divs inside to style
           videos.push(<YouTube videoId={videoId} opts={opts} onReady={onReady} />);
        });
        return videos;
    }
}