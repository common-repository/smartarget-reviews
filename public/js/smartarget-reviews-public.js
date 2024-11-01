function init_reviews (hash)
{
	if (!hash)
	{
		return;
	}

	insertJs_reviews(hash);
}

function insertJs_reviews (hash)
{
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = `https://smartarget.online/loader.js?ver=${Math.random()}&u=${hash}&source=wordpress_reviews`;
	document.head.appendChild(script);
}

init_reviews(smartarget_reviews_params.hash);
