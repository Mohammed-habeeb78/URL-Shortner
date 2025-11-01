import { nanoid } from "nanoid";
import UrlModel from "../models/url.js";
import isValidUrl from "../service/urlValidation.js";

export async function generateShortUrl(req,res){
    try{
    const {originalUrl}=req.body;
    if(!originalUrl) 
        return res.status(400)({message:"Long URL is required"});

    if(isValidUrl(originalUrl)){
        return res.status(400)({message:"URL is not VALID!"});
    }

        const shortId=nanoid(7);

        //save in DB
        const dataToSave=new UrlModel({originalUrl,shortId});
        await dataToSave.save();

        res.status(201).send({ shortId:`${req.protocol}://${req.get("host")}/${shortId}`});
    }catch(error){
        res 
            .status(500)
            .send({
                    message:"There is an error.Please come back later",
                    errString:error.message,
            })
    }
}

export async function redirectToUrl(req,res){
    try{
    const {shortId}=req.params;
    if(!shortId) 
        return res.status(400)({message:"Short Id is required"});

    //find original Url
    const url=await UrlModel.findOne({shortId:shortId});
    if(url){
        return res.redirect(url.originalUrl);
    }
    else{
        return res.status(400)({message:"Not found"});
     }
    }catch(error){
        res 
            .status(500)
            .send({
                    message:"There is an error.Please come back later",
                    errString:error.message,
            });
    }
}
