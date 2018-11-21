/*
 * @Author: zhangzhenyang 
 * @Date: 2018-11-20 11:52:21 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2018-11-20 13:38:47
 */

const base = 'http://192.168.1.134:8090/wonbaoWeb/';
// const remote = 'http://192.168.1.134:8090/wonbaoWeb/';
const remote = '';
export default {
	remote,
	img: `${base}/assets/`,
	getItemInfo: `${base}marketing/wireless/activitypage/getItemInfo`,// 获取宝贝详情(y)
	getItems: `${base}public/getItems`, // 获取宝贝(可参考旺店宝的无线活动页的添加(y)
	loadPromotionActivity: `${base}public/loadPromotionActivity`,//   加载促销活动列表(y)
	getPromotionItems: `${base}public/getPromotionItems`,//   加载活动中的宝贝 (y)
	getPictureCategory: `${base}goods/manage/picture/getPictureCategory`,//获取图片空间列表(y)
	getPictureItems: `${base}goods/manage/picture/getPictureItems`, // 获取图片空间图片列表(y)
	getSellerCats:`${base}public/getSellerCats`, // 获取宝贝类目 (y)
	getPosterLabel: `${base}marketing/wireless/activitypage/getPosterLabel`,// 获取海报主题，标签，颜色 (y)
	getPosterTemplates: `${base}marketing/wireless/activitypage/getPosterTemplates`,// 获取所有的海报模板 (y)
	uploadPage: `${base}marketing/wireless/activitypage/uploadPage`,// 无线活动页上传本地图片到图片空间(y)

	getCoupons: `${base}promotion/coupon/ump/activity/getCoupons`,// 获取旺店宝优惠券(y)
	getPromotionCoupon: `${base}marketing/poster/plan/getPromotionCoupon`,// 获取官方优惠券(y)

	getPromotionMealPlan: `${base}marketing/meal/plan/getPlans`,// 搭配套餐计划(y)


	getPages: `${base}marketing/wireless/activitypage/getPages`, // 获取无线活动页所有计划

	getTemplate: `${base}marketing/wirelessnew/template/getTemplate`, // 获取无线活动页的模板信息,页面加载时调用（y）
	addtemplate: `${base}marketing/wirelessnew/template/addOrUpdateTemplate`, // 无线活动页保存到模板 (y)
	updatetemplate: '', // 无线活动页修改模板 （暂缺）
	getPagenew: `${base}marketing/wirelessnew/activitypage/getPage`, // 获取新版无线活动页计划详细信息(y)
	addPage: `${base}marketing/wirelessnew/activitypage/addPage`, // 无线活动页保存到计划 (y)
	updatePage: `${base}marketing/wirelessnew/activitypage/updatePage`, // 无线活动页更新计划(y)
}