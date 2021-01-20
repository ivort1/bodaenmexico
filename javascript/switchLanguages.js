const langEl = document.querySelector(".langWrap");
			// const titleArray = ["rsvpTitle", "rsvpDate"];
			// let obj = {};

			// titleArray.forEach(value => {
			// 	const selector = document.querySelector(`.${value}`)
			// 	obj[value] = selector
			// })

			// for (let key in obj) {
			// 	console.log("Object KEY - " + key)
			// 	console.log("Object VALUE - " + obj[key])
			// 	obj[key].textContent = data[attr].key
			// }

			const link = document.querySelectorAll(".languageLinks");

			//NavBar
			const navCeremony = document.querySelector(".navCeremony");
			const navVenue = document.querySelector(".navVenue");
			const navHotels = document.querySelector(".navHotels");
			const navTravelInformation = document.querySelector(".navTravelInformation");
			const navFAQ = document.querySelector(".navFAQ");


			// RSVP Jumbotron
			const rsvpTitle = document.querySelector(".rsvpTitle");
			const rsvpDate = document.querySelector(".rsvpDate");
			const rsvpDeadline = document.querySelector(".rsvpDeadline");

			//Ceremony
			const ceremonyTitle = document.querySelector(".ceremonyTitle");
			const ceremonyNameOfChurch = document.querySelector(".ceremonyNameOfChurch");

			//Venue
			const venueTitle = document.querySelector(".venueTitle");

			//Hotels
			const hotelTitle = document.querySelector(".hotelTitle");
			const hotelIntroText1 = document.querySelector(".hotelIntroText1");
			const hotelIntroText2 = document.querySelector(".hotelIntroText2");
			const hotelDateVerification = document.querySelector(".hotelDateVerification");
			const hotelPriceNight1 = document.querySelector(".hotelPriceNight1");
			const hotelPriceNight2 = document.querySelector(".hotelPriceNight2");
			const hotelPriceNight3 = document.querySelector(".hotelPriceNight3");
			const hotelPriceNight4 = document.querySelector(".hotelPriceNight4");
			const hotelPriceNight5 = document.querySelector(".hotelPriceNight5");
			const hotelPriceNight6 = document.querySelector(".hotelPriceNight6");
			const hotelWebsite1 = document.querySelector(".hotelWebsite1");
			const hotelWebsite2 = document.querySelector(".hotelWebsite2");
			const hotelWebsite3 = document.querySelector(".hotelWebsite3");
			const hotelWebsite4 = document.querySelector(".hotelWebsite4");
			const hotelWebsite5 = document.querySelector(".hotelWebsite5");
			const hotelWebsite6 = document.querySelector(".hotelWebsite6");
			const hotelDirections1 = document.querySelector(".hotelDirections1");
			const hotelDirections2 = document.querySelector(".hotelDirections2");
			const hotelDirections3 = document.querySelector(".hotelDirections3");
			const hotelDirections4 = document.querySelector(".hotelDirections4");
			const hotelDirections5 = document.querySelector(".hotelDirections5");
			const hotelDirections6 = document.querySelector(".hotelDirections6");
			const hotelCompareKAYAK1 = document.querySelector(".hotelCompareKAYAK1");
			const hotelCompareKAYAK2 = document.querySelector(".hotelCompareKAYAK2");
			const hotelCompareKAYAK3 = document.querySelector(".hotelCompareKAYAK3");
			const hotelCompareKAYAK4 = document.querySelector(".hotelCompareKAYAK4");
			const hotelCompareKAYAK5 = document.querySelector(".hotelCompareKAYAK5");
			const hotelCompareKAYAK6 = document.querySelector(".hotelCompareKAYAK6");
			const hotelDescriptionMisionCatedral = document.querySelector(".hotelDescriptionMisionCatedral");
			const hotelDescriptionAlameda = document.querySelector(".hotelDescriptionAlameda");
			const hotelDescriptionLosJuaninos = document.querySelector(".hotelDescriptionLosJuaninos");
			const hotelDescriptionHerencia = document.querySelector(".hotelDescriptionHerencia");
			const hotelDescriptionSoledad = document.querySelector(".hotelDescriptionSoledad");
			const hotelDescriptionCanteraDiez = document.querySelector(".hotelDescriptionCanteraDiez");

			//Travel Information
			const travelInformationTitle = document.querySelector(".travelInformationTitle");
			const travelInformationAirport = document.querySelector(".travelInformationAirport");
			const travelInformationPassport1 = document.querySelector(".travelInformationPassport1");
			const travelInformationPassport2 = document.querySelector(".travelInformationPassport2");
			const travelInformationPassport3 = document.querySelector(".travelInformationPassport3");
			const travelInformationExchange1 = document.querySelector(".travelInformationExchange1");
			const travelInformationExchange2 = document.querySelector(".travelInformationExchange2");
			const travelInformationExchange3 = document.querySelector(".travelInformationExchange3");

			//FAQs
			const faqTitle = document.querySelector(".faqTitle");
			const faqQuestion1 = document.querySelector(".faqQuestion1");
			const faqQuestion2 = document.querySelector(".faqQuestion2");
			const faqQuestion3 = document.querySelector(".faqQuestion3");
			const faqQuestion4 = document.querySelector(".faqQuestion4");
			const faqQuestion5 = document.querySelector(".faqQuestion5");
			const faqQuestion6 = document.querySelector(".faqQuestion6");
			const faqAnswer1 = document.querySelector(".faqAnswer1");
			const faqAnswer2 = document.querySelector(".faqAnswer2");
			const faqAnswer3 = document.querySelector(".faqAnswer3");
			const faqAnswer4 = document.querySelector(".faqAnswer4");
			const faqAnswer5 = document.querySelector(".faqAnswer5");
			const faqAnswer6 = document.querySelector(".faqAnswer6");

			

			
			link.forEach((el) => {
				el.addEventListener("click", () => {
					langEl.querySelector(".active").classList.remove("active");
					el.classList.add("active");

					const attr = el.getAttribute("language");

					//FAQs
					navCeremony.textContent = data[attr].navCeremony;
					navVenue.textContent = data[attr].navVenue;
					navHotels.textContent = data[attr].navHotels;
					navTravelInformation.textContent = data[attr].navTravelInformation;
					navFAQ.textContent = data[attr].navFAQ;
					
					// RSVP Jumbotron
				 	rsvpTitle.textContent = data[attr].rsvpTitle;
					rsvpDate.textContent = data[attr].rsvpDate;
					rsvpDeadline.textContent = data[attr].rsvpDeadline;

					// Ceremony
					ceremonyTitle.textContent = data[attr].ceremonyTitle;
					ceremonyNameOfChurch.textContent = data[attr].ceremonyNameOfChurch;

					//Venue
					venueTitle.textContent = data[attr].venueTitle;

					//Hotels
					hotelTitle.textContent = data[attr].hotelTitle;
					hotelIntroText1.textContent = data[attr].hotelIntroText1;
					hotelIntroText2.textContent = data[attr].hotelIntroText2;
					hotelDateVerification.textContent = data[attr].hotelDateVerification;
					hotelPriceNight1.textContent = data[attr].hotelPriceNight1;
					hotelPriceNight2.textContent = data[attr].hotelPriceNight2;
					hotelPriceNight3.textContent = data[attr].hotelPriceNight3;
					hotelPriceNight4.textContent = data[attr].hotelPriceNight4;
					hotelPriceNight5.textContent = data[attr].hotelPriceNight5;
					hotelPriceNight6.textContent = data[attr].hotelPriceNight6;
					hotelWebsite1.textContent = data[attr].hotelWebsite1;
					hotelWebsite2.textContent = data[attr].hotelWebsite2;
					hotelWebsite3.textContent = data[attr].hotelWebsite3;
					hotelWebsite4.textContent = data[attr].hotelWebsite4;
					hotelWebsite5.textContent = data[attr].hotelWebsite5;
					hotelWebsite6.textContent = data[attr].hotelWebsite6;
					hotelDirections1.textContent = data[attr].hotelDirections1;
					hotelDirections2.textContent = data[attr].hotelDirections2;
					hotelDirections3.textContent = data[attr].hotelDirections3;
					hotelDirections4.textContent = data[attr].hotelDirections4;
					hotelDirections5.textContent = data[attr].hotelDirections5;
					hotelDirections6.textContent = data[attr].hotelDirections6;
					hotelCompareKAYAK1.textContent = data[attr].hotelCompareKAYAK1;
					hotelCompareKAYAK2.textContent = data[attr].hotelCompareKAYAK2;
					hotelCompareKAYAK3.textContent = data[attr].hotelCompareKAYAK3;
					hotelCompareKAYAK4.textContent = data[attr].hotelCompareKAYAK4;
					hotelCompareKAYAK5.textContent = data[attr].hotelCompareKAYAK5;
					hotelCompareKAYAK6.textContent = data[attr].hotelCompareKAYAK6;
					hotelDescriptionMisionCatedral.textContent = data[attr].hotelDescriptionMisionCatedral;
					hotelDescriptionAlameda.textContent = data[attr].hotelDescriptionAlameda;
					hotelDescriptionLosJuaninos.textContent = data[attr].hotelDescriptionLosJuaninos;
					hotelDescriptionHerencia.textContent = data[attr].hotelDescriptionHerencia;
					hotelDescriptionSoledad.textContent = data[attr].hotelDescriptionSoledad;
					hotelDescriptionCanteraDiez.textContent = data[attr].hotelDescriptionCanteraDiez;

					//Travel Information
					travelInformationTitle.textContent = data[attr].travelInformationTitle;
					travelInformationAirport.textContent = data[attr].travelInformationAirport;
					travelInformationPassport1.textContent = data[attr].travelInformationPassport1;
					travelInformationPassport2.textContent = data[attr].travelInformationPassport2;
					travelInformationPassport3.textContent = data[attr].travelInformationPassport3;
					travelInformationExchange1.textContent = data[attr].travelInformationExchange1;
					travelInformationExchange2.textContent = data[attr].travelInformationExchange2;
					travelInformationExchange3.textContent = data[attr].travelInformationExchange3;

					//FAQs
					faqTitle.textContent = data[attr].faqTitle;
					faqQuestion1.textContent = data[attr].faqQuestion1;
					faqQuestion2.textContent = data[attr].faqQuestion2;
					faqQuestion3.textContent = data[attr].faqQuestion3;
					faqQuestion4.textContent = data[attr].faqQuestion4;
					faqQuestion5.textContent = data[attr].faqQuestion5;
					faqQuestion6.textContent = data[attr].faqQuestion6;
					faqAnswer1.textContent = data[attr].faqAnswer1;
					faqAnswer2.textContent = data[attr].faqAnswer2;
					faqAnswer3.textContent = data[attr].faqAnswer3;
					faqAnswer4.textContent = data[attr].faqAnswer4;
					faqAnswer5.textContent = data[attr].faqAnswer5;
					faqAnswer6.textContent = data[attr].faqAnswer6;
				});
			});