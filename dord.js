function insertCanvi() {
    var types = ['vanilla', 'shrink', 'grow', 'explode', 'curve', 'spin', 'art', 'freedom', 'punch', 'wiggle', 'surprise', 'slam', 'squeeze', 'pulse', 'goodbye', 'cross', 'luck', 'ding', 'fill', 'spill', 'subwoofer', 'spotlight', 'fire'];

    var dords = Array.from(document.getElementsByClassName('dord'))
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
        canvas.dataset.fontSize = window.getComputedStyle(dord).fontSize;
        canvas.dataset.fontFamily = window.getComputedStyle(dord).fontFamily;
        canvas.dataset.color = window.getComputedStyle(dord).color;
        canvas.dataset.type = dord.dataset.dordType;
        dord.parentNode.insertBefore(canvas, dord);
        dord.style.display = 'none';
    })

}

function renderCanvi() {
    var canvi = document.getElementsByClassName('dord-canvas');
    for (z = 0; z < canvi.length; z++) {
        var canvas = canvi[z];
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = canvas.dataset.color;
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
        if (canvas.dataset.type == 'slam') {
            renderSlam(canvas);
        }
        if (canvas.dataset.type == 'squeeze') {
            renderSqueeze(canvas);
        }
        if (canvas.dataset.type == 'pulse') {
            renderPulse(canvas);
        }
        if (canvas.dataset.type == 'goodbye') {
            renderGoodbye(canvas);
        }
        if (canvas.dataset.type == 'cross') {
            renderCross(canvas);
        }
        if (canvas.dataset.type == 'luck') {
            renderLuck(canvas);
        }
        if (canvas.dataset.type == 'ding') {
            renderDing(canvas);
        }
        if (canvas.dataset.type == 'fill') {
            renderFill(canvas);
        }
        if (canvas.dataset.type == 'spill') {
            renderSpill(canvas);
        }
        if (canvas.dataset.type == 'subwoofer') {
            renderSubwoofer(canvas);
        }
        if (canvas.dataset.type == 'spotlight') {
            renderSpotlight(canvas);
        }
        if (canvas.dataset.type == 'fire') {
            renderFire(canvas);
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
        x += (ctx.measureText(text[i]).width - (ctx.measureText(text).width / (text.length * 50)));
    }

    window.requestAnimationFrame(function () {
        frame++
        renderWiggle(canvas, frame);
    });

}
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
function renderSurprise(canvas, frame = 0) {

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
function renderSlam(canvas, frame = 0) {

    if (!isScrolledIntoView(canvas)) {
        window.requestAnimationFrame(function () {
            frame = 0
            renderSlam(canvas, frame);
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
        var newX = Math.min(-200 + (i + 5) * frame, x);
        ctx.font = (fontSize) + "px " + canvas.dataset.fontFamily;
        ctx.fillText(text[i], newX, size * 1.75);
        x += ctx.measureText(text[i]).width + (ctx.measureText(text).width / (text.length * 120));
    }

    window.requestAnimationFrame(function () {
        frame++
        renderSlam(canvas, frame);
    });

}

function renderGoodbye(canvas, frame = 0) {

    if (!isScrolledIntoView(canvas)) {
        window.requestAnimationFrame(function () {
            frame = 0
            renderGoodbye(canvas, frame);
        });
        return;
    }

    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var size = canvas.dataset.fontSize;
    size = size.substring(0, size.length - 2);
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

    if (!isScrolledIntoView(canvas)) {
        window.requestAnimationFrame(function () {
            frame = 0
            renderPulse(canvas, frame);
        });
        return;
    }
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.scale(1 - (frame / 1000), 1 - (frame / 1000));
    var size = canvas.dataset.fontSize;
    size = size.substring(0, size.length - 2);
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

    if (!isScrolledIntoView(canvas)) {
        window.requestAnimationFrame(function () {
            frame = 0
            renderSqueeze(canvas, frame);
        });
        return;
    }
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.scale(1, 1 - (frame / 1000));
    var size = canvas.dataset.fontSize;
    size = size.substring(0, size.length - 2);
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

    if (!isScrolledIntoView(canvas)) {
        window.requestAnimationFrame(function () {
            frame = 0
            renderCross(canvas, frame);
        });
        return;
    }
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);



    var size = canvas.dataset.fontSize;
    size = size.substring(0, size.length - 2);
    ctx.font = size * 2 + "px " + canvas.dataset.fontFamily;
    ctx.fillText(canvas.dataset.text, 0, size * 1.75);

    ctx.beginPath();
    ctx.moveTo(0, canvas.height * .55);
    ctx.lineWidth = canvas.height / 15;
    ctx.lineTo(Math.min(frame, canvas.width), canvas.height * .55 - (canvas.height * .05 * (Math.min(frame, canvas.width) / canvas.width)));
    ctx.strokeStyle = 'red';
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
    var icons = ["🍒", "🔔", "🎲", "🍀"];
    if (!isScrolledIntoView(canvas)) {
        window.requestAnimationFrame(function () {
            frame = 0;
            iteration = 0;
            renderLuck(canvas, frame, iteration);
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
        frame += (10 - (iteration * 2));
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

    if (!isScrolledIntoView(canvas)) {
        window.requestAnimationFrame(function () {
            frame = 0
            renderDing(canvas, frame);
        });
        return;
    }

    var skull = '☠';

    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var size = canvas.dataset.fontSize;
    size = size.substring(0, size.length - 2);

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

    if (!isScrolledIntoView(canvas)) {
        window.requestAnimationFrame(function () {
            frame = 0
            renderFill(canvas, frame);
        });
        return;
    }
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var size = canvas.dataset.fontSize;
    size = size.substring(0, size.length - 2);
    ctx.font = size * 2 + "px " + canvas.dataset.fontFamily;
    ctx.fillText(canvas.dataset.text, 0, size * 1.75);
    ctx.clearRect(0, 0, canvas.width, canvas.height - frame);

    ctx.strokeText(canvas.dataset.text, 0, size * 1.75);

    window.requestAnimationFrame(function () {
        frame += canvas.width / 2000;
        if (frame > canvas.height) {
            frame = 0;
        }
        renderFill(canvas, frame);
    });

}


function renderSpill(canvas, frame = 0) {

    if (!isScrolledIntoView(canvas)) {
        window.requestAnimationFrame(function () {
            frame = 0
            renderSpill(canvas, frame);
        });
        return;
    }
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var size = canvas.dataset.fontSize;
    size = size.substring(0, size.length - 2);
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

    if (!isScrolledIntoView(canvas)) {
        window.requestAnimationFrame(function () {
            frame = 0
            renderSubwoofer(canvas, frame);
        });
        return;
    }
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var size = canvas.dataset.fontSize;
    size = size.substring(0, size.length - 2);
    ctx.font = size * 2 + "px " + canvas.dataset.fontFamily;
    ctx.shadowOffsetX = Math.abs(frame);
    ctx.shadowOffsetY = 0;
    ctx.shadowColor = 'grey';
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

    if (!isScrolledIntoView(canvas)) {
        window.requestAnimationFrame(function () {
            frame = 0
            renderSpotlight(canvas, frame);
        });
        return;
    }
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var size = canvas.dataset.fontSize;
    size = size.substring(0, size.length - 2);
    ctx.font = size * 2 + "px " + canvas.dataset.fontFamily;
    ctx.shadowOffsetX = frame;
    ctx.shadowOffsetY = 5;
    ctx.shadowColor = 'grey';
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
    var ctx = canvas.getContext('2d');
    var size = canvas.dataset.fontSize;
    size = size.substring(0, size.length - 2);
    var text = canvas.dataset.text ;
    ctx.font = size * 2 + "px " + canvas.dataset.fontFamily;
    ctx.fillText(text, 0, size * 1.75);
    drawFire(canvas);
}
// fire drawing logic forked and altered from https://github.com/filipedeschamps/doom-fire-algorithm
function drawFire(canvas) {
    const firePixelsArray = [];
    var ctx = canvas.getContext('2d');
    const originalPixelsArray = ctx.getImageData(0,0,canvas.width,canvas.height).data;
    
    let fireWidth = canvas.width
    let fireHeight = canvas.height
    const fireColorsPalette = [{"r":7,"g":7,"b":7},{"r":31,"g":7,"b":7},{"r":47,"g":15,"b":7},{"r":71,"g":15,"b":7},{"r":87,"g":23,"b":7},{"r":103,"g":31,"b":7},{"r":119,"g":31,"b":7},{"r":143,"g":39,"b":7},{"r":159,"g":47,"b":7},{"r":175,"g":63,"b":7},{"r":191,"g":71,"b":7},{"r":199,"g":71,"b":7},{"r":223,"g":79,"b":7},{"r":223,"g":87,"b":7},{"r":223,"g":87,"b":7},{"r":215,"g":95,"b":7},{"r":215,"g":95,"b":7},{"r":215,"g":103,"b":15},{"r":207,"g":111,"b":15},{"r":207,"g":119,"b":15},{"r":207,"g":127,"b":15},{"r":207,"g":135,"b":23},{"r":199,"g":135,"b":23},{"r":199,"g":143,"b":23},{"r":199,"g":151,"b":31},{"r":191,"g":159,"b":31},{"r":191,"g":159,"b":31},{"r":191,"g":167,"b":39},{"r":191,"g":167,"b":39},{"r":191,"g":175,"b":47},{"r":183,"g":175,"b":47},{"r":183,"g":183,"b":47},{"r":183,"g":183,"b":55},{"r":207,"g":207,"b":111},{"r":223,"g":223,"b":159},{"r":239,"g":239,"b":199},{"r":255,"g":255,"b":255}]

    const context = canvas.getContext('2d')
    const image = context.createImageData(fireWidth, fireHeight)
    
    function start() {
      createFireDataStructure()
      setInterval(createFireSource, 50);
      setInterval(calculateFirePropagation, 50)
    }
    
    function createFireDataStructure() {
      const numberOfPixels = fireWidth * fireHeight
    
      for (let i = 0; i < numberOfPixels; i++) {
        firePixelsArray[i] = 0
      }
    }
    
    function calculateFirePropagation() {
      for (let column = 0; column < fireWidth; column++) {
        for (let row = 0; row < fireHeight; row++) {
          const pixelIndex = column + ( fireWidth * row )
    
          updateFireIntensityPerPixel(pixelIndex)
        }
      }
    
      renderFire()

    }
    
    function updateFireIntensityPerPixel(currentPixelIndex) {
      const belowPixelIndex = currentPixelIndex + fireWidth
    
      // below pixel index overflows canvas
      if (belowPixelIndex >= fireWidth * fireHeight) {
        return
      }
    
      const decay = Math.floor(Math.random() * 3)
      const belowPixelFireIntensity = firePixelsArray[belowPixelIndex]
      const newFireIntensity =
        belowPixelFireIntensity - decay >= 0 ? belowPixelFireIntensity - decay : 0
      firePixelsArray[currentPixelIndex - decay] = newFireIntensity
    }
    
    function renderFire() {
      for (let pixelIndex = 0; pixelIndex < firePixelsArray.length; pixelIndex++) {
        const fireIntensity = firePixelsArray[pixelIndex]
        const color = fireColorsPalette[fireIntensity]
            image.data[pixelIndex * 4] = color.r
            image.data[pixelIndex * 4 + 1] = color.g
        
            image.data[pixelIndex * 4 + 2] = color.b
            image.data[pixelIndex * 4 + 3] =  fireIntensity < 10 ? 0 : 255;
      }
      context.putImageData(image, 0, 0)
    }
    
    function createFireSource() {
        for(var o = 0; o < originalPixelsArray.length; o+=4){
            if(originalPixelsArray[o + 3] != 0){
                firePixelsArray[o / 4] = 30
            }
        }
    }
    
    function destroyFireSource() {
      for (let column = 0; column <= fireWidth; column++) {
        const overflowPixelIndex = fireWidth * fireHeight
        const pixelIndex = (overflowPixelIndex - fireWidth) + column
    
        firePixelsArray[pixelIndex] = 0
      }
    }
    
    function increaseFireSource(newFireIntensity = null) {
      for (let column = 0; column <= fireWidth; column++) {
        const overflowPixelIndex = fireWidth * fireHeight
        const pixelIndex = (overflowPixelIndex - fireWidth) + column
        const currentFireIntensity = firePixelsArray[pixelIndex]
    
        if (currentFireIntensity < 36) {
            if(newFireIntensity == null){
                const increase = Math.floor(Math.random() * 14)
                newFireIntensity =
                currentFireIntensity + increase >= 36 ? 36 : currentFireIntensity + increase
            }
          firePixelsArray[pixelIndex] = newFireIntensity
        }
      }
    }
    
    function decreaseFireSource() {
      for (let column = 0; column <= fireWidth; column++) {
        const overflowPixelIndex = fireWidth * fireHeight
        const pixelIndex = (overflowPixelIndex - fireWidth) + column
        const currentFireIntensity = firePixelsArray[pixelIndex]
    
        if (currentFireIntensity > 0) {
          const decay = Math.floor(Math.random() * 14)
          const newFireIntensity =
            currentFireIntensity - decay >= 0 ? currentFireIntensity - decay : 0
    
          firePixelsArray[pixelIndex] = newFireIntensity
        }
      }
    }
    
    start()
}
insertCanvi();
renderCanvi();