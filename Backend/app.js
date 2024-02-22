// import express Module 
const express = require("express");
// import body-parser module 
const bodyParser = require("body-parser");
// import mongoose module 
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/sportDB');

// import bcyrpt module 
const bcrypt = require('bcrypt');

// import jwt module 
const jwt = require('jsonwebtoken');
// import axios module 
const axios = require("axios");
// import authenticate 
const authenticate = require("./middelware/authenticate");

// import multer module 
const multer = require('multer');

// create an application express
const app = express();

const path = require("path");

// import Models **************** 
const Match = require("./Models/Match");
const User = require("./Models/User");
const Player = require("./Models/Player");
const Team = require("./Models/Team");

// ******************



// configure Body-parser
// send JSON reponses
app.use(bodyParser.json())
// get object from request
app.use(bodyParser.urlencoded({ extended: true }));

// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization, expiresIn"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});



// Business Logic :ADD MATCH
app.post("/matches", (req, res) => {
    console.log(req.body);

    let match = new Match({
        scoreOne: req.body.scoreOne,
        scoreTwo: req.body.scoreTwo,
        teamOne: req.body.teamOne,
        teamTwo: req.body.teamTwo
    })
    match.save();
    res.json({ message: "Added with sucess" });
    console.log("here the BL :of add match");

})


// Business Logic : get all matches 
app.get("/matches", authenticate, (req, res) => {
    console.log("here the business logic of all matches");
    Match.find().then((data) => {
        res.json({ matches: data, message: "ok" });
    });

})

// Business logic : Get match by id 

app.get("/matches/:id", (req, res) => {
    console.log("here BL: Get Match By Id");
    let id = req.params.id;
    console.log(id);
    // for (let i = 0; i < matchesTab.length; i++) {
    //     if (matchesTab[i].id == id) {
    //         res.json({ match: matchesTab[i] });

    //     }
    // }
    Match.findOne({ _id: id }).then((data) => {
        res.json({ data: data });
    })
})

// Business logic : update match

app.put("/matches", (req, res) => {
    console.log("here BL: upadate Match");
    let match = req.body;
    console.log(match);
    Match.updateOne({ _id: match._id }, match).then((editResponse) => {
        console.log(editResponse);
        if (editResponse.nModified == 1) {
            res.json({ message: "edited with sucess" });
        }
    })
})

// Business Logic : Delete by Id 
app.delete("/matches/:id", (req, res) => {
    console.log("here BL :Delete match");
    let id = req.params.id;
    console.log("here the id from the fe", id);
    Match.deleteOne({ _id: id }).then((deleteResponse) => {
        console.log(deleteResponse);
        if (deleteResponse.deletedCount == 1) {
            res.json({ message: `deleted object : ${id}` });
        }
    });

})

// ****************************************************

// Business Logic :ADD Player
app.post("/players", (req, res) => {
    console.log("here BL: add player");
    console.log(req.body);
    try {
        // Find team by Id 
        Team.findById(req.body.TeamId).then((team) => {

            if (!team) {
                return res.status(404).json({ message: "Team not found" });
            }
            console.log("here the team from DB", team);
            req.body.TeamId = team._id;
            console.log(team._id);
            let player = new Player({
                name: req.body.name,
                age: req.body.age,
                position: req.body.position,
                nbre: req.body.nbre,
                teamId: req.body.TeamId,
            });
            player.save(() => {
                team.players.push(player);
                team.save();
                res.status(201).json({ message: "Done" });
            });
        })
    } catch (error) {
        console.log("here error", error);
    }
})


// Business Logic : get all players 
app.get("/players", (req, res) => {
    console.log("here BL: get all players");
    player.find().then((doc) => {
        res.json({ data: doc, message: "OK" });
    });

})

// Business logic : Get player by id 

app.get("/players/:id", (req, res) => {
    console.log("here BL: Get player By Id");
    let id = req.params.id;
    console.log(id);
    player.findOne({ _id: id }).then((data) => {
        console.log("here the objct", data);
        res.json({ player: data })
    })

})

// Business logic : update player

app.put("/players", (req, res) => {
    console.log("here BL: upadate player");
})

// Business Logic : Delete by Id 
app.delete("/players/:id", (req, res) => {
    console.log("here BL :Delete player");
    let idPlayer = req.params.id;
    console.log(idPlayer);
    player.deleteOne({ _id: idPlayer }).then((deleteResponse) => {
        if (deleteResponse.deletedCount == 1) {
            res.json({ message: "deleted with sucess" });
        }
    })

})

// ****************************************************

// Business Logic :ADD Team
app.post("/teams", (req, res) => {
    console.log("here BL: add match");
    console.log(req.body);
    let team = new Team({
        name: req.body.name,
        stadium: req.body.stadium,
        owner: req.body.owner,
        foundation: req.body.foundation,
    });
    team.save((err, doc) => {
        (err) ? res.json({ message: "NOK" }) : res.json({ message: "OK" })
    });

})


// Business Logic : get all Teams 
app.get("/teams", (req, res) => {
    console.log("here BL: get all Teams");
    Team.find().then((teamsTab) => {
        console.log("here the teams from the BE", teamsTab);
        res.json({ data: teamsTab, message: "OK" });
    })

})

// Business logic : Get Team by id 

app.get("/teams/:id", (req, res) => {
    console.log("here BL: Get Team By Id");
})

// Business logic : update Team

