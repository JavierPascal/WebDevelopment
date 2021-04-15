var email, person_name, age, matricula, living_place, 
profession, university, career_year, phone, motivation

window.onload = function(){
    email = localStorage.getItem("email")
    person_name = localStorage.getItem("person_name")
    age = localStorage.getItem("age")
    matricula = localStorage.getItem("matricula")
    living_place = localStorage.getItem("living_place")
    profession = localStorage.getItem("profession")
    university = localStorage.getItem("university")
    career_year = localStorage.getItem("career_year")
    phone = localStorage.getItem("phone")
    motivation = localStorage.getItem("motivation")
    
    document.getElementById('output').innerHTML = "Soy" + " " + profession;
}

function goBack() {
    window.history.back();
}

function first_page_button(){
    email = document.getElementById('email_input').value;
    if (email == ""){
        alert("email must be filled out");
        return false;
    }
    localStorage.setItem("email", email);
    location.href = "../html/second_page.html"
}

function second_page_next_button(){
    person_name = document.getElementById('name_input').value;
    age = document.getElementById('age_input').value;
    matricula = document.getElementById('matricula_input').value;
    living_place = document.getElementById('living')
    var rbs = document.querySelectorAll('input[name="profession_form"]');
    for (var rb of rbs) {
        if (rb.checked) {
            profession = rb.value;
            break;
        }
    }

    if (person_name == "" || age == "" || matricula == "" || living_place == "" || profession == null){
        alert("all fields must be filled out");
        return false;
    }

    localStorage.setItem("person_name", person_name);
    localStorage.setItem("age", age);
    localStorage.setItem("matricula", matricula);
    localStorage.setItem("living_place", living_place);
    localStorage.setItem("profession", profession);
    location.href = "../html/third_page.html"

}

function third_page_next_button(){
    university = document.getElementById('university_input').value;
    career_year = document.getElementById('career_year_input').value;
    phone = document.getElementById('phone_input').value;
    motivation = document.getElementById('motivation_input').value;

    if (university == "" || career_year == "" || phone == "" || motivation == ""){
        alert("all fields must be filled out");
        return false;
    }

    localStorage.setItem("university", university);
    localStorage.setItem("career_year", career_year);
    localStorage.setItem("phone", phone);
    localStorage.setItem("motivation", motivation);
    location.href = "../html/fourt_page.html"

}