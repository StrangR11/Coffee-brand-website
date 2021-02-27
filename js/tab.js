var tabNavs = document.querySelectorAll(".giftset__item");
var tabPanes = document.querySelectorAll(".giftset__pane");
for (var i = 0; i < tabNavs.length; i++) {
	tabNavs[i].addEventListener("click", function (e) {
		e.preventDefault();
		var activeTabAttr = e.target.getAttribute("data-tab");
		for (var j = 0; j < tabNavs.length; j++) {
			var contentAttr = tabPanes[j].getAttribute("data-tab-content");
			if (activeTabAttr === contentAttr) {
				tabNavs[j].classList.add("_active");
				tabPanes[j].classList.add("_active");
			} else {
				tabNavs[j].classList.remove("_active");
				tabPanes[j].classList.remove("_active");
			}
		};
	});
}