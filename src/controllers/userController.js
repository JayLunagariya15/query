const user = require('../model/userSchema');

//insertOne in user
const userinOne = async(req,res)=>{

    const {name,email,phone}= req.body

    try{
        const insertOne = await user.create({
            name:name,
            email:email,
            phone:phone
        });
        res.status(200).json(insertOne);
    }catch(err){
        console.log(err);
        res.status(400).json({message: err.message});
    };
};


//insertMany
const userinMany = async(req,res)=>{

    const {name,email,phone}= req.body

    try{
        const insertMany = await user.create(
            // [{
        //     name:"Jay6",
        //     email:"jay6@gmail.com",
        //     phone:1234567899
        // },{
        //     name:"Jay7",
        //     email:"jay7@gmail.com",
        //     phone:7755332211
        // }]

        // [{
        //     name:name,
        //     email:email,
        //     phone:phone
        // },{
        //     name:name,
        //     email:email,
        //     phone:phone
        // }]
        );
        res.status(200).json(insertMany);
    }catch(err){
        console.log(err);
        res.status(400).json({message: err.message});
    };
};


//updateOne
const userUpdateOne = async(req,res)=>{

    const {name,phone} = req.body

    try{
        const userUpOne = await user.findOneAndUpdate({name:name},{phone:phone});
            console.log(userUpOne);
            res.status(200).json({message: "User Updated"});
    }catch(err){
        console.log(err);
        res.status(400).json({message: err.message});
    };
};

//updateMany
const userUpdateMany = async(req,res)=>{
    const {name,email,phone} = req.body

    try{
        const userUpMany = await user.updateMany({name:name},
            {$set: {email:email,phone:phone}}   
        );
        console.log(userUpMany);
        res.status(200).json({message: "User Updated"});
    }catch(err){
        console.log(err);
        res.status(400).json({message: err.message});
}
};



//insert with unique
const uniInsert = async(req,res) => {
    const {name , email, phone} = req.body

    try{
        const insert = await user.create({ name:name, email:email, phone:phone});

        if(email == email ){
            return res.status(400).json({message: "please use diffrent values"})
        }
       return res.status(200).json(insert);

    }catch(err){
        res.status(400).json({message: err.message});
    };
};

module.exports = {userinOne,userinMany,userUpdateOne,userUpdateMany, uniInsert}






// // Register or Creating One User 
// const users = async (req, res) => {
    
//     const {name,email} =  req.body

//     try {
//         const test =  new user({name: name, email: email}); 
//         const saveTest = await test.save();

//         res.status(200).json({ message: "Data Added Successfully"});
//     }catch(err){
//         res.status(400).json({ message: err.message});
//     }        
// };



// //findOne user
// const fOne = async (req, res) => {

//     const {name, email} = req.body

//     try{
//         const userExists = await user.findOne({name: name});
//         const emailExists = await user.findOne({email: email});

//         if (!userExists){
//              return res.status(400).json({message: "name does not exist" });
//         }if (!emailExists){
//             return res.status(400).json({message: "email does not exist"})
//         }

//         return res.status(200).json({message: "User exists"});
//     }catch(err){
//         return res.status(400).json({message: err.message});
//     }
// }



// // get all users
// const gAll = async (req,res) => {

//     const {name, email} = req.body
//     try {
//         const allUser = await user.find({email: email});

//         return res.status(200).json(allUser);
//     } catch (error) {
//         return res.status(400).json({ message: error.message });
//     }
// };


// // get one user
// const getUser = async (req, res) => {

//     const name = req.params.name

//     try{
//         const oneUser =  await user.findOne({name: name});

//         if(!oneUser){
//             return res.status(400).json({message: "There is no user in database with this name"})         
//         }           
//         return res.status(200).json(oneUser);
//     } catch(err){
//         return res.status(400).json({message: err.message});
//     }
// }



// // $ Queries

// // create/inserting values for functions 
// const listing = async (req, res) =>  {
    
//     const {name, email, book , price} = req.body
    
//     try {
//         const List = user(req.body);
//         const saveList = await List.save();

//         return res.status(200).json({message : "List is added"})
//     }catch(err){
//         return res.status(400).json({message : err.message})
//     }
// }

// // $set function 
// const setFunction = async(req, res) => {

//     const {name, email}  = req.body

//     try{

//         const set = await user.updateOne({name: name},
//             {  
//                 $set : {email:email}
//             });
//         console.log(set);
//         return res.status(200).json(set);
//     }catch(err){
//         return res.status(400).json({message: err.message});
//     }
// }


// // match function
// const matchFunction = async(req, res) => {

//     const {book,price} = req.body

//     try{
//         const match = await user.find({book:book},
//         [
//             {$match: {price : price}}
//         ]
//         );
//         if (!match){
//         res.status(400).json({message: "User does not match wtih DB"});
//         }
//         return res.status(200).json(match);
//     }catch(err){
//         return res.status(400).json({message: err.message});
//     }
// }

// // const matchFunction = async(req,res) =>{

// //     const { name , email, qty} = req.body
// //     console.log(name,email,qty);

// //     try{
// //         const match = await user.find({name: name},
// //         [
// //             {$match : { email: email, qty: qty}},
// //         ]);
        
// //         if(match)
// //         return console.log(match)
// //     }catch(err){
// //         return console.log(err);
// //     };
// // }


// // const matchFunction = async(res,req) => {
    
// //     const { name , email, qty , tag } = req.body
// //     console.log(name,email);    

// //     try{
       
// //         const match = await user.find({name: name},
// //             {
// //                 $match : { email: email } 
// //     });
// //           console.log(name,email);

// //         if(match)
// //         return res.status(200).json(match);
// //     }catch(err){
// //         return res.status(400).json({message: err.message});
// //     }
// // }


// //$push Function
//  const pushFunction = async(req, res) => {

//     const { name, room} = req.body

//     try{
//         const Push = await user.updateOne({name: name},
//             {
//                 $push : {room: room }
//             });
//         if(Push)
//         return res.status(200).json(Push)

//     }catch(err){
//         return res.status(400).json({message: err.message})
//     }
//  }


// //$eq Function
// const equalFunction = async(req,res) =>{

//     const {book, price, name } = req.body
//     try{
//         const equal = await user.find(
//             {   
//                 price : {$eq: price} 
//             }
//     );
//         return res.status(200).json(equal)
//     }catch(err){
//         return res.status(400).json({message: err.message})
//     }
// }

// //$lte and $gte Function
// const lte = async(req,res)=>{
 
//     const {book,price}= req.body

//     try{
//         const lessCompare = await user.find({price: {$lte: price}});
//             return res.status(200).json(lessCompare)  
//     }catch(err){
//         return res.status(400).json({message: err.message})
//     }
// }

// const gte = async(req,res)=>{
 
//     const {book,price}= req.body

//     try{
//         const compare = await user.find({price: {$gte: price}});

//             return res.status(200).json(compare)  
//     }catch(err){
//         return res.status(400).json({message: err.message})
//     }
// }

// const each = async (req, res)=>{
    
//     const {name,email, room, book,price } =  req.body

//     try{
//         const pop = await user.find({name:name},
//             [{
//                 price: {$each : price}
//             }]
//             );
//         res.status(200).json(pop);
//     }catch(err){
//         return res.status(400).json({message: err.message});
//     }
// }

// module.exports = {users, fOne, gAll, getUser, listing , setFunction ,matchFunction, pushFunction, equalFunction , lte, gte ,each };


