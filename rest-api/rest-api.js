exports.handler = (event, context, callback) => {

  const message = 'Hello re:Invent Builders!';
  const payload = {
    statusCode: 200,
    body: JSON.stringify(message),
    headers: {
      'Content-Type': 'application/json',
    }
  };

  // console.log(bad code);

  return callback(null, payload);
};
