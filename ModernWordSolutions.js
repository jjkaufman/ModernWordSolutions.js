
function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;
    isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
}
function insertCanvas(dord){
    let width = dord.offsetWidth;
    let height = dord.getBoundingClientRect().height;
    let x = dord.getBoundingClientRect().left;
    let y = dord.getBoundingClientRect().top;

    var canvas = document.createElement("canvas");
    canvas.width = width * 2;

    dordStyle = window.getComputedStyle(dord);

    canvas.style.verticalAlign = "bottom";

    canvas.style.width = width + "px";
    canvas.height = height * 2;
    canvas.style.height = height + "px";
    canvas.classList.add("dord-canvas");
    canvas.dataset.text = dord.textContent;
    canvas.dataset.fontSize = dordStyle.fontSize;

    var size = dordStyle.fontSize;
    size = size.substring(0, size.length - 2);
    canvas.dataset.trueSize = size * 2;
    canvas.dataset.size = size;

    canvas.dataset.fontFamily = dordStyle.fontFamily;
    canvas.dataset.color = dordStyle.color;
    canvas.dataset.type = dord.dataset.dordType;

    dord.parentNode.insertBefore(canvas, dord);
    dord.style.display = "none";
    renderCanvas(canvas);
}
function insertCanvi() {
    var types = ["blinds", "bars", "neon", "water", "vanilla", "shrink", "grow", "explode", "curve", "spin", "art", "freedom", "punch", "wiggle", "surprise", "slam", "squeeze", "pulse", "goodbye", "cross", "luck", "ding", "fill", "spill", "subwoofer", "spotlight", "fire"];

    var dords = Array.from(document.getElementsByClassName("dord"))
        // add the custom html tag versions
        .concat(
            [].concat.apply([],
                types.map(type =>
                    //retieve each type
                    Array.from(document.getElementsByTagName(type))
                        //insert dordType into type element to make compatible 
                        .map(dord => { dord.dataset.dordType = type; return dord; })
                )));

    dords.forEach((dord) => {
        insertCanvas(dord);
    })

}
function renderCanvas(canvas){
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = canvas.dataset.color;

    const renderMap = {
        "art": renderArt,
        "freedom": renderFreedom,
        "punch": renderPunch,
        "wiggle": renderWiggle,
        "surprise": renderSurprise,
        "slam": renderSlam,
        "squeeze": renderSqueeze,
        "pulse": renderPulse,
        "goodbye": renderGoodbye,
        "cross": renderCross,
        "luck": renderLuck,
        "ding": renderDing,
        "fill": renderFill,
        "spill": renderSpill,
        "subwoofer": renderSubwoofer,
        "spotlight": renderSpotlight,
        "fire": renderFire,
        "water": renderWater,
        "neon": renderNeon,
        "bars": renderBars,
        "blinds": renderBlinds,
    }

    renderMap[canvas.dataset.type](canvas);
}

function renderArt(canvas) {
    var ctx = canvas.getContext("2d");
    var size = canvas.dataset.size;

    var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop("0", "#BA0D8D");
    gradient.addColorStop(1 / 5, "#E38B5E");
    gradient.addColorStop(2 / 5, "#FED227");
    gradient.addColorStop(3 / 5, "#66B32F");
    gradient.addColorStop(4 / 5, "#1944A0");
    gradient.addColorStop(5 / 5, "#4E25A9");
    ctx.fillStyle = gradient;
    ctx.shadowBlur = size / 9.6;
    ctx.shadowColor = "#C2C2C2";
    ctx.shadowOffsetX = -1 * size / 9.6;
    ctx.shadowOffsetY = -2 * size / 9.6;

    ctx.font = size * 2 + "px " + canvas.dataset.fontFamily;
    ctx.fillText(canvas.dataset.text, 0, size * 1.75);
}

