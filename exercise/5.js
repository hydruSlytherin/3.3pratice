showNumbers(15);
function showNumbers(limit) {
  for (let i = 0;i<=limit;i++) {
    // if(i % 2 === 0){
    //   console.log(i+' even');
    // }
    // else{
    //   console.log(i+' odd');
    // }
    // 方法二
    const msg = (i % 2 === 0) ? 'even' : 'odd';
    console.log(i,msg);
  }
}