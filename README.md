
# 💱 MyCurrencyConverter

MyCurrencyConverter is a simple web application that allows users to convert a given quantity into multiple currencies.  
The app provides a user-friendly interface where you can enter a value, choose a currency, and view conversion results in different currencies.

---

## 🚀 Features
- Enter any quantity to convert.
- Choose from different base currencies (e.g., US Dollar).
- View converted values across multiple currencies in a structured table.
- Clean and responsive UI.

---

## 📸 Screenshots

### 🏠 Home Page
<img width="1911" height="821" alt="image" src="https://github.com/user-attachments/assets/5755b8c3-5e5c-4a04-8cc8-710f2cbf6eaf" />


### 📊 Conversion Result
<img width="1897" height="1080" alt="image" src="https://github.com/user-attachments/assets/3cf71a24-ab00-4695-b3c5-c7f9834e8329" />


---

## 🛠️ Project Structure

```
├── index.html # Main HTML structure
├── style.css # Styling for the application
└── script.js # Logic for handling conversions
```

---

## 🔑 API Key Setup

This project uses [CurrencyAPI](https://currencyapi.com/) to fetch real-time exchange rates.

### 🛠️ To use the app:
1. **Get your own API key**  
   - Sign up at [currencyapi.com](https://currencyapi.com/)
   - Generate a free or paid API key from your dashboard

2. **Replace the default key**  
   Open `script.js` and locate the API URL:
   ```javascript
   const apiKey = "YOUR_API_KEY_HERE";
   const url = `https://api.currencyapi.com/v3/latest?apikey=${apiKey}&base_currency=${currency}`;

---

## ⚡ Usage
1. Open `index.html` in your browser.
2. Enter a quantity.
3. Select a currency from the dropdown.
4. Click **Submit** to see conversion results.

---

## 📌 Technologies Used
- **HTML5** for structure  
- **CSS3** for styling  
- **JavaScript (Vanilla JS)** for conversion logic  






