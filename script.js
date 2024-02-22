const text = document.getElementById('text')
const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')

btn1.addEventListener('click', function (){
    const inp1 = document.getElementById('inp1').value
    const inp2 = document.getElementById('inp2').value

    let num1 = parseFloat(inp1)
    let num2 = parseFloat(inp2)

    let sum1 = num2 + num1

    text.textContent = sum1
})

btn2.addEventListener('click', function (){
    const inp1 = document.getElementById('inp1').value
    const inp2 = document.getElementById('inp2').value

    let num1 = parseFloat(inp1)
    let num2 = parseFloat(inp2)

    let sum2 = num1 - num2

    text.textContent = sum2
})

btn3.addEventListener('click', function (){
    const inp1 = document.getElementById('inp1').value
    const inp2 = document.getElementById('inp2').value

    let num1 = parseFloat(inp1)
    let num2 = parseFloat(inp2)

    let sum3 = num2 * num1

    text.textContent = sum3
})

btn4.addEventListener('click', function (){
    const inp1 = document.getElementById('inp1').value
    const inp2 = document.getElementById('inp2').value

    let num1 = parseFloat(inp1)
    let num2 = parseFloat(inp2)

    let sum4 = num1 / num2

    text.textContent = sum4
})
