import React, { useRef, useState } from 'react';
import './Video.css';

function Video() {
	const [ playing, setPlaying ] = useState(false);
	const videoRef = useRef(null);

	const handleVideoPress = () => {
		if (playing) {
			videoRef.current.pause();
			setPlaying(false);
		} else {
			videoRef.current.play();
			setPlaying(true);
		}
	};

	return (
		<div className="video">
			<video
				onClick={handleVideoPress}
				ref={videoRef}
				loop
				className="video__player"
				src="http://techslides.com/demos/sample-videos/small.webm"
			/>
		</div>
	);
}

export default Video;
