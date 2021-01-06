$(function () {
    function img_read() {
        $.ajax({
            url: "./getImageList.php",
            dataType: "html"
        }).done(function (data) {
            if (data != "") {
                $("#imgList").html(data);
            }
            else
                $("#imgList").html("アップロードされたファイルがないよ(´・ω・｀)<br>");
        });
    }
    img_read();
});

function img_reSize() {
    let imgData = document.getElementById('img');
    let orgWidth = imgData.width;
    let orgHeight = imgData.height;
    imgData.width = 400;
    imgData.height = orgHeight * (targetImg.width / orgWidth);
}
