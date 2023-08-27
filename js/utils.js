function wrapText(element, text) {
  const htmlNode = document.createElement(element);
  htmlNode.textContent = text;
  return htmlNode;
}
function createImg(src, alt) {
  const img = document.createElement('img');
  img.src = src;
  img.alt = alt;
  return img;
}
function formatDate(dateStr) {
  const dateList = dateStr.split('-');
  return `${dateList[2]}/${dateList[1]}/${dateList[0]}`;
}
function createLink(text, url) {
  const link = wrapText('a', text);
  link.href = url;
  return link;
}
function formatEpisodeTitle(season, episode, name) {
  const seasonStr = String(season).padStart(2, '0');
  const episodeStr = String(episode).padStart(2, '0');
  return `S${seasonStr}E${episodeStr}: ${name}`;
}