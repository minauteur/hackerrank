// https://www.hackerrank.com/challenges/designer-pdf-viewer//problem

function designerPdfViewer(h, word) {
    let a_z = "abcdefghijklmnopqrstuvwxyz".split('');
    let w = word.split('');
    let sel_heights = a_z
        .map((e, i) => [e, h[i]])
        .filter((e) => w.includes(e[0]));
    sel_heights.forEach((e) => {
        e.shift()
    });
    let dims = word.length * Math.max(...sel_heights)
    return dims;
}

