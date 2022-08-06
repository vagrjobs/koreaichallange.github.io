import express from 'express';
const router = express.Router();

// temp database -- can use mongo later 
let order_id = 1;
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
//orders data
const orders = [
    {
        id: 1,
        status:"placed",
        cust_name:"John Doe",
        cust_address:"Abc 123 Street",
        qty: 1,
        date:"2022-8-6"
    }
]
//capacity data keeping constant as instructed.
 let max_capacity = 100
router.get('/',(req,res) =>{
    res.send(orders);
    console.log('homepage');
})

router.post('/add',(req,res) =>{
    // res.send("Hi there! you have reached the right place please place your order");
    const order = req.body;
    order_id += 1;
    orders.push(
        {
            id: order_id,
            status:"placed",
            cust_name:order.cust_name,
            cust_address:order.cust_address,
            qty: order.qty,
            date:date
        }
    )
    res.send("Hi "+order.cust_name +"  your order is placed successfully for " + order.qty + " litre of milk at " + order.cust_address);
})

router.post('/update/:id',(req,res) =>{
    const id = req.params.id;
    let found = false;
    let found_element;
    console.log('inside Update for Order ID: ' + id);
    for(let element of orders) {
        if(parseInt(element.id) === parseInt(id)){
            element.qty = req.body.qty;
            element.cust_address = req.body.cust_address;
            element.cust_name = req.body.cust_name;
            found_element = element;
            found = true;
            break;  
        }
    };
    
    if(found){
        res.send(found_element);
        console.log(found_element);
    }else{
        res.send('Oops No Such Order Exists!');
        console.log('Oops No Such Order Exists!');
    }

});

router.post('/updateStatus/:id',(req,res) =>{
    const id = req.params.id;
    let found = false;
    let found_element;
    console.log('inside Update Status for Order ID: ' + id);
    for(let element of orders) {    
        if(parseInt(element.id) === parseInt(id)){
            element.status = req.body.status;
            found = true;
            break;  
        }
    };
    for(let element of orders) {
        if(parseInt(element.id) === parseInt(id)){
            found_element = element;
            break;
        }
    };
    if(found){
        res.send(found_element);
        console.log(found_element);
    }else{
        res.send('Oops No Such Order Exists!');
        console.log('Oops No Such Order Exists!');
    }

});

router.get('/delete/:id',(req,res) =>{
    const id = req.params.id;
    let found_element = 'deleted';
    let found = false;
    console.log('inside delete' + orders.length);
    for(let i=0;i<orders.length;i++) {
        if(parseInt(orders[i].id) === parseInt(id)){
            orders.splice(i);
            found = true;
            break;  
        }
    };
    if(found){
        res.send('Deleted !');
    }else{
        res.send('Oops No such order exits!');
    }
});

router.get('/checkCapacity/:date',(req,res) =>{
    let dt = req.params.date;
    let rem_cap = max_capacity;
    orders.forEach(element1 =>{
        if(String(element1.date)===String(dt)){
            rem_cap = rem_cap-element1.qty
        }
    })

    res.send(String(rem_cap));
})

export default router;