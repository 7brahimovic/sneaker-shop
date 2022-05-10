
  let ws = new WebSocket('ws://localhost:8081')

  ws.onopen = () => {
      console.log('open connection')
  }

  ws.onclose = () => {
      console.log('close connection')
  }
  ws.onmessage = event => {
      console.log(event.data)
  }

  export default ws;


