var x = setInterval(function setCount() {
  document.querySelectorAll()
  var countdown = new Date('01 01, 2021').getTime()

  var now = new Date().getTime();

  var count = countdown - now

  var days = Math.floor(count / (1000 * 60 * 60 * 24))
  var hours = Math.floor((count % (1000 * 60 * 60 * 24))/(1000 * 60 * 60))
  var minutes = Math.floor((count % (1000 * 60 * 60))/(1000 * 60))
  var seconds = Math.floor((count % (1000 * 60 ))/(1000 ))

  var result = (`D ${days} H ${hours} M ${minutes} S ${seconds}`)

  document.getElementById("result").innerText = result
}, 1000)