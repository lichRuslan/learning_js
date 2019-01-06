function valid(form) {
    let fail = false;
    let email = form.email.value;
    let name = form.name.value;
    let password = form.password.value;
    let rePassword = form.rePassword.value;
    let state = form.state.value;
    // let adr_pattern = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;
    // let adr_pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let adr_pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    if (email == "" || email=="  ")
        fail = "Выне ввели Email";
    else if(adr_pattern.test(email) == false)
        fail = "Вы не верно ввели Email! ";
    else if (name == "" || name == " ")
        fail = "Вы не ввели своё имя!_";
    else if (password == "" || password == " ")
        fail = "Вы не ввели пароль!_ ";
    else if (rePassword == "" || rePassword == " ")
        fail = "Вы не потвердили пароль!";
    else if (rePassword != password)
        fail = "Пароли не совподают!";
    else if (state == "")
        fail = "Укажите пол!";  

    if (fail){
        alert(fail);
        return false;
    } 
    else
        window.location = "https://nodejs.org";

}