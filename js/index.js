
const infoPanels = document.querySelectorAll('.info__panel');

const imgProducts = document.querySelectorAll('.product__image');
const titleProducts = document.querySelectorAll('.product__ticket-name');
const priceProducts = document.querySelectorAll('.product__ticket-price');
const stateProducts = document.querySelectorAll(".product__state-image");
const stateInfoProducts = document.querySelectorAll(".product__state-info");


// Animation info panel
infoPanels.forEach((infoPanel) => {
const infoBlocks = infoPanel.querySelectorAll('.info');
	infoPanel.addEventListener('click', function () {
		infoBlocks.forEach((infoBlock) => {
		infoBlock.classList.toggle('hidden');
		infoBlock.classList.toggle('animate-info-appear');
		});
	});
});

//  Fetch API 
fetch('https://voodoo-sandbox.myshopify.com/products.json?limit=12')
  .then(response => response.json())
  .then(data => {
    const products = data.products;
    const imageSrcs = [];
    const titles = [];
	const priceVariants = [];
	const states = [];
	console.log(products);


    for (const product of products) {
      titles.push(product.title);
      imageSrcs.push(product.images.map(image => image.src));
	  priceVariants.push(product.variants.map(priceVariant => priceVariant.price));
	  states.push(product.published_at);
    }
	//product`s image 
    imgProducts.forEach((imgProduct, i) => {
      const srcArray = imageSrcs[i % imageSrcs.length];
      const src = srcArray[0];
      imgProduct.src = src;
    });
	//product`s title
    titleProducts.forEach((titleProduct, i) => {
      const titleArray = titles[i % titles.length];
      titleProduct.innerHTML = titleArray;
    });

	//product`s state 
	stateProducts.forEach((stateProduct, i)=>{
		const stateArray = states[i % states.length];
		if(stateArray!==null){
			stateProduct.innerHTML = "USED";
			stateInfoProducts.innerHTML = "Slightly used"
		}
		else {
			stateProduct.innerHTML = "draft";
			stateInfoProducts.innerHTML = "Not used"
		}
	});

	//product`s price
	priceProducts.forEach((priceProduct, i) => {
		const priceArray = priceVariants[i % priceVariants.length];
		// const price = priceArray[Math.floor(Math.random() * priceArray.length)];
		const price = priceArray[0]; // get first value with array
		priceProduct.innerHTML = price;
	});

  })
  .catch(error => {
    console.log('Произошла ошибка', error);
  });
