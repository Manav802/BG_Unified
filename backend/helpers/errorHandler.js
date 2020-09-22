exports.handleError = (res, err, message,statusCode) => {
    try {
      // Prints error in console
      if (process.env.NODE_ENV === "development") {
        console.log(err);
      }
      // Sends error to user
      return res.status(statusCode).json({
        success: false,
        message: message
      });
    } 
    catch (error) {
      return res.status(500).json({
        success: false,
        message: "Server Error"
      });
    }
};

  //format 
  // handleError(res,err,message)