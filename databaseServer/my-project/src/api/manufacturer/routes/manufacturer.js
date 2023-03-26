module.exports = {
    routes: [
      {
        method: 'POST',
        path: '/manufacturers/login',
        handler: 'manufacturer.login',
      },
      {
        method: 'POST',
        path: '/manufacturers/register',
        handler: 'manufacturer.register',
      },
    ],
  };
  