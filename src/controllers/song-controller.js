const { SongService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

async function createSong(req, res) {
  const song =[
    {
        "title": "Keeps Me Alive",
        "subtitle": "Moses Sumney",
        "image": "https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/25/91/4c/25914c1a-f147-e093-8e0c-5ed380575c6f/dj.sdqskeyt.jpg/400x400cc.jpg",
        "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/7c/09/e3/7c09e30a-db4a-fe05-b4b1-14cedce9035a/mzaf_6123434045560156085.plus.aac.ep.m4a",
        "currentPosition": 0,
        "duration": 89.977324
    },
    {
        "title": "ARE WE FRIENDS?",
        "subtitle": "Tyler, The Creator",
        "image": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/0c/06/05/0c060581-6242-6a2a-a677-20170f2cf8da/886447710180.jpg/400x400cc.jpg",
        "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/4a/8c/a4/4a8ca4b8-4646-7348-8141-7cc5225359a7/mzaf_16944779764029044585.plus.aac.ep.m4a",
       "currentPosition": 0,
        "duration": 89.977324 
    },
    {
        "title": "Out Of Your League",
        "subtitle": "Blood Orange Feat.",
        "image": "https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/bf/6b/2d/bf6b2df2-b0c7-bbfa-4a2b-59bb46c90d64/887828042166.png/400x400cc.jpg",
        "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/92/4b/ee/924beea4-fbd9-4e6d-833b-4f22f997d804/mzaf_12848009722782109732.plus.aac.p.m4a"
       , "currentPosition": 0,
        "duration": 29.976961 
    },
    {
        "title": "Right on Time",
        "subtitle": "B.K. Habermehl Feat. Lonr",
        "image": "https://is3-ssl.mzstatic.com/image/thumb/Music113/v4/af/c0/2c/afc02c8e-7cd0-b33d-ce2b-e83c4eb394db/190296835575.jpg/400x400cc.jpg",
        "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/a8/6b/b9/a86bb986-52d7-1a48-8ddd-1e18e426ba4d/mzaf_13077803543177244660.plus.aac.ep.m4a"
        , "currentPosition": 0,
        "duration": 89.977324
    },
    {
        "title": "Nothing Without You",
        "subtitle": "Tanerélle",
        "image": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/cc/fc/90/ccfc9011-b0d0-e0dc-016b-09d05e60aa5d/859736809636_cover.jpg/400x400cc.jpg",
        "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/0e/98/cc/0e98ccfd-0c64-cec0-9f28-9e52819df8ea/mzaf_8469049797695259587.plus.aac.ep.m4a"
    
        , "currentPosition": 0,
        "duration": 89.977324
    },
    {
        "title": "Road To You",
        "subtitle": "Alex Isley",
        "image": "https://is4-ssl.mzstatic.com/image/thumb/Music114/v4/82/90/6c/82906c08-7df1-9130-1ccb-d90b84056cd6/859731857915_cover.jpg/400x400cc.jpg",
        "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/70/30/4a/70304a59-5016-f0e7-1f70-05c454c3dbf6/mzaf_14271049621651300491.plus.aac.ep.m4a"
        , "currentPosition": 0,
        "duration": 89.977324
    },
    {
        "title": "You Can't Save Me",
        "subtitle": "SiR",
        "image": "https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/58/fa/0b/58fa0b4c-c549-4a7d-b480-a6daae2b8b72/886447892329.jpg/400x400cc.jpg",
        "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/fb/d3/ad/fbd3ad0d-48b1-c3d9-e5be-9c88d2bd289d/mzaf_12949836997737974758.plus.aac.ep.m4a"
        , "currentPosition": 0,
        "duration": 89.977324
    },
    {
        "title": "Два бантика ",
        "subtitle": "ESTRADARADA",
        "image": "https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/1c/03/34/1c033496-935b-4c73-c05b-2422792de3db/cover.jpg/400x400cc.jpg",
        "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/08/41/b2/0841b20e-ea47-d024-9303-33c50942d87f/mzaf_6529088683641690927.plus.aac.ep.m4a"
        , "currentPosition": 0,
        "duration": 89.977324
    },
    {
        "title": "Salsa",
        "subtitle": "Niña Dioz",
        "image": "https://is3-ssl.mzstatic.com/image/thumb/Music128/v4/70/78/d9/7078d9ec-0447-a2e3-bf49-3831bb83c61b/192562450062.jpg/400x400cc.jpg",
        "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/a7/dd/f1/a7ddf1af-0312-e8d0-134f-38728f91f686/mzaf_10063722103571727003.plus.aac.ep.m4a"
        , "currentPosition": 0,
        "duration": 89.977324
    },
    {
        "title": "Back To The Devils",
        "subtitle": "FAB FISCHER",
        "image": "https://is2-ssl.mzstatic.com/image/thumb/Music123/v4/b5/ca/df/b5cadfbb-4b69-80dc-ebd0-630fbfaf6a8d/859736352712_cover.jpg/400x400cc.jpg",
        "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/16/1c/df/161cdff1-d841-db84-68a4-4ee4cd63e70d/mzaf_13035749285403175328.plus.aac.ep.m4a"
        , "currentPosition": 0,
        "duration": 89.977324
    },
    {
        "title": "Quarintine",
        "subtitle": "Kiddo Weirdo, Feat. Dez Frio",
        "image": "https://is4-ssl.mzstatic.com/image/thumb/Music113/v4/02/f0/98/02f09853-323a-a908-646c-34f0b883412a/artwork.jpg/400x400cc.jpg",
        "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/49/12/2f/49122fdc-44b7-d549-3ae9-ae504f8246a0/mzaf_8578004382952887185.plus.aac.ep.m4a"
        , "currentPosition": 0,
        "duration": 89.977324
    },
    {
        "title": "I Can't Breathe",
        "subtitle": "Maino",
        "image": "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/7b/77/3a/7b773a9a-8ed1-8c02-5401-b47e63daa4b8/192641607578_Cover.jpg/400x400cc.jpg",
        "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/54/7f/34/547f3477-aa52-a703-a59f-b912b2a58c7f/mzaf_2221846767039512574.plus.aac.ep.m4a"
        , "currentPosition": 0,
        "duration": 89.977324
    },
    {
        "title": "Dalí",
        "subtitle": "Tanerélle",
        "image": "https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/a9/7f/64/a97f6428-dae3-6133-50d4-f62456bb26c2/859720523944_cover.jpg/400x400cc.jpg",
        "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/97/37/f8/9737f8bc-5a9e-dd6e-60c8-713706691e42/mzaf_9945191881918063565.plus.aac.ep.m4a"
        , "currentPosition": 0,
        "duration": 89.977324
    },
    {
        "title": "World We Created",
        "subtitle": "Giveon",
        "image": "https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/3b/ab/69/3bab69b8-97b6-2c7f-6e5f-86e091696bea/886448745839.jpg/400x400cc.jpg",
        "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/c0/c3/91/c0c3917c-1c7a-111d-b570-abd9d944875a/mzaf_17023693239337082712.plus.aac.ep.m4a"
        , "currentPosition": 0,
        "duration": 89.977324
    },
    {
        "title": "Kool Aid",
        "subtitle": "KIRBY",
        "image": "https://is2-ssl.mzstatic.com/image/thumb/Music114/v4/f0/f9/c5/f0f9c524-6d88-f017-8eee-652b2b0fbfdc/859736717351_cover.jpg/400x400cc.jpg",
        "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/91/99/a3/9199a3a5-2eb3-f4e5-e1b6-51cb9069ed37/mzaf_2718408313845336584.plus.aac.ep.m4a"
        , "currentPosition": 0,
        "duration": 89.977324
    },
    {
        "title": "Be Free",
        "subtitle": "J. Cole",
        "image": "https://is2-ssl.mzstatic.com/image/thumb/Music114/v4/68/f1/07/68f10779-2bc0-e9b8-7e46-3676facc4ee8/20UMGIM70946.rgb.jpg/400x400cc.jpg",
        "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/77/67/47/77674783-8154-935b-0443-7c9b947f177d/mzaf_9180420939285326470.plus.aac.ep.m4a"
        , "currentPosition": 0,
        "duration": 89.977324
    },
    {
        "title": "Letter To The Free",
        "subtitle": "Common Feat. Bilal",
        "image": "https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/4b/5f/87/4b5f87a9-b78d-42c0-d30e-ea8b203317d0/16UMGIM72494.rgb.jpg/400x400cc.jpg",
        "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/af/16/77/af167710-924f-b6fe-8f08-29e3f848e7f9/mzaf_13199620300349122487.plus.aac.ep.m4a"
        , "currentPosition": 0,
        "duration": 89.977324
    },
    {
        "title": "Wrist",
        "subtitle": "Jay Prezi",
        "image": "https://is5-ssl.mzstatic.com/image/thumb/Music113/v4/7d/3f/28/7d3f2826-f771-bfc1-7378-b341ffa535a0/cover_4062851832328.jpg/400x400cc.jpg",
        "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/a0/f9/2e/a0f92e58-fbb7-a603-ca9e-2afad2c241f8/mzaf_17980875054930732491.plus.aac.ep.m4a"
        , "currentPosition": 0,
        "duration": 89.977324
    },
    {
        "title": "Sandstorm",
        "subtitle": "Mereba Feat. JID",
        "image": "https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/78/84/84/78848494-5e86-32d3-845e-4b836e5f7ddb/00602577508868.rgb.jpg/400x400cc.jpg",
        "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/c8/ae/e3/c8aee3f4-37e4-41a6-7f71-52b038cd5d4b/mzaf_8312994038413635787.plus.aac.ep.m4a"
        , "currentPosition": 0,
        "duration": 89.977324
    },
    {
        "title": "Velvet",
        "subtitle": "KIRBY",
        "image": "https://is2-ssl.mzstatic.com/image/thumb/Music114/v4/f0/f9/c5/f0f9c524-6d88-f017-8eee-652b2b0fbfdc/859736717351_cover.jpg/400x400cc.jpg",
        "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/00/54/cc/0054cc0e-b0cc-23d6-44be-d42ff918afae/mzaf_7428245118113752551.plus.aac.ep.m4a"
        , "currentPosition": 0,
        "duration": 89.977324
    }
]
  try {
    const user = await SongService.createSong(song);
    SuccessResponse.data = user;
    return res.status(201).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function getAllSongs(req, res) {
    try {
      const songs = await SongService.getAllSongs();
      SuccessResponse.data = songs;
      return res.status(200).json(SuccessResponse);
    } catch (error) {
      ErrorResponse.error = error;
      return res.status(error.statusCode).json(ErrorResponse);
    }
  }

module.exports = {
  createSong,
  getAllSongs
};
