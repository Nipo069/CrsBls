

var email = "";
var mdp = "";

var email = localStorage.getItem('email');
var mdp = localStorage.getItem('mdp');
var Appointment_Category =localStorage.getItem('ac'); // Normal / Premium / Prime Time
var Visa_Type = localStorage.getItem('vt'); // Schengen Visa or National Visa
var Visa_Sub_Type = localStorage.getItem('vst'); // n = national /  e = etudiant / r = regrepment
var city = localStorage.getItem('cty'); // Casablanca / Tetouan/ Nador / Rabat / Tangier / Agadir


(function () {
    'use strict';
    if (window.location.href.match("https://www.blsspainmorocco.net/") && window.location.href.match("/.*ccount/.*og.*n")) {




        // Load the Bulma CSS framework
        const linkElement = document.createElement('link');
        linkElement.rel = 'stylesheet';
        linkElement.href = 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.3/css/bulma.min.css';
        document.head.appendChild(linkElement);

        // Create a form with a username and password input
        const formElement = document.createElement('form');
        formElement.classList.add('box');
        formElement.innerHTML = `
    <div class="container is-max-widescreen  has-text-centered">
        <div class="notification is-primary ">
            <div class="columns ">
                <div class="column">
                    <input class="input is-normal" type="text" placeholder="Email">
                    <input class="input is-normal" type="text" placeholder="mdp">
                    <input class="input is-normal" type="text" placeholder="ibb">
                </div>
                <div class="column">
                    <div class="select" id="ac">
                        <select>
                            <option value="Normal">Normal</option>
                            <option value="Premium">Premium</option>
                            <option value="Prime Time">Prime Time</option>
                        </select>
                    </div>
                    <div class="select" id="VT">
                        <select>
                            <option value="Schengen Visa">Schengen Visa</option>
                            <option value="National Visa">National Visa</option>
                        </select>
                    </div>
                    <div class="select" id="Vst">
                        <select>
                            <option value="Student Visa">Student Visa</option>
                            <option value="National Visa">National Visa</option>
                            <option value="Family Reunification Visa">Family Reunification Visa</option>
                        </select>
                    </div>
                    <div class="select" id="cty">
                        <select>
                            <option value="Casablanca">Casablanca</option>
                            <option value="Tetouan">Tetouan</option>
                            <option value="Nador">Nador</option>
                            <option value="Rabat">Rabat</option>
                            <option value="Tangier">Tangier</option>
                            <option value="Agadir">Agadir</option>
                        </select>
                    </div>
                </div>
                <div class="column is-align-self-center">
                    <button class="button is-warning ">save</button>
                </div>
            </div>
        </div>
    </div>

`;

        // Insert the form after the main element
        const mainElement = document.querySelector('main');
        mainElement.insertAdjacentElement('afterend', formElement);


        const saveButton = document.querySelector('.button');
        saveButton.addEventListener('click', function() {
            // Get the input and select element values
            const email = document.querySelector('input[placeholder="Email"]').value;
            const mdp = document.querySelector('input[placeholder="mdp"]').value;
            const ibb = document.querySelector('input[placeholder="ibb"]').value;
            const ac = document.querySelector('#ac select').value;
            const vt = document.querySelector('#VT select').value;
            const vst = document.querySelector('#Vst select').value;
            const cty = document.querySelector('#cty select').value;

            // Save the data in local storage
            localStorage.setItem('email', email);
            localStorage.setItem('mdp', mdp);
            localStorage.setItem('ibb', ibb);
            localStorage.setItem('ac', ac);
            localStorage.setItem('vt', vt);
            localStorage.setItem('vst', vst);
            localStorage.setItem('cty', cty);
        });



        function LoginFun(email, mdp) {
            var requiredTextInput = document.querySelector("input[type=\"text\"][required]");
            var requiredPasswordInput = document.querySelector("input[type=\"password\"][required]");
            if (requiredTextInput) {
                requiredTextInput.value = email;
            }
            if (requiredPasswordInput) {
                requiredPasswordInput.value = mdp;
            }
        }
        LoginFun(email, mdp);
        const elementExist = setInterval(() => {
            var elm = document.getElementById("btnVerified").style.display;
            if (elm != "none") {
                document.querySelector("#btnSubmit").click();
                clearInterval(elementExist);
            }
        }, 100);
    }

    if (window.location.href.match('.*hange.*assword') ) {
        document.querySelector("#navbarCollapse2 > ul > li:nth-child(3) > a").click();
    }

    if (window.location.href.match(/.*isa.*ype.*erification.*/)) {
        document.querySelector("#btnVerify").click();
        const elementExist = setInterval(() => {
            var elm = document.getElementById("btnVerified").style.display;
            if (elm != "none") {
                document.querySelector("#btnSubmit").click();
                clearInterval(elementExist);
            }
        }, 100);

    }

    if (window.location.href.includes('MAR/bls/visatype?data') ) {
        async function chooseAppointment(city,Appointment_Category,Visa_Type,Visa_Sub_Type) {
            var timer = delay => new Promise(resolve => setTimeout(resolve, delay));
            var getTargetId = id => {
                return Array.from(document.querySelectorAll(`[aria-owns*="${id}"][aria-owns$="_listbox"]`))
                    .find(element => window.getComputedStyle(element.parentNode).display != 'none')
                    .getAttribute("aria-owns");
            };
            var AppointmentCategoryId = getTargetId("AppointmentCategoryId");
            var VisaType = getTargetId("VisaType");
            var VisaSubType = getTargetId("VisaSubType");
            var AppointmentCategoryList = document.querySelector(`ul#${AppointmentCategoryId}`);
            var fromkhadir = Appointment_Category;
            if (fromkhadir == "Normal") {
                const SecondOption = AppointmentCategoryList.querySelector('li[data-offset-index="0"]');
                SecondOption.click();
            }
            if (fromkhadir == "Premium") {
                const SecondOption = AppointmentCategoryList.querySelector('li[data-offset-index="1"]');
                SecondOption.click();
            }
            if (fromkhadir == "Prime Time") {
                const SecondOption = AppointmentCategoryList.querySelector('li[data-offset-index="2"]');
                SecondOption.click();
            }
            await timer(500);
            var VisaTypeList = document.querySelector(`ul#${VisaType}`);
            var fromLS = Visa_Type;
            if (fromLS === "Schengen Visa") {
                const SecondOption = VisaTypeList.querySelector('li[data-offset-index="1"]');
                SecondOption.click();
            }
            if (fromLS === "National Visa") {
                const SecondOption = VisaTypeList.querySelector('li[data-offset-index="0"]');
                SecondOption.click();
            }
            await timer(500);
            var Natcat = Visa_Sub_Type;
            if (fromLS == "Schengen Visa") {
                var VisaSubTypeId = VisaSubType;
                var VisaSubTypeList = document.querySelector(`ul#${VisaSubType}`);
                var FirstOption = VisaSubTypeList.querySelector('li[data-offset-index="0"]');
                FirstOption.click();
            }
            if (fromLS == "National Visa") {
                if (Natcat == "Student Visa") {
                    var VisaSubTypeId = VisaSubType;
                    var VisaSubTypeList = document.querySelector(`ul#${VisaSubType}`);
                    var FirstOption = VisaSubTypeList.querySelector('li[data-offset-index="0"]');
                    FirstOption.click();

                }
                if (Natcat == "Family Reunification Visa") {
                    var VisaSubTypeId = VisaSubType;
                    var VisaSubTypeList = document.querySelector(`ul#${VisaSubType}`);
                    var FirstOption = VisaSubTypeList.querySelector('li[data-offset-index="1"]');
                    FirstOption.click();

                }
                if (Natcat == "National Visa") {
                    var VisaSubTypeId = VisaSubType;
                    var VisaSubTypeList = document.querySelector(`ul#${VisaSubType}`);
                    var FirstOption = VisaSubTypeList.querySelector('li[data-offset-index="2"]');
                    FirstOption.click();
                }
            }


            var location = getTargetId("Location");
            var locationList = document.querySelector(`ul#${location}`);
            // Select the desired city
            var selectedCity = city; // Replace with the desired city
            // Find the option for the selected city
            var cityOption = Array.from(locationList.querySelectorAll('li.k-item')).find(option => option.textContent.trim().includes(selectedCity));
            //  var cityOption = Array.from(locationList.querySelectorAll('li.k-item')).find(option => option.textContent.trim() === selectedCity);
            // Click on the selected city option
            if (cityOption) {
                cityOption.click();
            }



            var Mission = getTargetId("Mission");
            var MissionList = document.querySelector(`ul#${Mission}`);
            // Select the desired city
            var selectedCity2 = city; // Replace with the desired city
            // Find the option for the selected city
            var cityOption2 = Array.from(MissionList.querySelectorAll('li.k-item')).find(option => option.textContent.trim().includes(selectedCity2));
            //  var cityOption = Array.from(locationList.querySelectorAll('li.k-item')).find(option => option.textContent.trim() === selectedCity);
            // Click on the selected city option
            if (cityOption2) {
                cityOption2.click();
            }


        }
        chooseAppointment(city,Appointment_Category,Visa_Type,Visa_Sub_Type);
    }

    const emailInput = document.getElementById("email");
    const mdpInput = document.getElementById("mdp");
    const ibbInput = document.getElementById("ibb");
    const saveButton = document.getElementById("save-button");

    saveButton.addEventListener("click", function() {
        localStorage.setItem("email", emailInput.value);
        localStorage.setItem("mdp", mdpInput.value);
        localStorage.setItem("ibb", ibbInput.value);
    });
})();

