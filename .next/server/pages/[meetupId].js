(() => {
var exports = {};
exports.id = 549;
exports.ids = [549];
exports.modules = {

/***/ 7240:
/***/ ((module) => {

// Exports
module.exports = {
	"detail": "meetUpDetail_detail__v7tmr"
};


/***/ }),

/***/ 8721:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MeetuoDetails),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/meetups/meetUpDetail.module.css
var meetUpDetail_module = __webpack_require__(7240);
var meetUpDetail_module_default = /*#__PURE__*/__webpack_require__.n(meetUpDetail_module);
;// CONCATENATED MODULE: ./components/meetups/MeetupDetail.js


function MeetUpDetail(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (meetUpDetail_module_default()).detail,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: props.image,
                alt: props.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: props.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("address", {
                children: props.address
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: props.description
            })
        ]
    });
}

// EXTERNAL MODULE: external "mongodb"
var external_mongodb_ = __webpack_require__(8013);
;// CONCATENATED MODULE: ./pages/[meetupId]/index.js




function MeetuoDetails({ meetupData  }) {
    console.log(meetupData);
    return /*#__PURE__*/ jsx_runtime_.jsx(MeetUpDetail, {
        image: meetupData.image,
        title: meetupData.title,
        address: meetupData.address,
        instructions: meetupData.instructions,
        description: meetupData.description
    });
}
async function getStaticPaths() {
    const client = await external_mongodb_.MongoClient.connect("mongodb+srv://daveshubham99:WsmvdHlS3EKLM3tS@test1.lsgswcb.mongodb.net/meetups?retryWrites=true&w=majority&appName=test1");
    const db = client.db();
    const meetupCollection = db.collection("meetups");
    const meetups = await meetupCollection.find({}, {
        _id: 1
    }).toArray();
    client.close();
    return {
        fallback: false,
        paths: meetups.map((meetup)=>({
                params: {
                    meetupId: meetup._id.toString()
                }
            }))
    };
}
async function getStaticProps(context) {
    const meetupId = context.params.meetupId;
    const client = await external_mongodb_.MongoClient.connect("mongodb+srv://daveshubham99:WsmvdHlS3EKLM3tS@test1.lsgswcb.mongodb.net/meetups?retryWrites=true&w=majority&appName=test1");
    const db = client.db();
    const meetupCollection = db.collection("meetups");
    const meetup = await meetupCollection.findOne({
        _id: new external_mongodb_.ObjectId(meetupId)
    });
    client.close();
    return {
        props: {
            meetupData: {
                id: meetup._id.toString(),
                title: meetup.title,
                address: meetup.address,
                description: meetup.description,
                image: meetup.image
            }
        },
        revalidate: 10
    };
}


/***/ }),

/***/ 8013:
/***/ ((module) => {

"use strict";
module.exports = require("mongodb");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8721));
module.exports = __webpack_exports__;

})();