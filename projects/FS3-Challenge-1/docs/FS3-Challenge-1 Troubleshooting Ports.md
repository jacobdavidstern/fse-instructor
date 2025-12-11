## FS3-Challenge-1 Troubleshooting Ports

1. Verify port availability:

```sh
lsof -i:3001
```

2. Update server.js port:

```js
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
```

3. Test Backend server port with ping/pong:

- Add to vite.config.cjs beneath existing endpoint

```js
      // Debug
      '/ping': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
```

- Add to server.js

```js
// Debug
app.get('/ping', (req, res) => {
  console.log('Ping route hit');
  res.send('pong');
});
```

- Restart server, then visit http://localhost:3001/ping
- A working proxy shows pong
