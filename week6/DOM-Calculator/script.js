/*HTML DOCUMENT CREATION USING DOM*/

( function () {let calculator = document.createElement('div');calculator.setAttribute('class','calculator');

let output = document.createElement('div'); output.setAttribute('class', 'output');
    let previous = document.createElement('div'); previous.setAttribute('class', 'previous');
    let current = document.createElement('div'); current.setAttribute('class', 'current');
output.append(previous,current);
calculator.append(output);

let button = document.createElement('button'); button.setAttribute('class', 'span-two operator all-clear orarnge'); 
button.style='background-color:rgb(248, 166, 33) ';
button.innerText = 'AC';calculator.append(button);
button = document.createElement('button'); button.setAttribute('class', 'delete operator'); button.innerText = 'DEL';calculator.append(button);
button = document.createElement('button'); button.setAttribute('class', 'operator'); button.innerText = '÷';calculator.append(button);
button = document.createElement('button'); button.setAttribute('class', 'number'); button.innerText = '1';calculator.append(button);
button = document.createElement('button'); button.setAttribute('class', 'number'); button.innerText = '2';calculator.append(button);
button = document.createElement('button'); button.setAttribute('class', 'number'); button.innerText = '3';calculator.append(button);
button = document.createElement('button'); button.setAttribute('class', 'operator'); button.innerText = '*';calculator.append(button);
button = document.createElement('button'); button.setAttribute('class', 'number'); button.innerText = '4';calculator.append(button);
button = document.createElement('button'); button.setAttribute('class', 'number'); button.innerText = '5';calculator.append(button);
button = document.createElement('button'); button.setAttribute('class', 'number'); button.innerText = '6';calculator.append(button);
button = document.createElement('button'); button.setAttribute('class', 'operator'); button.innerText = '+';calculator.append(button);
button = document.createElement('button'); button.setAttribute('class', 'number'); button.innerText = '7';calculator.append(button);
button = document.createElement('button'); button.setAttribute('class', 'number'); button.innerText = '8';calculator.append(button);
button = document.createElement('button'); button.setAttribute('class', 'number'); button.innerText = '9';calculator.append(button);
button = document.createElement('button'); button.setAttribute('class', 'operator'); button.innerText = '-';calculator.append(button);
button = document.createElement('button'); button.setAttribute('class', 'number'); button.innerText = '.';calculator.append(button);
button = document.createElement('button'); button.setAttribute('class', 'number'); button.innerText = '0';calculator.append(button);
button = document.createElement('button'); button.setAttribute('class', 'span-two equals'); button.innerText = '=';calculator.append(button);

document.body.append(calculator);})();
/*HTML DOCUMENT CREATION USING DOM ENDS*/

/*JS DYNAMIC FUNCTIONALITY*/
class Calculator{
    constructor(prevDataTextElement, currentDataTextElement)
    {
        /*we are working with references any change which is made to prevDataTextElement is reflected in document*/
        this.prevDataTextElement = prevDataTextElement;
        this.currentDataTextElement = currentDataTextElement;
        this.clear();
    }

    /*clears out history and current data - clears screen*/
    clear(){
        this.prevData = '';
        this.currentData = '';
        this.operation = undefined;
    }

    /*removes the latest digit*/
    delete(){
        this.currentData = this.currentData.toString().slice(0,-1);

    }
    appendNumber(number){
        if(number==='.' && this.currentData.includes('.')) return ;
        this.currentData = this.currentData.toString()+number;
    }

    /*choosing the operation*/
    chooseOperation(operation){
        /*returns if user is directly selecting the operator without giving a number*/
        if(this.currentData==='') return; 

        if(this.prevData!==''){
            this.compute(); 
        }
        /*else execution starts*/

        this.operation = operation;
        this.prevData = this.currentData;
        this.currentData='';
    }

    /*core operation*/
    compute(){

        let computation;
        const prev = parseFloat(this.prevData);
        const current = parseFloat(this.currentData);

        if(isNaN(prev) || isNaN(current)) return;

        switch (this.operation) {
            case '+':
              computation = prev + current;
              break;
            case '-':
              computation = prev - current;
              break;
            case '*':
              computation = prev * current;
              break;
            case '÷':
              computation = prev / current;
              break;
            default:
              return;
          }
          this.currentData = computation;
          this.operation = undefined;
          this.prevData = ''; 
    }

    /*displaying the data*/
    updateDisplay(){
        this.currentDataTextElement.innerText = this.currentData;
        if(this.operation!=null){
            this.prevDataTextElement.innerText = this.prevData.toString()+this.operation;
            `${this.prevData} ${this.operation}`;
        }
        else {
            this.prevDataTextElement.innerText = '';
          }
    }
}

const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operator')
const prevDataTextElement = document.querySelector('.previous');
const currentDataTextElement = document.querySelector('.current');
const equalsButton = document.querySelector('.equals');
const deleteButton = document.querySelector('.delete')
const allClearButton = document.querySelector('.all-clear')

const calculator = new Calculator(prevDataTextElement, currentDataTextElement);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
    })
  })

  
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.chooseOperation(button.innerText)
      calculator.updateDisplay()
    })
  })

  equalsButton.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
  })
  allClearButton.addEventListener('click', button => {
  calculator.clear();
  calculator.updateDisplay();
})

deleteButton.addEventListener('click', button => {
  calculator.clear();
  calculator.updateDisplay();
})