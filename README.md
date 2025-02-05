# 🤖 BrevityAI

**An advanced AI-powered article summarizer that intelligently extracts and condenses key information from lengthy articles, transforming them into clear, concise, and easily digestible insights.** 

## 🚀 Overview
BrevityAI is an AI-powered tool that simplifies reading by generating quick, digestible summaries of online articles. Simply **paste a link** to any article, and within seconds, BrevityAI will analyze and summarize the content for you.

This project leverages **OpenAI’s GPT-4** along with web scraping technology to extract and summarize article content seamlessly.

---

## 🛠 Tech Stack
BrevityAI is built using the following technologies:

- **ReactJS (Vite)** – Fast and modern frontend framework  
- **Tailwind CSS** – Utility-first CSS framework for styling  
- **Redux Toolkit Queries** – Efficient state management for API calls  
- **OpenAI API (GPT-4)** – AI-powered text summarization  
- **RapidAPI (Article Extractor and Summarizer API)** – Extracts article content  

---

## 🛠 Installation & Setup

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/johnnysteel/BrevityAI.git
cd BrevityAI
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Set Up API Keys**
1. Create a `.env` file in the root of the project:
   ```sh
   touch .env
   ```
2. Add the following key:
   ```env
   VITE_RAPID_API_ARTICLE_KEY=your-api-key-here
   ```
   - You will get this API key by **subscribing to the [Article Extractor and Summarizer API](https://rapidapi.com/restyler/api/article-extractor-and-summarizer) on RapidAPI**.
   - To sign up for RapidAPI: [RapidAPI](https://rapidapi.com/auth/sign-up)  
   - Copy your **"X-RapidAPI-Key"** from the Article Extractor and Summarizer API and paste it into the VITE_RAPID_API_ARTICLE_KEY field in the `.env` file.

### **4️⃣ Run the Development Server**
```sh
npm run dev
```
This will start the project, and you can access it at `http://localhost:5173`.

---

## 🎯 Features
✅ **AI-Powered Summaries** – Get concise summaries of long articles in seconds.  
✅ **Easy to Use** – Just paste a link and let the AI do the rest.  
✅ **Modern UI** – Built with ReactJS and Tailwind for a sleek experience.  
✅ **Efficient State Management** – Uses Redux Toolkit for API queries.  

---

## 📸 Screenshots
🔹 **Summary for Article 1** ([Original Article](https://news.mit.edu/2025/user-friendly-system-can-help-developers-build-more-efficient-simulations-and-ai-models-0203)):

![article1_screenshot](https://github.com/johnnysteel/BrevityAI/blob/16f8cec2acfc42bd9e4f9de5d2be77711b4b6413/BrevityAI%20Screenshot%20(Article%201%20Summary).png)


🔹 **Summary for Article 2** ([Original Article](https://news.mit.edu/2025/introducing-mit-generative-ai-impact-consortium-0203)):

![article2_screenshot](https://github.com/johnnysteel/BrevityAI/blob/16f8cec2acfc42bd9e4f9de5d2be77711b4b6413/BrevityAI%20Screenshot%20(Article%202%20Summary).png)

---

## 🤝 Contributing
Contributions are welcome! If you’d like to contribute:  
1. **Fork the repo**  
2. **Create a new branch** (`feature-branch`)  
3. **Commit your changes**  
4. **Push to your branch and open a Pull Request**  

---

## 📜 License
This project is licensed under the **MIT License**.

---
