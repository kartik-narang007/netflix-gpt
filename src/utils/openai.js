import OpenAI from "openai";
import { OPENAI_KEY } from "./Content";

const openai = new OpenAI({
    apiKey: OPENAI_KEY,
    dangerouslyAllowBrowser: true,
});

export default openai;
