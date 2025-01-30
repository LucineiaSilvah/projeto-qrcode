import prompt from "prompt";
import promptSchemaQRCode from "../../prompts-schemas/prompt-schemas-qrcode.js";
import handle from "./handle.js";
async function createQRCODE() {
  prompt.get(promptSchemaQRCode, handle);
  prompt.start();
}

export default createQRCODE;
