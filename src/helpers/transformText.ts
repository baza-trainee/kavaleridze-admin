export const divideToParagraph = (text: string) => {
  const textArray = text.split(/\r?\n/).filter((item) => item.length > 0);
  return textArray;
};

export const splitToOneString = (text: string[]) => {
  return text;
};
