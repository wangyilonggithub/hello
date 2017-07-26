
function save() {
    var userName = $("#userName").val();
    var mobileNo = $("#mobileNo").val();
    var email = $("#email").val();

    console.log("userName" + userName);

    $("#addModal").modal('hide');

    var url = "/user/save";
    var data = {"userName":userName, "mobileNo":mobileNo, "email":email};
    ajaxPost(url, data);

}

function edit(id) {
    console.log("id : " + id )
    var userName = $("#userName").val("11");
    var mobileNo = $("#mobileNo").val("222");
    var email = $("#email").val("333");
}


function ajaxPost(url, data) {
    $.ajax({
        url: url,
        data:data,
        type:"POST",
        dataType: "json",
        success: function (data) {
            if(data.result) {
                noticeMsg.success(data.resultObj);
            } else {
                noticeMsg.warning(data.errorMsg);
            }
        }
    });
}