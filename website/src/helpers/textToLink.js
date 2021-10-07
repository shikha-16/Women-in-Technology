export const textToLink = (text) => {
  const linkRegex = /(?<start>\[url=(?<url>.*)\])(?<text>.*)(?<end>\[\/url\])/;
  const matched = text.match(linkRegex);

  if (!matched) return { __html: text };

  const parsedText = text.replace(
    linkRegex,
    `<a href="${
      matched.groups.url
    }" target="_blank" rel="noreferrer" style="color:inherit;fontWeight:bold">${
      matched.groups.text || matched.groups.url
    }</a>`
  );
  return { __html: parsedText };
};
