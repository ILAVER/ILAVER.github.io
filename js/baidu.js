<script>  
    /*设置监听事件，向输入框中输入内容，当键盘按键弹起的时候，将输入的内容作为参数传入到函数info中*/  
    $("#value").bind("keyup",function(event){  
        /*当键盘按下上下键的时候，不进行监听，否则会与keyup事件起冲突*/  
        if(event.keyCode == 38 || event.keyCode == 40){  
            return false;  
        }  
        var value = $("#value").val();  
            info(value);  
    })  
    /*将ajax封装到函数中*/  
    function info(value){  
        /*百度搜索框智能提示的接口*/  
        var url = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su";  
        /*需要传入的参数，cb是callback的缩写*/  
        var data = {  
            wd : value,  
            cb : "helloword"  
        }  
        /*因为涉及跨域，这里使用jsonp*/  
        $.ajax({  
            url : url,  
            data : data,  
            type : "GET",  
            dataType : "jsonp",  
            jsonpCallback : "helloword",  
            /*跨域成功的时候返回的数据*/  
            success : function (result){  
                /*返回成功之后可以在开发者工具里的Console打印看一下*/  
                console.log(result);  
                /*将获取的数据整理后返回到页面*/  
                var a = result.s;  
                var list = "";  
                for(var i in a ){  
                    var l = a[i];  
                    list += "<option>"+l+"</option>";  
                }  
                $("#languageList").html(list);  
            },  
            /*跨域失败的时候返回的数据*/  
            error : function(){  
                console.log("error");  
            }  
        })  
    }  
</script>