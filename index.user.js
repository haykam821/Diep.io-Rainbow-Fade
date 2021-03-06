// ==UserScript==
// @name         Diep.io Rainbow Fade
// @namespace    https://github.com/haykam821/Diep.io-Rainbow-Fade
// @supportURL   https://github.com/haykam821/Diep.io-Rainbow-Fade/issues
// @version      1.0.0
// @description  Allows you to have a tank that fades through a rainbow.
// @author       haykam821
// @match        http*://diep.io/
// @grant        none
// ==/UserScript==

(() => {
	const script = document.createElement("script");
	script.src = "https://cdnjs.cloudflare.com/ajax/libs/chroma-js/1.3.7/chroma.min.js";
	document.head.append(script);

	script.addEventListener("load", () => {
		const scale = chroma.scale(["red", "orange", "yellow", "lime", "cyan", "mediumpurple", "red"]).colors(1000);
		let index = 0;

		setInterval(() => {
			index += 1;
			if (index > scale.length) {
				index = 0;
			}

			input.execute(`net_replace_color 2 ${"0x" + scale[index].slice(1)}`);
		});
	});
})();
