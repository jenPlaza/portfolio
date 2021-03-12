//project Arrays
export const descriptionArray = [
  'Faith Specialty Plates is a non-profit organization that helps to raise funds for the different organizations that put God first in their mission to help, connect, and bring people together. None of the plates are meant to favor one religious’ group over another; instead, it’s meant to bring together all who have Faith in God. Faith Specialty Plates mission is to  “help people nationwide where the need is greatest, by connecting the public with humanitarian organizations that work with the poor and the oppressed; to promote human transformation and bear witness to the good news of God.” ',
  'Parks2Go is an app that provides information on State Parks around the country. The apps mission is to facilitate park information to make trips as seamless as possible. Adventurers will love the app as individual state parks can be narrowed down by outdoor activities. Users can choose from a variety of activities from kayaking to site seeing. These family friendly trails are the most beautiful of the country and are worth exploring.  With a simple interactive US map, just click on your destination state and begin planning your next adventure.',
  'PayItForward (PIF) is a web site for faithful ministries to use, as another form of steward outreach. The app is meant to be used by ministry members; in order, to provide a safe environment for both the recipient and the donor. Recipients can make an appointment with a "faithful steward" via the app. They are then matched with a volunteer, who can run errands, drive to the doctor, watch movies, chat, build, fix, do handywork, garden, paint, mechanics, etc.  ( a small fee may be included for their services). The volunteers do not provide any personal care, like bathing or grooming. They are also not a pick-up or drop-off service, like Uber or Lyft. PIF is meant for anyone who needs to get a project or task completed, with the help of a volunteer or at a fraction of the cost. PIF will help further spread the opportunity to fellowship, within the community of servers; connecting the right volunteer to the right service.',
  ' A project description is not available at the moment',
  ' A project description is not available at the moment',
  ' A project description is not available at the moment',
];
export const imageArray = [
  './images/FSP.jpg',
  './images/parks2Go.jpg',
  './images/PIF.jpg',
  './images/toDoList-min.png',
  './images/PRW.png',
  './images/bikeShop.jpg',
];
export const titleArray = [
  'Featured Specialty Plates',
  'Parks 2 Go ',
  'Pay It Forward',
  'Task Manager List',
  'Post It',
  'The Bike Shop',
];
export const repoArray = [
  'https://github.com/jenPlaza/faithspecialtyplates',
  'https://github.com/jenPlaza/parks2go',
  ' https://github.com/fs-tech-degs/capstone-project-2009-jenPlaza',
  ' https://github.com/dws2/kanban-jenPlaza',
  ' https://github.com/jenPlaza/postit',
  ' https://github.com/jenPlaza/bikeshop',
];
export const hrefArray = [
  ' https://jenplaza.github.io/faithspecialtyplates/about.html',
  'https://jenplaza.github.io/parks2go/',
  'https://letspayitforward.herokuapp.com',
  'https://fearless-buffet.glitch.me',
  'https://jenplaza.github.io/postit/',
  'https://jenplaza.github.io/thebikeshop/',
];

