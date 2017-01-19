var app = getApp();

Page({
	data: {

	},
	onLoad: function() {
		const self = this;
		app.getUserInfo(function(userInfo) {
			self.setData({
				userInfo
			});
		})
	}
});