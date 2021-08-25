let a = 100;
console.log(module.exports);
console.log(exports);
exports.a = 200;
exports = '指向其它区域';
module.exports = '123'