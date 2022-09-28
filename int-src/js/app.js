
const phraseOutput = document.querySelector('.phrase-output')
const phrases = [
  'please remain calm',
  'take it to make it',
  'yellow means yield',
  'obey posted limits',
  'no public access'
]
const animationDuration = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--anim-duration').split('s')[0]) * 1000
const phraseDelay = animationDuration / phrases.length
const displayPhrases = () => {
  let delay = 0

  phrases.forEach(phrase => {
    // Set timeout for when each phrase should be shown
    setTimeout(() => phraseOutput.textContent = phrase, delay)
    delay += phraseDelay
  })
}

displayPhrases()

setInterval(displayPhrases, (phrases.length * phraseDelay))
