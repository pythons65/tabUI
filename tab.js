
let index = 2;
let tabArea = document.querySelector(".mainArea .tabs")


function tabHtml(tabName){
	let html = `
	    <div class="tab" data-content="c${index}">${tabName}</div>
	`
	index++;
	return html
}

function tabContent(){
	let html = `
    <div data-viewIndex="back" class="content c${index - 1}">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quo, officia illo recusandae in, cumque, facere consequuntur eum vitae magni vero quidem? Quisquam, natus nobis.</p>
      <input type="text">
    </div>
	`
	return html
}

function setupTab(tabName){
 	let elt = tabHtml(tabName)
 	tabArea.innerHTML = tabArea.innerHTML + elt
 	setup()
 	updateActiveTabPosition()

 	let content = tabContent()
 	let contentArea = document.querySelector(".contentArea");
 	contentArea.innerHTML = contentArea.innerHTML + content
}

 function addTab(tabName){
 	if(!tabName){
 		tabName = "tab"+index
 	}
 	setupTab(tabName)
 	changeTab(index - 1)
}
