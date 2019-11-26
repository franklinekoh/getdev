const {validationResult } = require('express-validator');

errorHandler = async (req,res,next) => {
    try{

        const errorFormatter = ({ location, msg, param, value, nestedErrors }) => {
            // Build your resulting errors however you want! String, object, whatever - it works!
            return `${msg}`;
        };

        const error = validationResult(req).formatWith(errorFormatter);

        if(!error.isEmpty()){

            return res.status(422).send({
                status: false,
                message: error.array()
            });
        }
        else{
            next();
        }

    }
    catch(err){
        return res.status(400).send({
            status: false,
            message: err
        });
    }
};

module.exports = errorHandler;
