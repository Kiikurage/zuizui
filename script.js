var ImagePath = "src.png",

	$text = document.querySelector("#text"),
	$size = document.querySelector("#size"),
	$btnUpdate = document.querySelector("#btnUpdate"),
	$btnSend = document.querySelector("#btnSend"),
	$canvas = document.querySelector("canvas"),

	img = new Image();

function init() {
	img.src = ImagePath;
	img.onload = update;
}

function update() {
	var ctx = $canvas.getContext('2d');
	ctx.width = 600;
	ctx.height = 800;

	ctx.drawImage(img, 0, 0);

	ctx.fillStyle = "#000";
	ctx.font = "" + $size.value + "px 'ＭＳ Ｐゴシック'";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	tategaki(ctx, $text.value, 420, 20, 600, 220);
}

function tategaki(context, text, x1, y1, x2, y2) {
	var textList = text.split('\n');
	var linecount = textList.length
	var lineHeight = context.measureText("あ").width;
	var offsetX = (x2 - x1 - linecount * lineHeight) / 2
	textList.forEach(function(elm, i) {
		Array.prototype.forEach.call(elm, function(ch, j) {
			context.fillText(ch, x1 + offsetX + (linecount - i - 1) * lineHeight, y1 + lineHeight * j);
		});
	});
};

function send() {
	var url = "https://twitter.com/intent/tweet",
		text = encodeURIComponent("ｽﾞｲ₍₍ (ง ˘ω˘ )ว ⁾⁾ｽﾞｲ"),
		media = encodeURIComponent($canvas.toDataURL("image/png").split(",")[1]);
}

window.addEventListener("load", init);
$btnUpdate.addEventListener("click", update);
// $btnSend.addEventListener("click", send);
