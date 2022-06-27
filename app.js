const subBtn = document.querySelector('.btn')
const tyCard = document.querySelector('.ty-card')
const feedbackCard = document.querySelector('.feedback-card')
const inputRatings = document.querySelectorAll('input[name="rating"]')
const ratingSelected = document.querySelector('.rating-selected')
const form = document.querySelector('form')

function init() {
  form.reset()
}

inputRatings.forEach((inputRating) => {
  inputRating.addEventListener('click', (e) => {
    const rating = e.currentTarget.value
    ratingSelected.innerHTML = rating

    console.log(inputRatings)

    for (let x = 0; x < inputRating.length; x++) {
      if ((inputRating[x].checked = true)) {
        inputRating[x].setAttribute('checked', false)
        rating.setAttribute('checked', true)
        ratingSelected.innerHTML = rating
      }
    }

    subBtn.addEventListener('click', (e) => {
      e.preventDefault()
      if ((inputRatings.checked = true)) {
        tyCard.classList.add('active')
        feedbackCard.classList.remove('active')
      }
         window.onload = init()
    })
  })
})

window.addEventListener('pageshow', () => {
  form.reset()
})



//
