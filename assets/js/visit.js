$(function() {
    // 这里的代码是当index首页被执行完之后，执行一遍
    // 主要是调用接口让记录中的访问人数+1
    $.ajax({
        method: 'get',
        url: 'http://localhost:3001/addVisitor',
        success: function(res) {
            console.log(res);
        }

    })
})