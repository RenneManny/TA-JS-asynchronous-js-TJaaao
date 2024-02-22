// Corrected version of the code

const url = "https://api.spaceflightnewsapi.net/v3/articles?_limit=30/jasbjbjk";
const allContent = document.querySelector(".allcontent");
const select = document.querySelector("select");
let specificChannel = [];

function display(sources) {
  sources.forEach((source) => {
    let option = document.createElement("option");
    option.innerText = source;
    option.value = source;
    select.appendChild(option);
  });  
}
function renderNews(news) {
  allContent.innerHTML = "";
  if(Array.isArray(news)){
    news.forEach((element) => {
        let mainClass = document.createElement("div");
        mainClass.className = "newsContainer";
    
        let img = document.createElement("img");
        img.src = element.imageUrl;
    
        let div = document.createElement("div");
    
        let span = document.createElement("span");
        span.innerText = element.newsSite;
    
        let h3 = document.createElement("h3");
        h3.innerText = element.title;
    
        let a = document.createElement("a");
        a.href = element.url;
        a.innerText = "Read More";
    
        div.append(span, h3, a);
        mainClass.append(img, div);
    
       
        allContent.append(mainClass);
      });
    }
  }
 

fetch(url).then((res) => {
    
  res.json().then((data) => {
    console.log(data);
    specificChannel = data;
    renderNews(data);
    let allNews = [...new Set(data.map((n) => n.newsSite))];
    display(allNews);
  })
  .catch((err)=>{
    allContent.innerText=err;
  });
});

select.addEventListener("change", (event) => {
  let source = event.target.value;
  let filteredNews = specificChannel.filter((data) => data.newsSite === source);
  renderNews(filteredNews);
});
