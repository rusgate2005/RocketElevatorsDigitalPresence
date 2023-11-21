
let standardrate = 8000;
let premiumrate = 12000;
let exceliumfee = 15000;
let standardinstallfee = .10;
let premiuminstallfee = .15;
let exceliuminstallfee = .25;
// selectors 
const buildingsSelectedValue = document.getElementById("customertype");
let  qualitycontainer = document.getElementById("quality-type");



//building type buttons 
const residential =  document.getElementById("residential"); 
const commercial =  document.getElementById("commercial");
const industrial =  document.getElementById("industrial");

//input fields 
const numapt =  document.getElementById("numofapartment"); 
const numflr =  document.getElementById("numoffloors");
const numelv =  document.getElementById("numofelevators");
const numocc =  document.getElementById("maxoccperfloor");

//containers 
const customertype =  document.getElementById("customertype");
const customerinput =  document.getElementById("customer-input");
const customeroutput =   document.getElementById("customer-output");

//containers new
const aptcontainer =  document.getElementById("apartmentcont");
const aptflrcontainer =  document.getElementById("numfloor");
const maxocccontainer =  document.getElementById("maxocc");
const elecontainer =  document.getElementById("numele");






// quality type buttons 
const standardfee = document.getElementById("standard");
const premiumfee =  document.getElementById("premium");
const Exceliumfee =  document.getElementById("excelium");

//output field
const elevatorsoutput = document.getElementById("elevators-needed-output");
const unitoutput = document.getElementById("unit-price-output");
const installationfeesoutput = document.getElementById("installation-fees-output"); 
const finalcostoutput = document.getElementById("final-cost-output");




// hide and show fun
//showless();

showless();
function showless(){
    
    qualitycontainer.style.display = "none";
   customeroutput.style.display = "none";
    customerinput.style.display = "none";
    
   
};

function showres(){
  aptcontainer.style.display = "block"
  qualitycontainer.style.display = "block";
  aptflrcontainer.style.display = "block";
  customerinput.style.display = "block";
  maxocccontainer .style.display = "none";
  customeroutput.style.display = "block";
  elecontainer.style.display = "none";
};

function showcom(){
  aptcontainer.style.display = "none";
  qualitycontainer.style.display = "block";
  aptflrcontainer.style.display = "block";
  customerinput.style.display = "block";
  maxocccontainer .style.display = "block";
  customeroutput.style.display = "block";
  elecontainer.style.display = "none"
};

function showindus(){
  aptcontainer.style.display = "none";
  qualitycontainer.style.display = "block";
  aptflrcontainer.style.display = "none";
  customerinput.style.display = "block";
  maxocccontainer .style.display = "none";
  customeroutput.style.display = "block";
  elecontainer.style.display = "block"
};


function resmath(){
   
            let avgaptperfloor = numapt.value/numflr.value;
            let eleperflo = Math.ceil(numapt.value / (6 * numflr.value));
                if (numflr.value > 20){
                addele = Math.ceil(numflr.value/20);
                totele = 2 * eleperflo * (addele + 1);
                 elevatorsoutput.value = totele

        } else {
            totele = eleperflo * numflr.value;
            elevatorsoutput.value = totele

        }
        
};


function commercialmath(){
    let comapartments =  numflr.value;
    let maxcommercial = numocc.value;
   
    let totaloccupant = maxcommercial * comapartments;
    let elereqperbank = Math.ceil(totaloccupant/200 + 1);
    let elebank = Math.ceil(comapartments/10);
    let totelecom = elereqperbank * elebank + elebank;
    elevatorsoutput.value = totelecom

};







residential.addEventListener("click", () => {
   showres();
   numapt.addEventListener("input", () => {
   resmath();
   
   })
   numflr.addEventListener("input", () => {
    resmath();
    })
    standardfee.addEventListener("click", () => {
      let unitpricefee = standardrate * elevatorsoutput.value;
      unitoutput.value = unitpricefee;
      let installfee = unitpricefee * standardinstallfee;
      installationfeesoutput.value = installfee;
      let finalcost = unitpricefee + installfee;
      finalcostoutput.value = finalcost;
     });
     premiumfee.addEventListener("click", () => {
      let unitpricefee = premiumrate * elevatorsoutput.value;
      unitoutput.value = unitpricefee;
      let installfee = unitpricefee * premiuminstallfee;
      installationfeesoutput.value = installfee;
      let finalcost = unitpricefee + installfee;
      finalcostoutput.value = finalcost;
    });
    Exceliumfee.addEventListener("click", () => {
      let unitpricefee =  exceliumfee * elevatorsoutput.value;
      unitoutput.value = unitpricefee;
      let installfee = unitpricefee * exceliuminstallfee;
      installationfeesoutput.value = installfee;
      let finalcost = unitpricefee + installfee;
      finalcostoutput.value = finalcost;
      // You can add more actions here
    });
});

commercial.addEventListener("click", () => {
  showcom();
  numflr.addEventListener("input", () => {
    commercialmath();
    })
    numocc.addEventListener("input", () => {
      commercialmath();
      })
    // You can add more actions here
  });
  standardfee.addEventListener("click", () => {
   let unitpricefee = standardrate * elevatorsoutput.value;
   unitoutput.value = unitpricefee;
   let installfee = unitpricefee * standardinstallfee;
   installationfeesoutput.value = installfee;
   let finalcost = unitpricefee + installfee;
   finalcostoutput.value = finalcost;
  });
  premiumfee.addEventListener("click", () => {
    let unitpricefee = premiumrate * elevatorsoutput.value;
    unitoutput.value = unitpricefee;
    let installfee = unitpricefee * premiuminstallfee;
    installationfeesoutput.value = installfee;
    let finalcost = unitpricefee + installfee;
    finalcostoutput.value = finalcost;
  });
  Exceliumfee.addEventListener("click", () => {
    let unitpricefee =  exceliumfee * elevatorsoutput.value;
    unitoutput.value = unitpricefee;
    let installfee = unitpricefee * exceliuminstallfee;
    installationfeesoutput.value = installfee;
    let finalcost = unitpricefee + installfee;
    finalcostoutput.value = finalcost;
    // You can add more actions here
  });

industrial.addEventListener("click", () => {
  showindus();
  numelv.addEventListener("input", () => {
    elevatorsoutput.value = numelv.value
    });
    standardfee.addEventListener("click", () => {
      let unitpricefee = standardrate * elevatorsoutput.value;
      unitoutput.value = unitpricefee;
      let installfee = unitpricefee * standardinstallfee;
      installationfeesoutput.value = installfee;
      let finalcost = unitpricefee + installfee;
      finalcostoutput.value = finalcost;
     });
     premiumfee.addEventListener("click", () => {
      let unitpricefee = premiumrate * elevatorsoutput.value;
      unitoutput.value = unitpricefee;
      let installfee = unitpricefee * premiuminstallfee;
      installationfeesoutput.value = installfee;
      let finalcost = unitpricefee + installfee;
      finalcostoutput.value = finalcost;
})
Exceliumfee.addEventListener("click", () => {
  let unitpricefee =  exceliumfee * elevatorsoutput.value;
  unitoutput.value = unitpricefee;
  let installfee = unitpricefee * exceliuminstallfee;
  installationfeesoutput.value = installfee;
  let finalcost = unitpricefee + installfee;
  finalcostoutput.value = finalcost;
});
});



 














  
  
