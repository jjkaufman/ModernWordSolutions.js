function insertCanvi() {
    var types = ['vanilla', 'shrink', 'grow', 'explode', 'curve', 'spin', 'art', 'freedom', 'punch', 'wiggle', 'surprise', 'slam', 'squeeze','pulse', 'goodbye', 'cross', 'luck'];

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
    ctx.scale(1 - (Math.abs(frame)/ 1000) , 1 - (Math.abs(frame)/1000));

    window.requestAnimationFrame(function () {
        if(frame > 60){
            frame = 0;
            ctx.scale(43,43);
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
    ctx.scale(1- (frame/ 1000) , 1 - (frame/1000));
    var size = canvas.dataset.fontSize;
    size = size.substring(0, size.length - 2);
    ctx.font = size * 2 + "px " + canvas.dataset.fontFamily;
    ctx.fillText(canvas.dataset.text, 0, size * 1.75);


    window.requestAnimationFrame(function () {
        if(frame > 5){
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
    ctx.scale(1 , 1 - (frame/1000));
    var size = canvas.dataset.fontSize;
    size = size.substring(0, size.length - 2);
    ctx.font = size * 2 + "px " + canvas.dataset.fontFamily;
    ctx.fillText(canvas.dataset.text, 0, size * 1.75);


    window.requestAnimationFrame(function () {
        if(frame > 50){
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
    ctx.lineTo(Math.min(frame,canvas.width), canvas.height * .55 - (canvas.height * .05 * (Math.min(frame,canvas.width) / canvas.width)));
    ctx.strokeStyle = 'red'; 
    ctx.stroke();

    window.requestAnimationFrame(function () {
        frame+=canvas.width / 30
        renderCross(canvas, frame);
    });

}

function renderLuck(canvas, frame = 0 ,iteration = 0) {
    var icons = ["🍒","🔔","🎲","🍀"];
    if (!isScrolledIntoView(canvas)) {
        window.requestAnimationFrame(function () {
            frame = 0;
            iteration = 0;
            renderLuck(canvas, frame,iteration);
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
        var y = canvas.height -  frame;

        if(iteration < 5){
        ctx.font = (fontSize * .4) + "px " + canvas.dataset.fontFamily;
        ctx.fillText(icons[1] ,canvas.width / text.length * i, y + fontSize);
        ctx.fillText(icons[2] ,canvas.width / text.length * i, y + fontSize * 2);
        ctx.fillText(icons[0] ,canvas.width / text.length * i, y + fontSize * 3);
        }else{
            y = size * 1.75;
        }

        ctx.font = (fontSize) + "px " + canvas.dataset.fontFamily;
        ctx.fillText(text[i], x, y);
      
        x += ctx.measureText(text[i]).width + (ctx.measureText(text).width / (text.length * 120));
    }

    window.requestAnimationFrame(function () {
        frame+= (10 - (iteration*2));
        if(frame > (fontSize * 4)){
            frame=0;
            iteration++;

        }
        renderLuck(canvas, frame,iteration);
    });

}

insertCanvi();
renderCanvi();