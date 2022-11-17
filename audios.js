let repeatForest
let isPlayingForest = false
let isPlayingRain = false
let isPlayingCafeteria = false
let isPlayingFire = false

function toggleForestSound(buttonElement) {
  const forestSound = document.querySelector("#forestSound")
  buttonElement.classList.toggle("selected")

  if (isPlayingForest) {
    forestSound.pause()
    isPlayingForest = false
  } else {
    forestSound.play()
    isPlayingForest = true
  }
}

function toggleRainSound(buttonElement) {
  const rainSound = document.querySelector("#rainSound")
  buttonElement.classList.toggle("selected")

  if (isPlayingRain) {
    rainSound.pause()
    isPlayingRain = false
  } else {
    rainSound.play()
    isPlayingRain = true
  }
}

function toggleCafeteriaSound(buttonElement) {
  const cafeteriaSound = document.querySelector("#cafeteriaSound")
  buttonElement.classList.toggle("selected")

  if (isPlayingCafeteria) {
    cafeteriaSound.pause()
    isPlayingCafeteria = false
  } else {
    cafeteriaSound.play()
    isPlayingCafeteria = true
  }
}

function toggleFireSound(buttonElement) {
  const fireSound = document.querySelector("#fireSound")
  buttonElement.classList.toggle("selected")

  if (isPlayingFire) {
    fireSound.pause()
    isPlayingFire = false
  } else {
    fireSound.play()
    isPlayingFire = true
  }
}
