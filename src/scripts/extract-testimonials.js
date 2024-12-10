function extractContent() {
  const content = {
    h6: Array.from(document.querySelectorAll("h6")).map((h6) =>
      h6.textContent.trim()
    ),
    p: Array.from(document.querySelectorAll("p")).map((p) =>
      p.textContent.trim()
    ),
    img: Array.from(document.querySelectorAll("img")).map((img) => img.src),
  };
  const atNames = [];
  const message = [];
  content.p.forEach((item, index) => {
    if (index % 2 === 0) {
      atNames.push(item);
    } else {
      message.push(item);
    }
  });
  return content.h6.map((item, index) => ({
    username: item,
    img: content.img[index],
    at: atNames[index],
    message: message[index],
  }));
}

const extractedContent = extractContent();
console.log(extractedContent);
