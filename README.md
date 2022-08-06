# Step1: Extract Zip file & open extracted folder loaction in terminal.

# Step2: Run/start the application server with this command in terminal: npm start  

# Step3: Test the application for each route follow below steps :
Note: do not terminate server while testing.
# /add Route

    Step 1: Use post-man to send inputs to this route :http://localhost:5000/add 
    in JSON format as below :
        {
            "cust_name":"Vinayak Agrawal",
            "cust_address":"9th Lane Vipin Nagar Itarsi",
            "qty": 1
        }

    Step2: Refresh the route http://localhost:5000/ to see updated values in orders collection/array.

# /update/:id Route

    Step 1: Use post-man to send inputs to this route :http://localhost:5000/update/1 
    in JSON format as below :
        {
            "cust_name":"John Doe up",
            "cust_address":"Abc 123 Street up",
            "qty": 5
        }

    Step2: Refresh the route http://localhost:5000/ to see updated values in orders collection/array.

# /updateStatus/:id Route

    Step 1: Use post-man to send inputs to this route :http://localhost:5000/updateStatus/1 
    in JSON format as below :
        {
            "status":"packed"
        }

    Step2: Refresh the route http://localhost:5000/ to see updated values in orders collection/array.

# /delete/:id Route
 Use browser/postman to get remaining capacity for the day :http://localhost:5000/delete/1 

# /checkCapacity/:date
 Use browser/postman to get remaining capacity for the day :http://localhost:5000/delete/1 
