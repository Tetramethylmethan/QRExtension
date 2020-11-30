let btn = document.getElementById('btn');
let tablink;
chrome.tabs.getSelected(null,function(tab) {
    tablink = tab.url;
});

btn.onclick = function() {
    console.log(tablink);

    var qrElem = document.getElementById('qrcode');
    qrElem.innerHTML = "";

    var qrcode = new QRCode(qrElem, tablink, {
        text: "tablink",
        width: 300,
        height: 300,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
    }