//index.js
//获取应用实例
var app = getApp();

const getOrderList = (list) => {
  const order = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i].num  > 0) {
      order.push(Object.assign(list[i]));
    }
  }
  return order;
}

Page({
  data: {
    menu: [
      { 
        name: '水哥推荐',
        child: [
          {
            name: '美食',
          }, {
            name: '家电'
          }
        ]
      },
      { 
        name: '水哥正品',
        child: [
          {
            name: '美食',
          }, {
            name: '家电'
          }
        ]
      }
    ],
    select: {
      sub: 0,
      child: 0
    },
    list: [
      { 
        title: '测试土豆烧鸡饭',
        desc: '这是一份好吃的土豆烧鸡饭这是一份好吃的土豆烧鸡饭`',
        imgUrl: '/static/image/goods/good-template.jpg',
        sale: 22,
        praise: 20,
        price: 32,
        num: 0
      }, { 
        title: '测试土豆烧鸡饭',
        desc: '这是一份好吃的土豆烧鸡饭这是一份好吃的土豆烧鸡饭`',
        imgUrl: '/static/image/goods/good-template.jpg',
        sale: 22,
        praise: 20,
        price: 32,
        num: 0
      }, { 
        title: '测试土豆烧鸡饭',
        desc: '这是一份好吃的土豆烧鸡饭这是一份好吃的土豆烧鸡饭`',
        imgUrl: '/static/image/goods/good-template.jpg',
        sale: 22,
        praise: 20,
        price: 32,
        num: 0
      }, { 
        title: '测试土豆烧鸡饭',
        desc: '这是一份好吃的土豆烧鸡饭这是一份好吃的土豆烧鸡饭`',
        imgUrl: '/static/image/goods/good-template.jpg',
        sale: 22,
        praise: 20,
        price: 32,
        num: 0
      }, { 
        title: '测试土豆烧鸡饭',
        desc: '这是一份好吃的土豆烧鸡饭这是一份好吃的土豆烧鸡饭`',
        imgUrl: '/static/image/goods/good-template.jpg',
        sale: 22,
        praise: 20,
        price: 32,
        num: 0
      }, 
    ],
    order: [],
    totalPrice: 0,
    totalNum: 0
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bindSelectItem: function(event) {
    const id = event.currentTarget.id;
    this.setData({
      select: {
        sub: id.split('-')[1],
        child: id.split('-')[2]
      }
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this;
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  bindAddTap: function(event) {
    const index = parseInt(event.currentTarget.id.split('-')[1]);
    const listArray = Array.from(this.data.list);
    listArray[index].num += 1;
    const totalPrice = this.data.totalPrice + listArray[index].price;
    this.setData({
      list: listArray,
      order: getOrderList(listArray),
      totalNum: this.data.totalNum + 1,
      totalPrice
    });
  },
  bindDownTap: function(event) {
    const index = parseInt(event.currentTarget.id.split('-')[1]);
    const listArray = Array.from(this.data.list);
    listArray[index].num -= 1;
    const totalPrice = this.data.totalPrice - listArray[index].price;
    this.setData({
      list: listArray,
      order: getOrderList(listArray),
      totalNum: this.data.totalNum - 1,
      totalPrice
    });
  }
})
