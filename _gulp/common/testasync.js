const fs = require('fs');
const md5 = require("md5");


function run(gen) {
  var gen_obj = gen(resume);
  function resume() {
    var err = arguments[0];
    if (err && err instanceof Error) {
      return gen_obj.throw(err);
    }
    var data = arguments[1];
    gen_obj.next(data);
  }
  gen_obj.next();
}

run(function* gen(resume) {
  let ret;
  try {
    ret = yield fs.readFile('./gulp/common/writeFilesMd5.js', resume);
    console.log(md5(ret));
  } catch (e) {
    console.log(e);
  } finally {
    console.log('finally');
  }
});