function renderFreedom(canvas) {
    var ctx = canvas.getContext("2d");
    var size = canvas.dataset.size;

    ctx.font = size * 2 + "px " + canvas.dataset.fontFamily;
    ctx.fillText(canvas.dataset.text, size / 9.6, size * 1.75 + (size / 9.6));

    var gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop("0", "#99B1CD");
    gradient.addColorStop(1 / 3, "white");
    gradient.addColorStop(2 / 3, "#9B4A42");
    gradient.addColorStop(3 / 3, "#D1ACA9");
    ctx.fillStyle = gradient;
    ctx.fillText(canvas.dataset.text, 0, size * 1.75);
    ctx.fill();
}

function renderPunch(canvas) {
    var ctx = canvas.getContext("2d");
    var size = canvas.dataset.size;
    ctx.font = size * 2 + "px " + canvas.dataset.fontFamily;
    ctx.fillStyle = "#828DFB";
    ctx.fillText(canvas.dataset.text, 5, size * 1.75 + 5);
    var gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop("0", "#5C25BF");
    gradient.addColorStop(".75", "#A62CC1");
    ctx.fillStyle = gradient;
    ctx.fillText(canvas.dataset.text, 0, size * 1.75);
    ctx.fill();
}

function renderWiggle(canvas, frame = 0) {
    if(!document.body.contains(canvas)){
        return;
    }
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var size = canvas.dataset.size;
    let fontSize = size * 2;
    let text = canvas.dataset.text;
    var x = 0;
    for (i = 0; i < text.length; i++) {
        height = fontSize / 16;
        var y = (size * 1.75) + (Math.sin(((x + (frame)) * 1) * Math.PI / 180) * height);

        ctx.font = (fontSize) + "px " + canvas.dataset.fontFamily;
        ctx.fillText(text[i], x, y);
        x += (ctx.measureText(text[i]).width - (ctx.measureText(text).width / (text.length * 50)));
    }
    window.requestAnimationFrame(function () {
        frame++
        renderWiggle(canvas, frame);
    });
}

function renderSurprise(canvas, frame = 0) {
    if(!document.body.contains(canvas)){
        return;
    }
    if (!isScrolledIntoView(canvas)) {
        window.requestAnimationFrame(function () {
            frame = 0
            renderSurprise(canvas, frame);
        });
        return;
    }
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var size = canvas.dataset.size;
    let fontSize = size * 2;
    let text = canvas.dataset.text;
    var x = 0;
    for (i = 0; i < text.length; i++) {
        height = fontSize / 16;
        var y = Math.max(canvas.height * (i) - (i + 1) * frame, size * 1.75);

        ctx.font = (fontSize) + "px " + canvas.dataset.fontFamily;
        ctx.fillText(text[i], x, y);
        x += ctx.measureText(text[i]).width + (ctx.measureText(text).width / (text.length * 120));
    }
    window.requestAnimationFrame(function () {
        frame+=(canvas.width * (1/200))
        if (frame > canvas.width) {
            frame = 0
        }
        renderSurprise(canvas, frame);
    });
}

function renderSlam(canvas, frame = 0) {
    if(!document.body.contains(canvas)){
        return;
    }
    if (!isScrolledIntoView(canvas)) {
        window.requestAnimationFrame(function () {
            frame = 0
            renderSlam(canvas, frame);
        });
        return;
    }
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var size = canvas.dataset.size;
    let fontSize = size * 2;
    let text = canvas.dataset.text;
    var x = 0;
    for (i = 0; i < text.length; i++) {
        height = fontSize / 16;
        var newX = Math.min(-200 + (i + 5) * frame, x);
        ctx.font = (fontSize) + "px " + canvas.dataset.fontFamily;
        ctx.fillText(text[i], newX, size * 1.75);
        x += ctx.measureText(text[i]).width + (ctx.measureText(text).width / (text.length * 120));
    }
    window.requestAnimationFrame(function () {
        frame+=(canvas.width * (1/200))
        if (frame > canvas.width) {
            frame = 0
        }
        renderSlam(canvas, frame);
    });
}

