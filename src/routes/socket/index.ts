export default socket => {
  socket.on('message', () => {
    console.log('hello');
  })
}
