// DOM Elements
        const currentOperandElement = document.getElementById('currentOperand');
        const previousOperandElement = document.getElementById('previousOperand');
        const themeToggle = document.getElementById('themeToggle');
        
        // Calculator state
        let currentOperand = '0';
        let previousOperand = '';
        let operation = undefined;
        let memory = 0;
        let shouldResetScreen = false;
        
        // Format display number
        function formatDisplayNumber(number) {
            if (number === '') return '';
            
            const stringNumber = number.toString();
            const integerDigits = parseFloat(stringNumber.split('.')[0]);
            const decimalDigits = stringNumber.split('.')[1];
            
            let integerDisplay;
            
            if (isNaN(integerDigits)) {
                integerDisplay = '0';
            } else {
                integerDisplay = integerDigits.toLocaleString('en', {
                    maximumFractionDigits: 0
                });
            }
            
            if (decimalDigits != null) {
                return `${integerDisplay}.${decimalDigits}`;
            } else {
                return integerDisplay;
            }
        }
        
        // Update display
        function updateDisplay() {
            currentOperandElement.textContent = formatDisplayNumber(currentOperand);
            
            if (operation != null) {
                previousOperandElement.textContent = 
                    `${formatDisplayNumber(previousOperand)} ${operation}`;
            } else {
                previousOperandElement.textContent = '';
            }
        }
        
        // Reset calculator
        function resetCalculator() {
            currentOperand = '0';
            previousOperand = '';
            operation = undefined;
        }
        
        // Delete last digit
        function deleteDigit() {
            if (currentOperand === '0') return;
            
            if (currentOperand.length === 1) {
                currentOperand = '0';
            } else {
                currentOperand = currentOperand.toString().slice(0, -1);
            }
        }
        
        // Append number
        function appendNumber(number) {
            if (shouldResetScreen) {
                currentOperand = '';
                shouldResetScreen = false;
            }
            
            if (number === '.' && currentOperand.includes('.')) return;
            
            if (currentOperand === '0' && number !== '.') {
                currentOperand = number;
            } else {
                currentOperand = currentOperand.toString() + number;
            }
        }
        
        // Choose operation
        function chooseOperation(op) {
            if (currentOperand === '') return;
            
            if (previousOperand !== '') {
                calculate();
            }
            
            operation = op;
            previousOperand = currentOperand;
            shouldResetScreen = true;
        }
        
        // Calculate
        function calculate() {
            let computation;
            const prev = parseFloat(previousOperand);
            const current = parseFloat(currentOperand);
            
            if (isNaN(prev) || isNaN(current)) return;
            
            switch (operation) {
                case '+':
                    computation = prev + current;
                    break;
                case '-':
                    computation = prev - current;
                    break;
                case '×':
                    computation = prev * current;
                    break;
                case '÷':
                    if (current === 0) {
                        computation = 'Error';
                    } else {
                        computation = prev / current;
                    }
                    break;
                case '%':
                    computation = prev % current;
                    break;
                default:
                    return;
            }
            
            if (computation === 'Error') {
                currentOperand = computation;
                previousOperand = '';
                operation = undefined;
                shouldResetScreen = true;
            } else {
                currentOperand = computation.toString();
                operation = undefined;
                previousOperand = '';
                shouldResetScreen = true;
            }
        }
        
        // Handle percentage
        function handlePercentage() {
            if (currentOperand === '') return;
            
            const current = parseFloat(currentOperand);
            currentOperand = (current / 100).toString();
        }
        
        // Memory functions
        function handleMemory(action) {
            switch (action) {
                case 'mc':
                    memory = 0;
                    break;
                case 'mr':
                    currentOperand = memory.toString();
                    shouldResetScreen = true;
                    break;
                case 'm-plus':
                    memory += parseFloat(currentOperand);
                    break;
                case 'm-minus':
                    memory -= parseFloat(currentOperand);
                    break;
            }
        }
        
        // Handle keyboard input
        function handleKeyboardInput(e) {
            if ((e.key >= '0' && e.key <= '9') || e.key === '.') {
                appendNumber(e.key);
            } else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
                let op;
                switch (e.key) {
                    case '+': op = '+'; break;
                    case '-': op = '-'; break;
                    case '*': op = '×'; break;
                    case '/': op = '÷'; break;
                }
                chooseOperation(op);
            } else if (e.key === 'Enter' || e.key === '=') {
                e.preventDefault();
                calculate();
            } else if (e.key === 'Backspace') {
                deleteDigit();
            } else if (e.key === 'Escape' || e.key === 'c' || e.key === 'C') {
                resetCalculator();
            } else if (e.key === '%') {
                handlePercentage();
            }
            
            updateDisplay();
        }
        
        // Toggle theme
        function toggleTheme() {
            document.body.classList.toggle('dark-theme');
            
            if (document.body.classList.contains('dark-theme')) {
                themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            } else {
                themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            }
        }
        
        // Event Listeners
        document.querySelectorAll('[data-number]').forEach(button => {
            button.addEventListener('click', () => {
                appendNumber(button.getAttribute('data-number'));
                updateDisplay();
            });
        });
        
        document.querySelectorAll('[data-operation]').forEach(button => {
            button.addEventListener('click', () => {
                chooseOperation(button.getAttribute('data-operation'));
                updateDisplay();
            });
        });
        
        document.querySelectorAll('[data-action]').forEach(button => {
            button.addEventListener('click', () => {
                const action = button.getAttribute('data-action');
                
                switch (action) {
                    case 'calculate':
                        calculate();
                        break;
                    case 'clear':
                        resetCalculator();
                        break;
                    case 'delete':
                        deleteDigit();
                        break;
                    case 'percent':
                        handlePercentage();
                        break;
                    default:
                        handleMemory(action);
                        break;
                }
                
                updateDisplay();
            });
        });
        
        themeToggle.addEventListener('click', toggleTheme);
        document.addEventListener('keydown', handleKeyboardInput);
        
        updateDisplay();