import {spring} from 'remotion';
import {useCurrentFrame, useVideoConfig} from 'remotion';
import {Img, interpolate} from 'remotion';
import React from 'react';

const Info: React.FC = () => {
	const frame = useCurrentFrame();
	const {height, fps} = useVideoConfig();

	const entrance = spring({
		fps,
		frame,
		config: {
			damping: 200,
		},
		durationInFrames: 30,
	});

	const entranceOffset = interpolate(entrance, [0, 1], [height, 0]);

	return (
		<div style={{transform: `translateY(${entranceOffset}px)`}}>
			<Img src={require('./public/assets/test_container.png')} />
		</div>
	);
};

export default Info;
