
// read these fields from harddisk instead
var user = 'root';
var psw = 'root';
var url = 'ds237389.mlab.com:37389/coj-db';
const getConnectionString = () => {
  var str = 'mongodb://root:root@ds237389.mlab.com:37389/coj-db';
  // var str = `mongodb://${user}:${psw}@${url}`;
  console.log(`conection string: ${str}`);
  return str;
}




module.exports = {
  getConnectionString
}
