const hasTrack = (playlist) => {
  // const artists = [];
  // playlist.forEach((song) => {
  //   artists.push(song.split('-')[1]);
  // });

  // return artists;

  const artists = [];

  if (playlist) {
    playlist.forEach((song) => {
      let artist = song.split('-')[1].trim();
      if (!artists.includes(artist)) {
        artists.push(artist);
      }
    });
  }

  return artists;
};

const playlist = [
  'Onu Alma Beni Al - Sezen Aksu',
  'Famous Blue Raincoat - Leonard Cohen',
  'Rakkas - Sezen Aksu',
];

const list = hasTrack(playlist, 'The Treasure - Fra Lippo Lippi');

console.log(list);
