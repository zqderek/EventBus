/*
* 构造函数
*/
import {addListener,triggerEmit,removeListener} from './init';
class EventEmeitter {
	constructor() {
		this._events = this._events || new Map(); // 储存事件/回调键值对
		this._maxListeners = this._maxListeners || 10; // 设置监听上限
	}
}

addListener(EventEmeitter)
triggerEmit(EventEmeitter)
removeListener(EventEmeitter)
export default EventEmeitter