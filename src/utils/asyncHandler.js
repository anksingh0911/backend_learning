const asyncHandlerByPromise = (handler)=>{
  (req,res, next)=>{
    Promise.resolve(handler(req, res, next)).catch((err)=>next(err))
  }
}
const asyncHandlerByAsyncAwait = (handler)=> async(req, res, next)=>{
  try{
    await handler(req, res, next)
  }
  catch(error){
    res.status(error.code || 500).json({
      success: false,
      message: error.message
    })
  }
}

export {asyncHandlerByPromise, asyncHandlerByAsyncAwait};

