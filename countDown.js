// Salvar ultimo tema do usuario
const click = new Audio("./audio/click.mp3")
const alarm = new Audio("./audio/alarm.mp3")

const section = document.querySelector("section#timer")

let minutesElement = document.querySelector(
  "#countDown input:nth-child(1)"
).value

let minutesInput = document.querySelector("#countDown input:nth-child(1)")
let secondsInput = document.querySelector("#countDown input:nth-child(2)")

let secondsElement = document.querySelector(
  "#countDown input:nth-child(2)"
).value

let pomodoroRepeat
let pomodoroIsRunning = false

function setDateOnScreen(minutes, seconds) {
  const displayDate = (document.querySelector(
    "#countDown"
  ).innerHTML = `<input type="text" id="minutes" disabled value="${formatDate(
    minutes
  )}" />:<input type="text" id="minutes" disabled value="${formatDate(
    seconds
  )}" />`)
}

function toggleTheme() {
  document.body.classList.toggle("dark")
}

function startPomo() {
  const minutesElement = document.querySelector(
    "#countDown input:nth-child(1)"
  ).value
  const secondsElement = document.querySelector(
    "#countDown input:nth-child(2)"
  ).value

  countDownMinutes = minutesElement
  countDownSeconds = secondsElement

  pomodoroIsRunning = true

  section.classList.add("timer-active")

  click.play()
  pomodoroRepeat = setInterval(() => {
    if (countDownSeconds == 0 && countDownMinutes == 0) {
      section.classList.remove("timer-active")
      clearInterval(pomodoroRepeat)
      return
    }
    countDownSeconds--
    if (countDownSeconds <= 0) {
      if (countDownMinutes > 0) {
        countDownMinutes--
        countDownSeconds = 59
      } else {
        alarm.play()
        stopPomo()
      }
    }
    uptadeTitle(`${countDownMinutes}:${countDownSeconds}`)
    setDateOnScreen(countDownMinutes, countDownSeconds)
  }, 1000)
}

function stopPomo() {
  click.play()
  section.classList.remove("timer-active")
  clearInterval(pomodoroRepeat)
  pomodoroIsRunning = false
  minutesInput.removeAttribute("disabled")
  secondsInput.removeAttribute("disabled")
}

function formatDate(date) {
  return date < 10 ? "0" + date : date
}

function addTime() {
  minutesElement
  if (!pomodoroIsRunning) {
    // if(minutesElement ) {

    // }
    setDateOnScreen(parseInt(minutesElement) + 5, 00)
    uptadeDateValue()
  }
}

function removeTime() {
  console.log(minutesElement)
  if (minutesElement == 00) {
    return
  }
  if (!pomodoroIsRunning) {
    setDateOnScreen(parseInt(minutesElement) - 5, 00)
  }
  uptadeDateValue()
}

function clearCountDown() {
  setDateOnScreen(30, 00)
  toggleInput()
  stopPomo()
}

function uptadeDateValue() {
  minutesElement = document.querySelector("#countDown input:nth-child(1)").value
  secondsElement = document.querySelector("#countDown input:nth-child(2)").value
}

function uptadeTitle(newDate) {
  document.querySelector("title").textContent = `${newDate} - Pomodoro`
}
