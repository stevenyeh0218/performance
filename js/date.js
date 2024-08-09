var $input = $('.calendar-input').pickadate({
    format: 'yyyy.m.d',
    labelMonthNext: 'Go to the next month',
    labelMonthPrev: 'Go to the previous month',
    labelMonthSelect: 'Pick a month from the dropdown',
    labelYearSelect: 'Pick a year from the dropdown',
    selectMonths: true,
    selectYears: true,
    today: '',
    clear: '',
    close: '',
});

var picker = $input.pickadate('picker');

$('.calendar').find('.micon-calendar').on('click', function(e) {    
    e.preventDefault();
    picker.open();
    e.stopPropagation();
});