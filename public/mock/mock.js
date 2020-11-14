const swiper = require("./cb-swiper.json");
const hotcat = require("./cookbook-hotcat.json");
const detail = require("./cookbook-detail.json");
const cate = require("./cookbook-category.json");
// 导出
//路由指定的名字要和导出文件名一致
module.exports = () => ({
    swiper,
    hotcat,
    detail,
    cate,
});
