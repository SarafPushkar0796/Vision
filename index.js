// const obj = document.getElementsByClassName("target");

const randomX = random(10, 20);
const randomY = random(20, 30);
const randomDelay = random(0, 1);
const randomTime = random(3, 5);
const randomTime2 = random(5, 10);
const randomAngle = random(8, 12);

const circleTwo = document.getElementById("circle-2");
TweenLite.set(circleTwo, {
  x: randomX(-1),
  y: randomX(1),
  rotation: randomAngle(-1)
});

moveX(circleTwo, 1);
moveY(circleTwo, -1);
rotate(circleTwo, 1);

const circleThree = document.getElementById("circle-3");
TweenLite.set(circleThree, {
  x: randomX(-1),
  y: randomX(1),
  rotation: randomAngle(-1)
});

moveX(circleThree, 1);
moveY(circleThree, -1);
rotate(circleThree, 1);

const group = document.getElementById("group");
TweenLite.set(group, {
  x: randomX(-1),
  y: randomX(1),
  rotation: randomAngle(-1)
});

moveX(group, 1);
moveY(group, -1);
rotate(group, 1);

const triangleOne = document.getElementById("triangle-1");
TweenLite.set(triangleOne, {
  x: randomX(-1),
  y: randomX(1),
  rotation: randomAngle(-1)
});

moveX(triangleOne, 1);
moveY(triangleOne, -1);
rotate(triangleOne, 1);

const triangleTwo = document.getElementById("triangle-2");
TweenLite.set(triangleTwo, {
  x: randomX(-1),
  y: randomX(1),
  rotation: randomAngle(-1)
});

moveX(triangleTwo, 1);
moveY(triangleTwo, -1);
rotate(triangleTwo, 1);

function rotate(target, direction) {
  
  TweenLite.to(target, randomTime2(), {
    rotation: randomAngle(direction),
    ease: Sine.easeInOut,
    onComplete: rotate,
    onCompleteParams: [target, direction * -1]
  });
}

function moveX(target, direction) {
  
  TweenLite.to(target, randomTime(), {
    x: randomX(direction),
    ease: Sine.easeInOut,
    onComplete: moveX,
    onCompleteParams: [target, direction * -1]
  });
}

function moveY(target, direction) {
  
  TweenLite.to(target, randomTime(), {
    y: randomY(direction),
    ease: Sine.easeInOut,
    onComplete: moveY,
    onCompleteParams: [target, direction * -1]
  });
}

function random(min, max) {
  const delta = max - min;
  return (direction = 1) => (min + delta * Math.random()) * direction;
}