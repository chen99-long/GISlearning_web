var map = new BMapGL.Map('container'); // 创建Map实例
map.centerAndZoom('廊坊市', 10); // 初始化地图,设置中心点坐标和地图级别
map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放