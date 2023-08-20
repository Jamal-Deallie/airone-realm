import { lucia } from 'lucia';
import { nextjs } from 'lucia/middleware';
import { mongoose } from '@lucia-auth/adapter-mongoose';
import 'lucia/polyfill/node';
import mongodb, { Schema, model, models } from 'mongoose';

const UserSchema = new Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  } as const,
  { _id: false }
);

export const User = models.user ?? model('user', UserSchema);

const KeySchema = new Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
    hashed_password: String,
  } as const,
  { _id: false }
);

export const Key = models.key ?? model('key', KeySchema);

const SessionSchema = new Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
    active_expires: {
      type: Number,
      required: true,
    },
    idle_expires: {
      type: Number,
      required: true,
    },
  } as const,
  { _id: false }
);

export const Session = models.session ?? model('session', SessionSchema);

export const auth = lucia({
  adapter: mongoose({
    User,
    Session,
    Key,
  }),
  env: process.env.NODE_ENV === 'development' ? 'DEV' : 'PROD',
  middleware: nextjs(),
  sessionCookie: {
    expires: false,
  },
  getUserAttributes: data => {
    return {
      username: data.username,
      name: data.name,
    };
  },
});

export type Auth = typeof auth;

const uri = process.env.MONGODB_URI || 'http://localhost:3000';
const options = {};

mongodb.connect(uri, options);
