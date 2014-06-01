# uptimerobot-to-hipchat

A webhook service to post [Uptime Robot](https://uptimerobot.com/) alerts to a [HipChat](https://www.hipchat.com/) room.

**Important:** The web service is running on Heroku, and using it is somewhat insecure as you're exposing a HipChat API token and Room ID. It's recommended that you clone this repository and host it yourself.

![chat](https://cloud.githubusercontent.com/assets/13259/3140858/9bdcfa50-e945-11e3-90b4-86d68d9e5593.png)

---

Add a **Web-Hook** alert contact in [Uptime Robot](https://uptimerobot.com/dashboard.php#mySettings), including your HipChat API token and Room ID.

    http://uptimerobot-to-hipchat.herokuapp.com/[hipchat api token]/[room id]?

![hipchat](https://cloud.githubusercontent.com/assets/13259/3140812/0c3daffc-e940-11e3-8bbd-599fe54f6df4.png)

---

Released under the MIT License: [http://flesch.mit-license.org](http://flesch.mit-license.org)
