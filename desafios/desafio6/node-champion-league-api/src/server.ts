import createApp from "./app/app";

const app = createApp();
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`🔥 Server running at port http://localhost:${port}`);
});
