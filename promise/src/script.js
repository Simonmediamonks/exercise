/**
 * loadImage load a image with a promise structure
 * @param url
 * @return {Promise<any>}
 */
function loadImage(url) {
  return new Promise(function(resolve, reject) {
    var img = document.createElement("img");
    img.onload = function() {
      resolve(this);
    };

    img.onerror = function(e) {
      reject(e);
    };

    img.src = url;
  });
}

/**
 * Animate a element to a position
 * @param {HTMLElement} element
 * @param {number} duration
 * @param {number} x
 * @param {number} y
 * @return {Promise<any>}
 */
function animate(element, duration, x, y) {
  return new Promise(function(resolve) {
    console.log(resolve);
    TweenLite.to(element, duration, { x: x, y: y, onComplete: resolve });
  });
}

var images = [
  "./assets/001-yawn.png",
  "./assets/002-wink.png",
  "./assets/003-smile-1.png",
  "./assets/004-smile.png",
  "./assets/005-surprise.png",
  "./assets/006-shocked.png",
  "./assets/007-sceptic.png",
  "./assets/008-sad-2.png",
  "./assets/009-sad-1.png",
  "./assets/010-happy-3.png",
  "./assets/011-pain.png",
  "./assets/012-muted.png",
  "./assets/013-meh.png",
  "./assets/014-laugh.png",
  "./assets/015-ill.png",
  "./assets/016-happy-2.png",
  "./assets/017-happy-1.png",
  "./assets/018-cute.png",
  "./assets/019-crying.png",
  "./assets/020-crazy.png",
  "./assets/021-cool.png",
  "./assets/022-bored.png",
  "./assets/023-blush.png",
  "./assets/024-sad.png",
  "./assets/025-happy.png"
];

/// WRITE CODE UNDER HERE

var i = 0;

function delay(interval) {
    return new Promise(function(resolve) {
        setTimeout(resolve, interval);
    });
}

images.forEach(function(entry) {
    //console.log(loadImage(entry));
    loadImage(entry).then(function(details) {
      document.getElementById("images").appendChild(details);
      details.style.visibility = "hidden";
      delay(4000*i)

      .then(function(resolve) {
        details.style.visibility = "visible";
        animate(details, 1, 100, 0);
        return delay(1000);
      })
      .then(function() {
          animate(details, 1, 100, 100);
          return delay(1000);
        })
      .then(function() {
          animate(details, 1, 0, 100);
          return delay(1000);
        })
      .then(function() {
          animate(details, 1, 0, 0);
          return delay(1000);
        })
      .then(function() {
          animate(details, 1, 0, 0);
          details.style.visibility = "hidden";
        });
      i++;
      //console.log(details);
    });

    loadImage(entry).then(null, function(error) {
      console.log("Nope");
    });
    
});