function renderGoodbye(canvas, frame = 0) {
    if(!document.body.contains(canvas)){
        return;
    }
    if (!isScrolledIntoView(canvas)) {
        window.requestAnimationFrame(function () {
            frame = 0
            renderGoodbye(canvas, frame);
        });
        return;
    }
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var size = canvas.dataset.size;
    ctx.font = size * 2 + "px " + canvas.dataset.fontFamily;
    ctx.fillText(canvas.dataset.text, 0, size * 1.75);
    ctx.scale(1 - (Math.abs(frame) / 1000), 1 - (Math.abs(frame) / 1000));
    window.requestAnimationFrame(function () {
        if (frame > 60) {
            frame = 0;
            ctx.scale(43, 43);
        }
        frame += .5;
        renderGoodbye(canvas, frame);
    });
}

function renderPulse(canvas, frame = 0) {
    if(!document.body.contains(canvas)){
        return;
    }
    if (!isScrolledIntoView(canvas)) {
        window.requestAnimationFrame(function () {
            frame = 0
            renderPulse(canvas, frame);
        });
        return;
    }
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.scale(1 - (frame / 1000), 1 - (frame / 1000));
    var size = canvas.dataset.size;
    ctx.font = size * 2 + "px " + canvas.dataset.fontFamily;
    ctx.fillText(canvas.dataset.text, 0, size * 1.75);
    window.requestAnimationFrame(function () {
        if (frame > 5) {
            frame = -7;
        }
        frame++
        renderPulse(canvas, frame);
    });
}

function renderSqueeze(canvas, frame = 0) {
    if(!document.body.contains(canvas)){
        return;
    }
    if (!isScrolledIntoView(canvas)) {
        window.requestAnimationFrame(function () {
            frame = 0
            renderSqueeze(canvas, frame);
        });
        return;
    }
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.scale(1, 1 - (frame / 1000));
    var size = canvas.dataset.size;
    ctx.font = size * 2 + "px " + canvas.dataset.fontFamily;
    ctx.fillText(canvas.dataset.text, 0, size * 1.75);
    window.requestAnimationFrame(function () {
        if (frame > 50) {
            frame = -52.45;
        }
        frame++
        renderSqueeze(canvas, frame);
    });
}

function renderCross(canvas, frame = 0) {
    if(!document.body.contains(canvas)){
        return;
    }
    if (!isScrolledIntoView(canvas)) {
        window.requestAnimationFrame(function () {
            frame = 0
            renderCross(canvas, frame);
        });
        return;
    }
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var size = canvas.dataset.size;
    ctx.font = size * 2 + "px " + canvas.dataset.fontFamily;
    ctx.fillText(canvas.dataset.text, 0, size * 1.75);
    ctx.beginPath();
    ctx.moveTo(0, canvas.height * .55);
    ctx.lineWidth = canvas.height / 15;
    ctx.lineTo(Math.min(frame, canvas.width), canvas.height * .55 - (canvas.height * .05 * (Math.min(frame, canvas.width) / canvas.width)));
    ctx.strokeStyle = "red";
    ctx.stroke();
    window.requestAnimationFrame(function () {
        frame += canvas.width / 30
        if (frame > canvas.width) {
            setTimeout(function () {
                frame = 0;
                renderCross(canvas, frame);
            }, 2000);
        }
        else {
            renderCross(canvas, frame);
        }
    });
}

