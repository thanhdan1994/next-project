import React, { Component } from 'react';

export default class VideoJsPlayer extends Component {
    componentDidMount() {
        var player = document.createElement('script');
        player.src = '/static/js/playerInit.js';
        player.async = true;
        document.body.appendChild(player);
        // var countDown = document.createElement('script');
        // countDown.src = '/static/js/scrollCountDownPlugin.js';
        // countDown.async = true;
        // document.body.appendChild(countDown)
    }
    
    render() {
        return (
            <div className="inner-media">
                <div className="video-wrap">
                    <div className="video">
                        <div style={{ backgroundColor: '#f6f6f6' }} className="media-content">
                            <div className="tt-vplayer-content">
                                <video id={`ttplayer_${this.props.idVideo}`}
                                    className="tt-vplayer video-js tt-vplayer-visibility"
                                    style={{ width: '100%' }}
                                    poster={this.props.poster}
                                    data-vid={this.props.src} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}