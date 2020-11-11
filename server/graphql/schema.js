const { buildSchema } = require('graphql');

module.exports = buildSchema(`

  input VideoInput {
    id: String!
    name: String!
    size: String!
  }

  type Mutation {
    saveVideo(video: VideoInput!): Boolean!
  }

  type Video {
    id: String!
    name: String!
    size: String!
  }

  input SearchText {
    text: String
  }

  type Query {
    getVideos:[Video!]!    
    getSearchVideos(search: SearchText!): [Video!]
  }

`);
