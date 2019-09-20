(function (){
	const copy = function(copyText){
		let textArea = document.createElement("textarea")
		
		textArea.value = copyText

		document.body.appendChild(textArea)
		textArea.select()
		const isSuccess = document.execCommand("copy")
		textArea.blur()
		document.body.removeChild(textArea)
		return isSuccess
	}

	if(!copy(encodeURI(decodeURI(location.href)))){
		alert("fail to copy")
	}
})()
