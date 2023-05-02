const parseSubtitles = (string) =>{
    let subtitles = [];

    //TODO: Tried a few things here, but no luck.

    let parts = string.split('\r\n\r\n');

    if (parts.length === 1){
        parts = string.split('\n\n');
    }

    parts.forEach(part => {
        let splitPart = part.split('\n');

        subtitles.push({
            time: splitPart[1],
            subtitles: splitPart.slice(2).join(' ')
        });
    });
    return subtitles;
}
  
export default parseSubtitles;
  