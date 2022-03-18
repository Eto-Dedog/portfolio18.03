const TabButtons = document.querySelectorAll('.design-list__item')
const tabDescriptions = document.querySelectorAll('.design-descr')
const tabImages = document.querySelectorAll('.design-images')

const changeContent = (array, value) => {
  array.forEach ((elem) => {
    if (elem.dataset.tabsField === value) {
      elem.classList.remove('hidden')
    } else {
      elem.classList.add('hidden')
    }
  })
}

TabButtons.forEach((tabButton, index) => {
  tabButton.addEventListener('click', (event) => {
    const dataValue = tabButton.dataset.tabsHandler

    changeContent(tabDescriptions, dataValue)
    changeContent(tabImages, dataValue)

    TabButtons.forEach((btn) => {
      if (btn === event.target) {
        btn.classList.add('design-list__item_active')
      } else {
        btn.classList.remove('design-list__item_active')
      }
    })
  })
})