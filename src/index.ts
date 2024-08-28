import OpenAI from "openai";
import * as dotenv from 'dotenv';
 dotenv.config()

class VulembAIGenerator {
    private openai:OpenAI ;
    private apiKey:string |undefined;

    constructor() {
        this.apiKey = process.env.OPENAI_API_KEY;
        this.openai = new OpenAI({apiKey:this.apiKey});
    }

    async generateText(prompt:string,maxToken:number=100): Promise<string|null> {
        try {
            const completion = await this.openai.chat.completions.create({
                model: "gpt-4o-mini",
                max_tokens: 20,
                messages: [
                    { role: "system", content: "You are a helpful assistant." },
                    {
                        role: "user",
                        content: prompt,
                    },
                ],
            });
            
            return  completion.choices[0].message.content
        } catch (error) {
            console.log('Error generating text:', error);
           throw error
        }
    }
}

export default VulembAIGenerator