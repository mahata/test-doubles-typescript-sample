const appElement = document.getElementById("#app");

if (!appElement) {
	throw new Error("Failed to find the app element.");
}

appElement.innerHTML = "<div>Hello, world!</div>";
