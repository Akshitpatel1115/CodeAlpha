let expression = "";

$(document).ready(function () {

    $(document).keydown(function (e) {
        let key = e.key;
        
        if (key === "Enter") {
            handleInputs("=");
        }
        else if (key === "Backspace") {
            handleInputs("<-");
        }
        else if (key === "Escape") {
            handleInputs("C");
        }
        else if ("0123456789+-*/.".includes(key)) {
            handleInputs(key);
        }
    });

    $(".btn").click(function () {
        let value = $(this).text();
        handleInputs(value);
    });
});

function handleInputs(value) {
    if (value === "=") {
        calculate();
    } else if (value === "C") {
        expression = "";
    } else if (value === "<-") {
        expression = expression.slice(0, -1);
    } else {
        expression += value;
    }

    $(".screen").text(expression);
}

function calculate() {
    try {
        let result = eval(expression);
        expression = result.toString();
    } catch {
        expression = "Error";
    }
}