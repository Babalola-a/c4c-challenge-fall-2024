### Instructions for Starting the Application

1. **Installation Requirements**:
   - Make sure you have Node.js and npm installed.
   - Clone this repository.
   - Find the project within your terminal
   - Run the following command to make sure everything is downloaded to run 
     npm install

2. **Build the application**:
   - To build the application, run:
     npm run build


3. **Start the Application**:
   - To start the application in development mode, run:
     npm start
   - You should be able to open the application in your browswer at `http://localhost:3000`.

### High-Level Overview of the Application
This application allows users to manage a list of partners. Which is very useful for code for community since managing partners in an effective way is essential to making sure that they are keeping organized in order to reach their future goal. 

Within this application users can add new partners edit their existing partners and delete those partners as well from the dashboard.

This application displays the partners on a grid layout where the activ  partners are shown with green borders and the inactive parnters are shown with a red border.

### Design decisions: 

I decided to implement a reusable component for the input field and label since it was being resued multiple times 

**State Management**
I used the useState hook and useEffect hook within react. The UseState hook was used to manage the state of partners and the current editing of the partner information. The useEffect hook is used to fetch partner data from the backend.

I also added form validation to make sure that all fields are filled in before submitting, it will not allwo you to submit unless all fields are filled. 

### Reflection

**What I learned from this project**
This project took me a lot of time since I had to do a decent amount of research before even starting in order to get a better grasp of react since I never really used react that much before. This project gave me an opportunity to experiment with more complex react implementation adn learn more about routing as well. I recently took databse design so this project gave me an opportunity to apply what I had learned to a personal project that I was interested in.

**What would I have done differently if you had more time?**
- Add input validation into the form making sure that users are putting in valid email addresses and url addresses. 
- Add more deisgn to the website as of right now this is a very basic user interface adn as someone interested in design there are plenty of ways to make this look better 
- Possibly add a databse in order to have effective storage of data if this was to hold more partners 

**Did you run into issues during this project? If so, how did solve or work around them?**
In the beginning I kept receiving CORS errors which was very infuriating since this is relatively fresh to me I didn't necessarily know how to approach the problem. I had to watch a lot of youtube videos and research in order to understand what these errors were in order to approach them correctly. I also made sure to take a lot of breaks from my code because I find that when I stare for a problem for too long I become frustrated. By taking a break and coming back to my code I was able to find out the issues and also using my resources effectively. 

**If you implemented any bonus features, what made you choose them?**
The only bonus feature that I chose to implement was editing the partner information once submitted. I decided to implement this feature because during my database design dialogue last semester I implemented something similar within my project so I thought it would be interesting to implement the same feature but instead in react in order to further my experience in different languages. 