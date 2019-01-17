function insertCanvi() {
    var dords = document.getElementsByClassName('dord');
    for (z = 0; z < dords.length; z++) {
        var dord = dords[z];
        let width = dord.offsetWidth;
        let height = dord.getBoundingClientRect().height;
        let x = dord.getBoundingClientRect().left;
        let y = dord.getBoundingClientRect().top;

        var canvas = document.createElement('canvas');
        canvas.width = width * 2;
        canvas.style.width = width + 'px';
        canvas.height = height * 2;
        canvas.style.height = height + 'px';
        canvas.classList.add('dord-canvas');
        canvas.style.verticalAlign = 'bottom';
        canvas.dataset.text = dord.textContent;
        canvas.dataset.fontSize = window.getComputedStyle(dord).fontSize
        canvas.dataset.fontFamily = window.getComputedStyle(dord).fontFamily
        canvas.dataset.type = dord.dataset.dordType;

        dord.parentNode.insertBefore(canvas, dord);
        dord.style.display = 'none';
    }
}

function renderCanvi() {
    var canvi = document.getElementsByClassName('dord-canvas');
    for (z = 0; z < canvi.length; z++) {
        var canvas = canvi[z];
        if (canvas.dataset.type == 'vanilla') {
            renderVanilla(canvas);
        }
        if (canvas.dataset.type == 'shrink') {
            renderShrink(canvas);
        }
        if (canvas.dataset.type == 'grow') {
            renderGrow(canvas);
        }
        if (canvas.dataset.type == 'explode') {
            renderExplode(canvas);
        }
        if (canvas.dataset.type == 'curve') {
            renderCurve(canvas);
        }
        if (canvas.dataset.type == 'spin') {
            renderSpin(canvas);
        }
        if (canvas.dataset.type == 'art') {
            renderArt(canvas);
        }
        if (canvas.dataset.type == 'freedom') {
            renderFreedom(canvas);
        }
        if (canvas.dataset.type == 'punch') {
            renderPunch(canvas);
        }
        if (canvas.dataset.type == 'wiggle') {
            renderWiggle(canvas);
        }
        if (canvas.dataset.type == 'surprise') {
            renderSurprise(canvas);
        }

    }
}
function renderVanilla(canvas) {
    var ctx = canvas.getContext('2d');

    var size = canvas.dataset.fontSize;
    size = size.substring(0, size.length - 2);
    ctx.font = size * 2 + "px " + canvas.dataset.fontFamily;
    ctx.fillText(canvas.dataset.text, 0, size * 1.75);
}

