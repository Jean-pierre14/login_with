const tabs = document.querySelectorAll('.tab-item')
const tabContent = document.querySelectorAll('.content-tab')

function selected(e) {
    e.preventDefault();
    removeActive()
    removeActiveTab()
    this.classList.add('active')
    console.log(this.id)
    const tabContent = document.querySelector(`#${this.id}-content`)
    tabContent.classList.add('show')
}

function removeActive() {
    tabs.forEach(item => item.classList.remove('active'))
}

function removeActiveTab() {
    tabContent.forEach(item => item.classList.remove('show'))
}
tabs.forEach(item => item.addEventListener('click', selected))

const btns = document.querySelectorAll('.content-btn')
const content = document.querySelectorAll('.content')


btns.forEach(btn => btn.addEventListener('click', openModal))
console.log("js")

function openModal(e) {
    this.classList.add('active')
    contents.forEach(content => document.querySelector(`#${this.id}-modal`))
    alert('Modal opened ' + content)
}