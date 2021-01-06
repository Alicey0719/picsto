$(function () {
    //あっぷろーどぉ
    $("#imgForm").submit(function () {
        let $form, fd;
        $form = $("#imgForm");
        fd = new FormData($form[0]);
        $.ajax($form.attr("action"), {
            type: 'post',
            processData: false,
            contentType: false,
            data: fd,
            dataType: 'html'
        }).done(function () {
            if ($("#sendFile").val() != "")
                $("#uploaderResult").html("Done");
            else
                $("#uploaderResult").html("NotSelected");
        }).fail(function () {
            $("#uploaderResult").html("SendFailed");
        });
        return false;
    });
});
