'use strict';

const store = {
  mealDetails: [
    {
      price: 9,
      tip: .15,
      tipAmount: 12,
      subtotal: 20,
      total: 22,
    },

  ],
  tax: .08,
  mealCount:  0,
};


function handleSubmit() {
  $('.meal-form').on('submit', event => {
    event.preventDefault();
    const price = $('#base-meal-price').val();
    const tax = $('#tax-rate').val();
    const tipPer = $('#tip-percent').val();
    store.mealDetails.push({price: price, tip: tipPer });
    store.mealDetails[1].tipAmount = 232;
    console.log(store);
  });
}

function handleCancel() {


}

function calculateSubtotal() {

}

function calculateTipAmount() {

}

function calculateTotal() {

}


function calculateTipTotal() {

}

function getMealCount() {

}

function averageTip() {


}




function generateCustChargeHtml() {

}

function generateMyEarningsHtml() {


}


function renderWaitstaffCalculator() {

}

function main() {
  handleSubmit();
}

$(main)