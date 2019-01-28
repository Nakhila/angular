var express = require('express');

var router = express.Router();

const Item = require('../model/crud');
router.get('/apps',(req,res,next)=>{
    Item.find((err,items)=>{
        if(err){
            res.send(err);
        }
        else{
            res.send(items);
        }
    })
});

router.post('/app',(req,res,next)=>{
    let newItem = new Item({
        itemName : req.body.itemName,
        itemQuantity : req.body.itemQuantity,
        itemBought : req.body.itemBought,
    });

    newItem.save((err,items)=>{
        if(err){
            res.send(err);
        }
        else{
            res.send('item added !!!');
        }
    })   
});

router.put('/apps/:id',(req,res,next)=>{
    Item.findOneAndUpdate({_id:req.params.id},
    {$set:{
        itemName : req.body.itemName,
        itemQuantity : req.body.itemQuantity,
        itemBought : req.body.itemBought,
    }},
    (err,item)=>{
        if(err){
            res.send(err);
        } else{
            res.send(item);
        }
    });
});

router.delete('/delete/:id',(req,res,next)=>{
    Item.remove({_id:req.params.id},(err,result)=>{
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    });
});
module.exports = router;