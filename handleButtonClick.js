function handleButtonClick (buttonId, message){
	const button = document.getElementById(buttonId);
	if(!button){
		console.warn(`Button with ID '${buttonId}' undefined.`);
		return;
	}
	button.addEventListener('click', () => {
		console.log(message)
	})
}
export default handleButtonClick;
