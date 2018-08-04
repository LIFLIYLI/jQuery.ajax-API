//************点击按钮事件，并传参发请求
button.addEventListener('click',(e)=>{
   window.jQuery.ajax(
    'http://localhost:8010/',
    'post',
    '你好啊，这是我的内容',
    (responseText)=>{console.log(responseText)},
    (request)=>{console.log(request)}
    )          
})
//*****************以下为封装AJAX函数
window.jQuery=function(){}
window.$=window.jQuery
window.jQuery.ajax= function(url,method,body,success,fail){
    let request=new XMLHttpRequest() 
    request.onreadystatechange=()=>{
        if (request.readyState===4){
            console.log('响应完成') 
            if (request.status>=200 && request.status<300){
                success.call(undefined,request.responseText)
            }else if(request.status>=300){
                fail.call(undefined,request)     
            }
        
        }
    } 
    request.open(method,url)
    request.send(body)       
}