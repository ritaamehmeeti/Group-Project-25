+function validation(){
    var name = document.getElementById("name");
    var valid_name_regex = /^[A-Za-z]+$/;

    if(name.matches(valid_name_regex)){
        return true;
    }else{

        document.getElementById("name_error").style.visibility="visible";
        document.getElementById("name").style.borderColor="red";
        return false;
    }

}


+function validation(){
    var age = document.getElementById("age");
    var valid_age_regex = /^[A-Za-z]+$/;

    if(age.matches(valid_age_regex)){
        return true;
    }else{

        document.getElementById("age_error").style.visibility="visible";
        document.getElementById("age").style.borderColor="red";
        return false;
    }

}