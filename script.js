const populate = async (value, currency) => {
    const url = `https://api.currencyapi.com/v3/latest?apikey=cur_live_PUZqjO7N92NoDAojBYj8W7viDoSY0QOlR1JW14uh&base_currency=${currency}`;
    try {
        const response = await fetch(url);
        const json = await response.json();

        // Extract the "data" object
        const data = json.data;

        if (!data) {
            alert("No data found in API response.");
            return;
        }

        let myStr = "";
        for (let key in data) {
            const code = data[key].code;
            const rate = data[key].value;

            myStr += `
                <tr>
                    <td>${key}</td>
                    <td>${code}</td>
                    <td>${(rate * value).toFixed(2)}</td>
                </tr>
            `;
        }

        document.querySelector("tbody").innerHTML = myStr;
        document.querySelector(".output").style.display = "block";

    } catch (error) {
        console.error("Error fetching or processing currency data:", error);
        alert("Something went wrong. Check console for more info.");
    }
};

document.getElementById("currencyForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const value = parseFloat(document.querySelector("input[name='quantity']").value);
    const currency = document.querySelector("select[name='currency']").value;

    if (isNaN(value) || value <= 0) {
        alert("Please enter a valid quantity.");
        return;
    }

    populate(value, currency);
});
