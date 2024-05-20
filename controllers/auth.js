const login = async(req,res) => { 
    res.status(200).json({
        message:"User logged in Successfully."
    });
};

const logout = async(req,res) => { 
    res.status(200).json({
        message:"User logged out Successfully."
    });
};

module.exports = {
    login,
    logout
};