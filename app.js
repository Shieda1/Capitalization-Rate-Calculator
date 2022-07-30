// https://calculator.swiftutors.com/capitalization-rate-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const capitalizationRateRadio = document.getElementById('capitalizationRateRadio');
const netOperatingIncomeRadio = document.getElementById('netOperatingIncomeRadio');
const currentMarketValueRadio = document.getElementById('currentMarketValueRadio');

let capitalizationRate;
let netOperatingIncome = v1;
let currentMarketValue = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

capitalizationRateRadio.addEventListener('click', function() {
  variable1.textContent = 'Net Operating Income';
  variable2.textContent = 'Current Market Value';
  netOperatingIncome = v1;
  currentMarketValue = v2;
  result.textContent = '';
});

netOperatingIncomeRadio.addEventListener('click', function() {
  variable1.textContent = 'Capitalization Rate';
  variable2.textContent = 'Current Market Value';
  capitalizationRate = v1;
  currentMarketValue = v2;
  result.textContent = '';
});

currentMarketValueRadio.addEventListener('click', function() {
  variable1.textContent = 'Capitalization Rate';
  variable2.textContent = 'Net Operating Income';
  capitalizationRate = v1;
  netOperatingIncome = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(capitalizationRateRadio.checked)
    result.textContent = `Capitalization Rate = ${computeCapitalizationRate().toFixed(2)} %`;

  else if(netOperatingIncomeRadio.checked)
    result.textContent = `Net Operating Income = ${computeNetOperatingIncome().toFixed(2)}`;

  else if(currentMarketValueRadio.checked)
    result.textContent = `Current Market Value = ${computeCurrentMarketValue().toFixed(2)}`;
})

// calculation

function computeCapitalizationRate() {
  return (Number(netOperatingIncome.value) / Number(currentMarketValue.value)) * 100;
}

function computeNetOperatingIncome() {
  return (Number(capitalizationRate.value) / 100) * Number(currentMarketValue.value);
}

function computeCurrentMarketValue() {
  return Number(netOperatingIncome.value) / (Number(capitalizationRate.value) / 100);
}