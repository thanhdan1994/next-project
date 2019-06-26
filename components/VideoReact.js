import "video-react/dist/video-react.css";
import { Player } from 'video-react';

export default props => {
    return (
        <div className="inner-media">
            <div className="video-wrap">
                <div className="video">
                    <div style={{ backgroundColor: '#f6f6f6' }} className="media-content">
                        <Player
                            id="ttplayer_8"
                            playsInline
                            poster={props.poster}
                            src={props.src}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};