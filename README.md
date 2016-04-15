# Cortana Notebook Stub

## Description

The team at **Table 1** had need of data from the Cortana notebook SDK which is only available at an Enterprise account level.  This stub was created to give equivalent data via a RESTful endpoint we setup for them.

## Deployment

This is deployed to [Azure](http://hackwars.azurewebsites.net) and has the following endpoints:

* `/` - Responds with "Hello World!"
* `/notebook` - responds with JSON data from all notebooks
* `/notebook/:id` - responds with the data from just one notebook, named by `:id`
