document.addEventListener("contextmenu", handleContextEvent, false);

function handleContextEvent(evt) {
	var userInfo, link = evt.target;;
	if(link.nodeType == 3) {
		link = link.parentNode;
	}
	if(link.nodeType != 1) {
		return;
	}
	
	while(link != null && link.nodeName.toLowerCase() != "a") {
		link = link.parentNode;
	}
	if(link && link.href && link.href.match(/^http/)) {
		userInfo = { type: "link", url: link.href }
	}
	else {
		userInfo = { type: "page", url: window.location.href }
	}
    safari.self.tab.setContextMenuEventUserInfo(evt, userInfo);
}