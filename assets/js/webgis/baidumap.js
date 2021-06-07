/*     // GL版命名空间为BMapGL
    // 按住鼠标右键，修改倾斜角和角度
    var map = new BMapGL.Map("container"); // 创建Map实例
    map.centerAndZoom(new BMapGL.Point(116.726650, 39.526600), 17); // 初始化地图,设置中心点坐标和地图级别
    map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
    map.setHeading(64.5);
    map.setTilt(73); */
// GL版命名空间为BMapGL
// 按住鼠标右键，修改倾斜角和角度
var map = new BMapGL.Map("container"); // 创建Map实例  
map.centerAndZoom(new BMapGL.Point(116.726650, 39.526600), 17); // 初始化地图,设置中心点坐标和地图级别
map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放

var navi3DCtrl = new BMapGL.NavigationControl3D(); // 添加3D控件
map.addControl(navi3DCtrl);


// 创建城市选择控件
var cityControl = new BMapGL.CityListControl({
    // 控件的停靠位置（可选，默认左上角）
    anchor: BMAP_ANCHOR_TOP_LEFT,
    // 控件基于停靠位置的偏移量（可选）
    offset: new BMapGL.Size(10, 5)
});
// 将控件添加到地图上
map.addControl(cityControl);