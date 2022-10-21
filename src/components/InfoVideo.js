import React, { useState, memo } from 'react'
import { appData, YOUTUBE_API_KEY } from '../config/data';

import YouTube from 'react-youtube';

function InfoVideo({ selected }) {
    const [youtubeVideos, setYoutubeVideos] = useState([]);
    const selectedData = appData[selected];
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    }

    const getYoutubeId = async (youtubeVideoTitle) => {
      await fetch(`https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&maxResults=1&type=video&part=snippet&q=${youtubeVideoTitle}`)
        .then((result) => {
          return result.json()
        }).then(({ items }) => {
          if (items){
            setYoutubeVideos([...videos, <YouTube className="container-video" videoId={items[0]?.id?.videoId} opts={opts} onReady={onReady} />]);
          }
        });
    }

    const onReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

    const videos = [];
    if (selectedData?.youtubeVideoTitles) {
      selectedData.youtubeVideoTitles.forEach((youtubeVideoTitle) => {
        getYoutubeId(youtubeVideoTitle)
      });
      return youtubeVideos;
    } else if (selectedData?.videoIds) {
        selectedData.videoIds.forEach((videoId) => {
          videos.push(<YouTube className="container-video" videoId={videoId} opts={opts} onReady={onReady} />);
      });
      return videos;
    }
}

export default memo(InfoVideo);