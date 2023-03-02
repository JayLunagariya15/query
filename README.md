# query

all important query are stored in this folder.
 
using four interlinked schema all the querires are used 

four schema : userSchema
              carSchema
              tnxSchema
              eventSchema
           
four controllers:  userController
                   carController
                   tnxController
                   eventController

task: 1. populate users and cars detail using tnxController(transection data)
      2. populate transection details by using eventController (for example , transection happend or not like that)
      
      
Query: insertOne
       insertMany
       updateOne
       updateMany
       deleteOne
       deleteMany
       updateMany (used in delete query; if we want to delete perticular field then use $unset in updateMany query)
       find
       findOne
       findById
       findAndUpdate
       
       $set
       $unset
       $push
       $lte / $lt
       $gte / $gt
       $eq
       
       .populate
       .sort
       .limit

   
