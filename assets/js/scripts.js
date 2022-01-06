const BASE_URL = 'https://thatcopy.pw/catapi/rest/';

const catBtn = document.getElementById('change-cat');
const catImg = document.getElementById('cat');



const getCats = async () => {
  try {
    const data = await fetch(BASE_URL);

    //transforma em json
    const json = await data.json();

    return json.webpurl;
  } catch (e) {
    console.log(e.message);
  }

  /*
  const data = await fetch(BASE_URL)
  .then((res) => res.json())
  .catch((e) => console.log(e));
  return data.webpurl;
  */
};

const loadImg = async () =>{
  catImg.src = await getCats();
}

catBtn.addEventListener('click', loadImg);
//iniciar com uma imagem
loadImg();