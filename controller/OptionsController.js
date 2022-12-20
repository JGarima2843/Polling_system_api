const Option=require('../models/options');
const Question= require('../models/questions');
module.exports.create=async function(req,res){
    // in this we will create the options to the id given question 
    console.log(req.body,req.params.id)
    const opt=await Option.create({
        option:req.body.content,
        question:req.params.id,
        // 
    })
    // it is for adding the vote to option of the id that is given by mongodb by update query and using the string interpolition
    const updateopt=await Option.findByIdAndUpdate(opt._id,{"add_vote":`http://localhost:8000/options/${opt._id}/add_vote`})
    // imprtant step to do o/w code updates will not be saved
    updateopt.save()
    // now searching the question so that we can append the option in question-->option array
    const ques=await Question.findById(req.params.id);
    ques.options.push(updateopt)
    // important to save ques also
    ques.save()
    console.log(ques)
    res.send(ques) 

    
}

module.exports.add_vote=async function(req,res){
    // in this votes will be added to the particular option of the question
    console.log(req.params.id)
    const opt=await Option.findByIdAndUpdate(req.params.id,{ $inc: { vote: 1 }})
    await opt.save();
    console.log(opt);
}

module.exports.delete=function(req,res){
    // delete the id option 

    
}