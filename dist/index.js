"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const openai_1 = __importDefault(require("openai"));
class VulembAIGenerator {
    constructor() {
        this.openai = new openai_1.default();
    }
    generateText() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const completion = yield this.openai.chat.completions.create({
                    model: "gpt-4o-mini",
                    max_tokens: 20,
                    messages: [
                        { role: "system", content: "You are a helpful assistant." },
                        {
                            role: "user",
                            content: "Write a haiku about recursion in programming.",
                        },
                    ],
                });
                const response = completion.choices[0].message;
                return response;
            }
            catch (error) {
                console.log('Error generating text:', error);
                throw error;
            }
        });
    }
}
exports.default = VulembAIGenerator;
