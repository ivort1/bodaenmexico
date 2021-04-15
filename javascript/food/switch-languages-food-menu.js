const langEl = document.querySelector(".langWrap");
const link = document.querySelectorAll(".languageLinks");

//Menu
const menuTitle = document.querySelector(".menuTitle");
const menuText = document.querySelector(".menuText");
const menuAppetizerTitle = document.querySelector(".menuAppetizerTitle");
const menuAppetizerBody = document.querySelector(".menuAppetizerBody");
const menuEntreeTitle = document.querySelector(".menuEntreeTitle");
const menuEntreeBody = document.querySelector(".menuEntreeBody");
const menuDessertTitle = document.querySelector(".menuDessertTitle");
const menuDessertBody = document.querySelector(".menuDessertBody");

//Kids Menu
const kidsMenuTitle = document.querySelector(".kidsMenuTitle");
const kidsMenuBody = document.querySelector(".kidsMenuBody");

//WeddingCake
const weddingCakeTitle = document.querySelector(".weddingCakeTitle");
const weddingCakeBody = document.querySelector(".weddingCakeBody");

//Drinks
const drinksTitle = document.querySelector(".drinksTitle");
const drinksOpenBar = document.querySelector(".drinksOpenBar");
const drinksSodaAndWater = document.querySelector(".drinksSodaAndWater");
const drinksBeer = document.querySelector(".drinks-beer");
const drinksWine = document.querySelector(".drinks-wine");

link.forEach((el) => {
	el.addEventListener("click", () => {
		langEl.querySelector(".active").classList.remove("active");
		el.classList.add("active");

		const attr = el.getAttribute("language");

		//Menu
		menuTitle.textContent = data[attr].menuTitle;
		menuText.textContent = data[attr].menuText;
		menuAppetizerTitle.textContent = data[attr].menuAppetizerTitle;
		menuAppetizerBody.textContent = data[attr].menuAppetizerBody;
		menuEntreeTitle.textContent = data[attr].menuEntreeTitle;
		menuEntreeBody.textContent = data[attr].menuEntreeBody;
		menuDessertTitle.textContent = data[attr].menuDessertTitle;
		menuDessertBody.textContent = data[attr].menuDessertBody;

		//Kids Menu
		kidsMenuTitle.textContent = data[attr].kidsMenuTitle;
		kidsMenuBody.textContent = data[attr].kidsMenuBody;

		//Wedding Cake
		weddingCakeTitle.textContent = data[attr].weddingCakeTitle;
		weddingCakeBody.textContent = data[attr].weddingCakeBody;

		//Drinks
		drinksTitle.textContent = data[attr].drinksTitle;
		drinksOpenBar.textContent = data[attr].drinksOpenBar;
		drinksSodaAndWater.textContent = data[attr].drinksSodaAndWater;
		drinksBeer.textContent = data[attr].drinksBeer;
		drinksWine.textContent = data[attr].drinksWine;
	});
});