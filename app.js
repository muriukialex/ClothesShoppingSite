const all = document.querySelectorAll('button');
console.log(all);

//image user selected on clikcing Buy button
const selectedImageElement = document.querySelector('#image-selected');

//clothes title
const clothesTitle = document.querySelector('#clothes');
//stcok info
const stockElement = document.querySelector('.stock');

//delivery details
const deliveryDetails = document.querySelector('.delivery-details');

//companyImage
const bestImage = document.querySelector('#best-img');

const orderDetailsElement = document.querySelector('.order');

//place customer purchase details in an array
const customerOrder = [];

const placeOrder = (id,item_bought,image_of_item,name,phone_number,email,location,items_to_buy) =>{
    return{
        id:id,
        item_bought:item_bought,
        image_of_item:image_of_item,
        name: name,
        phone_number: phone_number,
        email: email,
        location: location,
        items_to_buy: items_to_buy
    }
}

/*
    get customer information
    IDs
    customer-name
    customer-number
    customer-email
    customer-location
    customer-items-number
*/
const customerName = document.querySelector('#customer-name');
const customerNumber = document.querySelector('#customer-number');
const customerEmail = document.querySelector('#customer-email');
const customerLocation = document.querySelector('#customer-location');
const customerItemsToBuy = document.querySelector('#customer-items-number'); 


all.forEach(button =>{
    button.addEventListener('click',()=>{

        //element value => use as customer items id
        console.log(button.attributes[1].value);
        const itemId = button.attributes[1].value;

        //element text => use to know what item customer purchased
        console.log(button.previousElementSibling.innerText);
        const itemText = button.previousElementSibling.innerText;

        //show image of the element clicked 
        const imageUrl =  button.previousElementSibling.previousElementSibling.currentSrc;

        //set these elements to display none
        clothesTitle.style.display = 'none';
        stockElement.style.display = 'none';
        deliveryDetails.style.display = 'none';
        bestImage.style.display = 'none';

        //trying to set image in order section to image selected
        selectedImageElement.setAttribute('src', imageUrl);

        //show order info section 
        orderDetailsElement.style.display = 'block';


        //when the submit button is clicked
        submitElement.addEventListener('click', (e)=>{
            e.preventDefault();
            if(customerName.value !== '' && customerNumber.value !== '' && 
            customerEmail.value !== '' &&customerLocation.value !== '' && customerItemsToBuy.value !== ''){
                console.log(customerName.value);
                console.log(customerNumber.value);
                console.log(customerEmail.value);
                console.log(customerLocation.value);
                console.log(customerItemsToBuy.value);


                //placeOrder = (id,item_bought,image_of_item,name,phone_number,email,location,items_to_buy)
                
                //object that holds the customer's orders
                let placedOrder = placeOrder(itemId, 
                           itemText, 
                           imageUrl, 
                           customerName.value,
                           customerNumber.value,
                           customerEmail.value,
                           customerLocation.value,
                           customerItemsToBuy.value );
                console.log(placedOrder);
                
                //array of orders 
                customerOrder.push(placedOrder);
                localStorage.setItem('customerOrder', JSON.stringify(customerOrder));
                
                console.log(customerOrder);

                document.write("<h1 style='margin: 10% 1rem 1rem 1rem;'>Thank you <br> for shopping with us</h1> <a href='index.html'><button>Back Shopping</button></a>");
            }else{
                return;
            }
            
        });
    });
});

const submitElement = document.querySelector('#submit');

const onSubmit = () =>{

}

