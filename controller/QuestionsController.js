const Question=require('../models/questions')
const Option=require('../models/options')

module.exports.create=async function(req,res){
//  in this the question are created
    console.log(req.url);
    console.log(req.body);
    await Question.create(req.body,function(err,ques){
            if(err){console.log("error in creating the question schema",err);}
    

        console.log(ques);
        res.send(ques);
})


}

module.exports.showDetails=async function(req,res){
        console.log(req.params.id)

        const ques=await Question.findById(req.params.id)
        

        if(ques){
            res.send(ques);
        }
        else{
            res.send("id does not exits");
        }

    

    // in this the details about the question is displayed
}

module.exports.deleteQues=async function(req,res){
    // in this the question will be deleted
    //important thing to note in this we can't simply delete the question for this firstly we have to delete the all options of the question and the delete the question itself
        const ques= await Question.findById(req.params.id).clone().catch(function(err){ console.log(err)})
        if(ques){
            // delete all the option ⁉️ of the option db having the question id as the req.params.id
            await Question.deleteOne(req.params.id).clone().catch(function(err){ console.log(err)})
            await Option.deleteMany({question:req.params.id}).clone().catch(function(err){ console.log(err)})
                res.send("ques deleted");
    
        }
}
