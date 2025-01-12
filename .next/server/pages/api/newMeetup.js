"use strict";
(() => {
var exports = {};
exports.id = 45;
exports.ids = [45];
exports.modules = {

/***/ 9141:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "mongodb"
const external_mongodb_namespaceObject = require("mongodb");
;// CONCATENATED MODULE: ./pages/api/newMeetup.js

async function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body;
        const client = await external_mongodb_namespaceObject.MongoClient.connect("mongodb+srv://daveshubham99:WsmvdHlS3EKLM3tS@test1.lsgswcb.mongodb.net/meetups?retryWrites=true&w=majority&appName=test1");
        const db = client.db();
        const meetupCollection = db.collection("meetups");
        const result = await meetupCollection.insertOne(data);
        console.log(result);
        client.close();
        res.status(201).json({
            message: "Meetup Inserted Successfully"
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9141));
module.exports = __webpack_exports__;

})();