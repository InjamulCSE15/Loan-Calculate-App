function computeLoan() {

    var amount = document.getElementById('amount').value;
    var rate = document.getElementById('rate').value;
    var pay = document.getElementById('pay').value;

    var interest = (amount * (rate * .01)) / pay;
    var payment = ((amount / pay) + interest).toFixed(2);
    payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    console.log(payment);
    /* Why used .replace(/\B(?=(\d{3})+(?!\d))/g, ",") :
    Executes a search for a match in a string, and replaces the matched substring with a replacement substring.
    Would translate to every third digit from the end of the last 3 digits in a numerical string and the last 3 digits of that numerical string. 
    When it is used in code, the comma "," will be connected after a three-digit of numerical string.
    */
    document.getElementById('payment').innerHTML = "Monthly Payment = Tk. " + payment; 

}