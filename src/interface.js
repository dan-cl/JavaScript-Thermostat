'use strict';

$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();
  $('#current-city').change(function(){
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=d552a5d43c5a76ca3a07f0e02c0fe64e&units=metric', function(data){
      $('#current-temperature').text(data.main.temp);
    })
  })

  $('#temperature-up').click(function() {
    thermostat.up();
    updateTemperature();
  });

  $('#temperature-down').click(function() {
    thermostat.down();
    updateTemperature();
  });

  $('#temperature-reset').click(function() {
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('#powersaving-on').click(function() {
    thermostat.switchPowerSavingModeOn();
    $('#power-saving-status').text('on')
    updateTemperature();
  })

  $('#powersaving-off').click(function() {
    thermostat.switchPowerSavingModeOff();
    $('#power-saving-status').text('off')
    updateTemperature();
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  };
  
});
