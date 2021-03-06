import Storage from "./utils/storage";
import Emitter from "./mixins/emitter";
import { deepMerge } from "./utils";

import "./common";

const install = (Vue, options = {}) => {
	// 配置数据
	let data = {
		// 首页页面路径
		homePage: "/",
	};

	let $cl = {
		...deepMerge(data, options),
		Storage,
		author: "cool",
		version: "1.5.1",
	};

	Vue.prototype.$cl = uni.$cl = $cl;
};

export { Emitter };

export default {
	install,
};
