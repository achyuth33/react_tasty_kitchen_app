In this project let's build a **Tasty Kitchens App** by applying the concepts we have learned till now. This project allows you to practice the concepts and techniques learned till React Course and apply them in a concrete project.

You will demonstrate your skills by creating an app that will fetch data from an internal server using a class component, displaying that data, using **component lifecycle** methods, **routing** concepts, **authentication**, and **authorization**, and adding responsiveness to the website.

This is an individual assessment. All work must be your own. You will also be given feedback by code reviewers after your project submission.

### Prerequisites

#### UI Prerequisites

<details>
<summary>Click to view the UI Prerequisites</summary>

- What is Figma?
  - Figma is a vector graphics editor and prototyping tool which is primarily web-based. You can check more info on the <a href="https://www.figma.com/" target="_blank">Website</a>.
- Create a Free account in Figma
  - Kindly follow the instructions as shown in <a href="https://www.youtube.com/watch?v=hrHL2VLMl7g&t=37s" target="_blank">this</a> video to create a Free Figma account.
- How to Check CSS in Figma?
  - Kindly follow the instructions as shown in <a href="https://www.youtube.com/watch?v=B242nuM3y2s" target="_blank">this</a> video to check CSS in the Figma screen.
- Export Images in Figma screen
  - Kindly follow the instructions as shown in <a href="https://www.youtube.com/watch?v=NpzL1MONwaw" target="_blank">this</a> video to export images from the Figma screen.
  - Check <a href="https://help.trydesignlab.com/hc/en-us/articles/360011010634-How-do-I-export-images-and-PDFs-from-Sketch-or-Figma-in-my-short-course-" target="_blank">this</a> reference docs to export images in Figma screen.

</details>


#### Design Files

<details>
<summary>Click to view the Design Files</summary>

- You can check the **Design Files** for different devices <a href="https://www.figma.com/file/5DK9nvTWZ4W0ytHtDrDe56/Tasty_Kitchens" target="_blank">here</a>.

</details>

### Project Set Up Instructions

<details>
<summary>Click to view the Set Up Instructions</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Project Completion Instructions

<details>
<summary>Click to view the Functionality to be added</summary>

#### Add Functionality

The app must have the following functionalities

- Login Route
  - Users should be able to login to their account by entering a valid username and password.
- Users should be able to navigate to Home, Cart routes using links in Navbar.
- When the data is being fetched then the Loading view should be displayed to the user.
- Users should be able to view the website responsively in mobile view, tablet view as well
- Home Route 
  - Navbar should contain the application title with logo, Home, Cart, and Logout button
  - Users should be able to navigate to Home route when clicking on **TASTY KITCHENS** logo.
  - Users should be able to see carousel images with its offer details.
  - Users should be able to see Popular Restaurants
  - Users should be able to see the sort by icon as shown in the figma
  - Users should be able to select the sort by icon and able to see the Popular Restaurants based on the Highest and Lowest Ratings
  - Users should be able to sort the list of Restaurants based on their ratings.
    - When user clicked the Lowest the Restaurants list should be displayed in Lowest ratings to Highest ratings
    - When user clicked the Highest the Restaurants list should be displayed in Highest ratings to Lowest ratings
  - Users can browse popular Restaurants using pagination buttons
  - Users should be able to see the footer as shown in figma
  - Users should be able to see Home with highlighted text in Navbar.
- Specific Restaurant details Route
  - When users click a restaurant in a particular list, it should open a new page with respective restaurant details
  - Users should be able to see food items list as shown in the figma screens.
- Cart Route
  - Users should be able to select the Cart link in the navbar and be able to view their selected Food items, Each food item quantity, and price of each food item in a separate page.
  - Users should be able to increase or decrease their each food item quantity and price should increase or decrease appropriately
  - Users should be able to see their order total as shown in figma
  - Users should be able to see the footer as shown in figma
  - Users should be able to see Cart with highlighted text in Navbar
  - Users should be able to see Cart Items even after the app is refreshed, store the data in local storage
- Logout Button
  - Users should be able to logout from accounts page
  - When the data is being fetched then the Loading view should be displayed to the user in all Routes.
  - Users should be able to view the website responsively in mobile view, tablet view as well.
- When the users enter invalid route in the URL then the Page not found Route should be displayed.

</details>

### Stretch Goals

If you complete the main features of the project you can try out the below features as well.
**Note:** Just a reminder the additional functionality is just extra practice using the tools we have learned. These are not required. If you do not reach the stretch goals, don't worry.

<details>
<summary>Click to view the Additional Functionality that can be added</summary>

- Profile Route
  - Users should be able to select and view basic profile details using the Profile in the navbar in a separate page.
- Search Functionality
  - Users should be able to search for popular restaurants.
  - Users should be able to browse search results using pagination buttons.
  - When the user provides the restaurant name which is not in the database then the No results view should be displayed.
  - When the users click a restaurant, it should open a new page with respective restaurant details
- Restaurants Availability Route
  - Users should be able to see the restaurant immediate availability time if the restaurant is closed currently
- Backend Implementation:
  - As we are already familiar with nodejs, implement all the APIs used in this project using node js.


</details>

### Quick Tips

