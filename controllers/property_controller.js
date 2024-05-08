import Property from "../models/property_model.js";

//get all properties

export const getProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get property by id

export const getPropertyById = async (req, res) => {
  const { id } = req.params;
  try {
    const property = await Property.findById(id);
    if (property) {
        res.status(200).json(property);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// create property

export const createProperty = async (req, res) => {
  try {
    const {name,image,category,price,location} = req.body;
  const newProperty = new Property({
    name,
    image,
    category,
    price,
    location
  });
    await newProperty.save();
    res.status(201).json(newProperty);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//update property

export const updateProperty = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, image, category, price, location } = req.body;
    const property = await Property.findById(id);
    if (property) {
        property.name = name;
        property.image = image;
        property.category = category;
        property.price = price;
        property.location = location;
        const updatedProprty = await property.save();
        if (updatedProprty) {
        res.status(200).json({msg:"property updated"});
    }
    }
    else{
        res.status(404).json({ message: "property not found" });
    }
  }catch (error) {
    res.status(400).json({ message: error.message });
  }
};
//delete property

export const deleteProperty = async (req, res) => {
  try {
    const { id } = req.params;
    const property = await Property.findByIdAndDelete(id);
    if (property) {
        res.status(200).json({ message: "property deleted" });
    }
    else{
        res.status(404).json({ message: "property not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};