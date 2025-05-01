function trackMousePosition(){
	document.addEventListener('mousemove', function(event){
		const x = event.clientX;
		const y = event.clientY;
		console.log(`Mouse X: ${x}, Mouse Y: ${y}`);
	});
}

export default trackMousePosition;