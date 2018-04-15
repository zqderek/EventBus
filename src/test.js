function p(cb) {
       setTimeout(() => {
           console.log(new Date,"ok");
           cb && cb();
       }, 1000);
}
const sleep = (timeouts) => new Promise((resolve)=>{
	setTimeout(resolve,timeouts);
})

const test = async()=> {
	for(var i =0;i<3;i++) {
		await sleep(1000);
		console.log(new Date, 'dd');
		p();
	}
};

export default test;