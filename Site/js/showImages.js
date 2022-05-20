var c = document.getElementById("cartoon");
var o = document.getElementById("oilpaint");
var co = document.getElementById("comic");
var p = document.getElementById("popart");
var pe = document.getElementById("pencil");
var ct = document.getElementById("cartoonTitle");
var ot = document.getElementById("oilpaintTitle");
var cot = document.getElementById("comicTitle");
var pt = document.getElementById("popartTitle");
var pet = document.getElementById("pencilTitle");

function showEvery() {
    c.style.display = "block";
    o.style.display = "block";
    co.style.display = "block";
    p.style.display = "block";
    pe.style.display = "block";

    ct.style.display = "none";
    ot.style.display = "none";
    cot.style.display = "none";
    pt.style.display = "none";
    pet.style.display = "none";
}

function showCartoon() {

    c.style.display = "block";
    o.style.display = "none";
    co.style.display = "none";
    p.style.display = "none";
    pe.style.display = "none";

    ct.style.display = "block";
    ot.style.display = "none";
    cot.style.display = "none";
    pt.style.display = "none";
    pet.style.display = "none";
}

function showOilpaint() {
    c.style.display = "none";
    o.style.display = "block";
    co.style.display = "none";
    p.style.display = "none";
    pe.style.display = "none";

    ct.style.display = "none";
    ot.style.display = "block";
    cot.style.display = "none";
    pt.style.display = "none";
    pet.style.display = "none";

}

function showComic() {
    c.style.display = "none";
    o.style.display = "none";
    co.style.display = "block";
    p.style.display = "none";
    pe.style.display = "none";

    ct.style.display = "none";
    ot.style.display = "none";
    cot.style.display = "block";
    pt.style.display = "none";
    pet.style.display = "none";
}

function showPopart() {
    c.style.display = "none";
    o.style.display = "none";
    co.style.display = "none";
    p.style.display = "block";
    pe.style.display = "none";

    ct.style.display = "none";
    ot.style.display = "none";
    cot.style.display = "none";
    pt.style.display = "block";
    pet.style.display = "none";

}

function showPencil() {

    c.style.display = "none";
    o.style.display = "none";
    co.style.display = "none";
    p.style.display = "none";
    pe.style.display = "block";

    ct.style.display = "block";
    ot.style.display = "none";
    cot.style.display = "none";
    pt.style.display = "none";
    pet.style.display = "block";
}