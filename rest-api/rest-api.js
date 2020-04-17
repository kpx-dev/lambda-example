exports.handler = (event, context, callback) => {

  const message = 'Hello awesome Guitar Team team from Lambda / API Gateway!';
  const payload = {
    statusCode: 200,
    body: JSON.stringify(message),
    headers: {
      'Content-Type': 'application/json',
    }
  };

  // const payload = {};

  return callback(null, payload);
};
