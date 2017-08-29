console.log('AAAAAAAA');
setTimeout(function	waitOne(){

	console.log('step1');
},1000);
setTimeout(function	waitTwo(){
	console.log('step2');
},2000);
setTimeout(function	waitThree(){
	console.log('step3');
},3000);
setTimeout(function	waitFour(){
	console.log('step4');
},4000);
setTimeout(()=>{
	console.log('step0');
},0);

console.log('BBBBBBBBB');