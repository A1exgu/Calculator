class = Calculator {
    constructor (previousOperatorTextElement, currentOperatorTextElement){
        this.previousOperatorTextElem = previousOperatorTextElem
        this.currentOperatorTextElement = currentOperatorTextElement
        this.clear
    }
    clear() {
        this.currentOperator = ''
        this.previousOperator = ''
        this.operation = undefined

    }
    delete() {

    }
    appendNumber(number) {
        this.currentOperator = this.currentOperator.toString() + number.toString()
 
    }
    chooseOperation(operation){

    }
    compute() {

    }
    updateDisplay() {
        this.currentOperatorTextElement.innerText = this.currentOperator

    }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperatorTextElement = document.querySelector('[data-previous-operator]')
const currentOperatorTextElement = document.querySelector('[data-current-operator]')

const calculator = new Calculator(previousOperatorTextElement, currentOperatorTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () =>{
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})
