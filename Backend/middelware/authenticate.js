const jwt = require('jsonwebtoken');
const authenticate = (req, res, next) => {
    try {
        // tres importt " "
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, "Testing");
        next();
    } catch (error) {
        console.log("error", error);
        res.status(401).json({ message: "Auth failed" });
    }
};
module.exports = authenticate;