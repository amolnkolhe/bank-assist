import axios from 'axios';

// IMPORTANT: In a production app, use environment variables (e.g., process.env.REACT_APP_GEMINI_API_KEY)
// Never hardcode API keys in frontend code for live applications.
const API_KEY = "YOUR_GEMINI_API_KEY_HERE";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${API_KEY}`;

export const fetchBankingSupport = async (userQuery) => {
    // Requirement 3: Prompt Design
    const systemPrompt = `
        You are a professional Banking Support Assistant for "Apex Bank".

        CONTEXT:
        - Current User: Amol Kolhe
        - Account Balance: ₹25,400
        - Recent Transactions:
        1. April 28: ₹500 (Debit) - Starbucks Coffee
        2. April 29: ₹1,200 (Debit) - Amazon India
        3. April 30: ₹5,000 (Debit) - Scheduled Rent Transfer (Pending)

        RULES:
        - If a user asks about a specific amount (like ₹5000), refer to the transaction list above.
        - Do not provide investment or financial advice.
        - If an unknown debit is mentioned, suggest blocking the card and checking for subscriptions.
        - Be concise, professional, and empathetic.

        User query: ${userQuery}
        `;

    try {
        const response = await axios.post(API_URL, {
            contents: [{ parts: [{ text: systemPrompt }] }]
        },
            {
                headers: { 'Content-Type': 'application/json' }
            });

        const replyText = response.data?.candidates?.[0]?.content?.parts?.[0]?.text;

        // Requirement 6: Empty response handling
        if (!replyText) throw new Error("Received an empty response from the assistant.");

        return replyText;

    } catch (error) {
        // Requirement 6: Error Handling (401, 429)
        if (error.response) {
            if (error.response.status === 401) {
                throw new Error("401 Unauthorized: Invalid API Key. Please check your credentials.");
            } else if (error.response.status === 429) {
                throw new Error("429 Rate Limit: Too many requests. Please try again later.");
            } else {
                throw new Error(`API Error: Received status code ${error.response.status}`);
            }
        } else if (error.request) {
            throw new Error("Network error. Please check your internet connection.");
        } else {
            throw new Error(error.message);
        }
    }
};