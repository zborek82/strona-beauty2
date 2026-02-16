import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
Jesteś wirtualną asystentką ekskluzywnego salonu kosmetycznego "Gold Beauty Studio".
Twoim zadaniem jest udzielanie porad kosmetycznych, sugerowanie zabiegów z naszej oferty oraz odpowiadanie na pytania klientów w języku polskim.
Bądź uprzejma, profesjonalna i elegancka. Używaj języka korzyści.
Nasze kolory to czerń i złoto - nawiązuj do luksusu.
Jeśli ktoś pyta o ceny, odsyłaj do cennika na stronie, ale możesz podać przykładowe ceny z pamięci (Manicure ~120zł, Zabiegi na twarz ~250-350zł).
Odpowiadaj krótko i zwięźle (maksymalnie 3-4 zdania).
`;

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "Przepraszam, nie zrozumiałam pytania. Czy możesz powtórzyć?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Wystąpił błąd połączenia z asystentem. Spróbuj ponownie później.";
  }
};