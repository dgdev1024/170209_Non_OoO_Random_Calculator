function getRandomFloat (a_min, a_max)
{
    return Math.random() * (a_max - a_min) + a_min;
}

function getRandomInt (a_min, a_max)
{
    a_min = Math.ceil(a_min);
    a_max = Math.floor(a_max);

    return Math.floor(Math.random() * (a_max - a_min + 1)) + a_min;
}

function enclose (a_number)
{
    if (a_number < 0)
    {
        return "(" + a_number + ")";
    }

    return a_number.toString();
}

function generateRandomEquation ()
{
    var l_numbers = getRandomInt(2, 10);
    var l_operations = l_numbers - 1;

    var l_numberArray = [];
    var l_opArray = [];

    for (var i = 0; i < l_numbers; ++i)
    {
        var l_number = getRandomInt(1, 100);
        var l_invert = getRandomInt(0, 1);

        if (l_invert === 0)
            l_numberArray.push(-l_number);
        else
            l_numberArray.push(l_number);
    }

    for (var i = 0; i < l_operations; ++i)
    {
        l_opArray.push(getRandomInt(0, 3));
    }

    var l_result = l_numberArray[0];
    var l_string = l_numberArray[0];
    for (var i = 1; i < l_numbers; ++i)
    {
        switch (l_opArray[i - 1])
        {
        case 0:
            l_result += l_numberArray[i];
            l_string += " + " + enclose(l_numberArray[i]);
            break;
        case 1:
            l_result -= l_numberArray[i];
            l_string += " - " + enclose(l_numberArray[i]);
            break;
        case 2:
            l_result *= l_numberArray[i];
            l_string += " * " + enclose(l_numberArray[i]);
            break;
        case 3:
            l_result /= l_numberArray[i];
            l_string += " / " + enclose(l_numberArray[i]);
            break;
        }
    }

    l_string += " = " + l_result;
    return l_string;
}

$(document).ready(function () {
    $("#btn-generate").click(function () {
        $("#equations").append(
            "<p>" + generateRandomEquation() + "</p>"
        );
    });
});
