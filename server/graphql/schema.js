const { buildSchema } = require('graphql');

module.exports = buildSchema(`

  scalar Upload

  input VideoInput {
    id: String!
    name: String!
    size: String!
    type: String!
  }

  type Mutation {
    saveFile(video: VideoInput!): Boolean!
    saveUploadFile(file: Upload): Boolean!
  }

  type Video {
    id: String!
    name: String!
    size: String!
    type: String!
  }

  input SearchText {
    text: String
  }

  type Query {
    getVideos:[Video!]!    
    getSearchVideos(search: SearchText!): [Video!]
  }

`);
