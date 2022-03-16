## **A Full Funtional eCommerce Website.**

> **N.B. :** **Please wait a bit (working a little slow to deploy in Heroku. It may take 2-3 minutes to see the site for the first time)**

**Live Site Link:** [https://my-full-ecommerce-mern-project.herokuapp.com/](https://my-full-ecommerce-mern-project.herokuapp.com/)

**Use this email and password to login as an admin:**

**_email_** : admin@admin.com
**password**: 12345678

**_All Features are describe below:_**

**1**. **Before Login:**

- Before logging in to the site, the user will be able to see only 8 products on the home page of the site. If you go to the products page, you will see the first 8 products at the beginning. Pagination system has been added so that if you go to the next page you will see the next 8 products and this will continue. And if you do not have more than 8 products, you will not be able to see the pagination option. For pagination system I used react-js-pagination npm package.![enter image description here](https://i.imgur.com/pKXQ5WQ.png)
  ![enter image description here](https://i.imgur.com/7Qx8GnM.png)
- Filtering system has been added to the products page. Three types of filtering systems have been added here. The first is to filter by price. The second is filtering by category. The third is filtering in the form of product ratings. Will update all realtime. Material UI has been used for filtering sliders.![enter image description here](https://i.imgur.com/gRDX02C.png)

- Users can add their product in cart without logging. By going to the cart page, the products of the cart can increase the quantity, reduce the product and remove the product. The cart system has been used with Redux and local storage has been used here. The user must log in to checkout the product or else he will not be able to get the checkout. The system has been added with the help of Protected Route which is done with React Router Dom.![enter image description here](https://i.imgur.com/XRc3URX.png)

- There is an option called Forget Password on the logging page. It will be able to recover lost passwords if it has been logged in before. If the email is correct, a link will be sent to the email, with the help of which user will be able to give a new password.![enter image description here](https://i.imgur.com/zGOkeNS.png)

**2**. **After Login:**

- The logging system is done with Node Js. To Register in, user have to give name, email, password and picture. Image hosted by Cloudinary. The password encryption in Node.js using bcryptjs module. The user will be able to confirm the order after logging in. Country and State will dynamically come and select when ordering. And Stripe has been added to the payment system.![enter image description here](https://i.imgur.com/UrLuDbF.png)![enter image description here](https://i.imgur.com/lMXn1eE.png)
  ![enter image description here](https://i.imgur.com/KTgDpgQ.png)
- There is a page called Account for the user which after logging in can see the help of the menu and its help the user can go to the profile page. From there he can update all his details if he wants. In the menu there is an order page for the user where he can see the complete details of his order.
  ![enter image description here](https://i.imgur.com/R6KUW9u.png)

- Users will be able to rating the product after logging in. If the same user gives it twice, the previous one will be removed and the new one will be added and it will be real time show. And the rating will show the average size at 5 stars which is what we usually see on ecommerce site.

**2**. **Login As A Admin:**

- Logging in as admin will see many functionality. Logging in as admin will see a dashboard option in the menu. Clicking on the dashboard will take admin to the dashboard page. The user will be able to see the total amount of orders placed on this page in the form of a total amount graph. Chart JS is used to show the graph. You can see how many stocks are there and how many are not.![enter image description here](https://i.imgur.com/lmbJZYj.png)

- There is an option called products on the dashboard. Clicking here will show the admin all the products. From there the user can update or delete these products if he wants.![enter image description here](https://i.imgur.com/kPlOQwg.png)

- There is a users option in the admin dashboard. There users will be able to see their roles. If the admin wants, he can make the user an admin. There is a way to update. If admin click there, admin can change the role from the select option. And users can remove if admin want.![enter image description here](https://i.imgur.com/arQWhr1.png)

- On the left side of the dashboard page, there is a products option. If admin click there, two options will come up. There is an option called Create. From there, users can add products if they want. When adding a product, the user can upload multiple images of the product together if he wants.
  ![enter image description here](https://i.imgur.com/U08yYV8.png)

- There is a reviews option in the menu on the left side of the dashboard page. Clicking there will bring a field. If search with the product ID, all the ratings of that product will come. Admin will be able to remove product reviews if desired.![enter image description here](https://i.imgur.com/AemWTwa.png)

**N.B:** **Please wait a bit (working a little slow to deploy in Heroku. It may take 2-3 minutes to see the site for the first time)**
