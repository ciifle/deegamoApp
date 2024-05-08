import Users from "../models/user_model.js";

//get all users
export const getUsers = async (req, res) => {

    try {
        const users = await Users.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

//get user by id

export const getUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await Users.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

//create user

export const createUser = async (req, res) => {
    try {
        const { username, email, password} = req.body;
        //check if user already exists
        const existingUser = await Users.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "User already exists" });
        }
        // if not, create new user
        const newUser = new Users({ username, email, password });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

//update user

export const updateUser = async (req, res) => {
    try{
        const{username,email,password} = req.body;
        const user = await Users.findById(req.params.id);
        if(user){
            user.username = username;
            user.email = email;
            user.password =password;

            const updatedUser = await user.save();
            res.status(200).json(updatedUser);
        }
    }catch(error){
        res.status(409).json({ message: error.message });
    }
};

//login user

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Users.findOne({ email });
        if(user){
            if(user.password === password){
                res.status(200).json(user);
            }
            else{
                res.status(401).json({ message: "Incorrect password" });
            }
        }
        else{
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};