function renderLuck(canvas, frame = 0, iteration = 0, slots = []) {
    if(!document.body.contains(canvas)){
        return;
    }
    var icons = ["🍒", "🔔", "🎲", "🍀"];
    if (!isScrolledIntoView(canvas)) {
        window.requestAnimationFrame(function () {
            frame = 0;
            iteration = 0;
            renderLuck(canvas, frame, iteration);
        });
        return;
    }
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var size = canvas.dataset.size;
    let fontSize = size * 2;
    let text = canvas.dataset.text;
    var x = 0;
    for (i = 0; i < text.length; i++) {
        height = fontSize / 16;
        var y = canvas.height - frame;
        if (iteration < 5) {
            ctx.font = (fontSize * .4) + "px " + canvas.dataset.fontFamily;
            if (slots.length - 1 <= i) {
                slots.push([icons[Math.floor(Math.random() * 3)], icons[Math.floor(Math.random() * 3)], icons[Math.floor(Math.random() * 3)]]);
            }
            ctx.fillText(slots[i][0], canvas.width / text.length * i, y + fontSize);
            ctx.fillText(slots[i][1], canvas.width / text.length * i, y + fontSize * 2);
            ctx.fillText(slots[i][2], canvas.width / text.length * i, y + fontSize * 3);
        } else {
            y = size * 1.75;
        }
        ctx.font = (fontSize) + "px " + canvas.dataset.fontFamily;
        ctx.fillText(text[i], x, y);
        x += ctx.measureText(text[i]).width + (ctx.measureText(text).width / (text.length * 120));
    }
    window.requestAnimationFrame(function () {
        frame += (fontSize / 15 - (iteration * 2));
        if (frame > (fontSize * 4)) {
            frame = 0;
            iteration++;
            renderLuck(canvas, frame, iteration, slots);
            return;
        }
        if (iteration >= 5) {
            setTimeout(function () {
                iteration = 0;
                frame = 0;
                renderLuck(canvas, frame, iteration, slots);

            }, 2000);
        }
        else {
            renderLuck(canvas, frame, iteration, slots);
        }
    });
}

function renderDing(canvas, frame = 0) {
    if(!document.body.contains(canvas)){
        return;
    }
    if (!isScrolledIntoView(canvas)) {
        window.requestAnimationFrame(function () {
            frame = 0
            renderDing(canvas, frame);
        });
        return;
    }
    var skull = "☠";
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var size = canvas.dataset.size;
    let text = canvas.dataset.text;
    var x = 0;
    for (i = 0; i < text.length; i++) {
        height = size / 16;
        ctx.font = (size * (frame % 60 < 20 ? 1 : 2)) + "px " + canvas.dataset.fontFamily;
        ctx.fillText(frame % 60 < 20 ? skull : text[i], frame % 60 < 20 ? i * canvas.width / text.length : x, size * 1.75);
        x += ctx.measureText(text[i]).width + (ctx.measureText(text).width / (text.length * 120));
    }
    window.requestAnimationFrame(function () {
        if (frame >= 120) {
            frame = 0;
        }
        frame += 1;
        renderDing(canvas, frame);
    });
}

function renderFill(canvas, frame = 0) {
    if(!document.body.contains(canvas)){
        return;
    }
    if (!isScrolledIntoView(canvas)) {
        window.requestAnimationFrame(function () {
            frame = 0
            renderFill(canvas, frame);
        });
        return;
    }

    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var size = canvas.dataset.size;
    ctx.font = size * 2 + "px " + canvas.dataset.fontFamily;
    ctx.fillText(canvas.dataset.text, 0, size * 1.75);
    ctx.clearRect(0, 0, canvas.width, canvas.height - frame);
    ctx.strokeText(canvas.dataset.text, 0, size * 1.75);
    window.requestAnimationFrame(function () {
        frame += canvas.height / 150;
        if (frame > canvas.height) {
            frame = 0;
        }
        renderFill(canvas, frame);
    });
}

function renderSpill(canvas, frame = 0) {
    if(!document.body.contains(canvas)){
        return;
    }
    if (!isScrolledIntoView(canvas)) {
        window.requestAnimationFrame(function () {
            frame = 0
            renderSpill(canvas, frame);
        });
        return;
    }
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var size = canvas.dataset.size;
    ctx.font = size * 2 + "px " + canvas.dataset.fontFamily;
    ctx.fillText(canvas.dataset.text, 0, size * 1.75);
    ctx.clearRect(frame, 0, canvas.width - frame, canvas.height);
    ctx.strokeText(canvas.dataset.text, 0, size * 1.75);
    window.requestAnimationFrame(function () {
        frame += canvas.width / 150;
        if (frame > canvas.width) {
            frame = 0;
        }
        renderSpill(canvas, frame);
    });
}

