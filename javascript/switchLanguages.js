const langEl = document.querySelector(".langWrap");
			const link = document.querySelectorAll("a");
			const titleEl = document.querySelector(".rsvpTitle");
			const descrEl = document.querySelector(".rsvpDate");

			link.forEach((el) => {
				el.addEventListener("click", () => {
					langEl.querySelector(".active").classList.remove("active");
					el.classList.add("active");

					const attr = el.getAttribute("language");

					titleEl.textContent = data[attr].rsvpTitle;
					descrEl.textContent = data[attr].rsvpDate;
				});
			});