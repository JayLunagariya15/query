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


//find
const find = async(req,res)=>{
    const {from,to,price} = req.body

    try{
        const tnxFind = await tnx.find({from:from}).populate('from');
        console.log(tnxFind);
        res.status(200).json(tnxFind);

    }catch(err){
        console.log(err);
        res.status(400).json({message: err.message});
    };
};


//findOne
const findOne = async(req,res)=>{
    const {from,to,price} = req.body

    try{
        const tnxFindOne = await tnx.findOne({from:from});

        console.log(tnxFindOne);
        res.status(200).json(tnxFindOne);

    }catch(err){
        // console.log(err);
        res.status(400).json({message: err.message});
    };
};

module.exports ={inTnx,find,findOne}