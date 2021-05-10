$(function() {

    $.ajax({
        method: 'get',
        url: 'http://127.0.0.1:3001/getList',
        success: function(res) {
            var str = template('tpl', res.result);
            $('.layui-table tbody').html(str);
            // 使用模板引擎直接渲染
        }
    })


    //渲染分页
    layui.laypage.render({
        elem: 'test1',
        count: 8, //数据总数，从服务端得到
        layout: ['count', 'limit', 'prev', 'page', 'next', 'skip'],
        limits: [2, 5, 8, 10],
        jump: function(obj, first) {
            //obj包含了当前分页的所有参数，比如：
            // console.log(obj.curr); //得到当前页，以便向服务端请求对应页的数据。
            // console.log(obj.limit); //得到每页显示的条数

            //首次不执行
            if (!first) {
                //do something
            }
        }
    })
})