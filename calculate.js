
function calculate() {
         
    const radioButtons = document.querySelectorAll('input[name="activity"]');
    let actvalue;
    for (const radioButton of radioButtons) {
                if (radioButton.checked) {
                    actvalue = Number(radioButton.value);
                    break;
                }   
        };
    const genderButtons = document.querySelectorAll('input[name="gender"]');
    let gendervalue;
    for (const radioButton of genderButtons) {
                if (radioButton.checked) {
                    gendervalue = Number(radioButton.value);    
                }   
        };
    
    const w = document.getElementById('w').value;
    var h = document.getElementById('h').value;
    var age = document.getElementById('a').value;
    var bmi = w/Math.pow((h/100), 2)
    if (gendervalue==2){
    bazal = 66.47 + 13.75*w + 5.03*h-6.75*age;
    }
    if (gendervalue==3){
        bazal = 655.1 + 9.56*w + 1.85*h-4.68*age; 
        }
    if (w == "",h == "",age == "") {
            alert("Xanaları doldurun!");
            return false;    
    }    
    kkal = bazal * actvalue
    document.getElementById('result').innerHTML = kkal.toFixed(0) + " kkal";
    document.getElementById('bmi-result').innerHTML = "Bədən Kütlə İndeksi: " +  bmi.toFixed(2);
    if (bmi < 18.5){
        document.getElementById('weight-status').innerHTML = "Çəki Statusu: " +  "Çəki çatışmamazlığı"; 
    }
    if (bmi >= 18.5 && bmi < 24.9){
        document.getElementById('weight-status').innerHTML = "Çəki Statusu: " +  "Normal çəki"; 
    }

    if (bmi >= 24.9 && bmi < 29.9){
        document.getElementById('weight-status').innerHTML = "Çəki Statusu: " +  "Artıq çəki"; 
    }

    if (bmi >= 29.9 && bmi < 34.9){
        document.getElementById('weight-status').innerHTML = "Çəki Statusu: " +  "Obesite Class I"; 
    }
    if (bmi >= 34.9 && bmi < 39.9){
        document.getElementById('weight-status').innerHTML = "Çəki Statusu: " +  "Obesite Class II"; 
    }
    if (bmi >= 39.9){
        document.getElementById('weight-status').innerHTML = "Çəki Statusu: " +  "Obesite Class III"; 
    }
    
}
