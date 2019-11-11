"use strict"
const mongoose = require("mongoose");
const schema = mongoose.Schema;
//Schema
const userSchema = new schema(
  {
    first_name: {
      type: String,
      trim: true,
      required: true
    },
    last_name: {
        type: String,
        trim: true,
        required: true
    },
    user_name: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    email_id: {
      type: String,
      trim: true,
      unique: true,
      required: true
    },
    password: {
      type: String,
      trim: true,
      required: true
    },
    city: {
      type: String,
      trim: true,
      required: true
    },
    state: {
      type: String,
      trim: true,
      required: true
    },
    zip_code: {
      type: String,
      trim: true
    },
    user_bio: {
      type: String,
      trim : true
    },
    user_image: {
      type: String,
      trim: true,
      default: "userplaceholder.png"
    },
    tweets: [{
        tweet: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Tweet"
        },
        retweeted: {
            type: Boolean,
            default: false
        }
    }],
    replied: [{
        tweet: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Tweet"
        }
    }],
    liked: [{
        tweet: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Tweet"
        }
    }],
    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }]
  },
  { versionKey: false }
);

const User = mongoose.model("User", userSchema);

exports.User = User;