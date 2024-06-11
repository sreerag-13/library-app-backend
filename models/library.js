const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "BookTitle":String,
        "PublishedYear":String,
        "AuthorName":String,
        "PublisherName":String,
        "Price":String,
        "Edition":String,
        "DistributerName":String,
        "Description":String


    }
)

let librarymodel=mongoose.model("libraries",schema);
module.exports={librarymodel}