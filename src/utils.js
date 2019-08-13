const toBase64 = (file) => new Promise((resolve, reject) => {
	const reader = new FileReader();
	reader.readAsDataURL(file);
	reader.onload = () => resolve(reader.result);
	reader.onerror = error => reject(error);
});

const downloadURI = (uri, name) => {
	const link = document.createElement('a');
	link.style = "display: none";
	link.download = name;
	link.href = uri;
	document.body.appendChild(link);
	link.click();
	window.URL.revokeObjectURL(link);
	document.body.removeChild(link);
};

export{
	toBase64,
	downloadURI
}