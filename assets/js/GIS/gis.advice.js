$(function() {

    initEditor(); //富文本

    // .提交表单，new一个formdata对象
    $('form').on('submit', function(e) {
        e.preventDefault();
        var fd = $(this).serialize();
        publishAdvice(fd);
        layui.layer.alert('留言成功！非常感谢您留下了宝贵的意见，小陈一定会及时查看您的建议，并尽可能的完善内容！', { icon: 1 }, function(index) {
            //do something
            location.href = '/home/dashboard.html';
            layer.close(index);
        });

        // 发布文章成功后，跳转到文章列表页面

    })



    // 定义一个发布留言的方法
    function publishAdvice(fd) {
        $.ajax({
            method: 'POST',
            url: 'http://127.0.0.1:3001/form?' + fd,
            // 注意：如果向服务器提交的是 FormData 格式的数据，
            // 必须添加以下两个配置项
            contentType: false,
            processData: false,
            success: function(res) {
                layer.msg('留言成功！小陈一定会及时查看您的建议，并尽可能的完善内容！')
                    // 发布文章成功后，跳转到主页面
                location.href = './index.html'
            }
        })
    }
})