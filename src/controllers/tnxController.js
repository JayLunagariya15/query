const tnx = require('../model/tnxSchema');
const user = require('../model/userSchema');
const car = require('../model/carSchema')

//insertone tnx
const inTnx = async(req,res)=>{

    const {from, to,price} = req.body

    try{
        const tnxOne = await tnx.create({
            from:from,
            to:to,
            price:price
        });
        console.log(tnxOne);
        res.status(200).json(tnxOne)
    }catch(err){
        res.status(400).json({message: err.message});
    };
};


//find user detail
const find = async(req,res)=>{
    const {from,to,price} = req.body

    try{
        const tnxFind = await tnx.find({from:from},{from:1,_id:0}).populate('from');
        console.log(tnxFind);
        res.status(200).json(tnxFind);

    }catch(err){
        console.log(err);
        res.status(400).json({message: err.message});
    };
};



//findOne with car details 
const findOne = async(req,res)=>{
    const {from,to,price} = req.body

    try{
        const tnxFindOne = await tnx.findOne({from:from}).populate('to')
        console.log(tnxFindOne);
        res.status(200).json(tnxFindOne);

    }catch(err){
        // console.log(err);
        res.status(400).json({message: err.message});
    };
};


//sort value in asc and desc 
const sort = async(req,res)=>{
    const {from,to,price} = req.body

    try{
        const carValues = await tnx.find({}).sort({price: -1 }).limit(5);
        // sort( {field:1}) ==> ascending
        // sort({field: -1}) ==> descending
        res.status(200).json(carValues)
    }catch(err){
        res.status(400).json({message: err.message});
    };
};

module.exports ={inTnx,find,findOne,sort }