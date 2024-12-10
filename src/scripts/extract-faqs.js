function extractContent() {
  const content = {
    h6: Array.from(document.querySelectorAll("h6")).map((h6) =>
      h6.textContent.trim()
    ),
    p: Array.from(document.querySelectorAll("p")).map((p) =>
      p.textContent.trim()
    ),
  };
  return content.h6.map((item, index) => ({
    heding: item,
    para: content.p[index],
  }));
}

const extractedContent = extractContent();
console.log(extractedContent);
