var table;
var ctx = "";
$(function(){
    table = $('#tbl_tenants').DataTable({
        "aaSorting":[[2, "desc"]],
        serverSide: true,//标示从服务器获取数据
        sAjaxSource : '/demo/page',//服务器请求
        fnServerData : retrieveData,//用于替换默认发到服务端的请求操作,默认方法为：$.getJSON
        fnServerParams : function ( aoData ) {
            var nameoradmin = $("#nameoradminTxt").val();
            aoData.push(
                {"name":"nameoradmin","value":nameoradmin}
            );
        },
        columns: [//显示的列
            { data: 'name' , "sDefaultContent" : "--"},
            { data: 'admin' , "sDefaultContent" : "--"},
            { 	data: 'createDate',
                "sDefaultContent" : "--",
                "render":function(data, type, row){
                    if(!checkIsNull(data)){
                        var date = new Date(data);
                        return date.format(dateFormat);
                    }
                },
            },
            { data: 'description', "bSortable": false},
            {
                iDataSort:8,
                "sDefaultContent": +'<a  class="pr10" data-toggle="modal" data-target="#myModal3">删除</a>',
                bSortable:false//禁用排序功能，默认是启用
            }
        ],
        "rowCallback": function( row, data, index ) {
            var content = '<div class="dropdown">'
                +'<button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">操作'
                +'</button><span class="caret"></span>'
                +'<ul class="dropdown-menu" aria-labelledby="dropdownMenu1">'
                +'<li ><a  class="pr10"  href="javascript:toEdit('+ data.id + ',\''+ data.name + '\',\''+ data.description +'\');">编辑</a></li>'
                +'<li ><a  class="pr10"  href="javascript:toQuota('+ data.id + ');">调整配额</a></li>'
                +'<li ><a  class="pr10"  href="javascript:toSetAdmin('+ data.id + ',\''+ data.admin + '\');">指定管理员</a></li>'
                +'<li ><a  class="pr10"  href="javascript:toDelete('+ data.id +');">删除</a></li>'
                +'</ul>'
                +'</div>'
            $('td:eq(-1)', row).html( content );
//            if(data.description.length > 30) {
//	       		 $('td:eq(3)', row).html( data.description.substring(0,30) +"..." );
//	       	 }
            if(data.name.length > 8) {
                $('td:eq(0)', row).html( data.name.substring(0,8) +"..." );
            }
            if(data.admin != null) {
                if(data.admin.length == 0) {
                    $('td:eq(1)', row).html( "--" );
                }
            }
        },
    });

    $('#nameoradminTxt').blur(function(){
        table.ajax.reload();
    });

});


function toCreate() {
    $("#createBaseForm").validate().resetForm();
    $("#createBaseForm")[0].reset();
}