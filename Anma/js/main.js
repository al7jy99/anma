var counter = 0;

var start = document.querySelector("#start")
var startBtn = document.querySelector('.start-btn')
var errorMsg = start.querySelector(".error-msg")

var question1 = document.querySelector("#question1")
var clickToQ2 = document.querySelector(".clickToQ2")

var question2 = document.querySelector("#question2")
var clickToQ3 = document.querySelector(".clickToQ3")

var question3 = document.querySelector("#question3")
var clickToQ4 = document.querySelector(".clickToQ4")

var question4 = document.querySelector("#question4")
var clickToQ5 = document.querySelector(".clickToQ5")

var question5 = document.querySelector("#question5")
var clickToQ6 = document.querySelector(".clickToQ6")

var question6 = document.querySelector("#question6")
var clickToQ61 = document.querySelector(".clickToQ61")

var question61 = document.querySelector("#question61")
var clickToQ62 = document.querySelector(".clickToQ62")

var question62 = document.querySelector("#question62")
var clickToQ63 = document.querySelector(".clickToQ63")

var question63 = document.querySelector("#question63")
var clickToQ64 = document.querySelector(".clickToQ64")

var question65 = document.querySelector("#question65")
var clickToQ65 = document.querySelector(".clickToQ65")
var clickToQ66 = document.querySelector(".clickToQ66")
var question66 = document.querySelector("#question66")

var clickToQ7 = document.querySelector(".clickToQ7")
var question7 = document.querySelector("#question7")
var clickToResult = document.querySelector(".clickToResult")

var result = document.querySelector("#result")

var errorMessage1 = "الرجاء إدخال "
var errorMessage2 = "الرجاء الأختيار"
/* ========================================================================== */

var userName = "" ;
var userName1 = "" ; 
var userName2 = "" ; 
var userName3 = "" ; 
var userName4 = "" ; 
var userName5 = "" ; 
var userName6 = "" ; 
var userName7 = "" ; 
var userName8 = "" ; 


startBtn.onclick = () => {
        userName = start.querySelector('input[name="userName"]').value;
	    userName1 = start.querySelector('input[name="userName1"]').value;
		userName2 = start.querySelector('input[name="userName2"]').value;
		userName3 = start.querySelector('input[name="userName3"]').value;
		userName4 = start.querySelector('input[name="userName4"]').value;
		userName5 = start.querySelector('input[name="userName5"]').value;
		userName6 = start.querySelector('input[name="userName6"]').value;
		userName7 = start.querySelector('input[name="userName7"]').value;
		userName8 = start.querySelector('input[name="userName8"]').value;
    console.log(userName)
    console.log(userName2)
    if (userName.trim() != "") {
        start.style.display = 'none'
        question1.style.display = 'block'
    } else {
        errorMsg.innerHTML = errorMessage1
    }
}

clickToQ2.onclick = () => {
    errorMsg = question1.querySelector(".error-msg")
    var val = question1.querySelector('input[name="options"]:checked');
    if (val != null) {
        var points = parseInt(val.value);
        counter += points
        question1.style.display = 'none'
        question2.style.display = 'block'
        console.log(counter)
    } else {
        errorMsg.innerHTML = errorMessage2
    }
}

clickToQ3.onclick = () => {
    errorMsg = question2.querySelector(".error-msg")
    var val = question2.querySelector('input[name="options"]:checked');
    if (val != null) {
        var points = parseInt(val.value);
        counter += points
        question2.style.display = 'none'
        question3.style.display = 'block'
        console.log(counter)

    } else {
        errorMsg.innerHTML = errorMessage2
    }
}

clickToQ4.onclick = () => {
    errorMsg = question3.querySelector(".error-msg")
    var val = question3.querySelector('input[name="options"]:checked');
    if (val != null) {
        var points = parseInt(val.value);
        counter += points
        question3.style.display = 'none'
        question4.style.display = 'block'
        console.log(counter)

    } else {
        errorMsg.innerHTML = errorMessage2
    }
}

clickToQ5.onclick = () => {
    errorMsg = question4.querySelector(".error-msg")
    var val = question4.querySelector('input[name="options"]:checked');
    if (val != null) {
        var points = parseInt(val.value);
        counter += points
        question4.style.display = 'none'
        question5.style.display = 'block'
        console.log(counter)

    } else {
        errorMsg.innerHTML = errorMessage2
    }
}

