import './plugin/HlsQualitySelectorPlugin';
import './plugin/Countdown';
import React from 'react';
import videojs from 'video.js';

export default class VideoPlayer extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // instantiate Video.js
    window.VIDEOJS_NO_DYNAMIC_STYLE = true;
    const videoJsOptions = {
      controls: true,
      sources: [{
        src: this.props.source,
      }],
      poster: this.props.poster
    }
    this.player = videojs(this.videoNode, videoJsOptions, function onPlayerReady() {
      // console.log('onPlayerReady', this)
      this.addClass('tt-vplayer')
      this.countdown()
      this.hlsQualitySelector()
    });
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.off('loadstart')
      this.player.countdown().dispose()
      this.player.hlsQualitySelector().dispose()
      this.player.dispose();
    }
  }

  // wrap the player in a div with a `data-vjs-player` attribute
  // so videojs won't create additional wrapper in the DOM
  // see https://github.com/videojs/video.js/pull/3856
  render() {
    return (
      <video ref={node => this.videoNode = node} className="video-js"
             data-m3u8={this.props.source} />
    )
  }
}