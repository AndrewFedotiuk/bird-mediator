import {Image} from "react-konva";
import PlaceholderImage from "../placeholder-image";
import React from "react";

const imageComponent = (file, size, width, height, imageX, imageY, onDragEnd) => {
	if (file) {
		const sizeHandler = (imageWidth, imageHeight, width, height) => {
			const [wCoef, hCoef] = [width / imageWidth, height / imageHeight];
			const absCof = wCoef > hCoef ? wCoef : hCoef;

			return {
				imageWidth: imageWidth * absCof,
				imageHeight: imageHeight * absCof
			}
		};

		const {imageWidth, imageHeight} = sizeHandler(file.width, file.height, width, height);
		return <Image
			x={imageX}
			y={imageY}
			image={file}
			width={imageWidth}
			height={imageHeight}
			draggable
			onDragEnd={onDragEnd}
			dragBoundFunc={(pos) => {
				return imageWidth >= imageHeight ? {x: pos.x, y: 0} : {x: 0, y: pos.y}
			}}
		/>;

	} else {
		return (<PlaceholderImage size={size}/>)
	}
};

export default imageComponent;