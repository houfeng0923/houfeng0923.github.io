var theThing = null;
var replaceThing = function() {
  var originalThing = theThing;
  var unused = function() {
    if (originalThing)
      console.log("hi");
  };
  theThing = {
    longStr: new Array(1000000).join('*'),
    someMethod: function() {
      console.log(someMessage);
    }
  };
  //   node --expose-gc demo.js
  global.gc && global.gc();
  console.log(JSON.stringify(process.memoryUsage()));
};
setInterval(replaceThing, 1000);