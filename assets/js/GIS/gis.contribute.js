$(function() {
    var layer = layui.layer
    var form = layui.form


    // 1. 初始化图片裁剪器
    var $image = $('#image')

    // 2. 裁剪选项
    var options = {
        aspectRatio: 400 / 280,
        preview: '.img-preview'
    }

    // 3. 初始化裁剪区域
    $image.cropper(options)

    // 为选择封面的按钮，绑定点击事件处理函数
    $('#btnChooseImage').on('click', function() {
        $('#coverFile').click()
    })

    // 监听 coverFile 的 change 事件，获取用户选择的文件列表
    $('#coverFile').on('change', function(e) {
        // 获取到文件的列表数组
        var files = e.target.files
            // 判断用户是否选择了文件
        if (files.length === 0) {
            return
        }
        // 根据文件，创建对应的 URL 地址
        var newImgURL = URL.createObjectURL(files[0])
            // 为裁剪区域重新设置图片
        $image
            .cropper('destroy') // 销毁旧的裁剪区域
            .attr('src', newImgURL) // 重新设置图片路径
            .cropper(options) // 重新初始化裁剪区域
    })



    // 为存为草稿按钮，绑定点击事件处理函数
    $('#btnSave2').on('click', function(e) {
        layer.msg('存为草稿成功！');
    })

    // 为表单绑定 submit 提交事件
    $('#form-pub').on('submit', function(e) {
        // 1. 阻止表单的默认提交行为
        e.preventDefault()
            // 2. 基于 form 表单，快速创建一个 FormData 对象
        var fd = new FormData($(this)[0])
            // 3. 将文章的发布状态，存到 fd 中
        $image
            .cropper('getCroppedCanvas', {
                // 创建一个 Canvas 画布
                width: 400,
                height: 280
            })
            .toBlob(function(blob) {
                // 将 Canvas 画布上的内容，转化为文件对象
                // 得到文件对象后，进行后续的操作
                // 5. 将文件对象，存储到 fd 中
                fd.append('cover_img', blob)

                // 发布文章成功后，跳转到主页面
                // 6. 发起 ajax 数据请求
                publishArticle(fd)
                layer.confirm('确定发布投稿吗？', { icon: 3, title: '提示' }, function(index) {
                    //do something
                    layer.alert('投稿成功！非常感谢您的投稿，等小陈火速审核后将会立刻为您发表！', { icon: 1 }, function(index) {
                        //do something
                        location.href = '../home/dashboard.html'
                        layer.close(index);
                    });

                    layer.close(index);
                });

            })
    })

    // 定义一个发布投稿的方法
    function publishArticle(fd) {
        $.ajax({
            method: 'POST',
            url: 'http://localhost:3001/contribute', //接口功能：req.body里是表单对象，req.file.path是图片链接
            data: fd,
            // 注意：如果向服务器提交的是 FormData 格式的数据，
            // 必须添加以下两个配置项
            contentType: false,
            processData: false,
            success: function(res) {

            }
        })
    }
})