import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { CurrencyExchanger } from './currency-exchanger.js';

const showElements = function(response, amount, currency) {
  if (!response.conversion_rates[`${currency}`]) {
    $("#conversion").text("");
    $("#errors").text(`Sorry, that currency doesn't exist. Please try again.`);
  } else {
    $("#conversion").text(`$${amount} in ${currency} is: ${amount * response.conversion_rates[`${currency}`].toFixed(2)}`);
    $("#errors").text("");
  }
};

const showError = function(error) {
  $("#conversion").text("");
  $("#errors").text(`There was an error processing your request: ${error}`);
};

$(document).ready(function() {
  $("#converter").submit(function(event) {
    event.preventDefault();
    const amountInput = parseInt($('#amount').val());
    const currency = $("#currencies").val();
    $("#amount").val("");

    async function asyncCall() {
      let currencyExchanger = new CurrencyExchanger();
      const response = await currencyExchanger.getResponse();
      if (!response) {
        showError(response.statusText);
      } else {
        showElements(response, amountInput, currency);
      }
    }
    asyncCall();
  });
});