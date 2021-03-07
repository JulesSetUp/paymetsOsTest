// This is our index.js file

/*
Create an instance of the secure fields. Pass the public key as the first argument. 
As the second argument, we'll pass a list of custom fonts to be applied to the fields (this is optional).
*/

  
  
  /*
  Create an object holding additional options that you can pass to the constructor for instantiating 
  the credit card and card expiry fields.
  There are lots of other options available that you can pass to the constructor, 
  but to keep it simple we'll just show this one object in our example. 
  */
  
  
  // Instantiate the fields you want to show and mount them to the DOM.
  
  
  /*
  Create a token when the user submits the form, but not until we fetched the card holder's name 
  so that we can pass it in an additional data object to the createToken call.
  */
  document.getElementById('payment-form').addEventListener('submit', async(event) => {
      event.preventDefault()
      POS.setEnvironment("test"); // Set your environment
      POS.setPublicKey("ca29b7c8-4003-4630-b332-aefc53fad03f"); // Set your public key
      
                 
      POS.tokenize({ 
        "token_type": "credit_card",
        "holder_name": document.getElementById('cardholder-name').value,
        "expiration_date": document.getElementById('exp-date').value,
        "card_number": document.getElementById('card-number').value
    },
    function (result) {
    
      console.log ("result obtained"+result);
      alert(result);
      var data_array = result.split('"');
      var token =data_array[3];
        alert(token);
        
        document.getElementById('token-code').value=token;
    
        // Check for errors, if all is good, then proceed!
    }
    );
      
  })

 