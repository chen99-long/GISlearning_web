$(function() {
    $.ajax({
        method: 'get',
        url: 'http://127.0.0.1:3001/getList',
        success: function(res) {
            var str = template('tpl', res.result);
            $('.notes').html(str);
        }
    })

    $('.notes').on('click', '.archiveItem', function() {
        //图书列表的点击切换功能
        $(this).children('.note').children('.info').slideToggle('slow', function() {})
    })

    layui.laypage.render({
        elem: 'test1',
        count: 12, //数据总数，从服务端得到
        layout: ['count', 'limit', 'prev', 'page', 'next', 'skip'],
        limits: [3, 5, 10, 15],
        jump: function(obj, first) {
            //obj包含了当前分页的所有参数，比如：
            // console.log(obj.curr); //得到当前页，以便向服务端请求对应页的数据。
            // console.log(obj.limit); //得到每页显示的条数

            //首次不执行
            if (!first) {
                //do something
            }
        }
    });
})