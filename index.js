const displayBoard = document.querySelector('.display')
const baseUrl = 'https://www.thecolorapi.com/'

function renderHtml(colorShade) {
    return `
        <div class="diplay-color" style="background-color: ${colorShade};">
            <div class="color-info">
                <p>${colorShade}</p>
            </div>
        </div>
    `
}

function returnApiValue(url){
    fetch(url)
        .then(res => res.json())
        .then(data => {
            data.colors.forEach(myFunction)
            
            function myFunction(item) {
                displayBoard.innerHTML += renderHtml(item.hex.value)
            }   
        })
}

returnApiValue(baseUrl + 'scheme?hex=000000&mode=monochrome&count=6')

document.querySelector('button').addEventListener('click', function() {
    
    displayBoard.innerHTML = ''
    
    const colorSelected = document.querySelector('input')
    const modeSelected = document.querySelector('select')
    
    const endpoint = `scheme?hex=${colorSelected.value.slice(1)}&mode=${modeSelected.value}&count=6`
    const url = baseUrl + endpoint
    
    returnApiValue(url)
    
})