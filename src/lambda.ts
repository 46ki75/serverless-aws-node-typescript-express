import serverless, { Handler } from "serverless-http";
import { app } from ".";
const handler: Handler = serverless(app);
export default handler;
