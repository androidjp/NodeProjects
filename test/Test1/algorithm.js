function gcd(m,n){
	if (m<n) {
		[m,n] = [n,m];
	}
	if (n==0) {
		return m;
	}else{
		return gcd(n,m%n);
	}
}
///测试 gcd
// console.log(gcd(36,28));


function getNext(b){
	var len =  b.length;
	var next  = new Int8Array(len+1);
	var j  = 0;
	for (var i = 1; i < len; i++) {
		while(j>0 && b.charAt(i)!=b.charAt(j)) j = next[j];

		if (b.charAt(i) == b.charAt(j)) {
			j++;
			if ((i+1)<len && b.charAt(i+1)!=b.charAt(j))
				 next[i+1] = j;
			else 
				next[i+1] =next[j];
		}
	}

	console.log("next数组为："+next.toString());
	return next;
}

function kmp(a,b){
	var lenA = a.length;
	var lenB = b.length;
	var next = getNext(b);
	var j = 0;
	for (var i = 0; i < lenA; i++) {
		while(j>0 && a.charAt(i)!=b.charAt(j)) j=next[j];
		if (a.charAt(i) == b.charAt(j)) j++;
		if (j==lenB) {
			return i+1-j;///由于此时 i = lenA-1 , j= lenB , so i+1
		}
	}
	return -1;
}
///测试 kmp算法
// console.log(kmp('abbbcaabbcef','abbc'));

exports.gcd = gcd;
exports.kmp = kmp;


		