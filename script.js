function firstChar(text) {
  // your code here
	let abc=text.trim();
	if(abc.length==0)  return '';
	return abc[0];
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
