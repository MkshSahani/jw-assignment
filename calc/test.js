
var stackarr = [];
 
var topp = -1;
 
function push(e) {
    topp++;
    stackarr[topp] = e;
}
 
function pop() {
    if (topp == -1)
        return 0;
    else {
        var popped_ele = stackarr[topp];
        topp--;
        return popped_ele;
    }
}
 
function operator(op) {
    if (op == '+' || op == '-' ||
        op == '^' || op == '*' ||
        op == '/' || op == '(' ||
        op == ')') {
        return true;
    }
    else
        return false;
}
 
function precedency(pre) {
    if (pre == '@' || pre == '(' || pre == ')') {
        return 1;
    }
    else if (pre == '+' || pre == '-') {
        return 2;
    }
    else if (pre == '/' || pre == '*') {
        return 3;
    }
    else if (pre == '^') {
        return 4;
    }
    else
        return 0;
}
 
function InfixtoPostfix(infix) {
 
    var postfix = [];
    var temp = 0;
    push('@');
    infixval = infix;
    for (var i = 0; i < infixval.length; i++) {
        var el = infixval[i];
        if (operator(el)) {
            if (el == ')') {
                while (stackarr[topp] != "(") {
                    postfix[temp++] = pop();
                }
                pop();
            }
            else if (el == '(') {
                push(el);
            }
 
            else if (precedency(el) > precedency(stackarr[topp])) {
                push(el);
            }
            else {
                while (precedency(el) <=
                    precedency(stackarr[topp]) && topp > -1) {
                    postfix[temp++] = pop();
                }
                push(el);
            }
        }
        else {
            postfix[temp++] = el;
        }
    }
    while (stackarr[topp] != '@') {
        postfix[temp++] = pop();
    }
 
    var st = "";
    for (var i = 0; i < postfix.length; i++)
        st += postfix[i];
    return st; 
}



function calculatePostFix(postfix_expresion) {
    if(stackarr != []) {
        stackarr = []; 
    }

    for(let i = 0; i < postfix_expresion.length; i++) {
     
        if(postfix_expresion[i] == " ") {
            continue; 
        }
     
        if(postfix_expresion[i] == "*") {
            var val1 = pop(); 
            var val2 = pop();
            push(val1 * val2); 
        } else if(postfix_expresion[i] == "+") {
            var val1 = pop(); 
            var val2 = pop();    
            push(val1 + val2); 
        } else if(postfix_expresion[i] == "-") {
            var val1 = pop(); 
            var val2 = pop();
            push(val1 - val2); 
        }  else if(postfix_expresion[i] == "/") {
            var val1 = pop(); 
            var val2 = pop();
            push(val1 / val2); 
        }
        else {
            push(parseInt(postfix_expresion[i])); 
        }
    }

    return pop(); 
}

var string_data = InfixtoPostfix("(2   +3)*4"); 
console.log(string_data); 

var data = calculatePostFix(string_data); 
console.log(data); 