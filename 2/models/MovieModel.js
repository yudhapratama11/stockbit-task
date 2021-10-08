const Response = (response, data) => {
    return {
        response : response,
        data: data,
    }
}

const ErrorResponse = (msg) => {
    return {
        message: "Could not process your request",
        reason: msg
    }
}
  
module.exports = {
    Response,
    ErrorResponse
}