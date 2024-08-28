declare class VulembAIGenerator {
    private openai;
    constructor();
    generateText(): Promise<string>;
}
export default VulembAIGenerator;
