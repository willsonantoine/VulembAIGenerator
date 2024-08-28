import VulembAIGenerator from '../src/index'

describe('VulembAIGenerator', () => {
    it('generates containt',async()=>{ 
        const generator = new VulembAIGenerator();
        const content = await generator.generateText('ecrit un message');
        expect(content).toBeDefined();
        expect(content).toBeGreaterThan(0);
    });
});
