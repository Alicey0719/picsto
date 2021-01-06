function imgPickup(img) {
    let src = img.getAttribute('src');
    document.getElementById("imgMain").src = src;
}