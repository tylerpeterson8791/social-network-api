# Social Network Back-End

  ## Description
  
  My motivation for this project was to create a back end for a Social Media site.  The platform has users that can post their "Thoughts" and become "Friends" with other users.  The users can also "React" to other user's "Thoughts.

  My personal motivation was to get more comfortable with using Mongoose and Mongo_DB as a database program.
  
  ## Installation

  This was a "from-scratch" project so the first thing I did was setup my basic file structure as well as server.js, gitignore, ect...  After that was complete I got everything installed and began setting up a "skeleton" of the files I would need and some examples from class for reference.

  After the initial setup I tackled the Models.  Even though we didn't begin with starter code, the challenge description had great instructions for what was expected.  The models were varied enough with multiple schemas and asscoiated values. I used a Match on the email address and learned alot in how the "Thought" and "Reaction" schema's worked together.

  For the routing I began by laying out every function that would be needed and seperated them into the appropriate routes.  Since this is just the backend it only has api routes, I seperated userRoutes and thoughtRoutes.  Both sets have routes that have multiple params being passed in.  That took some time to wrap my head around initially but once I figured it out through testing I was able to accomplish what I wanted to do.

  The controllers are where Mongoose really shines.  Using queries in a straightforward way is really an asset for the platform.  Pushing, pulling, finding, updating are all utilized and the implementation of them makes building more "complex" controllers more managable.

  After that was complete I built my seed file and began testing.  We used a lot of randomized seeding in our curriculum so my initial thought was to do that.  Instead I changed my mind and made the seeds NBA themed where players are the users gloating and talking trash to eachother to have some fun with it.  I made sure to leave the reaction (which I want initially empty on all Thoughts) fields in the seeds with empty arrays [] to ensure they could be added to.
  
  This project was a VERY valuable practice in how to set everything up using Mongoose and I feel much more confident in my abilities doing so moving forward.

 HERE IS A VIDEO OF ME TESTING THE ROUTES IN POSTMAN (sorry for the length, a lot of copy and pasting of ids, wanted to show all functionality working):

 [Functionality Video](https://drive.google.com/file/d/1aYvis2bUMjdcuc85VrnOAaCiE1Y70DaC/view?usp=sharing)

  ## Usage
  
  Since there is no front end on this there really isn't any User process yet.  Below are a couple of screenshots of the return data based on routing:
  
![Posting Reaction on Thought](https://github.com/tylerpeterson8791/social-network-api/assets/75902133/dac0c4a3-7246-4cc0-8c6b-382d3d53d642)




  ## Credits

  This challenge was a great way to get me more comfortable with using Mongo_DB and Mongoose.

  I only used class notes and lessons for reference on this one so I have no outside sources to credit besides the mongoose documentation they put out themselves (especially the queries section:

  [MongooseJS](https://mongoosejs.com/docs/queries.html)
  
  Finally a big thanks for my instructor Gary for explaining things so well in class!  Also a big thanks to our TA's Katy and Jessica for helping us throught the mini project; that ended up being a great resource for this challenge.
