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
		        num: 1
					}
				]
			}
		]
	}, 
  onLoad: function () {
  	console.log('data', this.data);
  },
});