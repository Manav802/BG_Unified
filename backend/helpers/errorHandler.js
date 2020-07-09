exports.handleError = (res, err, message) => {
    try {
      // Prints error in console
      if (process.env.NODE_ENV === "development") {
        console.log(err);
      }
      // Sends error to user
      res.status(err.code).json({
        success: false,
        message: err.message
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: message
      });
    }
  };

  //format 
  // handleError(res,err,message)