app.put("/teams", (req, res) => {
    console.log("here BL: upadate Team");
})

// Business Logic : Delete by Id 
app.delete("/teams/:id", (req, res) => {
    console.log("here BL :Delete Team");
})


// get all players of team 
app.get("/teams/:id/players", (req, res) => {
    console.log("here BL :Delete Team");
    console.log("hereid", req.params.id);
    try {
        Team.findById(req.params.id).populate("players").then((team) => {
            console.log(team);
            if (!team) {
                return res.status(404).json({ message: "Team not found" });
            }
            res.json({ team: team });
        })
    } catch (error) {
        console.log(error);
    }
})
// Multer**************************
app.use('/avatars', express.static(path.join('Backend/images')));
const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
}
const storageConfig = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        if (!isValid) {
            let error = new Error("Mime type is invalid");
            cb(error, 'Backend/images')
        } else {
            cb(null, 'Backend/images')
        }
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
            extension;
        cb(null, imgName);
    }
});
// ************************

// Business Logic : Signup 

app.post("/allUsers/subscription", multer({ storage: storageConfig }).single('img'), (req, res) => {
    console.log(req.body);
    console.log("here BL :Signup");
    bcrypt.hash(req.body.password, 8).then((bcyrptPwd) => {
        let user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: bcyrptPwd,
            role: req.body.role,

            avatar: `http://localhost:3000/avatars/${req.file.filename}`,
        })
        user.save((error, doc) => {
            if (doc) {
                res.json({ message: "added with success" });
            } else {
                res.json({ message: "Error" });
            }
        });

    })
})
app.post("/allUsers/signin", (req, res) => {
    let user = req.body;
    let findedUser;
    console.log("here the objct from the FE", user);
    User.findOne({ email: user.email }).then((doc) => {
        findedUser = doc;
        if (!doc) {
            res.json({ message: "Email Invalid" });
        }
        return bcrypt.compare(user.password, doc.password)
    }).then((pwdResult) => {
        if (!pwdResult) {
            res.json({ message: "password Invalid" });
        } else {
            let token = jwt.sign({
                email: findedUser.email,
                userId: findedUser._id,
                userRole: findedUser.role
            },
                "Testing",
                { expiresIn: "30min" }
            );
            let usertoSend = {
                id: findedUser._id,
                firstName: findedUser.firstName,
                lastName: findedUser.lastName,
                role: findedUser.role,
                jwt: token,
                expiresIn: 1800
            };
            res.json({ message: "Welcome", user: usertoSend });
        }
    })
})

// business Logic : get user by id 
app.get("/allUsers/:id", (req, res) => {
    console.log("here BL: Get user By Id");
    let userId = req.params.id;
    console.log(userId);
    User.findOne({ _id: userId }).then((data) => {
        res.json({ userById: data })
    })
})

// business Logic of edit Profile
app.put("/allUsers", (req, res) => {
    let newUser = req.body;
    console.log(req.body);
    User.findById(newUser._id).then((user) => {
        return bcrypt.compare(newUser.oldPassword, user.password)
    }).then((pwdResult) => {
        if (!pwdResult) {
            res.json({ message: "check your old password" })
        }
        return bcrypt.hash(req.body.newPassword, 8).then((cryptedPwd) => {
            User.updateOne({ _id: newUser._id }, { password: cryptedPwd }).then((editResponse) => {
                res.json({ data: editResponse, message: "all is ok" });
            })
        })
    })
})

// Search
app.get('/matches/search/:teamOne', (req, res) => {
    const search = req.params.teamOne;
    Match.find({ teamOne: search }).then((foundObjects) => {
        if (foundObjects) {
            res.status(200).json({
                match: foundObjects
            });
        } else {
            res.status(404).json({
                message: 'No matches found for the specified teamOne.'
            });
        }
    }).catch(error => {
        res.status(500).json({
            error: error.message
        });
    });
});

// app.get("/api/weather", (req, res) => {
//     const lat = 36.8454046
//     const lon = 10.1835483
//     const key = "4a99078b01f5ad98864e26e9e216c918"
//     axios.get("https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric").then((result) => {
//         console.log(res.data);
//         res.json({ data: result.data })
//     })
// })

// Business Logic: Search Weather From API
app.get("/api/weather/:city", (req, res) => {
    console.log("Here into BL: Search weather by city", req.params.city);
    let key = "fc0c794cd9b86d6fef1e4ad48596c51a";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&appid=${key}&units=metric`;
    axios.get(apiURL).then((weatherResponse) => {
      let data = weatherResponse.data;
      console.log("Data", data);
      let description = data.weather[0].description;
      let icon = data.weather[0].icon;
      let result = {
        temperature: data.main.temp,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        icone: `https://openweathermap.org/img/wn/${icon}@4x.png`,
        description: description,
        sunrise: new Date(data.sys.sunrise * 1000),
        sunset: new Date(data.sys.sunset * 1000),
      };
      res.json({ result: result });
    }).catch((error) => {
        console.error('Error in weather request:', error);
        console.log('Detailed error response:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Error retrieving weather data.' });
      });
      
  });
  
// app.get("/weather", (req, res) => {
//     const lat = 36.8454046
//     const lon = 10.1835483
//     const key = "4a99078b01f5ad98864e26e9e216c918"
//     axios.get(https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric).then((result) => {
//         console.log(res.data);
//         res.json({ data: result.data })
//     })
// })
  


// make app importable from other files 
module.exports = app;
