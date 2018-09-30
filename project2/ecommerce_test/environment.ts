const dev = {
  context: 'http://localhost:3001/'
}

const prod = {
  context: 'http://ec2-52-41-140-183.us-west-2.compute.amazonaws.com:3001/'
}

export const environment = process.env.NODE_ENV === 'production'
  ? prod
  : dev
