var cache = [];

var map = new WeakMap();

function Test(key) {
  this.name = new Array(100).join(key);
}

var popManager = {
  open(url, params) {
    var win;
    var test;

    (function(r) {
      win;
      // test;
      // r();
    })();
    $().ready(function() {
      // console.log('ready run ');
    });
    // win = window.open(url, 'w-' + Date.now(), params);
    test = new Test((Math.random() * 100 | 1).toString(36));
    map.set(test, 'test');
    // var markDone = new Promise(resolve => {
    //   win.isPop = true;
    //   resolve();
    // });
    // var loadDone = new Promise(resolve => {
    //   // $(subWindow).on('load', function() {
    //   $().ready(function() {
    //     resolve();
    //   });
    // }); 
  }
};

$('.open').on('click', () => {
  // window.arr = new Array(10000).join('x');
  var url = 'sub.html';
  var openParams = 'toolbar=no, location=no, status=no, scrollbars=yes, resizable=yes, width=400, height=400';
  popManager.open(url, openParams);

});


// jquery 3x : then async ; 之前版本是 sync
// share closure