clickToQ6.onclick = () => {
    errorMsg = question5.querySelector(".error-msg")
    var val = question5.querySelector('input[name="options"]:checked');
    if (val != null) {
        var points = parseInt(val.value);
        counter += points
        question5.style.display = 'none'
        question6.style.display = 'block'
        console.log(counter)

    } else {
        errorMsg.innerHTML = errorMessage2
    }
}

clickToQ61.onclick = () => {
    errorMsg = question6.querySelector(".error-msg")
    var val = question6.querySelector('input[name="options"]:checked');
    if (val != null) {
        var points = parseInt(val.value);
        counter += points
        question6.style.display = 'none'
        question61.style.display = 'block'
        console.log(counter)

    } else {
        errorMsg.innerHTML = errorMessage2
    }
}

clickToQ62.onclick = () => {
    errorMsg = question61.querySelector(".error-msg")
    var val = question61.querySelector('input[name="options"]:checked');
    if (val != null) {
        var points = parseInt(val.value);
        counter += points
        question61.style.display = 'none'
        question62.style.display = 'block'
        console.log(counter)

    } else {
        errorMsg.innerHTML = errorMessage2
    }
}
clickToQ63.onclick = () => {
    errorMsg = question62.querySelector(".error-msg")
    var val = question62.querySelector('input[name="options"]:checked');
    if (val != null) {
        var points = parseInt(val.value);
        counter += points
        question62.style.display = 'none'
        question63.style.display = 'block'
        console.log(counter)

    } else {
        errorMsg.innerHTML = errorMessage2
    }
}

clickToQ64.onclick = () => {
    errorMsg = question63.querySelector(".error-msg")
    var val = question63.querySelector('input[name="options"]:checked');
    if (val != null) {
        var points = parseInt(val.value);
        counter += points
        question63.style.display = 'none'
        question64.style.display = 'block'
        console.log(counter)

    } else {
        errorMsg.innerHTML = errorMessage2
    }
}

clickToQ65.onclick = () => {
    errorMsg = question64.querySelector(".error-msg")
    var val = question64.querySelector('input[name="options"]:checked');
    if (val != null) {
        var points = parseInt(val.value);
        counter += points
        question64.style.display = 'none'
        question65.style.display = 'block'
        console.log(counter)

    } else {
        errorMsg.innerHTML = errorMessage2
    }
}

clickToQ66.onclick = () => {
    errorMsg = question65.querySelector(".error-msg")
    var val = question65.querySelector('input[name="options"]:checked');
    if (val != null) {
        var points = parseInt(val.value);
        counter += points
        question65.style.display = 'none'
        question66.style.display = 'block'
        console.log(counter)

    } else {
        errorMsg.innerHTML = errorMessage2
    }
}
clickToQ7.onclick = () => {
    errorMsg = question6.querySelector(".error-msg")
    var val = question6.querySelector('input[name="options"]:checked');
    if (val != null) {
        var points = parseInt(val.value);
        counter += points
        question6.style.display = 'none'
        question7.style.display = 'block'
        console.log(counter)

    } else {
        errorMsg.innerHTML = errorMessage2
    }
}

clickToResult.onclick = () => {
    errorMsg = question7.querySelector(".error-msg")
    var val = question7.querySelector('input[name="options"]:checked');
    if (val != null) {
        var points = parseInt(val.value);
        counter += points
        question7.style.display = 'none'
        result.style.display = 'block'
        var shareMessage = ""
        var twitterResultMessage = ""
        var whatsappResultMessage = ""
        var whatsappLink = ""
        var twitterLink = ""
        var str = ""
        var joinus = ' تنمتى ان الاختبار نال على رضاك '
        if (counter >= 35) {
            str = " الطفل بخير و نعمة "
           
          
          
        } else if (counter <= 25 && counter >= 15 ) {
            str = " الطفل بحاجة لمراقبة "
           
        } else if (counter <= 10) {
            str = "  الطفل بحاجة لعلاج "
          
        }
        document.querySelector(".show-result").innerHTML = str
        document.querySelector('.show-result').innerHTML += shareMessage
        document.querySelector('.show-result').innerHTML += joinus
        console.log(counter)
    } else {
        errorMsg.innerHTML = errorMessage2
    }
}