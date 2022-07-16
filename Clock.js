const clockDiv = document.getElementById("clock");


function getTime() {
  let now = new Date();
  let month = number(now.getMonth());
  let hour = number(now.getHours()); //시 0-23시
  let minute = number(now.getMinutes()); //분 0-59분
  let second = number(now.getSeconds()); //초 0-59초
  let noon = "오전"; //오전 오후
  if (hour > 11) {
    noon = "오후";
    if(hour > 12) {hour = hour - 12;} // 1시면 시간 12빼기
  }
  else

  if (now.getHours() == 0) {
    hour = 12;
  }
 
  clockDiv.textContent = noon + " " + hour + ":" + minute + ":" + second; //출력
}
getTime();
setInterval(getTime, 1000); //반복

function number(num) {
  if (num < 10) {
    return "0" + num;
  }
  return num;
}
  
//  if (hour < 10) {hour = "0" + hour;} //시간이 10보다 작으면 앞에 0
//  if (minute < 10) {minute = "0" + minute;} //분이 10보다 작으면 앞에 0
//  if (second < 10) {second = "0" + second;} //초이 10보다 작으면 앞에 0
//을 전부 앞축