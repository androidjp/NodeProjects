function bubbleSort(data){
	if (data == null||data==undefined ||data.lenght ==0) {
		console.err("参数无效！");
	}
	for (var i = 0; i < data.length-1; i++) {
		var isSwap = false;
		for (var j = data.length-1;j>i;j--) {
			if (data[j]<data[j-1]) {
				//swap
				var temp = data[j-1];
				data[j-1] = data[j];
				data[j] = temp;
				isSwap = true;///表示需要交换
			}
		}
		if (!isSwap) 
			return;
	}
}
///测试一波！
var arr = [2,1,4,5,-1];
console.log(arr);
bubbleSort(arr);
console.log(arr);
