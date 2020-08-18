# pawsandclaws
a local pet store

I realize that this is no way near done but I had very little time to work with, I'll improve this as we go and keep adding new features as this is going to delivered to a client in the future. 

# Download and extract the zip. 
$npm install 
$npm start 

In the main directory.
then 

#cd frontend
$npm install 
$npm start 

You app will run at localhost:3000 and the server will run at localhost:5000

In order to perform crud operations go to "/products".

# The following criteria is met:

Atleast one Restful API implemented in node, express and mongodb
even if you are using a server side rendering mode of implementation
Server side validation
Client side validation e.g. on browser end
Authentication
Session authentication in case of server side rendering
JWT based authentication in case of client side rendering
A web application demonstrating complete CRUD capabilities. It can be one of following
 Server side rendering using PUG
Client Side rendering using JQuery or REACT (Only one of these two techniques)
Authorization
Any segment of your web app should only be accessible to admins.

# Things to be done:

The UI is awful as there is no bootstrap, purely CSS based beautification has been implemented to keep the site fast. But will improve the frontend with time. 
The isAuth and isAdmin funtion in the util has a problem and needs to be fixed hence you cannot implement the admin authentication, but if you want, you only need to add isAuth 
and  isAdmin check to the calls in ProductRoute.js in "backend/routes".

Other than this everthing is in order. 
If there are any queries feel free to contact me at saadrajpt@gmail.com
