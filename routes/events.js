const ex = require("express");
const { route } = require("express/lib/application")
const events=require("../models/events")

const router = ex.Router();

router.get("/events",async(req,res) =>{
   try{
    const events=await events.find()
    res.json(events)
   } catch(err){
    res.json(err);
   }
});

//get
router.get("/:eventsId",async(req,res) =>{
    const eventsId=req.params.eventsId

    try{
         const e = await events.findByID(eventsId)
         res.json(e)
    }catch(error){
        res.json(error);
    }
});

//post
router.post("/" , async(req,res) =>{

    const events = await events.create(req.body)
    res.json(events)
});

//delete
router.delete("/:eventsId", async(req,res) =>{
    try{

        await events.remove({"_id":req.params.eventsId})
        res. status(200).json({
            message: "done"
        })
    } catch (error) {

            res.json(error);
    }
});


//Put
router.put("/:eventsId", async(req,res)=>{
    const eventsId = req.params.eventsId

    try{

        const events =  await events.updateOne(
            {
                "_id":eventsId
            },
            req.body
        )
        res.json(events)
    }catch(error) {
        res.json(error);
    }
});




module.exports = router;