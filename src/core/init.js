// 监听名为type的事件
export function addListener(Emeitter) {
	// 监听名为type的事件
	Emeitter.prototype.addListener = function(type,fn){
		// 将type事件以及对应的fn函数放入this._events中储存
		const handler = this._events.get(type);  // 获取对应事件名称的函数清单
		if(!handler){
			this._events.set(type, fn);
		}else if(handler && typeof handler === 'function'){
			this._events.set(type, [handler,fn]); // 多个监听者我们需要用数组储存
		}else {
			handler.push(fn); // 已经有多个监听者,那么直接往数组里push函数即可
		}
		
	}
}
// 触发名为type的事件
export function triggerEmit(Emeitter) {
	Emeitter.prototype.triggerEmit = function(type, ...args){
		let handler;
		// 从储存事件键值对的this._events中获取对应事件回调函数
		handler = this._events.get(type);
		if(Array.isArray(handler)) {
			// 如果是一个数组说明有多个监听者,需要依次此触发里面的函数
			for(let i=0; i<handler.length;i++) {
				if(args.length > 0) {
					handler.apply(this, args);
				}else{
					handler.call(this);
				}
			}
		}else{
			// 单个函数的情况我们直接触发即可
			if(args.length > 0) {
				handler.apply(this, args);
			}else{
				handler.call(this);
			}
		}
		return true;
	}
	
}
// 移除绑定的事件
export function removeListener(Emeitter) {
	Emeitter.prototype.removeListener = function(type,fn) {
		let handler;
		handler = this._events.get(type);
		//判断绑定的事件队列
		if(Array.isArray(handler)) {
			for(let i =0;i<handler.length;i++){
				if(handler[i] === fn){
					handler.splice(i,1)
				}
			}
			// 如果清除后只有一个函数,那么取消数组,以函数形式保存
			if(handler.length == 1){
				this._events.set(type,handler[0])
			}
		}else if(handler && typeof handler ==='function'){
			this._events.delete(type);
		}else{
			return this;
		}
	}
}