export const synopsisArray = [
  'Faith Specialty Plates (FSP) is a responsive website developed with Bootstrap frameworks. The app currently adapts to desktop, tablets, and mobile platforms. FSP has a simple page layout of a column, except for the 3-module section created with 3 columns. The homepage includes a header, navbar, main article,  3-moduler sections, featured plates, a secondary article, testimonials laid out for a mobile-first flexbox grid  system, and footer. The navbar is fully responsive and programmed to expand on lg devices. Each page link is styled with the nav-link class and the active pages includes the active state to indicate current page selection. The main article contains a read more button, that when clicked, the user will be taken to fsp.com/about that will provide the user with the company’s mission statement and profile; this page is also reached by clicking on the About link from the navigation menu. By scrolling downward, using the scrolling device on the right, the user will experience a single page that is seamless in content. The page is laid out in a 2-column design that zigzags each article alternating its images and description; making it easier to read and scan more efficiently. The 3-moduler sections, beneath read more, is meant to capture the user’s attention by providing a small blurb on the company, on ordering, and on special offers. Each of these sections link to individual pages; fsp.com/ordernow and fsp.com 25 % off. Featured plates is a picture gallery of the available plates. The gallery is displayed with a 12-column system. Distributed evenly in a row. Each image links to a specific section of the fsp.com/about where each plate section is bookmarked. The user also has the opportunity to click on the Featured link from the navigational header.  This page is also laid out in a grid layout system. Each plate is custom made using photoshop and optimized to reduce loading time. Each plate contains a call-to-action order now button that links to fsp.com/ordernow, where the user will have the option of getting a plate with or without annual registration. When the user selects an option and clicks to Buy Now, the user will be provided with a modal window that displays the cart order. At this point the user has the option of clearing the cart and exiting or checking out by adding quantity of plates. The shopping cart will calculate the total according to the quantity amount. Once the workflow has completed its cycle, the user is given a Thank you notice with a brief blurb of what is expected next. The following article includes the Order Now content, displayed in a column layout. This article contains a call to action to order now. By clicking on the button, the user will be taken to the features page where the user can then select a specialty plate. The Testimonials column is a horizontal gallery that displays all the testimonials in a row layout. The last section of every page is the Footer. This section provides the user with the copyright date and company information. The Contact page can be accessed by clicking on the Contact link from the navigational header. This page offers the user the opportunity to submit an email message, by submitting a form from fsp.com/contactus. In addition to bootstraps CSS, I also added a main.css to modify default rules and to implement custom styles. In addition to bootstraps popper and jQuery implementations, I also added a main.js file that includes a singleton class. This class is in charge of the applications arithmetic from the Buy Now call to action. The website has been tested on Safari and Chrome, to provide the user with a seamless user experience.',
  'Parks2Go(P2Go) is a responsive application developed with React frameworks. The app was designed with a mobile first approach and currently adapts to desktop, tablets, and mobile platforms. To create an interactive UI design, the application is assembled with different components for content, styling, functionality, and validation. The app interacts with a restful API from nps.gov; all park information is fetched and transferred into P2Go. P2Go has a simple 2-column layout. The homepage includes a header, navbar, vertical gallery, an interactive US map, and footer. The navbar is fully responsive and programmed to expand on md devices. The vertical gallery contains a 3-item display using a 12-column grid system, from Material UI. To the right of the gallery exists an interactive state map. All items on this 2-columm main section are clickable and interactive. Each state will pull information on state parks and will have the opportunity to filter by outdoor activities. The state Activities page contains a variety of functions working together, to filter the APIs request by user state selection and activity selection, by using an onclick handler event to target selections. Once the filtering process is complete, the user will be provided with a horizontal image gallery displaying state parks filtered by state and activity preference. The gallery is responsive and will adjust according to platform specifications. Once a park is chosen the app will display Park ideas, Description, Images, Activities, Topics, and Directions. Parks2Go acquires park information from API pulls. This information will fit into the different areas of the parks text that is displayed for the Park. The parks page is laid out in 2-columns. On the top-right, this page includes a fully responsive react image gallery that displays a combination of thumbnails and lg images; clicking on a thumbnail, it displays a larger version of the same image inside a grid item of the grid container. The footer includes a link to the About Us page, links to the state activities page via state hyperlinks, and social media connections. The About Us page provides the user with a description on Parks2Go and company information. If the user wishes to send an email to P2Go, they can do so, from this page. The website has been tested on Safari and Chrome, to provide the user with a seamless user experience.',
  'PayItForward (PIF) is a responsive application developed with React frameworks. The app was designed with a mobile first approach and currently adapts to desktop, tablets, and mobile platforms. PIF is an efficient app that is intuitive and easy to learn. The app is setup with a development environment using Express frameworks to provide a server to handle http requests as a back-end component. A local PostgreSQL connection was set up to interact with a datbase, sequelize models, and seeding for initial records. The database handles 3 types of routes handlers that forward requests to controllers files, via the express.Router middleware. Express functions were set up to catch error handling by first using a try block, then catching the error, and finally handling with an appropriate error code and statement. With proper backend integration and following the MVC design pattern, the user can interact with front-end user interface components. With the implementation of hooks, the management of variables states, and properties is manageable and easy to follow. Each component is built using dummy function components. Visually the app is pleasing to use, with its minimalist approach, the user can pleasantly work through any section at ease. The app has a 2-column layout. To the right of the app, the column is static and its meant to displays social media feed. A scheduler provided by react-big-calendar library lies in-between the social media feed and local weather report requested by a restful API (openweathermap.org). The API requests filters local weather using your platforms location; it is then transferred onto PIF. The left column contains a 2-tab container; volunteering and schedule a visit. The volunteering section allows the user to pick up a visit request; its meant to allow the volunteer to chat with the recipient. Schedule a visit allows the recipient to send a visit request by submitting a form. He then is contacted by a volunteer, through the chat component, to set up an appointment. Form Validation is implemented by using Bootstrap client- side form control class. Below the 2-column setup, follows the About section. About PayItForward is a static section that provides the user with a simple description about the company. The footer is the last section of this app, that implements a contact form and connection to social media. The contact form implements a simple spam prevention technique to keep it protected. The whole development process has followed a deployment pipeline from a development push into  master, deploying to staging, and finally deploying to production. PIF is hosted on Heroku live servers and is using Herokus postgreSQL connection for a remote database. Throughout the process of staging deployment, PIF was debugged using Herokus logs and papertrail. JavaScript testing was conducted using Dredd and Circle CLI was set up for easy terminal management. Finally the website was tested on Safari and Chrome, to provide the user with a seamless user experience.',
  'ToDoList Manager is a Glitch application using HTML5 and Sass Style Sheets',
  'Post It is a React application, implementing local storage, real-time typing, and restful API usage.',
  'The Bikeshop is an HTML5 project using semantic elements.',
];
export const styleTilesArray = [
  './images/FSP_styleTile.png',
  './images/p2go_styleTile.png',
  './images/PIF_styleTile.png',
  'Not available at this moment ',
  'Not available at this moment ',
  'Not available at this moment ',
];
export const lofiDArray = [
  './images/FSP_lofi_desktop.png',
  './images/p2go_lofi_desktop.png',
  './images/PIF_lofi_desktop.png',
  'Not available at this moment ',
  'Not available at this moment ',
  'Not available at this moment ',
];
export const lofiMArray = [
  './images/FSP_lofi_mobile.png',
  './images/p2go_lofi_mobile.png',
  './images/PIF_lofi_mobile.png',
  'Not available at this moment ',
  'Not available at this moment ',
  'Not available at this moment ',
];
export const hifiDArray = [
  './images/FSP_hifi_desktop.png',
  './images/p2go_hifi_desktop.png',
  './images/PIF_hifi_desktop.png',
  'Not available at this moment ',
  'Not available at this moment ',
  'Not available at this moment ',
];
export const hifiMArray = [
  './images/FSP_hifi_mobile.png',
  './images/p2go_hifi_mobile.png',
  './images/PIF_hifi_mobile.png',
  'Not available at this moment ',
  'Not available at this moment ',
  'Not available at this moment ',
];
