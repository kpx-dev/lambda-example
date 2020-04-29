exports.handler = (event, context, callback) => {

  const message = 'lambda-simple: Hello from Lambda / API Gateway!';
  const payload = {
    statusCode: 200,
    body: JSON.stringify(message),
    headers: {
      'Content-Type': 'application/json',
    }
  };

  return callback(null, payload);
};
