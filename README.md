# 🏦 BankAssist: AI-Powered Customer Support Assistant

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Gemini](https://img.shields.io/badge/Google%20Gemini-8E75C2?style=for-the-badge&logo=googlegemini&logoColor=white)
![Axios](https://img.shields.io/badge/axios-671ddf?style=for-the-badge&logo=axios&logoColor=white)

An intelligent, React-based banking assistant that leverages the **Gemini 3 Flash LLM** to provide contextual, safe, and professional customer support.

---

## 🎯 Project Objective
The goal was to build a mini-banking assistant capable of interpreting user queries, providing contextual transaction details, and handling complex API states (Loading, Error, Rate Limits) within a modern React environment.

## 🌟 Key Features

*   **🧠 Intelligent Interpretation**: Contextually understands queries like "Why was ₹5000 debited?" by referencing mock account data.
*   **🛡️ Safety First**: Hardcoded system guardrails prevent the AI from providing financial advice or sensitive data.
*   **⚡ Modern UX**: 
    *   Real-time "Thinking..." indicators.
    *   Smooth auto-scroll to the latest message.[cite: 1]
    *   Interactive chat bubbles with distinct User/AI styling.[cite: 1]
*   **🩹 Robust Error Handling**: Specialized logic to handle **401 (Auth)**, **404 (Model Deprecation)**, and **429 (Rate Limits)**.[cite: 1]

---

## 🛠️ Tech Stack

| Tool | Usage |
| :--- | :--- |
| **React 18** | Functional components and Hooks (`useState`, `useEffect`, `useRef`).[cite: 1] |
| **Vite** | Fast development server and optimized build tool.[cite: 1] |
| **Axios** | Robust API calls to Google Generative AI endpoints.[cite: 1] |
| **Gemini 3 Flash** | High-performance LLM for real-time text generation.[cite: 1] |

---

## 🚀 Getting Started

### 1. Installation
```bash
# Clone the repository
git clone [https://github.com/your-username/bank-assist.git](https://github.com/your-username/bank-assist.git)

# Navigate to the directory
cd bank-assist

# Install dependencies
npm install

### Demonstration Video

