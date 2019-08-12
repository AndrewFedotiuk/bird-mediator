import {Image} from "react-konva";
import PlaceholderImage from "../placeholder-image";
import React from "react";

const imageComponent = (file, size, width, height, imageX, imageY, onDragEnd) => {
	if (file) {
		const sizeHandler = (imageWidth, imageHeight, width, height) => {
			const [wCoef, hCoef] = [width / imageWidth, height / imageHeight];
			const condition = imageWidth >= imageHeight;

			return {
				imageWidth: condition ? imageWidth * hCoef : width,
				imageHeight: condition ? height : imageHeight * wCoef,
				condition
			}
		};

		const imageSizes = sizeHandler(file.width, file.height, width, height);
		return <Image
			x={imageX}
			y={imageY}
			image={file.image}
			width={imageSizes.imageWidth}
			height={imageSizes.imageHeight}
			draggable
			onDragEnd={onDragEnd}
			dragBoundFunc={(pos) => {
				return imageSizes.condition ? {x: pos.x, y: 0} : {x: 0, y: pos.y}
			}}
		/>;

	} else {
		return (<PlaceholderImage size={size}/>)
	}
};

export default imageComponent;