<details>
<summary>Click to view the list of Quick Tips</summary>

- You can use React-slick third party library to implement offers carousel
  - React Slick <a href="https://react-slick.neostack.com/docs/get-started" target="_blank">Documentation</a>
  - React Slick implementation <a href="https://codesandbox.io/s/solitary-shadow-g7c3d" target="_blank">CodeSandbox</a>

</details>

### Data Fetch URLs

<details>
<summary>Data fetch URLs</summary>


- **Note:** Use the values in the APIS as shown below
  - The value of the query parameter **limit** should always be `9`
  - The value of the query parameter **offset** can be calculated using the below formula 
  

    ```js
    const offset = (activePage - 1) * limit
    ```
    
  - **Note** - Use the below sample code snippet to make a POST request on Login using valid username and password

    ```js
    const options = {
        method: 'POST',
        body: JSON.stringify(userDetails),
    }
    ```
- Login Route:
  - Get Request Token:

    ```js
    "https://apis.ccbp.in/login"
    ```
    - Sample request object:

      ```example
      {
        "username": "rahul",
        "password": "rahul@2021",
      }
      ```
      
   - Valid credentials

    ```example
        username: rahul
        password: rahul@2021
    ```
    - Sample response object:

      ```json
      {
        "jwt_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MTk2Mjg2MTN9.nZDlFsnSWArLKKeF0QbmdVfLgzUbx1BGJsqa2kc_21Y"
      }
      ```


- Home Route: 
  - Get Carousel Images:
  
    ```js
    "https://apis.ccbp.in/restaurants-list/offers"
    ```
  - Sample response object:

    ```example
    {
        "offers": [
           {
            "image_url": "https://assets.ccbp.in/frontend/react-js/restaurants-app-project/carousel-images-jammu-special.jpg",
            "id": 1
           },
            .....
          ]
    }
    ```
      
  - Get Restaurants List:  
  
    ```js
    "https://apis.ccbp.in/restaurants-list?offset=${offset}&limit=${LIMIT}"
    ```
    
    - Sample response object:
    
    ```example
    {
        "restaurants": [
        {
            "has_online_delivery": true,
            "user_rating": {
            "rating_text": "Very Good",
            "rating_color": "5BA829",
            "total_reviews": 155,
            "rating": 4.3
            },
            "name": "Broasted Friend Chicken (BFC)",
            "has_table_booking": 0,
            "is_delivering_now": 0,
            "cost_for_two": 1500,
            "cuisine": "North Indian, Fast Food",
            "image_url": "https://www.franchisezing.com/franchise/wp-content/uploads/2016/02/chole-bhature.jpg",
            "id": "2300058",
            "menu_type": "NON-VEG",
            "location": "plot no 23, Silicon Valley, Hyderabad, Telangana 500081",
            "opens_at": "10:00 AM Tomorrow",
            "group_by_time": true
        },
        ....
    ],
    "total": 30
    }
    ```
    
  - SortBy Functionality:
    - **NOTE** - The selected sort by value should be given in the place of value
    
    ```js
    "https://apis.ccbp.in/restaurants-list?sort_by_rating={selectedSortByValue}"
    ```
    
    ```js
    // Example URL with query parameters and values
    const apiUrl = "https://apis.ccbp.in/restaurants-list?offset=${offset}&limit=${LIMIT}&sort_by_rating=${selectedSortValue}"
    ```
    
  - Search Functionality:
    - **NOTE** - The value of the search input should be given in the place of value
    
    ```js
    "https://apis.ccbp.in/restaurants-list?search=${searchInput}"
    ```

    ```js
    // Example URL with query parameters and values
    const apiUrl = 'https://apis.ccbp.in/restaurants-list?search=hotel&offset=0&limit=9&sort_by_rating=low';
    ```
    
- Specific Restaurant Details Route:
  - **NOTE** - The value of the path parameter **id** should be `id` value of the each Restaurant

  - Get Restaurant Details:

    ```js
    "https://apis.ccbp.in/restaurants-list/${id}"
    ```
  - Sample response object :
    
    ```example
    {
        "rating": 3.6,
        "id": "3200283",
        "name": "Miss.Ice Cream",
        "cost_for_two": 700,
        "cuisine": "Bakery",
        "image_url":"https://b.zmtcdn.com/data/pictures/3/2200283/2f0442152a13a183aaf62065e4689158_featured_v2.jpg",
        "reviews_count": 51,
        "opens_at": "12:00 PM, Tomorrow",
        "location": "Domalguda, Himayatnagar, Hyderabad",
        "items_count": 45,
        "food_items": [
        {
            "name": "Chicken Roast",
            "cost": 660,
            "food_type": "NON-VEG",
            "image_url":"https://americanhomecook.com/wp-content/uploads/2019/11/Thanksgiving-Roast-Chicken2.jpg",
            "id": "7352a58f-3228-4c7c-bd98-f66423f6bdcf"
        },
        .....
        ]
    }
    ```
</details>

### Deployment

Use the command `ccbp publish RJSCPP63AV sample.ccbp.tech` to deploy your project.

### Project Submission Instructions

You don`t need to submit this project. This can be done at your own pace.

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a
>   look at the Cheat Sheets.