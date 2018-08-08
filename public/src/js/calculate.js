function dataSaldo() {
  const inputTarjeta = newCardNumber.value;
  const selectTarjeta = selectCard.value;
  fetch(`https://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${inputTarjeta || selectTarjeta}`)
    .then(response => response.json()
    ).then(data => {
      newCardNumber.value = '';
      console.log(JSON.stringify(data));
      showData(data);
    });
}

function showData(data) {
  showBalance.innerHTML = `
  <p class="title">Saldo Total</p>
  <p class="saldoFinal">${data['saldoTarjeta']}</p>
  <p class="idCard">N°${data['id']}</p>
`;
}

tarifas.addEventListener('click', () => {
  let priceValue = tarifas[tarifas.selectedIndex].value;
  price.innerHTML = `
  <p>Costo Pasaje</p>
  <p>$ ${priceValue}</p>
  `;
});

function dataCalculate() {
  const inputTarjeta = calculateBipNum.value;
  const selectTarjeta = selectCardCalculate.value;
  fetch(`https://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${inputTarjeta || selectTarjeta}`)
    .then(response => response.json()
    ).then(data => {
      newCardNumber.value = '';
      console.log(JSON.stringify(data));
      calculate(data);
    });
}

function calculate(data) {
  const code = /(\d+)/g;
  const bipData = data.saldoTarjeta.match(code);
  console.log(bipData)
  const finalBipData = parseInt(bipData[0] + bipData[1]);
  console.log(finalBipData);
  const total = finalBipData - tarifas.value;

  saldoFinal.innerHTML = `
  <p>Saldo Final</p>
  <p>$ ${total}</p>
  `;
}