function renderSubwoofer(canvas, frame = 0) {
    if(!document.body.contains(canvas)){
        return;
    }
    if (!isScrolledIntoView(canvas)) {
        window.requestAnimationFrame(function () {
            frame = 0
            renderSubwoofer(canvas, frame);
        });
        return;
    }
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var size = canvas.dataset.size;
    ctx.font = size * 2 + "px " + canvas.dataset.fontFamily;
    ctx.shadowOffsetX = Math.abs(frame);
    ctx.shadowOffsetY = 0;
    ctx.shadowColor = "grey";
    ctx.shadowBlur = 3;
    ctx.fillText(canvas.dataset.text, 0, size * 1.75);
    window.requestAnimationFrame(function () {
        frame += 1
        if (frame > 10) {
            frame = -10;
        }
        renderSubwoofer(canvas, frame);
    });
}

function renderSpotlight(canvas, frame = 0, direction = 1) {
    if(!document.body.contains(canvas)){
        return;
    }
    if (!isScrolledIntoView(canvas)) {
        window.requestAnimationFrame(function () {
            frame = 0
            renderSpotlight(canvas, frame);
        });
        return;
    }
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var size = canvas.dataset.size;
    ctx.font = size * 2 + "px " + canvas.dataset.fontFamily;
    ctx.shadowOffsetX = frame;
    ctx.shadowOffsetY = 5;
    ctx.shadowColor = "grey";
    ctx.shadowBlur = 3;
    ctx.fillText(canvas.dataset.text, 0, size * 1.75);
    window.requestAnimationFrame(function () {
        frame += .2 * direction
        if (Math.abs(frame) > 15) {
            direction = direction * -1;
        }
        renderSpotlight(canvas, frame, direction);
    });
}

function renderFire(canvas) {
    var ctx = canvas.getContext("2d");
    var size = canvas.dataset.size;
    var text = canvas.dataset.text;
    ctx.font = size * 2 + "px " + canvas.dataset.fontFamily;
    ctx.fillText(text, 0, size * 1.75);
    drawFire(canvas);
    // fire drawing logic forked and altered from https://github.com/filipedeschamps/doom-fire-algorithm
    function drawFire(canvas) {
        const firePixelsArray = [];
        var ctx = canvas.getContext("2d");
        const originalPixelsArray = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
        let fireWidth = canvas.width;
        let fireHeight = canvas.height;
        const fireColorsPalette = [{ "r": 7, "g": 7, "b": 7 }, { "r": 31, "g": 7, "b": 7 }, { "r": 47, "g": 15, "b": 7 }, { "r": 71, "g": 15, "b": 7 }, { "r": 87, "g": 23, "b": 7 }, { "r": 103, "g": 31, "b": 7 }, { "r": 119, "g": 31, "b": 7 }, { "r": 143, "g": 39, "b": 7 }, { "r": 159, "g": 47, "b": 7 }, { "r": 175, "g": 63, "b": 7 }, { "r": 191, "g": 71, "b": 7 }, { "r": 199, "g": 71, "b": 7 }, { "r": 223, "g": 79, "b": 7 }, { "r": 223, "g": 87, "b": 7 }, { "r": 223, "g": 87, "b": 7 }, { "r": 215, "g": 95, "b": 7 }, { "r": 215, "g": 95, "b": 7 }, { "r": 215, "g": 103, "b": 15 }, { "r": 207, "g": 111, "b": 15 }, { "r": 207, "g": 119, "b": 15 }, { "r": 207, "g": 127, "b": 15 }, { "r": 207, "g": 135, "b": 23 }, { "r": 199, "g": 135, "b": 23 }, { "r": 199, "g": 143, "b": 23 }, { "r": 199, "g": 151, "b": 31 }, { "r": 191, "g": 159, "b": 31 }, { "r": 191, "g": 159, "b": 31 }, { "r": 191, "g": 167, "b": 39 }, { "r": 191, "g": 167, "b": 39 }, { "r": 191, "g": 175, "b": 47 }, { "r": 183, "g": 175, "b": 47 }, { "r": 183, "g": 183, "b": 47 }, { "r": 183, "g": 183, "b": 55 }, { "r": 207, "g": 207, "b": 111 }, { "r": 223, "g": 223, "b": 159 }, { "r": 239, "g": 239, "b": 199 }, { "r": 255, "g": 255, "b": 255 }]
        const context = canvas.getContext("2d");
        const image = context.createImageData(fireWidth, fireHeight);

        function start() {
            createFireDataStructure();
            setInterval(createFireSource, 50);
            setInterval(calculateFirePropagation, 50);
        }

        function createFireDataStructure() {
            const numberOfPixels = fireWidth * fireHeight;
            for (let i = 0; i < numberOfPixels; i++) {
                firePixelsArray[i] = 0;
            }
        }

        function calculateFirePropagation() {
            for (let column = 0; column < fireWidth; column++) {
                for (let row = 0; row < fireHeight; row++) {
                    const pixelIndex = column + (fireWidth * row);
                    updateFireIntensityPerPixel(pixelIndex);
                }
            }
            renderFire();
        }

        function updateFireIntensityPerPixel(currentPixelIndex) {
            const belowPixelIndex = currentPixelIndex + fireWidth;
            // below pixel index overflows canvas
            if (belowPixelIndex >= fireWidth * fireHeight) {
                return;
            }
            const decay = Math.floor(Math.random() * 3);
            const belowPixelFireIntensity = firePixelsArray[belowPixelIndex];
            const newFireIntensity = belowPixelFireIntensity - decay >= 0 ? belowPixelFireIntensity - decay : 0;
            firePixelsArray[currentPixelIndex - decay] = newFireIntensity;
        }

        function renderFire() {
            for (let pixelIndex = 0; pixelIndex < firePixelsArray.length; pixelIndex++) {
                const fireIntensity = firePixelsArray[pixelIndex];
                const color = fireColorsPalette[fireIntensity];
                image.data[pixelIndex * 4] = color.r;
                image.data[pixelIndex * 4 + 1] = color.g;
                image.data[pixelIndex * 4 + 2] = color.b;
                image.data[pixelIndex * 4 + 3] = fireIntensity < 10 ? 0 : 255;
            }
            context.putImageData(image, 0, 0);
        }

        function createFireSource() {
            for (var o = 0; o < originalPixelsArray.length; o += 4) {
                if (originalPixelsArray[o + 3] != 0) {
                    firePixelsArray[o / 4] = 30;
                }
            }
        }

        start();
    }
}


