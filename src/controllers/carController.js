const car = require('../model/carSchema');
const user =require('../model/userSchema')


//insertOne
const inOne = async(req,res)=>{

    const {owner,model,color,type} = req.body

    try{
        const insertOne = await car.create({
            owner:owner,
            model:model,
            color:color,
            type:type
        });
        res.status(200).json(insertOne);
    }catch(err){
        res.status(400).json({message: err.message})
    };
};

//insertMany
const inMany = async(req,res)=>{

    const {owner,model,color,type} = req.body

    try{
        const insertMany = await car.create(
        //     [{
        //     owner:"raj1",
        //     model:"a2",
        //     color:"Darkmaroon",
        //     type:"star"
        // },{
        //     owner:"raj",
        //     model:"a1",
        //     color:"white",
        //     type:"suv"
        // }]
    );
        res.status(200).json(insertMany);
    }catch(err){
        res.status(400).json({message: err.message})
    }
}


//deleteOne
const deleteOne = async(req,res) =>{

    const {owner} =  req.body

    try{
        const delOne = await car.deleteOne({owner:owner});
            console.log(delOne);
            res.status(200).json({message: "data deleted "})
    }catch(err){
        console.log(err);
        res.status(400).json({message: err.message})
    };
};

//deleteMany
const deleteMany = async(req,res)=>{
    const {owner, model, color, type}= req.body

    try{
        const delMany = await car.deleteMany({owner:owner},
            { $unset: {model:model, color:color, type:type}  });
            // {model:model, color:color, type:type}
        console.log(delMany);
        res.status(200).json({message: "deleted similar data"})
    }catch(err){
        console.log(err);
        res.status(400).json({message: err.message})
    };
};



module.exports = {inOne,inMany,deleteOne,deleteMany}
