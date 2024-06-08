import Property from "../models/property_model.js";
import Users from "../models/user_model.js";


export const addToWishlist  = async(req, res) => {
    try{

        const {userId, propertyId} = req.body;

        const property = await Property.findById(propertyId);


        let user = await Users.findById(userId).populate("ratings.property")
        if (user.ratings.length == 0) {
            user.ratings.push({property})
            
        }else{
            let isPropertyFound = false;
            for (let i=0;i<user.ratings.length;i++){
                if (user.ratings[i].property._id.equals(property._id)){
                    isPropertyFound = true;
                }
            }
            if (isPropertyFound) {
               res.status(400).json({message:"aleardy added"})

            }else{
                user.ratings.push({property})
            }


        }


        user =await user.save()
        res.status(200).json(user)

    }catch(e){
        res.status(500).json({ error: e.message });
    }

}