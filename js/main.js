
window.addEventListener('load', () => {
    var pr = document.querySelector('.prealoder');
    pr.classList.remove('active')
})


function downloadtable() {

    var node   = document.getElementById('img1');
    var nodes  = document.getElementById('img2');
    var nodess = document.getElementById('img3');

    domtoimage.toPng(node)
        .then(function (dataUrl) {
            var img = new Image();
            img.src = dataUrl;
            downloadURI(dataUrl, "happy-new-year-2021.png")
        })
        .catch(function (error) {
            console.error('oops, something went wrong!', error);
        });  
    domtoimage.toPng(nodes)
        .then(function (dataUrl) {
            var img = new Image();
            img.src = dataUrl;
            downloadURI(dataUrl, "happy-new-year-2021.png")
        })
        .catch(function (errorss) {
            console.error('oops, something went wrong!', errorss);
        });
    domtoimage.toPng(nodess)
        .then(function (dataUrl) {
            var img = new Image();
            img.src = dataUrl;
            downloadURI(dataUrl, "happy-new-year-2021.png")
        })
        .catch(function (errors) {
            console.error('oops, something went wrong!', errors);
        }); 
}

function downloadURI(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    delete link;
}

// Menu 
var opens = document.querySelector('.one');
var opn   = document.querySelector('.two');
var opns  = document.querySelector('.three');

var cl  = document.querySelector('.itemOne .closeit');
var cs  = document.querySelector('.itemTwo .closeit');
var cls = document.querySelector('.itemThree .closeit');  

var br   = document.querySelector('.itemOne');
var bar  = document.querySelector('.itemTwo');
var ba   = document.querySelector('.itemThree');   

 
cl.addEventListener('click', () => { 
    br.style.marginLeft = "-400px";
});
cs.addEventListener('click', () => { 
    bar.style.marginLeft = "-400px"; 
});
cls.addEventListener('click', () => { 
    ba.style.marginLeft = "-400px"; 
});
  
opens.addEventListener('click', (d) => {
    d.preventDefault(); 
    bar.style.marginLeft = "-400px";
    ba.style.marginLeft  = "-400px";
    br.style.marginLeft  = "0px";
});
opn.addEventListener('click', (d) => {
    d.preventDefault(); 
    br.style.marginLeft = "-400px";
    ba.style.marginLeft  = "-400px";
    bar.style.marginLeft = "0px"; 
});
opns.addEventListener('click', (d) => {
    d.preventDefault(); 
    br.style.marginLeft = "-400px";
    bar.style.marginLeft  = "-400px";
    ba.style.marginLeft = "0px"; 
});
 