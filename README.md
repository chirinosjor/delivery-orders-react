# Delivery orders control with REACT

This is a personal project where a restaurant can manage the current orders so they can have control with delivery drivers and the wait time until they get the orders when they are ready.

The project is now available in:
https://deliver-orders-react.herokuapp.com/

## API

It uses an API made on Ruby on Rails that stores the orders and its a CRUD Api to manage the orders. the link to the API repository is:
 https://github.com/chirinosjor/delivery-orders-api
 And the url to the available api is:
 https://deliver-orders-react.herokuapp.com/

## Pages

There are some pages in the project to manage/view current orders

 - Home: It is the default view and it is supposed to be shown to the delivery drivers and it is a public view. (Does not have a navbar)

 - /Orders: It shares the same view with Home, the difference is that the views in this url can be changed without affecting the one shown to the delivery drivers, it is a private view where any order can be clicked so it can be edited.

 - /Orders/id/edit: It is shown when an order is clicked and it shows its current status, code, name and app. All of this fields can be changed to edit an Order. NOTE: in this view there is a "Delete order" button to destroy the data of this order in the API.

 - /Orders/new: This page is used to create new orders, it has the same component than the edit page and here fields can be filled with information to create a new order.

### Navbar

There is a navbar in the private views (New, edit, orders) with:
 
 - Logo: a Logo with a link to the home page

 - Navigation buttons: to navigate inside the webpage

 - Social network buttons: all the buttons are link to my social network accounts.