//inspired by https://ariya.io/2012/03/underwater-effect-with-html5-canvas
function renderWater(canvas) {
    var ctx = canvas.getContext('2d');
    var size = canvas.dataset.size;
    ctx.font = size * 2 + "px " + canvas.dataset.fontFamily;
    ctx.fillText(canvas.dataset.text, 0, size * 1.75);
    var fx = Underwater(canvas, size / 16, .6);
    fx.start();

    //edits made to original from https://github.com/fffaraz/Etcetera
    function Underwater(canvas, amplitude, frequency) {
        var context = canvas.getContext("2d"),
            width = canvas.width,
            stride = width * 4,
            height = canvas.height,
            result = context.createImageData(width, height),
            pixels = new Array(4 * width * height),
            interval = 1000 / 60,
            frames = 0;

        function init() {
            var i, source;
            source = context.getImageData(0, 0, width, height);
            result = context.createImageData(width, height);
            for (i = 0; i < 4 * height * width; i += 1) {
                pixels[i] = source.data[i];
                result.data[i] = 0;
            }
        }

        function apply() {
            if(!document.body.contains(canvas)){
                return;
            }
            var r, T, x, y, xs, ys, dest, src;
            r = result.data;
            T = frames * interval * frequency / 1000;
            for (x = amplitude; x < width - amplitude; ++x) {
                for (y = amplitude; y < height - amplitude; ++y) {
                    xs = amplitude * Math.sin(2 * Math.PI * (3 * y / height + T));
                    ys = amplitude * Math.cos(2 * Math.PI * (3 * x / width + T));
                    xs = Math.round(xs);
                    ys = Math.round(ys);
                    dest = y * stride + x * 4;
                    src = (y + ys) * stride + (x + xs) * 4;
                    r[dest] = pixels[src];
                    r[dest + 1] = pixels[src + 1];
                    r[dest + 2] = pixels[src + 2] + 50;
                    r[dest + 3] = pixels[src + 3];
                }
            }
            context.putImageData(result, 0, 0);
            frames += 1;
            // Force flushing the pending painting.
            context.getImageData(0, 0, 1, 1);
            window.requestAnimationFrame(apply);
        }

        function start() {
            window.requestAnimationFrame(apply);
        }

        init();
        return {
            start: start
        };
    }
}


