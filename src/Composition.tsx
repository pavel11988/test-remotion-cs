import {AbsoluteFill} from 'remotion';
import Image from './Image';
import Info from './Info';

export const MyComposition = () => {
	return (
		<AbsoluteFill className="bg-gray-100 items-center justify-beetween">
			<Image />
			<Info />
		</AbsoluteFill>
	);
};
