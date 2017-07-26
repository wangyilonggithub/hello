/**
 * 一些公共方法
 */
var dateFormat = "yyyy-MM-dd hh:mm:ss";
var simpleDateFormat = "yyyy-MM-dd";
var loadInfo;
$(function(){
    loadInfo = $("#main_loading_div").html();
});

var ctx = "";

/**
 * 检查是否为空
 * @param data 传入值
 * @returns {Boolean} 如果为空，undefined或者null则返回true；否则返回false
 */
function checkIsNull(data){
    if(null == data || undefined == data ||$.trim(data).length == 0 || data == "null"){
        return true;
    }else{
        return false;
    }
}
function isNotNull(data){
    return !checkIsNull(data);
}

function getDateStr(str) {
    var obj = eval('(' + "{Date: new Date("+str+")}" + ')');
    var dateValue = obj["Date"];
    var date = new Date(dateValue);
    return date.format("yyyy/MM/dd");
}

/**
 * 检查名称，规则是长度在1到30之间，只能为数字、字母_和-
 * @param data
 * @returns 符合规则返回true；否则返回false
 */
function checkName(data){
    if(data.length<=0||data.length>30)
        return false;
    var reg = /^[\d\a-zA-Z\u4e00-\u9fa5\_\-]*$/;
    return reg.test(data);
}

/**
 * 时间对象的格式化，只要是时间对象，都可以调用该方法
 * @param format 传入值,日期格式，比如"yyyy-MM-dd hh:mm:ss"
 * @returns {String} 格式化之后的时间
 */
Date.prototype.format = function(format) {
    /*
     * eg:format="yyyy-MM-dd hh:mm:ss";
     */
    var o = {
        "M+" : this.getMonth() + 1, // month
        "d+" : this.getDate(), // day
        "h+" : this.getHours(), // hour
        "m+" : this.getMinutes(), // minute
        "s+" : this.getSeconds(), // second
        "q+" : Math.floor((this.getMonth() + 3) / 3), // quarter
        "S" : this.getMilliseconds()
        // millisecond
    }

    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4
            - RegExp.$1.length));
    }

    for (var k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1
                ? o[k]
                : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return format;
}

/**
 *  发送到服务器端请求的操作，方法名和参数名都是固定的,不能改
 *  sSource：向服务器发起的请求
 *  aoData：响应到页面的参数
 *  fnCallback：请求成功后回调方法
 */
function retrieveData(sSource, aoData, fnCallback) {
    $.ajax({
        url : ctx + sSource,//这个就是请求地址对应sAjaxSource
        data : aoData,//这个是把datatable的一些基本数据传给后台,比如起始位置,每页显示的行数
        type : 'get',
        dataType : 'json',
        async : true,
        success : function(data) {
//            fnCallback(result);//把返回的数据传给这个方法就可以了,datatable会自动绑定数据的
            if(data.result){//正常
                if(data.resultObj.aaData.length==0){
                    $('.btn-sort').css('display','none');
                    $('.table_foot').css('display','none');
                    /*$('.table_foot').css('border','1px solid #f00');*/
                }else{
                    $('.btn-sort').css('display','block');
                    $('.table_foot').css('display','block');
                }
                fnCallback(data.resultObj);//把返回的数据传给这个方法就可以了,datatable会自动绑定数据的
            }else{//异常
                noticeMsg.error(data.errorMsg);
            }
        },
        error : function(msg) {
        }
    });
}


/**
 * ajax方式提交数据，并接收返回值
 * @param postType
 * @param postUrl
 * @param postDataType
 * @param postData
 * @returns
 */
function ajaxMethod(postType,postUrl,postDataType,postData){
    var returnData;
    $.ajax({
        type : postType,
        url : ctx+postUrl,
        cache : false,
        async :false,//设置为同步，否则取不到returnData
        dataType : postDataType,
        data : postData,
        success : function(result) {
            returnData=result;
        },
        error : function() {
            alert("操作失败");
        }
    });
    return returnData;
}
/**
 * 验证上传文件是否是Excel文件
 * @param file
 * @returns {Boolean}
 */
function validateExl(file) {
    var isExl = false;
    if(checkIsNull(file)) {
        noticeMsg.error("请选择所要上传的文件");
    }else {
        var index = file.lastIndexOf(".");
        if(index < 0) {
            noticeMsg.error("上传的文件格式不正确，请下载导入模版");
        }else {
            var ext = file.substring(index + 1, file.length);
            if(ext != "xls") {
                noticeMsg.error("上传的文件格式不正确，请下载导入模版");
            } else {
                isExl = true;
            }
        }
    }
    return isExl;
}