function renderNeon(canvas, frame = 5) {
    if(!document.body.contains(canvas)){
        return;
    }
    if (!isScrolledIntoView(canvas)) {
        window.requestAnimationFrame(function () {
            frame = 0
            renderNeon(canvas, frame);
        });
        return;
    }
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var size = canvas.dataset.size;
    ctx.font = size * 2 + "px " + canvas.dataset.fontFamily;
    for (i = 0; i < frame; i += .7) {
        ctx.shadowBlur = i * i / 5;
        ctx.shadowColor = "purple";
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.fillStyle = "purple";
        ctx.strokeText(canvas.dataset.text, 0, size * 1.75);
    }
    ctx.strokeText(canvas.dataset.text, 0, size * 1.75);
    window.requestAnimationFrame(function () {
        frame += .1
        if (frame > 10) {
            frame = 5;
        }
        renderNeon(canvas, frame);
    });
}

function renderBars(canvas) {
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var size = canvas.dataset.size;
    ctx.font = size * 2 + "px " + canvas.dataset.fontFamily;
    ctx.fillText(canvas.dataset.text, 0, size * 1.75);
    const originalPixelsArray = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    drawBars(0);
    
    function drawBars(frame) {
        if(!document.body.contains(canvas)){
            return;
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillText(canvas.dataset.text, 0, size * 1.75);
        ctx.beginPath();
        var stride = canvas.width * 4
        console.log(frame);
        for (var x = 0 + Math.abs(frame) ; x < canvas.width; x+=4) {
            var last = null;
            for (var y = 0 ; y < canvas.height; y+=1) {
                var dest = y * stride + x * 4;
                if (originalPixelsArray[dest + 3] != 0) {
                    if ((last == null) || (y - last > 1)) {
                        ctx.moveTo(x,y);
                        last = y;
                    }
                    else{
                        last = y;
                        ctx.lineTo(x,y);
                    }
                }
            }
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.lineWidth = 2;
        ctx.stroke();
        setTimeout(function () {
            frame += 1
            if(frame > 3){
                frame = 0 ;
            }
            drawBars(frame);
        }, 50);
    }
}

function renderBlinds(canvas) {
        var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var size = canvas.dataset.size;
    ctx.font = size * 2 + "px " + canvas.dataset.fontFamily;
    ctx.fillText(canvas.dataset.text, 0, size * 1.75);
    const originalPixelsArray = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    drawBlinds(0);
    
    function drawBlinds(frame) {
        if(!document.body.contains(canvas)){
            return;
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillText(canvas.dataset.text, 0, size * 1.75);
        ctx.beginPath();
        var stride = canvas.width * 4
        console.log(frame);
        for (var y = 0 + Math.abs(frame) ; y < canvas.height; y+=4) {
            var last = null;
            for (var x = 0 ; x < canvas.width; x+=1) {
                var dest = y * stride + x * 4;
                if (originalPixelsArray[dest + 3] != 0) {
                    if ((last == null) || (x - last > 1)) {
                        ctx.moveTo(x,y);
                        last = x;
                    }
                    else{
                        last = x;
                        ctx.lineTo(x,y);
                    }
                }
            }
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.lineWidth = 2;
        ctx.stroke();
        setTimeout(function () {
            frame += 1
            if(frame > 3){
                frame = 0 ;
            }
            drawBlinds(frame);
        }, 50);
    }
}
insertCanvi();