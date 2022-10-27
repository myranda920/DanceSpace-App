import React, { useState } from 'react'
import { appData } from '../config/data';
import { YOUTUBE_API_KEY } from '../config/data';

import YouTube from 'react-youtube';

function InfoVideo({ selected }) {
  const [youtubeVideos, setYoutubeVideos] = useState([])
  const [selectedVideos, setSelectedVideos] = useState([])
  const [lastSelected, setLastSelected] = useState('')

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
        }).then((data) => {
          setYoutubeVideos([...youtubeVideos, <YouTube className="container-video" videoId={'077BgT3h6As'} opts={opts} onReady={onReady} />]);
          setLastSelected(selected);
        });
    }

    const onReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

    if (selectedData?.youtubeVideoTitles) {
      if (selected === lastSelected) return youtubeVideos;

      selectedData.youtubeVideoTitles.forEach((youtubeVideoTitle) => {
        getYoutubeId(youtubeVideoTitle)
        console.log('api called');
      });

      return youtubeVideos;
    } else if (selectedData?.videoIds) {
      console.log('rendered 2')
      if (selected === lastSelected) return selectedVideos;

      const results = []
      selectedData.videoIds.map((videoId) => {
        results.push(<YouTube className="container-video" videoId={videoId} opts={opts} onReady={onReady} />); 
      });

      setSelectedVideos(results);
      setLastSelected(selected);
      return results;
    }
}

export default InfoVideo;



// to improve performance

// comment out api call

// youtubevideos, selectedvideos - merge selectedVideos and lastSelected into a nested state object 

// const [data, setData] = React.useState({ response: {}, selected: '' });

// const [youtubeVideos, setYoutubeVideos] = useState([])
// const [selectedVideos, setSelectedVideos] = useState([])
// const [lastSelected, setLastSelected] = useState('')
