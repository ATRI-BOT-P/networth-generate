interface TextChar {
  char: string;
  color: string;
}

const utils = {
  parseMinecraftStyledText(text?: string): TextChar[] {
    if (!text) return [];

    const result: TextChar[] = [];
    let currentColor = 'white';

    for (let i = 0; i < text.length; i++) {
      if (text[i] === '&' && i + 1 < text.length) {
        const colorCode = text[i + 1].toLowerCase();
        switch (colorCode) {
          case '0':
            currentColor = '#000000';
            break;
          case '1':
            currentColor = '#0000AA';
            break;
          case '2':
            currentColor = '#00AA00';
            break;
          case '3':
            currentColor = '#00AAAA';
            break;
          case '4':
            currentColor = '#AA0000';
            break;
          case '5':
            currentColor = '#AA00AA';
            break;
          case '6':
            currentColor = '#FFAA00';
            break;
          case '7':
            currentColor = '#AAAAAA';
            break;
          case '8':
            currentColor = '#555555';
            break;
          case '9':
            currentColor = '#5555FF';
            break;
          case 'a':
            currentColor = '#55FF55';
            break;
          case 'b':
            currentColor = '#55FFFF';
            break;
          case 'c':
            currentColor = '#FF5555';
            break;
          case 'd':
            currentColor = '#FF55FF';
            break;
          case 'e':
            currentColor = '#FFFF55';
            break;
          case 'f':
            currentColor = '#FFFFFF';
            break;
        }
        i++;
      } else {
        result.push({
          char: text[i],
          color: currentColor,
        });
      }
    }

    return result;
  },

  getCosmeticText(isCosmetic?: boolean): string {
    return isCosmetic ? '(Cosmetic)' : '(Non-Cosmetic)';
  },
};

export default utils;
