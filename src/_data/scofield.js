const EleventyFetch = require("@11ty/eleventy-fetch");
require('dotenv').config();

module.exports = async function () {
   let userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0';
   let albumURL = 'http://ws.audioscrobbler.com/2.0/?method=artist.getTopAlbums&api_key='+process.env.LASTFM_API_KEY+'&artist=John%20Scofield&format=json&limit=250';
   let albumData = await EleventyFetch(albumURL, {
      fetchOptions: {
      headers: {
         "User-Agent": userAgent
      },
      },
      duration: "1d",
      type: "json",
   }).then((jsonData) => {
      return jsonData.topalbums.album.filter(returnAlbumsWithIds);
   });
   function returnAlbumsWithIds(album) {

      if(album.mbid)return true;
    }

   for(var i=0;i<albumData.length;i++){
      albumData[i].image.forEach(element => {
         console.log(element);
         element.url = element['#text'];
      }
      );
      //Fetch specific album information
      let albumInfoURL = 'http://ws.audioscrobbler.com/2.0/?method=album.getInfo&api_key='+process.env.LASTFM_API_KEY+'&mbid='+albumData[i].mbid+'&format=json&limit=250';
      albumData[i].info = await EleventyFetch(albumInfoURL, {
         fetchOptions: {
         headers: {
            "User-Agent": userAgent
         },
         },
         duration: "1d",
         type: "json",
      }).then((result) => {
         
         return result;
      });
      
   }
   return albumData;
};
