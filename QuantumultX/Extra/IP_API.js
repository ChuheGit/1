// http://api.live.bilibili.com/ip_service/v1/ip_service/get_ip_addr
if ($response.statusCode != 200) {
  $done(null);
}

function City_ValidCheck(para) {
  if(para) {
  return para
  } 
}

function ISP_ValidCheck(para) {
  if(para) {
  return para
  } 
}

function Area_check(para) {
  if(para=="中华民国"){
  return "台湾"
  } else
  {
  return para
  }
}

var body = $response.body;
var obj = JSON.parse(body)["data"];
var title = City_ValidCheck(obj['province']);//+Area_check(obj['country']);
var subtitle = ISP_ValidCheck(obj['isp']) + " ➠ "+ obj['country'];
var ip = obj['addr']; 
var description = '服务商:'+obj['isp'] + '\n'+'定位: [' +obj["latitude"]+","+obj["longitude"]+"]"+ '\n' + 'IP:'+ obj['addr'] + '\n' +'时区:'+ obj['timezone'];
$done({title, subtitle, ip, description});