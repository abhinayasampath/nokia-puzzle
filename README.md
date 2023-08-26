# nokia-puzzle

#After running the application Please use the below curl for testing

curl --location --request POST 'http://localhost:4000/api/earth-mars-comm/message/' \
--header 'x_sender: mars' \
--header 'x_receiver: earth' \
--header 'Content-Type: application/json' \
--data-raw '{
    "message":"446668877778666.66 3666 99966688 2226667999"
}'
