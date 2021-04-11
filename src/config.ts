export default {
  'hostName': process.env.HOSTNAME ? process.env.HOSTNAME : 'localhost',
  'port': process.env.PORT ? parseInt(process.env.PORT, 10) : 8080
}
