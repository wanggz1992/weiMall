var app = getApp();

Page({
	data: {
		cartList: [
			{
				list: [
					{
						title: '测试土豆烧鸡饭',
		        desc: '这是一份好吃的土豆烧鸡饭这是一份好吃的土豆烧鸡饭`',
		        imgUrl: '/static/image/goods/good-template.jpg',
		        price: 32,
		        num: 1,
						checked: false,
						name: 2,
						value: 1
					}
				],
				shop:{
					shopIcon:'https://gtms04.alicdn.com/tps/i4/TB1x4ExHVXXXXalXFXXSutbFXXX.jpg',
					value: 1,
					checked: false,
					name: '烧烤专卖'
				}
			}
		]
	}, 
  onLoad: function () {
  	console.log('data', this.data);
  },
	checkboxChange: function(e) {
		console.log('checkbox发生change事件，携带value值为：', e.detail.value)
	}
});