import React from "react";
import useImage from "use-image";
import {Image} from "react-konva";

const PlaceholderImage = ({size}) => {
	const textBg = '2d2d2d';
	const textColor = 'fff';

	const [image] = useImage(`https://via.placeholder.com/${size}/${textBg}/${textColor}`);
	return <Image image={image} />;
};

export default PlaceholderImage;