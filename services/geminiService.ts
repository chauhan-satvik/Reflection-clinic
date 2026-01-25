import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const getConciergeResponse = async (userMessage: string): Promise<string> => {
  try {
    const model = 'gemini-3-flash-preview';
    const systemInstruction = `
      You are "Aura", the AI Health Concierge for REFLECTION Clinic.
      The clinic offers: Dental, Cosmetology, Trichology, Oncology Dietitian, and Oncologist services.
      Your tone is premium, empathetic, sophisticated, and helpful. 
      You are NOT a doctor and cannot give medical diagnoses.
      Always recommend scheduling an appointment for specific medical advice.
      Keep responses concise (under 100 words) and elegant.
      If asked about services, highlight the "Royal" experience.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: userMessage,
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return response.text || "I apologize, but I am currently attending to another guest. Please try again momentarily.";
  } catch (error) {
    console.error("AI Service Error:", error);
    return "We are experiencing high traffic in our digital concierge. Please contact the clinic directly.";
  }
};