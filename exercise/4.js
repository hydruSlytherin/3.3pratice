checkSpeed(180);
function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed <speedLimit + kmPerPoint) {
    console.log('ok');
    return;
  }
  let point = Math.floor((speed - speedLimit)/ kmPerPoint);
  
  const maxPoint = 12;
  if(point >= maxPoint)
  console.log('License suspended');
  else
  console.log('Point:'+point);
}