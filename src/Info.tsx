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
		<div
			style={{transform: `translateY(${entranceOffset}px)`}}
			className="absolute bottom-0 bg-orange-600 w-[669px] h-[223px] px-10"
		>
			<p className=" text-white text-4xl pt-10 mb-6">
				South pacific mechanics are looking for{' '}
				<span className="text-black">Diesel Mechanics</span> across Aotearoa
			</p>
			<p className="text-white text-2xl ">tradejobs.nz</p>
		</div>
	);
};

export default Info;
