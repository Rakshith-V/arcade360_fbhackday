var APP_DATA = {
  "scenes": [
    {
      "id": "0-classical-arcade-games",
      "name": "Classical Arcade Games",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1381,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.02201090472105,
          "pitch": 0.168010832884967,
          "rotation": 0.7853981633974483,
          "target": "1-arcade"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.03669684815216101,
          "pitch": -0.17449401440636692,
          "title": "Play SuperMario!",
          "text": "<a href=\"http://localhost/games/mario/index.html\"><b>A new kind of Mario game that you can play with one hand. You control Mario by tapping as he constantly runs forward.<b></a>"
        },
        {
          "yaw": 2.6681105400263423,
          "pitch": 0.06776883494681485,
          "title": "Play Classical snake.",
          "text": "<a href=\"http://localhost/games/snake/index.html\"><b>Play the classic mobile Snake game for free online</b></a>"
        },
        {
          "yaw": -0.7557274675963406,
          "pitch": -0.03629121208471098,
          "title": "Play PacMan.",
          "text": "<a href=\"http://localhost/games/pacman/index.html\"><b>Pac-Man is a maze arcade game developed and released by Namco in 1980.</b></a>"
        }
      ]
    },
    {
      "id": "1-arcade",
      "name": "Arcade",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1761.5,
      "initialViewParameters": {
        "yaw": -0.6418263746656496,
        "pitch": -0.014244836807929318,
        "fov": 1.3223956836693749
      },
      "linkHotspots": [
        {
          "yaw": -2.7439193711462657,
          "pitch": 0.09370773036942026,
          "rotation": 7.0685834705770345,
          "target": "0-classical-arcade-games"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.9085523992654778,
          "pitch": 0.07387365930600609,
          "title": "Play Pong v/s CPU!",
          "text": "<div><a href=\"http://localhost/games/pong/index.html\"><b>Virtual Pong is the fast-paced, futuristic game that keeps you engaged.</b></a><br></div>"
        },
        {
          "yaw": -0.23059370778870658,
          "pitch": -0.20151043760981224,
          "title": "Play T-rex on steroids!",
          "text": "<div><a href=\"webrun:C:\wamp64\www\games\chromeTrip_windows_64\chromeTrip_windows_64.exe\"><b>Bored of the old version?Try the new facelift!</b></a><br></div>"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
