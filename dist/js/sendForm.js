const form = document.querySelector("#contact-form");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	const email = form.querySelector(".email").value;
	const btn = form.querySelector("#contact-form-btn");

	fetch(`/data.json?email=${email}`)
		.then((response) => response.json())
		.then((json) => {
			btn.innerHTML = json.answer;
			btn.classList.add("Buttons_success")
		})
		.catch(() => {
			btn.innerHTML = "ошибка";
			btn.classList.add("Buttons_error")
		});

});