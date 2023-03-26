// in /api/auth/controllers/Auth.js

module.exports = {
  async login(ctx) {
    const { email, password } = ctx.request.body;

    // Query the manufacturers collection to find a user with the specified email and password
    const user = await strapi.query('api::manufacturer.manufacturer').findOne({ email, password });

    if (!user) {
      return ctx.throw(401, 'Invalid email or password');
    }

    // Generate a JWT token for the user
    const token = strapi.plugins['users-permissions'].services.jwt.issue({ id: user.id });

    // Return the JWT token to the client
    ctx.send({ jwt: token });
  },

  async register(ctx) {
    const { email, password } = ctx.request.body;

    console.log("Registering email:", email);

  // Check if the email already exists in the database using the updated findOne method
  const existingUser = await strapi.db.query('api::manufacturer.manufacturer').findOne({
    where: { email: email },
  });

  console.log("Existing user:", existingUser);

  if (existingUser) {
    return ctx.throw(409, 'Email already exists');
  }

    console.log(email,password)
    // Create a new manufacturer with the specified email and password
    const user =  await strapi.entityService.create('api::manufacturer.manufacturer',{ data:{
        email:email,
        password:password
    } });

    // Return the created user to the client
    ctx.send({ id: user.id, Email: user.Email });
  },
  
}
