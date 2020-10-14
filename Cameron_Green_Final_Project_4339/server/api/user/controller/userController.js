const User = require("../model/User");

exports.registerNewUser = async (req, res) => {
  try {
    let isUser = await User.find({ email: req.body.email });
    console.log(isUser);
    //Checks for more than one instance of the email address
    if (isUser.length >= 1) {
      return res.status(409).json({
        message: "email already in use"
      });
    }
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });
    //Sets the saved data into a variable
    let data = await user.save();
    const token = await user.generateAuthToken(); // Here it is calling the method that we created in the model
    res.status(201).json({ data, token });
  } catch (err) {
    res.status(400).json({ err: err });
  }
};
exports.loginUser = async (req, res) => {
  try {
    //Gets email and password
    const email = req.body.email;
    const password = req.body.password;
    //Attempts to find an instance with the matching email and password
    const user = await User.findByCredentials(email, password);
    //If unsuccessful, return error
    if (!user) {
      return res
        .status(401)
        .json({ error: "Login failed! Check authentication credentials" });
    }
    //If successful, generate a token and return the information and token
    const token = await user.generateAuthToken();
    res.status(201).json({ user, token });
  } catch (err) {
    res.status(400).json({ err: err });
  }
};
exports.getUserDetails = async (req, res) => {
  await res.json(req.userData);
};

exports.deleteUserDetails = async (req, res) => {
  try {
    //Gets email and password
    const email = req.body.email;
    const password = req.body.password;
    // const userID = req.params.id;
    //Attempts to find the username and password
    const user = await User.deleteOne(email, password);
    //Returns an error if failed
    if(!user) {
        return res.status(401)
        .json({ error: "Deletion failed! Check authentication credentials" });
    }
    //Returns the user object and token if successful
    const token = await user.generateAuthToken();
    res.status(201).json({ user, token });
} catch (error) {
    res.status(500).json({ err: err });
}
};