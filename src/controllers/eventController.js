const event = require('../model/eventSchema');
const tnx = require('../model/tnxSchema')

//insert event
const eveInsert = async(req,res)=>{
    const {created,sold, from, to, price,status}= req.body
    try{
        const insertEvent = await event.create([{
            created:created,
            sold:sold,
            from:from, 
            to:to, 
            price:price,
            status:status
        }]);
        res.status(200).json(insertEvent);
    }catch(err){
        res.status(400).json({message: err.message});
    };
};

//findById
const findbyID =  async(req,res)=>{
    const {_id} = req.body

    try{
        const byId = await event.findById({_id :_id})
        console.log(byId);
        res.status(200).json(byId);  
    }catch(err){
        console.log(err);
        res.status(400).json({message: err.message});
    };
};

//findAndModify
const Modify = async(req,res)=>{
    const {created,sold, from, to, price,status} = req.body
    try{
        const modified = await event.findAndModify(
            {from:from,to:to},
            {created:created,sold,price:price,status:status},
            {upsert: true},
            {new:true}
        );
        console.log(modified);
        res.status(200).json(modified)
    }catch(err){
        console.log(err);
        res.status(400).json({message: err.message});
    };
};
module.exports = {eveInsert,findbyID,Modify}