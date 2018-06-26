(() => {
	const script = document.createElement("script");
	script.src = "https://cdnjs.cloudflare.com/ajax/libs/chroma-js/1.3.7/chroma.min.js";
	document.head.appendChild(script);

	const scale = chroma.scale(["red", "orange", "yellow", "lime", "cyan", "mediumpurple", "red"]).colors(1000);
	let index = 0;

	src.addEventListener("load", () => {
    setInterval(() => {
      index += 1;
      if (index > scale.length) {
        index = 0;
          }

      input.execute(`net_replace_color 2 ${"0x" + scale[index].substr(1, Infinity)}`);
      });
      });
})();
