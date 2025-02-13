import { vikeHandler } from "./server/vike-handler";
import { Hono } from "hono";

const app = new Hono();

app.get("/hello", async (c) => c.text("Hi human"));

/**
 * Vike route
 *
 * @link {@see https://vike.dev}
 **/
app.all("*", vikeHandler);

export default app;