function renderShrink(canvas) {
    var ctx = canvas.getContext('2d');
    var size = canvas.dataset.fontSize;
    size = size.substring(0, size.length - 2);
    let fontSize = size * 2;
    let text = canvas.dataset.text;
    var x = 0;
    var sizeMult = 1;
    for (i = 0; i < text.length; i++) {
        ctx.font = (fontSize * sizeMult) + "px " + canvas.dataset.fontFamily;
        ctx.fillText(text[i], x, (size * 1.75));
        sizeMult -= (1 / text.length)
        x += ctx.measureText(text[i]).width + (ctx.measureText(text).width / (text.length * 120));
    }
}
function renderGrow(canvas) {
    var ctx = canvas.getContext('2d');
    var size = canvas.dataset.fontSize;
    size = size.substring(0, size.length - 2);
    let fontSize = size * 2;
    let text = canvas.dataset.text;
    var x = 0;
    var sizeMult = .1;
    for (i = 0; i < text.length; i++) {
        ctx.font = (fontSize * sizeMult) + "px " + canvas.dataset.fontFamily;

        ctx.fillText(text[i], x, (size * 1.75));
        sizeMult += (1 / text.length)
        x += ctx.measureText(text[i]).width + (ctx.measureText(text).width / (text.length * 120));
    }
}
function renderExplode(canvas) {
    var ctx = canvas.getContext('2d');
    var size = canvas.dataset.fontSize;
    size = size.substring(0, size.length - 2);
    ctx.font = size * 2 + "px " + canvas.dataset.fontFamily;
    ctx.fillText(canvas.dataset.text, 0, size * 1.75);
    for (i = 0; i < 40; i++) {
        var randomPart = ctx.getImageData(Math.random() * canvas.width, Math.random() * canvas.height, canvas.width / 10, canvas.width / 10);
        ctx.putImageData(randomPart, Math.random() * canvas.width, Math.random() * canvas.height);
    }
    renderVanilla(canvas);
}
function renderCurve(canvas) {
    var ctx = canvas.getContext('2d');
    var size = canvas.dataset.fontSize;
    size = size.substring(0, size.length - 2);
    let fontSize = size * 2;
    let text = canvas.dataset.text;
    var x = 0;
    var sizeMult = 1;
    for (i = 0; i < text.length; i++) {
        ctx.font = (fontSize * sizeMult) + "px " + canvas.dataset.fontFamily;
        ctx.fillText(text[i], x, (size * 1.75));
        if (i < Math.floor(text.length / 2)) {
            sizeMult -= (1 / text.length)
        } else {
            sizeMult += (1 / text.length)
        }
        x += ctx.measureText(text[i]).width + (ctx.measureText(text).width / (text.length * 120));
    }
}
function renderSpin(canvas) {
    var ctx = canvas.getContext('2d');
    var size = canvas.dataset.fontSize;
    size = size.substring(0, size.length - 2);
    let fontSize = size * 2;
    let text = canvas.dataset.text;
    var x = 0;
    var rotate = 1;
    for (i = 0; i < text.length; i++) {
        ctx.font = (fontSize) + "px " + canvas.dataset.fontFamily;

        ctx.fillText(text[i], x, (size * 1.75));
        var off = x + (64);
        console.log(off);
        ctx.translate(off, canvas.height / 2);
        ctx.rotate(rotate);
        let z = ctx.measureText(text[i]).width + (ctx.measureText(text).width / (text.length * 120));
        ctx.translate(-off, -1 * canvas.height / 2);
        // rotate += .5;

        x += z;
    }
}
function renderArt(canvas) {
    var ctx = canvas.getContext('2d');

    var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop("0", "#BA0D8D");
    gradient.addColorStop(1 / 5, "#E38B5E");
    gradient.addColorStop(2 / 5, "#FED227");
    gradient.addColorStop(3 / 5, "#66B32F");
    gradient.addColorStop(4 / 5, "#1944A0");
    gradient.addColorStop(5 / 5, "#4E25A9");
    ctx.fillStyle = gradient;
    ctx.shadowBlur = 5;
    ctx.shadowColor = '#C2C2C2';
    ctx.shadowOffsetX = '-5';
    ctx.shadowOffsetY = '-10';

    var size = canvas.dataset.fontSize;
    size = size.substring(0, size.length - 2);
    ctx.font = size * 2 + "px " + canvas.dataset.fontFamily;
    ctx.fillText(canvas.dataset.text, 0, size * 1.75);
}
function renderFreedom(canvas) {
    var ctx = canvas.getContext('2d');
    var size = canvas.dataset.fontSize;
    size = size.substring(0, size.length - 2);
    ctx.font = size * 2 + "px " + canvas.dataset.fontFamily;
    ctx.fillText(canvas.dataset.text, 5, size * 1.75 + 5);

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
    var ctx = canvas.getContext('2d');
    var size = canvas.dataset.fontSize;
    size = size.substring(0, size.length - 2);
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
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var size = canvas.dataset.fontSize;
    size = size.substring(0, size.length - 2);
    let fontSize = size * 2;
    let text = canvas.dataset.text;
    var x = 0;
    for (i = 0; i < text.length; i++) {
        height = fontSize / 16;
        var y = (size * 1.75) + (Math.sin(((x + (frame)) * 1) * Math.PI / 180) * height);

        ctx.font = (fontSize) + "px " + canvas.dataset.fontFamily;
        ctx.fillText(text[i], x, y);
        x += ctx.measureText(text[i]).width + (ctx.measureText(text).width / (text.length * 120));
    }

    window.requestAnimationFrame(function () {
        frame++
        renderWiggle(canvas, frame);
    });

}

function renderSurprise(canvas, frame = 0) {
    function isScrolledIntoView(el) {
        var rect = el.getBoundingClientRect();
        var elemTop = rect.top;
        var elemBottom = rect.bottom;

        // Only completely visible elements return true:
        // var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
        // Partially visible elements return true:
        isVisible = elemTop < window.innerHeight && elemBottom >= 0;
        return isVisible;
    }
    if (!isScrolledIntoView(canvas)) {
        window.requestAnimationFrame(function () {
            frame = 0
            renderSurprise(canvas, frame);
        });
        return;
    }
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var size = canvas.dataset.fontSize;
    size = size.substring(0, size.length - 2);
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
        frame++
        renderSurprise(canvas, frame);
    });

}
insertCanvi();
renderCanvi();