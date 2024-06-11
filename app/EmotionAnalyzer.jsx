const toneApiKey = process.env.TONE_API_KEY;

const NLPCloudClient = require("nlpcloud");
const model = "distilbert-base-uncased-emotion";

const EMOTIONS = {
  JOY: "joy",
  SURPRISE: "surprise",
  FEAR: "fear",
  ANGER: "anger",
  SADNESS: "sadness",
  LOVE: "love",
};

var emotion = "";

const client = new NLPCloudClient({ model: model, token: toneApiKey });
// Returns an Axios promise with the results.
// In case of success, results are contained in `response.data`.
// In case of failure, you can retrieve the status code in `err.response.status`
// and the error message in `err.response.data.detail`.
client
  .sentiment({ text: "NLP Cloud proposes an amazing service!" })
  .then(function (response) {
    console.log(response.data);
    emotion = response.data.scored_labels[0].label;
    console.log(emotion);
  })
  .catch(function (err) {
    console.error(err.response.status);
    console.error(err.response.data.detail);
  });
