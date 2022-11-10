function display(val){
    document.getElementById("numbers1").value += val

    return val
}

function answer(){

    let x = document.getElementById("numbers1").value

    let y = eval(x);

    document.getElementById("numbers1").value = y

    return y
}

function screenClear(){
    document.getElementById("numbers1").value = ""
}