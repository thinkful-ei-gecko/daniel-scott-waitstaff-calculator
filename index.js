'use strict';

const store = {
  mealDetails: [
    {
    price: 0, 
    tax: 0,
    tip: 0,
    },
  ],
  mealCount:  0,
  tipTotal: 0,
  averageTip: 0,
};


function handleSubmit() {
  $('.meal-form').on('submit', event => {
    event.preventDefault();
    store.mealDetails.push({price: Number($('#base-meal-price').val()), tax: $('#tax-rate').val() / 100, tip: $('#tip-percent').val() / 100});

    store.mealCount++;

    $('#base-meal-price').val('');
    $('#tax-rate').val('');
    $('#tip-percent').val('');

    renderWaitstaffCalculator();
  });
}

function handleCancel() {
    $('.meal-form').on('click', '.cancel-order', event => {
        $('#base-meal-price').val('');
        $('#tax-rate').val('');
        $('#tip-percent').val('');
    })
}

function calculateSubtotal(mealInfo) {
  mealInfo.subtotal = mealInfo.price + (mealInfo.price * mealInfo.tax);
}

function calculateTipAmount(mealInfo) {
  mealInfo.tipAmount =  Math.round((mealInfo.subtotal * mealInfo.tip) * 100) / 100;
  store.tipTotal += mealInfo.tipAmount;
}

function calculateTotal(mealDetails) {
  mealDetails.total = Math.round((mealDetails.subtotal + mealDetails.tipAmount) * 100) / 100;
}


function calculateTipTotal() {
  for (let i = 0; i < store.mealDetails.length; i++) {
    store.tipTotal += Math.round((store.mealDetails[i].tipAmount) * 100) / 100;
  }
}

function averageTip() {
  store.averageTip = Math.round((store.tipTotal / store.mealCount) * 100) / 100;
}

function displayCustomerCharges(mealInfo) {
  $('.subtotal').text(`Subtotal: $${mealInfo.subtotal}`);
  $('.tip').text(`Tip amount: $${mealInfo.tipAmount}`);
  $('.total').text(`Total: $${mealInfo.total}`);

}

function displayMyEarnings(dataStore) {
  if (store.mealCount > 0) {
    $('.tip-total').text(`Tip total: $${dataStore.tipTotal}`);
    $('.meal-count').text(`Meal count: ${dataStore.mealCount}`);
    $('.average-tip').text(`Average tip: $${dataStore.averageTip}`);
  }
}


function renderWaitstaffCalculator() {
  let mostRecent = store.mealDetails[store.mealDetails.length - 1]
  calculateSubtotal(mostRecent);
  calculateTipAmount(mostRecent);
  calculateTotal(mostRecent);
  displayCustomerCharges(mostRecent);

  //calculateTipTotal();
  averageTip()

  displayMyEarnings(store);
}

function main() {
  renderWaitstaffCalculator();
  handleSubmit();
  handleCancel();


  calculateSubtotal(store.mealDetails[0]);
  calculateTipAmount(store.mealDetails[0]);

  calculateTotal(store.mealDetails[0]);
  displayCustomerCharges(store.mealDetails[0]);
  displayMyEarnings(store);
}

$(main)