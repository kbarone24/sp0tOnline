// main.js file for sp0t0nline.html
let counter = 0;
const strings = ["welcome to sp0tOnline.", "coming this fall.", "see you soon."]

function mainWriter() {
 //   setTimeout(typeWriter(strings[0], 0), 50);
    typeWriter2();
}

function typeWriter(text, i) {
    if (i < text.length) {
        document.getElementById("opener").innerHTML += text.charAt(i);
        i++;
        if (i == text.length) {
            counter += 1;
            if (counter < 3) {
                document.getElementById("opener").innerHTML += "<br> <br>";
                setTimeout(typeWriter(strings[counter], 0), 50);
            } 
        } else {
            setTimeout(typeWriter(text, i), 50);
        } 
    }
}

let i = 0;
function typeWriter2() {
    let speed = 80;
    if (i < strings[0].length) {
        // layout first line
        document.getElementById("opener").innerHTML += strings[0].charAt(i);
        i++;
        if (i == strings[0].length) {
            document.getElementById("opener").innerHTML += "<br> <br>";
            speed = 600;
        }
        setTimeout(typeWriter2, speed);

    } else if (i < strings[0].length + strings[1].length) {

        // layout second line
        document.getElementById("opener").innerHTML += strings[1].charAt(i - strings[0].length);
        i++;
        if (i == strings[0].length + strings[1].length) {
            document.getElementById("opener").innerHTML += "<br> <br>";
            speed = 600;
        }
        setTimeout(typeWriter2, speed);

    } else if (i < strings[0].length + strings[1].length + strings[2].length) {

        // layout third line
        document.getElementById("opener").innerHTML += strings[2].charAt(i - strings[0].length - strings[1].length);
        i++;
        setTimeout(typeWriter2, speed);
    }
} 