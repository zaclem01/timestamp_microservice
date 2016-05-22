Timestamp Microservice API
==========================

Description
-----------

This service accepts a human readable date or unix timestamp and  
returns a JSON object with both the human readable date and  
unix timestamp. If no correct date or timestamp is supplied  
it returns null for the keys.

Use
---

Provide a date or unix timestamp argument to the API.  
e.g. `https://timestamp-service-fcc2089.herokuapp.com/jan%201%2016`  
will yield `{unix: 1451606400,natural: "January 1, 2016"}`