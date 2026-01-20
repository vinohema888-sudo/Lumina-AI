
import { GoogleGenAI } from "@google/genai";

export const geminiService = {
  getTutorResponse: async (prompt: string): Promise<string> => {
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: {
          systemInstruction: `You are Lumina, a world-class AI tutor. 
          Your goal is to help students learn effectively. 
          Instead of just providing direct answers, try to:
          1. Break down complex concepts into simple analogies.
          2. Ask Socratic questions to guide the student's thinking.
          3. Provide encouraging feedback.
          4. Keep explanations concise but deep.
          5. Use Markdown for formatting (bolding, lists, etc.) to make the text readable.`,
          temperature: 0.7,
        },
      });

      return response.text || "I'm sorry, I couldn't process that. Can you try rephrasing?";
    } catch (error) {
      console.error("Gemini API Error:", error);
      throw error;
    }
  }
};
