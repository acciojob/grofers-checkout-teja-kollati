const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const itemPrices = document.querySelectorAll(".prices");

	let sum = 0;
	itemPrices.forEach((val) => {
		sum += Number(val.textContent);
	});

	const table = document.getElementById("table");

	const tr = document.createElement("tr");
	const tdItem = document.createElement("td");
	const tdPrice = document.createElement("td");

	tdItem.textContent = "total"
	tdPrice.textContent = sum;

	tr.append(tdItem, tdPrice);

	table.appendChild(tr);
};

getSumBtn.addEventListener("click", getSum);

