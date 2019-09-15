import Immutable from "seamless-immutable";

const initialState = Immutable({
  topicsByUrl: {
    "/r/Jokes/": {
      title: "Jokes",
      description:
        "The funniest sub on reddit. Hundreds of jokes posted each day, and some of them aren't even reposts! FarCraft"
    },
    "/r/pics/": {
      title: "pics",
      description:
        "I bet you can figure it out by reading the name of the subreddit"
    }
  },
  selectedTopicUrls: ["/r/Jokes/"]
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}
