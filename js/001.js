console.log(1111111)
var test = function () {
  console.log(111122222)
}
window.onload = function () {
  var log = console.log.bind(console)
  var canvas = document.querySelector('#canvas')
  var context = canvas.getContext('2d')
  var x = 100
  var y = 120
  var img = new Image()
  img.src = '../images/paddle.png'
  img.onload = function () {
    context.drawImage(img, x, y, 100, 10)
  }
  window.addEventListener('keydown', function (event) {
    var k = event.key
    if (k == 'a') {
      x -= 10
      context.clearRect(0, 0, canvas.width, canvas.height)
      context.drawImage(img, x, y, 100, 10)
    }
    if (k == 'd') {
      x += 10
      context.clearRect(0, 0, canvas.width, canvas.height)
      context.drawImage(img, x, y, 100, 10)
    }
  })
  // setInterval(function(){
  //     // update x and y
  //     // draw
  //     context.clearRect(0, 0, canvas.width, canvas.height)
  //     context.drawImage(img, x, y, 100, 10)
  // }, 1000/30)
}
