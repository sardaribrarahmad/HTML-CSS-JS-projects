
let isDOBopen =false;
let dateofbirth;

const settingCogEL = document.getElementById("settingIcons");
const settingcontentEL = document.getElementById("settingscontent");
const InitialtextEL = document.getElementById("initialtext");
const AftertextEL = document.getElementById("afterclick");
const dobEL = document.getElementById("dob");
const dobinputEL = document.getElementById("dobinput");



//for updations 

const yearEl = document.getElementById("year");
const monthEl = document.getElementById("month");
const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const mintEl = document.getElementById("mint");
const secondEl = document.getElementById("second");


//function for hiding setting
const toggledobselector = () => {
    if(isDOBopen){
        settingcontentEL.classList.add("hide");

    }
    else{
        settingcontentEL.classList.remove("hide");
    }
isDOBopen = !isDOBopen;
console.log("Toggle" , isDOBopen);
};


//funcion for storing date of birth
const setdobhandler = () => {
    dateofbirth = dobinputEL.value;

    if(dateofbirth)
    {
        InitialtextEL.classList.add("hide");
        AftertextEL.classList.remove("hide");
        setInterval(() => updateage(),1000);
    }
    else{
        AftertextEL.classList.add("hide");
        InitialtextEL.classList.remove("hide");
    }
    console.log("Date of birth", dateofbirth);
    
    const dobValue = dobinputEL.value;
            if (dobValue) {
                dateofbirth = new Date(dobValue); // Convert input to Date object
                console.log("Date of birth", dateofbirth);
                updateage();
            } else {
                console.error('Date of birth input is empty');
            }

};



const updateage = () => {
    if (!dateofbirth) {
        console.error('Date of birth is not set');
        return;
    }

     const currentDate = new Date();
    console.log('currentdate',{currentDate} );
     const datediff = currentDate - dateofbirth;
     console.log("DATEDIFF" , datediff);
     const year = Math.floor(datediff / (1000 * 60 * 60 * 24 * 365));
     const month = Math.floor(datediff / (1000 * 60 * 60 * 24 * 365)) % 12;
     const day = Math.floor(datediff / (1000 * 60 * 60 * 24 )) % 30;
     const hour = Math.floor(datediff / (1000 * 60 * 60 )) % 24;
     const mint = Math.floor(datediff / (1000 * 60 )) % 60;
     const second = Math.floor(datediff / 1000 ) % 60 ;

     yearEl.innerHTML = year;
     monthEl.innerHTML = month;
     dayEl.innerHTML =   day;
     hourEl.innerHTML = hour;
     mintEl.innerHTML = mint;
     secondEl.innerHTML = second;


    console.log("year:", year ,"month",month ,day, hour, mint, second);

};
updateage();


settingCogEL.addEventListener("click",toggledobselector);
dobEL.addEventListener("click", setdobhandler);
 

