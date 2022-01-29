document.addEventListener("DOMContentLoaded", () => {
  let options = {
    root: null,
    rootMargins: "0px",
    threshold: 0.5,
  };
  const observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(document.querySelector("footer"));
  //an initial load of some data
  getData();
});
function handleIntersect(entries) {
  if (entries[0].isIntersecting) {
    console.warn("something is intersecting with the viewport");
    getData();
  }
}
function getData() {
  let container = document.querySelector(".elementcontainer");
  console.log("fetch some JSON data");
  fetch("sources/posts.json")
    .then((response) => response.json())
    .then((data) => {
      data["posts"].forEach((post) => {
        console.log(post);
        let element = document.createElement("div");
        element.className = "element";
        element.innerHTML =
          '<div class="votes">\n' +
          '          <img src="sources/Upvote.png" alt="" />\n' +
          "          <h4>Vote</h4>\n" +
          '          <img src="sources/Downvote.png" alt="" />\n' +
          "        </div>\n" +
          '        <img class="header" src="sources/Header.png" alt="" />\n' +
          '        <div class="elementcontainer">\n' +
          '          <div class="top">\n' +
          '            <h2 class="title">' +
          post["title"] +
          "</h2>\n" +
          '            <h4 class="flair  ' +
          post["flair"] +
          '  ">' +
          post["flair"] +
          "</h4>\n" +
          "          </div>\n" +
          '          <div class="middle">\n' +
          '            <h2 class="subreddit">' +
          post["subreddit"] +
          "</h2>\n" +
          '            <h3 class="author">' +
          post["author"] +
          "</h3>\n" +
          "          </div>\n" +
          '          <div class="bottom">\n' +
          '            <img src="sources/Header.png" alt="" class="fullscreen" />\n' +
          "            <h4>|</h4>\n" +
          '            <img src="sources/Header.png" alt="" class="comments" />\n' +
          "            <h4>comments</h4>\n" +
          '            <img src="sources/Header.png" alt="" class="award" />\n' +
          "            <h4>award</h4>\n" +
          '            <img src="sources/Header.png" alt="" class="share" />\n' +
          "            <h4>share</h4>\n" +
          '            <img src="sources/Header.png" alt="" class="save" />\n' +
          "            <h4>save</h4>\n" +
          '            <img src="sources/Header.png" alt="" class="hide" />\n' +
          "            <h4>hide</h4>\n" +
          '            <img src="sources/Header.png" alt="" class="report" />\n' +
          "            <h4>report</h4>\n" +
          "          </div>\n" +
          "        </div>";
        container.appendChild(element);
      });
    });
}
