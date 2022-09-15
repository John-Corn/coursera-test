var company = new Object();
company.name = "CoreSeer";
company.ceo = new Object();
company.ceo.firstName = "Elias";
company.ceo.favColor = "Rainbow";

console.log(company);
console.log("Company CEO name is: " + company.ceo.firstName);

console.log(company["name"]);
var stockPropName = "stock of company";
company[stockPropName] = 110;

console.log("Stock price is: " + company[stockPropName]);