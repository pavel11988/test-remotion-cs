import {Img} from 'remotion';
import React from 'react';

const Image: React.FC = () => {
	return (
		<div>
			<Img src={require('./public/assets/test_mechanic.png')} />
		</div>
	);
};

export default Image;
