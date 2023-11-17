

(function () {
    'use strict';
    if (window.location.href.match("https://www.blsspainmorocco.net/") && window.location.href.match("/.*ccount/.*og.*n")) {
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
            if (fromLS === "Schengen Visa") {
                var VisaSubTypeId = VisaSubType;
                var VisaSubTypeList = document.querySelector(`ul#${VisaSubType}`);
                var FirstOption = VisaSubTypeList.querySelector('li[data-offset-index="0"]');
                FirstOption.click();
            }
            if (fromLS === "National Visa") {
                if (Natcat === "e") {
                    var VisaSubTypeId = VisaSubType;
                    var VisaSubTypeList = document.querySelector(`ul#${VisaSubType}`);
                    var FirstOption = VisaSubTypeList.querySelector('li[data-offset-index="0"]');
                    FirstOption.click();

                }
                if (Natcat === "r") {
                    var VisaSubTypeId = VisaSubType;
                    var VisaSubTypeList = document.querySelector(`ul#${VisaSubType}`);
                    var FirstOption = VisaSubTypeList.querySelector('li[data-offset-index="1"]');
                    FirstOption.click();

                }
                if (Natcat === "n") {
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
})();
