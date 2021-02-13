

$(document).on('input', '.trigger', function() {
    console.log('inside main');
    buy_val = $('.buy_price').val()
    sell_val = $('.sell_price').val()
    val = $('input[type="checkbox"]').val()
    if (val == 'on') {
        calc(buy_val, sell_val, 0.2);
    } else{        
        calc(buy_val, sell_val, 0.4);
    }    
});

// $(document).on('input', '.trigger1', function() {

//     if ($('.buy_price').val()) {
//         console.log('conditon matched');
//         total_amount = $('.buy_price').val()
//         value = $('.buyValue').val()
//         $('.buy_qty').val((total_amount/value).toFixed(3))
//     }

//     console.log('working');
    
//     // $('.sell_qty').val()
//   });


function calc(buy_val, sell_val, fee) {
    buyFee = null
    sellFee = null

    buy_qty = $('.buy_qty').val()
    sell_qty = $('.sell_qty').val()

    if (buy_qty == '') {
        buy_qty = 1
    }

    if (sell_qty == '') {
        sell_qty = buy_qty
        
        $('.sell_qty').attr("placeholder", `Leave blank for ${sell_qty}`);    
    }

    if (sell_qty > buy_qty) {
        console.log('error');
    }

    if($.isNumeric(buy_val)) {
       buyFee =  buy_qty*buy_val*fee/100
       console.log('true');
        $('.buyFee').text(buyFee.toFixed(3))
        buyValue = (buy_qty*buy_val).toFixed(2)
        $('.buyValue').val(buyValue)
    } else if (buy_val == '') {
        $('.buyFee').text('') 
    } else{
        $('.buyFee').text('-----')   
    }

    if($.isNumeric(sell_val)) {
        sellFee = sell_qty*sell_val*fee/100
        sellValue = (sell_qty*sell_val).toFixed(2)
        $('.sellValue').val(sellValue)
        $('.sellFee').text(sellFee.toFixed(3))
    } else if (sell_val == '') {
        $('.sellFee').text('') 
    } else{
        $('.sellFee').text('-----')   
    }

    if (buyFee && sellFee) {
        net = sell_qty*sell_val - (buy_qty*buy_val+ buyFee + sellFee)
        $('.amount').text(net.toFixed(3))
        $('.totalFee').text((buyFee + sellFee).toFixed(3))
    } else {
        $('.amount').text('')
    }

}

$(document).on('click', 'input[type="checkbox"]', function() {

    if ($(this).val() == "on") {
       $(this).val("off");
       
    }
    else {
       $(this).val("on");
    }
});