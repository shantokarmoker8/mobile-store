const loadPhone = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/phones?search=iphone"
  );
  const data = await res.json();
  const phones = data.data;
  displayPhons(phones);
};
const displayPhons = (phones) => {
  //   console.log(phones);
  const phoneContainer = document.getElementById("phone-container");
  phones.forEach((phones) => {
    console.log(phones);
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card w-96 bg-gray-300 shadow-xl`;
    phoneCard.innerHTML = `
    <div class="card w-96 bg-gray-300 shadow-xl">
    <figure class="bg-white py-4">
      <img
        src="${phones.image}"
        alt="Shoes"
      />
    </figure>
    <div class="card-body flex flex-col items-center gap-5">
      <h2 class="card-title font-extrabold">${phones.phone_name}</h2>
      <p class="text-center">
        There are many variations of <br />
        passages of available, but the <br />majority have suffered
      </p>
      <p class="font-bold">${phones.price}</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary font-bold">Show Details</button>
      </div>
    </div>
  </div>`;
    phoneContainer.appendChild(phoneCard);
  });
};
loadPhone();
