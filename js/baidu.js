<script>  
    /*���ü����¼�������������������ݣ������̰��������ʱ�򣬽������������Ϊ�������뵽����info��*/  
    $("#value").bind("keyup",function(event){  
        /*�����̰������¼���ʱ�򣬲����м������������keyup�¼����ͻ*/  
        if(event.keyCode == 38 || event.keyCode == 40){  
            return false;  
        }  
        var value = $("#value").val();  
            info(value);  
    })  
    /*��ajax��װ��������*/  
    function info(value){  
        /*�ٶ�������������ʾ�Ľӿ�*/  
        var url = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su";  
        /*��Ҫ����Ĳ�����cb��callback����д*/  
        var data = {  
            wd : value,  
            cb : "helloword"  
        }  
        /*��Ϊ�漰��������ʹ��jsonp*/  
        $.ajax({  
            url : url,  
            data : data,  
            type : "GET",  
            dataType : "jsonp",  
            jsonpCallback : "helloword",  
            /*����ɹ���ʱ�򷵻ص�����*/  
            success : function (result){  
                /*���سɹ�֮������ڿ����߹������Console��ӡ��һ��*/  
                console.log(result);  
                /*����ȡ����������󷵻ص�ҳ��*/  
                var a = result.s;  
                var list = "";  
                for(var i in a ){  
                    var l = a[i];  
                    list += "<option>"+l+"</option>";  
                }  
                $("#languageList").html(list);  
            },  
            /*����ʧ�ܵ�ʱ�򷵻ص�����*/  
            error : function(){  
                console.log("error");  
            }  
        })  
    }  
</script>