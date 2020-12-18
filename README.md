# Delivery orders control with REACT

This is a personal project where you can manage the current orders in a restaurants so you can have control with all the delivery workers and the wait time until they get the order when its ready.

## API

It uses an API made on Ruby on Rails that stores the orders and its a CRUD Api to manage the orders.
the link to the API repository is:
https://github.com/chirinosjor/delivery-orders-api

## Pages

There are some pages in the project to manage/view current orders

 - Home: It is the default view and it is supposed to be shown to the delivery drivers and it is a public view. (Does not have a navbar)

 - /Orders: It shares the same view with Home, but in this you can change views without changing the one shown to the delivery drivers, it is a private/staff view
  You can click any order to so it can be edited.

 - /Orders/id/edit: It is shown when an order is clicked and it shows its current status, code, name and app. All of this fields can be changed to edit an Order.
  NOTE: in this view there is a "Delete order" button to destroy the data in the API.

 - /Orders/new: This page is used to create new orders, it has the same component than the edit page and here you can fill the fields with information to create a new order.

### Navbar

There is a navbar in the private views (New, edit, orders) with:
 
 - Logo: a random Logo with a link to the home page

 - Navigation buttons: to navigate inside the webpage

 - Social network buttons: all the buttons are link to my social network accounts.