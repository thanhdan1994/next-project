import React, { Component } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css'

export default class VideoPlayer extends Component {
    componentDidMount() {
        // instantiate Video.js
        this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
            console.log('onPlayerReady', this)
        });
    }

    // destroy player on unmount
    componentWillUnmount() {
        if (this.player) {
            this.player.dispose()
        }
    }

    // wrap the player in a div with a `data-vjs-player` attribute
    // so videojs won't create additional wrapper in the DOM
    // see https://github.com/videojs/video.js/pull/3856
    render() {
        return (
                <div className="inner-media">
                    <div className="video-wrap">
                        <div className="video">
                            <div style={{ backgroundColor: '#f6f6f6' }} className="media-content">
                                <video ref={node => this.videoNode = node}>
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}