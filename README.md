## CAPSTONE PROJECT
ArtCart: a web-based art community meant to encourage, enfranchise and empower artists by providing a platform to display their work, convey their message and expand their influence. 

## Designed by:  
Rosendo Pili (<a href="https://github.com/rosendopili">@rosendopili</a>)<br/>

## TECHNOLOGIES USED
* React.JS 
* JAVA 
* Docker
* Zuul & Eureka
* Cloudinary API

## FUNCTIONALITY


## HURDLES, SETBACKS & SUCCESSES 

I originally set forth to create a web-based arcade application.  My monolith API was designed to manage player accounts and statistics, however, the setbacks I encountered (namely with refactoring my Javascript code to React specifications) gave me pause enough to pivot.  

I quickly re-worked my existing API to include a user profile model, in addition to the existing user model, and added a datatable to handle user inventory.  

With my monolith API complete and endpoint efficacy cconfirmed through postman testing, I Dockerized my project along with a Zuul API-gateway and Eureka server functionality.  I was under the gun here, with the weekend behind me and a partial front-end design left over from my original arcade idea, I was lucky enough to have spent only a day to get my microservice up and running.  

Using cloudinary's image-hosting service, I was able to create an upload form for user photos that in turn, provided me with a URL that could be saved to my database.  

... to be continued

**PLANNING DOCUMENTATION**

Photos and diagrams of our work throughout the app building journey can be viewed [here](https://docs.google.com/presentation/d/1e5vG0iM1sKKpUTAdHejLI4O4lg-3y5W3rAz6ITr73r0/edit?usp=sharing).

## USER STORIES

**Rosendo, a local artist**
* Rosendo is a local artist looking to improve his on-line presence and gain more notoriety for his paintings and murals.  He uses CartArt to post images of his work with the hopes of reaching a larger audience. 

**Sheryl, an art-collector and gallery owner**
* Sheryl posts images of the work she displays in her gallery, hoping to attract more artist submissions.  She also uses the platform to search for new talent and new works of art to purchase for her personal collection. 

**Jeff, a newcomer to the artworld**
* Jeff has always had a general interest in art but never had a community to lean on for advice, inspiration and camaraderie.  He uses the platform to connect with local artists and to see all of the amazing work his new-found contemporaries are putting out into the world. 
