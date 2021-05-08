var map;
var zoom = 12;

function onLoad() {
    map = new T.Map('mapDiv');
    map.centerAndZoom(new T.LngLat(116.726440, 39.526830), zoom = 17);

    //在地图上添加添加文字标注
    var latlng = new T.LngLat(116.726720, 39.526910);
    var label = new T.Label({
        text: "这里就是我们伟大的华航啦~",
        position: latlng,
        offset: new T.Point(-9, 0)
    });
    //创建地图文本对象
    map.addOverLay(label);
    var bs = map.getBounds(); //获取可视区域
    var bssw = bs.getSouthWest(); //可视区域左下角
    var bsne = bs.getNorthEast(); //可视区域右上角
    // 1.初始化地图
    var miniMap = new T.Control.OverviewMap({
        isOpen: true,
        size: new T.Point(150, 150)
    });
    map.addControl(miniMap);
    //2.点选获得坐标
    var cp = new T.CoordinatePickup(map, {
        callback: getLngLat
    })
    cp.addEvent();
    //3.地图类型空控件
    //创建对象
    var ctrl = new T.Control.MapType();
    //添加控件
    map.addControl(ctrl);

    //4.测距工具
    var config = {
        showLabel: true

    };
    //创建标注工具对象
    lineTool = new T.PolylineTool(map, config);
}


//小部件
//点工具
function openPolygonTool() {

    handler = new T.PolygonTool(map);
    handler.open();
}
//多边形工具
function openPolylineTool() {

    handler = new T.PolylineTool(map);
    handler.open();
}
// 线工具
function openMarkerTool() {
    handler = new T.MarkTool(map, {
        follow: true
    });
    handler.open();
}
//矩形工具
function openRectangleTool() {

    handler = new T.RectangleTool(map, {
        follow: true
    });
    handler.open();
}
//画圆工具
function openCircleTool() {

    handler = new T.CircleTool(map, {
        follow: true
    });
    handler.open();
}
//获取图层个数
function getLayerCount() {
    return map.getOverlays().length;
}

function getLngLat(lnglat) {
    document.getElementById("lnglatStr").value = lnglat.lng.toFixed(6) + "," + lnglat.lat.toFixed(6);
}