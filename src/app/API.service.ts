/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreateUserInput = {
  id?: string | null;
  username: string;
  firstname?: string | null;
  secondname?: string | null;
  imageurl?: string | null;
  email?: string | null;
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null;
  firstname?: ModelStringInput | null;
  secondname?: ModelStringInput | null;
  imageurl?: ModelStringInput | null;
  email?: ModelStringInput | null;
  and?: Array<ModelUserConditionInput | null> | null;
  or?: Array<ModelUserConditionInput | null> | null;
  not?: ModelUserConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type User = {
  __typename: "User";
  id?: string;
  username?: string;
  firstname?: string | null;
  secondname?: string | null;
  imageurl?: string | null;
  email?: string | null;
  activities?: ModelActivityConnection;
  jobs?: ModelJobsConnection;
  createdAt?: string;
  updatedAt?: string;
};

export type ModelActivityConnection = {
  __typename: "ModelActivityConnection";
  items?: Array<Activity | null>;
  nextToken?: string | null;
};

export type Activity = {
  __typename: "Activity";
  id?: string;
  name?: string | null;
  description?: string | null;
  owneId?: string | null;
  reported?: boolean | null;
  completed?: boolean | null;
  eventId?: string | null;
  eventTitle?: string | null;
  event?: Event;
  user?: User;
  activityPostId?: string | null;
  createdAt?: string;
  updatedAt?: string;
};

export type Event = {
  __typename: "Event";
  id?: string;
  eventtitle?: string;
  image?: string | null;
  posts?: ModelPostConnection;
  activities?: ModelActivityConnection;
  createdAt?: string;
  updatedAt?: string;
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection";
  items?: Array<Post | null>;
  nextToken?: string | null;
};

export type Post = {
  __typename: "Post";
  id?: string;
  title?: string;
  status?: boolean | null;
  postEventId?: string | null;
  event?: Event;
  comments?: ModelCommentConnection;
  createdAt?: string;
  updatedAt?: string;
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection";
  items?: Array<Comment | null>;
  nextToken?: string | null;
};

export type Comment = {
  __typename: "Comment";
  id?: string;
  content?: string | null;
  post?: Post;
  createdAt?: string;
  updatedAt?: string;
};

export type ModelJobsConnection = {
  __typename: "ModelJobsConnection";
  items?: Array<Jobs | null>;
  nextToken?: string | null;
};

export type Jobs = {
  __typename: "Jobs";
  id?: string;
  jobname?: string | null;
  jobdescription?: string | null;
  owneId?: string | null;
  jobreported?: boolean | null;
  jobcompleted?: boolean | null;
  jobeventId?: string | null;
  jobeventTitle?: string | null;
  jobpostId?: string | null;
  jobposttitle?: string | null;
  reccordState?: string | null;
  postId?: string | null;
  event?: Event;
  user?: User;
  createdAt?: string;
  updatedAt?: string;
};

export type UpdateUserInput = {
  id: string;
  username?: string | null;
  firstname?: string | null;
  secondname?: string | null;
  imageurl?: string | null;
  email?: string | null;
};

export type DeleteUserInput = {
  id: string;
};

export type CreateEventInput = {
  id?: string | null;
  eventtitle: string;
  image?: string | null;
};

export type ModelEventConditionInput = {
  eventtitle?: ModelStringInput | null;
  image?: ModelStringInput | null;
  and?: Array<ModelEventConditionInput | null> | null;
  or?: Array<ModelEventConditionInput | null> | null;
  not?: ModelEventConditionInput | null;
};

export type UpdateEventInput = {
  id: string;
  eventtitle?: string | null;
  image?: string | null;
};

export type DeleteEventInput = {
  id: string;
};

export type CreatePostInput = {
  id?: string | null;
  title: string;
  status?: boolean | null;
  postEventId?: string | null;
};

export type ModelPostConditionInput = {
  title?: ModelStringInput | null;
  status?: ModelBooleanInput | null;
  postEventId?: ModelStringInput | null;
  and?: Array<ModelPostConditionInput | null> | null;
  or?: Array<ModelPostConditionInput | null> | null;
  not?: ModelPostConditionInput | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdatePostInput = {
  id: string;
  title?: string | null;
  status?: boolean | null;
  postEventId?: string | null;
};

export type DeletePostInput = {
  id: string;
};

export type CreateCommentInput = {
  id?: string | null;
  content?: string | null;
  commentPostId?: string | null;
};

export type ModelCommentConditionInput = {
  content?: ModelStringInput | null;
  and?: Array<ModelCommentConditionInput | null> | null;
  or?: Array<ModelCommentConditionInput | null> | null;
  not?: ModelCommentConditionInput | null;
};

export type UpdateCommentInput = {
  id: string;
  content?: string | null;
  commentPostId?: string | null;
};

export type DeleteCommentInput = {
  id: string;
};

export type CreateActivityInput = {
  id?: string | null;
  name?: string | null;
  description?: string | null;
  owneId?: string | null;
  reported?: boolean | null;
  completed?: boolean | null;
  eventId?: string | null;
  eventTitle?: string | null;
  activityPostId?: string | null;
  activityEventId?: string | null;
  activityUserId?: string | null;
};

export type ModelActivityConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  owneId?: ModelStringInput | null;
  reported?: ModelBooleanInput | null;
  completed?: ModelBooleanInput | null;
  eventId?: ModelStringInput | null;
  eventTitle?: ModelStringInput | null;
  activityPostId?: ModelStringInput | null;
  and?: Array<ModelActivityConditionInput | null> | null;
  or?: Array<ModelActivityConditionInput | null> | null;
  not?: ModelActivityConditionInput | null;
};

export type UpdateActivityInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  owneId?: string | null;
  reported?: boolean | null;
  completed?: boolean | null;
  eventId?: string | null;
  eventTitle?: string | null;
  activityPostId?: string | null;
  activityEventId?: string | null;
  activityUserId?: string | null;
};

export type DeleteActivityInput = {
  id: string;
};

export type CreateJobsInput = {
  id?: string | null;
  jobname?: string | null;
  jobdescription?: string | null;
  owneId?: string | null;
  jobreported?: boolean | null;
  jobcompleted?: boolean | null;
  jobeventId?: string | null;
  jobeventTitle?: string | null;
  jobpostId?: string | null;
  jobposttitle?: string | null;
  reccordState?: string | null;
  postId?: string | null;
  jobsEventId?: string | null;
  jobsUserId?: string | null;
};

export type ModelJobsConditionInput = {
  jobname?: ModelStringInput | null;
  jobdescription?: ModelStringInput | null;
  owneId?: ModelStringInput | null;
  jobreported?: ModelBooleanInput | null;
  jobcompleted?: ModelBooleanInput | null;
  jobeventId?: ModelStringInput | null;
  jobeventTitle?: ModelStringInput | null;
  jobpostId?: ModelStringInput | null;
  jobposttitle?: ModelStringInput | null;
  reccordState?: ModelStringInput | null;
  postId?: ModelStringInput | null;
  and?: Array<ModelJobsConditionInput | null> | null;
  or?: Array<ModelJobsConditionInput | null> | null;
  not?: ModelJobsConditionInput | null;
};

export type UpdateJobsInput = {
  id: string;
  jobname?: string | null;
  jobdescription?: string | null;
  owneId?: string | null;
  jobreported?: boolean | null;
  jobcompleted?: boolean | null;
  jobeventId?: string | null;
  jobeventTitle?: string | null;
  jobpostId?: string | null;
  jobposttitle?: string | null;
  reccordState?: string | null;
  postId?: string | null;
  jobsEventId?: string | null;
  jobsUserId?: string | null;
};

export type DeleteJobsInput = {
  id: string;
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null;
  username?: ModelStringInput | null;
  firstname?: ModelStringInput | null;
  secondname?: ModelStringInput | null;
  imageurl?: ModelStringInput | null;
  email?: ModelStringInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection";
  items?: Array<User | null>;
  nextToken?: string | null;
};

export type ModelEventFilterInput = {
  id?: ModelIDInput | null;
  eventtitle?: ModelStringInput | null;
  image?: ModelStringInput | null;
  and?: Array<ModelEventFilterInput | null> | null;
  or?: Array<ModelEventFilterInput | null> | null;
  not?: ModelEventFilterInput | null;
};

export type ModelEventConnection = {
  __typename: "ModelEventConnection";
  items?: Array<Event | null>;
  nextToken?: string | null;
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  status?: ModelBooleanInput | null;
  postEventId?: ModelStringInput | null;
  and?: Array<ModelPostFilterInput | null> | null;
  or?: Array<ModelPostFilterInput | null> | null;
  not?: ModelPostFilterInput | null;
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null;
  content?: ModelStringInput | null;
  and?: Array<ModelCommentFilterInput | null> | null;
  or?: Array<ModelCommentFilterInput | null> | null;
  not?: ModelCommentFilterInput | null;
};

export type ModelActivityFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  owneId?: ModelStringInput | null;
  reported?: ModelBooleanInput | null;
  completed?: ModelBooleanInput | null;
  eventId?: ModelStringInput | null;
  eventTitle?: ModelStringInput | null;
  activityPostId?: ModelStringInput | null;
  and?: Array<ModelActivityFilterInput | null> | null;
  or?: Array<ModelActivityFilterInput | null> | null;
  not?: ModelActivityFilterInput | null;
};

export type ModelJobsFilterInput = {
  id?: ModelIDInput | null;
  jobname?: ModelStringInput | null;
  jobdescription?: ModelStringInput | null;
  owneId?: ModelStringInput | null;
  jobreported?: ModelBooleanInput | null;
  jobcompleted?: ModelBooleanInput | null;
  jobeventId?: ModelStringInput | null;
  jobeventTitle?: ModelStringInput | null;
  jobpostId?: ModelStringInput | null;
  jobposttitle?: ModelStringInput | null;
  reccordState?: ModelStringInput | null;
  postId?: ModelStringInput | null;
  and?: Array<ModelJobsFilterInput | null> | null;
  or?: Array<ModelJobsFilterInput | null> | null;
  not?: ModelJobsFilterInput | null;
};

export type CreateUserMutation = {
  __typename: "User";
  id: string;
  username: string;
  firstname?: string | null;
  secondname?: string | null;
  imageurl?: string | null;
  email?: string | null;
  activities?: {
    __typename: "ModelActivityConnection";
    items: Array<{
      __typename: "Activity";
      id: string;
      name?: string | null;
      description?: string | null;
      owneId?: string | null;
      reported?: boolean | null;
      completed?: boolean | null;
      eventId?: string | null;
      eventTitle?: string | null;
      activityPostId?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  jobs?: {
    __typename: "ModelJobsConnection";
    items: Array<{
      __typename: "Jobs";
      id: string;
      jobname?: string | null;
      jobdescription?: string | null;
      owneId?: string | null;
      jobreported?: boolean | null;
      jobcompleted?: boolean | null;
      jobeventId?: string | null;
      jobeventTitle?: string | null;
      jobpostId?: string | null;
      jobposttitle?: string | null;
      reccordState?: string | null;
      postId?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateUserMutation = {
  __typename: "User";
  id: string;
  username: string;
  firstname?: string | null;
  secondname?: string | null;
  imageurl?: string | null;
  email?: string | null;
  activities?: {
    __typename: "ModelActivityConnection";
    items: Array<{
      __typename: "Activity";
      id: string;
      name?: string | null;
      description?: string | null;
      owneId?: string | null;
      reported?: boolean | null;
      completed?: boolean | null;
      eventId?: string | null;
      eventTitle?: string | null;
      activityPostId?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  jobs?: {
    __typename: "ModelJobsConnection";
    items: Array<{
      __typename: "Jobs";
      id: string;
      jobname?: string | null;
      jobdescription?: string | null;
      owneId?: string | null;
      jobreported?: boolean | null;
      jobcompleted?: boolean | null;
      jobeventId?: string | null;
      jobeventTitle?: string | null;
      jobpostId?: string | null;
      jobposttitle?: string | null;
      reccordState?: string | null;
      postId?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteUserMutation = {
  __typename: "User";
  id: string;
  username: string;
  firstname?: string | null;
  secondname?: string | null;
  imageurl?: string | null;
  email?: string | null;
  activities?: {
    __typename: "ModelActivityConnection";
    items: Array<{
      __typename: "Activity";
      id: string;
      name?: string | null;
      description?: string | null;
      owneId?: string | null;
      reported?: boolean | null;
      completed?: boolean | null;
      eventId?: string | null;
      eventTitle?: string | null;
      activityPostId?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  jobs?: {
    __typename: "ModelJobsConnection";
    items: Array<{
      __typename: "Jobs";
      id: string;
      jobname?: string | null;
      jobdescription?: string | null;
      owneId?: string | null;
      jobreported?: boolean | null;
      jobcompleted?: boolean | null;
      jobeventId?: string | null;
      jobeventTitle?: string | null;
      jobpostId?: string | null;
      jobposttitle?: string | null;
      reccordState?: string | null;
      postId?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateEventMutation = {
  __typename: "Event";
  id: string;
  eventtitle: string;
  image?: string | null;
  posts?: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      status?: boolean | null;
      postEventId?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  activities?: {
    __typename: "ModelActivityConnection";
    items: Array<{
      __typename: "Activity";
      id: string;
      name?: string | null;
      description?: string | null;
      owneId?: string | null;
      reported?: boolean | null;
      completed?: boolean | null;
      eventId?: string | null;
      eventTitle?: string | null;
      activityPostId?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateEventMutation = {
  __typename: "Event";
  id: string;
  eventtitle: string;
  image?: string | null;
  posts?: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      status?: boolean | null;
      postEventId?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  activities?: {
    __typename: "ModelActivityConnection";
    items: Array<{
      __typename: "Activity";
      id: string;
      name?: string | null;
      description?: string | null;
      owneId?: string | null;
      reported?: boolean | null;
      completed?: boolean | null;
      eventId?: string | null;
      eventTitle?: string | null;
      activityPostId?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteEventMutation = {
  __typename: "Event";
  id: string;
  eventtitle: string;
  image?: string | null;
  posts?: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      status?: boolean | null;
      postEventId?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  activities?: {
    __typename: "ModelActivityConnection";
    items: Array<{
      __typename: "Activity";
      id: string;
      name?: string | null;
      description?: string | null;
      owneId?: string | null;
      reported?: boolean | null;
      completed?: boolean | null;
      eventId?: string | null;
      eventTitle?: string | null;
      activityPostId?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreatePostMutation = {
  __typename: "Post";
  id: string;
  title: string;
  status?: boolean | null;
  postEventId?: string | null;
  event?: {
    __typename: "Event";
    id: string;
    eventtitle: string;
    image?: string | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    activities?: {
      __typename: "ModelActivityConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  comments?: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      content?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdatePostMutation = {
  __typename: "Post";
  id: string;
  title: string;
  status?: boolean | null;
  postEventId?: string | null;
  event?: {
    __typename: "Event";
    id: string;
    eventtitle: string;
    image?: string | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    activities?: {
      __typename: "ModelActivityConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  comments?: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      content?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeletePostMutation = {
  __typename: "Post";
  id: string;
  title: string;
  status?: boolean | null;
  postEventId?: string | null;
  event?: {
    __typename: "Event";
    id: string;
    eventtitle: string;
    image?: string | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    activities?: {
      __typename: "ModelActivityConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  comments?: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      content?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateCommentMutation = {
  __typename: "Comment";
  id: string;
  content?: string | null;
  post?: {
    __typename: "Post";
    id: string;
    title: string;
    status?: boolean | null;
    postEventId?: string | null;
    event?: {
      __typename: "Event";
      id: string;
      eventtitle: string;
      image?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCommentMutation = {
  __typename: "Comment";
  id: string;
  content?: string | null;
  post?: {
    __typename: "Post";
    id: string;
    title: string;
    status?: boolean | null;
    postEventId?: string | null;
    event?: {
      __typename: "Event";
      id: string;
      eventtitle: string;
      image?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCommentMutation = {
  __typename: "Comment";
  id: string;
  content?: string | null;
  post?: {
    __typename: "Post";
    id: string;
    title: string;
    status?: boolean | null;
    postEventId?: string | null;
    event?: {
      __typename: "Event";
      id: string;
      eventtitle: string;
      image?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateActivityMutation = {
  __typename: "Activity";
  id: string;
  name?: string | null;
  description?: string | null;
  owneId?: string | null;
  reported?: boolean | null;
  completed?: boolean | null;
  eventId?: string | null;
  eventTitle?: string | null;
  event?: {
    __typename: "Event";
    id: string;
    eventtitle: string;
    image?: string | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    activities?: {
      __typename: "ModelActivityConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  user?: {
    __typename: "User";
    id: string;
    username: string;
    firstname?: string | null;
    secondname?: string | null;
    imageurl?: string | null;
    email?: string | null;
    activities?: {
      __typename: "ModelActivityConnection";
      nextToken?: string | null;
    } | null;
    jobs?: {
      __typename: "ModelJobsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  activityPostId?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateActivityMutation = {
  __typename: "Activity";
  id: string;
  name?: string | null;
  description?: string | null;
  owneId?: string | null;
  reported?: boolean | null;
  completed?: boolean | null;
  eventId?: string | null;
  eventTitle?: string | null;
  event?: {
    __typename: "Event";
    id: string;
    eventtitle: string;
    image?: string | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    activities?: {
      __typename: "ModelActivityConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  user?: {
    __typename: "User";
    id: string;
    username: string;
    firstname?: string | null;
    secondname?: string | null;
    imageurl?: string | null;
    email?: string | null;
    activities?: {
      __typename: "ModelActivityConnection";
      nextToken?: string | null;
    } | null;
    jobs?: {
      __typename: "ModelJobsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  activityPostId?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteActivityMutation = {
  __typename: "Activity";
  id: string;
  name?: string | null;
  description?: string | null;
  owneId?: string | null;
  reported?: boolean | null;
  completed?: boolean | null;
  eventId?: string | null;
  eventTitle?: string | null;
  event?: {
    __typename: "Event";
    id: string;
    eventtitle: string;
    image?: string | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    activities?: {
      __typename: "ModelActivityConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  user?: {
    __typename: "User";
    id: string;
    username: string;
    firstname?: string | null;
    secondname?: string | null;
    imageurl?: string | null;
    email?: string | null;
    activities?: {
      __typename: "ModelActivityConnection";
      nextToken?: string | null;
    } | null;
    jobs?: {
      __typename: "ModelJobsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  activityPostId?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateJobsMutation = {
  __typename: "Jobs";
  id: string;
  jobname?: string | null;
  jobdescription?: string | null;
  owneId?: string | null;
  jobreported?: boolean | null;
  jobcompleted?: boolean | null;
  jobeventId?: string | null;
  jobeventTitle?: string | null;
  jobpostId?: string | null;
  jobposttitle?: string | null;
  reccordState?: string | null;
  postId?: string | null;
  event?: {
    __typename: "Event";
    id: string;
    eventtitle: string;
    image?: string | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    activities?: {
      __typename: "ModelActivityConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  user?: {
    __typename: "User";
    id: string;
    username: string;
    firstname?: string | null;
    secondname?: string | null;
    imageurl?: string | null;
    email?: string | null;
    activities?: {
      __typename: "ModelActivityConnection";
      nextToken?: string | null;
    } | null;
    jobs?: {
      __typename: "ModelJobsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateJobsMutation = {
  __typename: "Jobs";
  id: string;
  jobname?: string | null;
  jobdescription?: string | null;
  owneId?: string | null;
  jobreported?: boolean | null;
  jobcompleted?: boolean | null;
  jobeventId?: string | null;
  jobeventTitle?: string | null;
  jobpostId?: string | null;
  jobposttitle?: string | null;
  reccordState?: string | null;
  postId?: string | null;
  event?: {
    __typename: "Event";
    id: string;
    eventtitle: string;
    image?: string | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    activities?: {
      __typename: "ModelActivityConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  user?: {
    __typename: "User";
    id: string;
    username: string;
    firstname?: string | null;
    secondname?: string | null;
    imageurl?: string | null;
    email?: string | null;
    activities?: {
      __typename: "ModelActivityConnection";
      nextToken?: string | null;
    } | null;
    jobs?: {
      __typename: "ModelJobsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteJobsMutation = {
  __typename: "Jobs";
  id: string;
  jobname?: string | null;
  jobdescription?: string | null;
  owneId?: string | null;
  jobreported?: boolean | null;
  jobcompleted?: boolean | null;
  jobeventId?: string | null;
  jobeventTitle?: string | null;
  jobpostId?: string | null;
  jobposttitle?: string | null;
  reccordState?: string | null;
  postId?: string | null;
  event?: {
    __typename: "Event";
    id: string;
    eventtitle: string;
    image?: string | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    activities?: {
      __typename: "ModelActivityConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  user?: {
    __typename: "User";
    id: string;
    username: string;
    firstname?: string | null;
    secondname?: string | null;
    imageurl?: string | null;
    email?: string | null;
    activities?: {
      __typename: "ModelActivityConnection";
      nextToken?: string | null;
    } | null;
    jobs?: {
      __typename: "ModelJobsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type GetUserQuery = {
  __typename: "User";
  id: string;
  username: string;
  firstname?: string | null;
  secondname?: string | null;
  imageurl?: string | null;
  email?: string | null;
  activities?: {
    __typename: "ModelActivityConnection";
    items: Array<{
      __typename: "Activity";
      id: string;
      name?: string | null;
      description?: string | null;
      owneId?: string | null;
      reported?: boolean | null;
      completed?: boolean | null;
      eventId?: string | null;
      eventTitle?: string | null;
      activityPostId?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  jobs?: {
    __typename: "ModelJobsConnection";
    items: Array<{
      __typename: "Jobs";
      id: string;
      jobname?: string | null;
      jobdescription?: string | null;
      owneId?: string | null;
      jobreported?: boolean | null;
      jobcompleted?: boolean | null;
      jobeventId?: string | null;
      jobeventTitle?: string | null;
      jobpostId?: string | null;
      jobposttitle?: string | null;
      reccordState?: string | null;
      postId?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListUsersQuery = {
  __typename: "ModelUserConnection";
  items: Array<{
    __typename: "User";
    id: string;
    username: string;
    firstname?: string | null;
    secondname?: string | null;
    imageurl?: string | null;
    email?: string | null;
    activities?: {
      __typename: "ModelActivityConnection";
      nextToken?: string | null;
    } | null;
    jobs?: {
      __typename: "ModelJobsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetEventQuery = {
  __typename: "Event";
  id: string;
  eventtitle: string;
  image?: string | null;
  posts?: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      status?: boolean | null;
      postEventId?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  activities?: {
    __typename: "ModelActivityConnection";
    items: Array<{
      __typename: "Activity";
      id: string;
      name?: string | null;
      description?: string | null;
      owneId?: string | null;
      reported?: boolean | null;
      completed?: boolean | null;
      eventId?: string | null;
      eventTitle?: string | null;
      activityPostId?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListEventsQuery = {
  __typename: "ModelEventConnection";
  items: Array<{
    __typename: "Event";
    id: string;
    eventtitle: string;
    image?: string | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    activities?: {
      __typename: "ModelActivityConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetPostQuery = {
  __typename: "Post";
  id: string;
  title: string;
  status?: boolean | null;
  postEventId?: string | null;
  event?: {
    __typename: "Event";
    id: string;
    eventtitle: string;
    image?: string | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    activities?: {
      __typename: "ModelActivityConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  comments?: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      content?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListPostsQuery = {
  __typename: "ModelPostConnection";
  items: Array<{
    __typename: "Post";
    id: string;
    title: string;
    status?: boolean | null;
    postEventId?: string | null;
    event?: {
      __typename: "Event";
      id: string;
      eventtitle: string;
      image?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetCommentQuery = {
  __typename: "Comment";
  id: string;
  content?: string | null;
  post?: {
    __typename: "Post";
    id: string;
    title: string;
    status?: boolean | null;
    postEventId?: string | null;
    event?: {
      __typename: "Event";
      id: string;
      eventtitle: string;
      image?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListCommentsQuery = {
  __typename: "ModelCommentConnection";
  items: Array<{
    __typename: "Comment";
    id: string;
    content?: string | null;
    post?: {
      __typename: "Post";
      id: string;
      title: string;
      status?: boolean | null;
      postEventId?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetActivityQuery = {
  __typename: "Activity";
  id: string;
  name?: string | null;
  description?: string | null;
  owneId?: string | null;
  reported?: boolean | null;
  completed?: boolean | null;
  eventId?: string | null;
  eventTitle?: string | null;
  event?: {
    __typename: "Event";
    id: string;
    eventtitle: string;
    image?: string | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    activities?: {
      __typename: "ModelActivityConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  user?: {
    __typename: "User";
    id: string;
    username: string;
    firstname?: string | null;
    secondname?: string | null;
    imageurl?: string | null;
    email?: string | null;
    activities?: {
      __typename: "ModelActivityConnection";
      nextToken?: string | null;
    } | null;
    jobs?: {
      __typename: "ModelJobsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  activityPostId?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListActivitysQuery = {
  __typename: "ModelActivityConnection";
  items: Array<{
    __typename: "Activity";
    id: string;
    name?: string | null;
    description?: string | null;
    owneId?: string | null;
    reported?: boolean | null;
    completed?: boolean | null;
    eventId?: string | null;
    eventTitle?: string | null;
    event?: {
      __typename: "Event";
      id: string;
      eventtitle: string;
      image?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    user?: {
      __typename: "User";
      id: string;
      username: string;
      firstname?: string | null;
      secondname?: string | null;
      imageurl?: string | null;
      email?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    activityPostId?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetJobsQuery = {
  __typename: "Jobs";
  id: string;
  jobname?: string | null;
  jobdescription?: string | null;
  owneId?: string | null;
  jobreported?: boolean | null;
  jobcompleted?: boolean | null;
  jobeventId?: string | null;
  jobeventTitle?: string | null;
  jobpostId?: string | null;
  jobposttitle?: string | null;
  reccordState?: string | null;
  postId?: string | null;
  event?: {
    __typename: "Event";
    id: string;
    eventtitle: string;
    image?: string | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    activities?: {
      __typename: "ModelActivityConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  user?: {
    __typename: "User";
    id: string;
    username: string;
    firstname?: string | null;
    secondname?: string | null;
    imageurl?: string | null;
    email?: string | null;
    activities?: {
      __typename: "ModelActivityConnection";
      nextToken?: string | null;
    } | null;
    jobs?: {
      __typename: "ModelJobsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListJobssQuery = {
  __typename: "ModelJobsConnection";
  items: Array<{
    __typename: "Jobs";
    id: string;
    jobname?: string | null;
    jobdescription?: string | null;
    owneId?: string | null;
    jobreported?: boolean | null;
    jobcompleted?: boolean | null;
    jobeventId?: string | null;
    jobeventTitle?: string | null;
    jobpostId?: string | null;
    jobposttitle?: string | null;
    reccordState?: string | null;
    postId?: string | null;
    event?: {
      __typename: "Event";
      id: string;
      eventtitle: string;
      image?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    user?: {
      __typename: "User";
      id: string;
      username: string;
      firstname?: string | null;
      secondname?: string | null;
      imageurl?: string | null;
      email?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateUserSubscription = {
  __typename: "User";
  id: string;
  username: string;
  firstname?: string | null;
  secondname?: string | null;
  imageurl?: string | null;
  email?: string | null;
  activities?: {
    __typename: "ModelActivityConnection";
    items: Array<{
      __typename: "Activity";
      id: string;
      name?: string | null;
      description?: string | null;
      owneId?: string | null;
      reported?: boolean | null;
      completed?: boolean | null;
      eventId?: string | null;
      eventTitle?: string | null;
      activityPostId?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  jobs?: {
    __typename: "ModelJobsConnection";
    items: Array<{
      __typename: "Jobs";
      id: string;
      jobname?: string | null;
      jobdescription?: string | null;
      owneId?: string | null;
      jobreported?: boolean | null;
      jobcompleted?: boolean | null;
      jobeventId?: string | null;
      jobeventTitle?: string | null;
      jobpostId?: string | null;
      jobposttitle?: string | null;
      reccordState?: string | null;
      postId?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateUserSubscription = {
  __typename: "User";
  id: string;
  username: string;
  firstname?: string | null;
  secondname?: string | null;
  imageurl?: string | null;
  email?: string | null;
  activities?: {
    __typename: "ModelActivityConnection";
    items: Array<{
      __typename: "Activity";
      id: string;
      name?: string | null;
      description?: string | null;
      owneId?: string | null;
      reported?: boolean | null;
      completed?: boolean | null;
      eventId?: string | null;
      eventTitle?: string | null;
      activityPostId?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  jobs?: {
    __typename: "ModelJobsConnection";
    items: Array<{
      __typename: "Jobs";
      id: string;
      jobname?: string | null;
      jobdescription?: string | null;
      owneId?: string | null;
      jobreported?: boolean | null;
      jobcompleted?: boolean | null;
      jobeventId?: string | null;
      jobeventTitle?: string | null;
      jobpostId?: string | null;
      jobposttitle?: string | null;
      reccordState?: string | null;
      postId?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteUserSubscription = {
  __typename: "User";
  id: string;
  username: string;
  firstname?: string | null;
  secondname?: string | null;
  imageurl?: string | null;
  email?: string | null;
  activities?: {
    __typename: "ModelActivityConnection";
    items: Array<{
      __typename: "Activity";
      id: string;
      name?: string | null;
      description?: string | null;
      owneId?: string | null;
      reported?: boolean | null;
      completed?: boolean | null;
      eventId?: string | null;
      eventTitle?: string | null;
      activityPostId?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  jobs?: {
    __typename: "ModelJobsConnection";
    items: Array<{
      __typename: "Jobs";
      id: string;
      jobname?: string | null;
      jobdescription?: string | null;
      owneId?: string | null;
      jobreported?: boolean | null;
      jobcompleted?: boolean | null;
      jobeventId?: string | null;
      jobeventTitle?: string | null;
      jobpostId?: string | null;
      jobposttitle?: string | null;
      reccordState?: string | null;
      postId?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateEventSubscription = {
  __typename: "Event";
  id: string;
  eventtitle: string;
  image?: string | null;
  posts?: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      status?: boolean | null;
      postEventId?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  activities?: {
    __typename: "ModelActivityConnection";
    items: Array<{
      __typename: "Activity";
      id: string;
      name?: string | null;
      description?: string | null;
      owneId?: string | null;
      reported?: boolean | null;
      completed?: boolean | null;
      eventId?: string | null;
      eventTitle?: string | null;
      activityPostId?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateEventSubscription = {
  __typename: "Event";
  id: string;
  eventtitle: string;
  image?: string | null;
  posts?: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      status?: boolean | null;
      postEventId?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  activities?: {
    __typename: "ModelActivityConnection";
    items: Array<{
      __typename: "Activity";
      id: string;
      name?: string | null;
      description?: string | null;
      owneId?: string | null;
      reported?: boolean | null;
      completed?: boolean | null;
      eventId?: string | null;
      eventTitle?: string | null;
      activityPostId?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteEventSubscription = {
  __typename: "Event";
  id: string;
  eventtitle: string;
  image?: string | null;
  posts?: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      status?: boolean | null;
      postEventId?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  activities?: {
    __typename: "ModelActivityConnection";
    items: Array<{
      __typename: "Activity";
      id: string;
      name?: string | null;
      description?: string | null;
      owneId?: string | null;
      reported?: boolean | null;
      completed?: boolean | null;
      eventId?: string | null;
      eventTitle?: string | null;
      activityPostId?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreatePostSubscription = {
  __typename: "Post";
  id: string;
  title: string;
  status?: boolean | null;
  postEventId?: string | null;
  event?: {
    __typename: "Event";
    id: string;
    eventtitle: string;
    image?: string | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    activities?: {
      __typename: "ModelActivityConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  comments?: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      content?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdatePostSubscription = {
  __typename: "Post";
  id: string;
  title: string;
  status?: boolean | null;
  postEventId?: string | null;
  event?: {
    __typename: "Event";
    id: string;
    eventtitle: string;
    image?: string | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    activities?: {
      __typename: "ModelActivityConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  comments?: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      content?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeletePostSubscription = {
  __typename: "Post";
  id: string;
  title: string;
  status?: boolean | null;
  postEventId?: string | null;
  event?: {
    __typename: "Event";
    id: string;
    eventtitle: string;
    image?: string | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    activities?: {
      __typename: "ModelActivityConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  comments?: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      content?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateCommentSubscription = {
  __typename: "Comment";
  id: string;
  content?: string | null;
  post?: {
    __typename: "Post";
    id: string;
    title: string;
    status?: boolean | null;
    postEventId?: string | null;
    event?: {
      __typename: "Event";
      id: string;
      eventtitle: string;
      image?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCommentSubscription = {
  __typename: "Comment";
  id: string;
  content?: string | null;
  post?: {
    __typename: "Post";
    id: string;
    title: string;
    status?: boolean | null;
    postEventId?: string | null;
    event?: {
      __typename: "Event";
      id: string;
      eventtitle: string;
      image?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCommentSubscription = {
  __typename: "Comment";
  id: string;
  content?: string | null;
  post?: {
    __typename: "Post";
    id: string;
    title: string;
    status?: boolean | null;
    postEventId?: string | null;
    event?: {
      __typename: "Event";
      id: string;
      eventtitle: string;
      image?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateActivitySubscription = {
  __typename: "Activity";
  id: string;
  name?: string | null;
  description?: string | null;
  owneId?: string | null;
  reported?: boolean | null;
  completed?: boolean | null;
  eventId?: string | null;
  eventTitle?: string | null;
  event?: {
    __typename: "Event";
    id: string;
    eventtitle: string;
    image?: string | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    activities?: {
      __typename: "ModelActivityConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  user?: {
    __typename: "User";
    id: string;
    username: string;
    firstname?: string | null;
    secondname?: string | null;
    imageurl?: string | null;
    email?: string | null;
    activities?: {
      __typename: "ModelActivityConnection";
      nextToken?: string | null;
    } | null;
    jobs?: {
      __typename: "ModelJobsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  activityPostId?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateActivitySubscription = {
  __typename: "Activity";
  id: string;
  name?: string | null;
  description?: string | null;
  owneId?: string | null;
  reported?: boolean | null;
  completed?: boolean | null;
  eventId?: string | null;
  eventTitle?: string | null;
  event?: {
    __typename: "Event";
    id: string;
    eventtitle: string;
    image?: string | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    activities?: {
      __typename: "ModelActivityConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  user?: {
    __typename: "User";
    id: string;
    username: string;
    firstname?: string | null;
    secondname?: string | null;
    imageurl?: string | null;
    email?: string | null;
    activities?: {
      __typename: "ModelActivityConnection";
      nextToken?: string | null;
    } | null;
    jobs?: {
      __typename: "ModelJobsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  activityPostId?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteActivitySubscription = {
  __typename: "Activity";
  id: string;
  name?: string | null;
  description?: string | null;
  owneId?: string | null;
  reported?: boolean | null;
  completed?: boolean | null;
  eventId?: string | null;
  eventTitle?: string | null;
  event?: {
    __typename: "Event";
    id: string;
    eventtitle: string;
    image?: string | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    activities?: {
      __typename: "ModelActivityConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  user?: {
    __typename: "User";
    id: string;
    username: string;
    firstname?: string | null;
    secondname?: string | null;
    imageurl?: string | null;
    email?: string | null;
    activities?: {
      __typename: "ModelActivityConnection";
      nextToken?: string | null;
    } | null;
    jobs?: {
      __typename: "ModelJobsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  activityPostId?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateJobsSubscription = {
  __typename: "Jobs";
  id: string;
  jobname?: string | null;
  jobdescription?: string | null;
  owneId?: string | null;
  jobreported?: boolean | null;
  jobcompleted?: boolean | null;
  jobeventId?: string | null;
  jobeventTitle?: string | null;
  jobpostId?: string | null;
  jobposttitle?: string | null;
  reccordState?: string | null;
  postId?: string | null;
  event?: {
    __typename: "Event";
    id: string;
    eventtitle: string;
    image?: string | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    activities?: {
      __typename: "ModelActivityConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  user?: {
    __typename: "User";
    id: string;
    username: string;
    firstname?: string | null;
    secondname?: string | null;
    imageurl?: string | null;
    email?: string | null;
    activities?: {
      __typename: "ModelActivityConnection";
      nextToken?: string | null;
    } | null;
    jobs?: {
      __typename: "ModelJobsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateJobsSubscription = {
  __typename: "Jobs";
  id: string;
  jobname?: string | null;
  jobdescription?: string | null;
  owneId?: string | null;
  jobreported?: boolean | null;
  jobcompleted?: boolean | null;
  jobeventId?: string | null;
  jobeventTitle?: string | null;
  jobpostId?: string | null;
  jobposttitle?: string | null;
  reccordState?: string | null;
  postId?: string | null;
  event?: {
    __typename: "Event";
    id: string;
    eventtitle: string;
    image?: string | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    activities?: {
      __typename: "ModelActivityConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  user?: {
    __typename: "User";
    id: string;
    username: string;
    firstname?: string | null;
    secondname?: string | null;
    imageurl?: string | null;
    email?: string | null;
    activities?: {
      __typename: "ModelActivityConnection";
      nextToken?: string | null;
    } | null;
    jobs?: {
      __typename: "ModelJobsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteJobsSubscription = {
  __typename: "Jobs";
  id: string;
  jobname?: string | null;
  jobdescription?: string | null;
  owneId?: string | null;
  jobreported?: boolean | null;
  jobcompleted?: boolean | null;
  jobeventId?: string | null;
  jobeventTitle?: string | null;
  jobpostId?: string | null;
  jobposttitle?: string | null;
  reccordState?: string | null;
  postId?: string | null;
  event?: {
    __typename: "Event";
    id: string;
    eventtitle: string;
    image?: string | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    activities?: {
      __typename: "ModelActivityConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  user?: {
    __typename: "User";
    id: string;
    username: string;
    firstname?: string | null;
    secondname?: string | null;
    imageurl?: string | null;
    email?: string | null;
    activities?: {
      __typename: "ModelActivityConnection";
      nextToken?: string | null;
    } | null;
    jobs?: {
      __typename: "ModelJobsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateUser(
    input: CreateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<CreateUserMutation> {
    const statement = `mutation CreateUser($input: CreateUserInput!, $condition: ModelUserConditionInput) {
        createUser(input: $input, condition: $condition) {
          __typename
          id
          username
          firstname
          secondname
          imageurl
          email
          activities {
            __typename
            items {
              __typename
              id
              name
              description
              owneId
              reported
              completed
              eventId
              eventTitle
              activityPostId
              createdAt
              updatedAt
            }
            nextToken
          }
          jobs {
            __typename
            items {
              __typename
              id
              jobname
              jobdescription
              owneId
              jobreported
              jobcompleted
              jobeventId
              jobeventTitle
              jobpostId
              jobposttitle
              reccordState
              postId
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserMutation>response.data.createUser;
  }
  async UpdateUser(
    input: UpdateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<UpdateUserMutation> {
    const statement = `mutation UpdateUser($input: UpdateUserInput!, $condition: ModelUserConditionInput) {
        updateUser(input: $input, condition: $condition) {
          __typename
          id
          username
          firstname
          secondname
          imageurl
          email
          activities {
            __typename
            items {
              __typename
              id
              name
              description
              owneId
              reported
              completed
              eventId
              eventTitle
              activityPostId
              createdAt
              updatedAt
            }
            nextToken
          }
          jobs {
            __typename
            items {
              __typename
              id
              jobname
              jobdescription
              owneId
              jobreported
              jobcompleted
              jobeventId
              jobeventTitle
              jobpostId
              jobposttitle
              reccordState
              postId
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUserMutation>response.data.updateUser;
  }
  async DeleteUser(
    input: DeleteUserInput,
    condition?: ModelUserConditionInput
  ): Promise<DeleteUserMutation> {
    const statement = `mutation DeleteUser($input: DeleteUserInput!, $condition: ModelUserConditionInput) {
        deleteUser(input: $input, condition: $condition) {
          __typename
          id
          username
          firstname
          secondname
          imageurl
          email
          activities {
            __typename
            items {
              __typename
              id
              name
              description
              owneId
              reported
              completed
              eventId
              eventTitle
              activityPostId
              createdAt
              updatedAt
            }
            nextToken
          }
          jobs {
            __typename
            items {
              __typename
              id
              jobname
              jobdescription
              owneId
              jobreported
              jobcompleted
              jobeventId
              jobeventTitle
              jobpostId
              jobposttitle
              reccordState
              postId
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUserMutation>response.data.deleteUser;
  }
  async CreateEvent(
    input: CreateEventInput,
    condition?: ModelEventConditionInput
  ): Promise<CreateEventMutation> {
    const statement = `mutation CreateEvent($input: CreateEventInput!, $condition: ModelEventConditionInput) {
        createEvent(input: $input, condition: $condition) {
          __typename
          id
          eventtitle
          image
          posts {
            __typename
            items {
              __typename
              id
              title
              status
              postEventId
              createdAt
              updatedAt
            }
            nextToken
          }
          activities {
            __typename
            items {
              __typename
              id
              name
              description
              owneId
              reported
              completed
              eventId
              eventTitle
              activityPostId
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateEventMutation>response.data.createEvent;
  }
  async UpdateEvent(
    input: UpdateEventInput,
    condition?: ModelEventConditionInput
  ): Promise<UpdateEventMutation> {
    const statement = `mutation UpdateEvent($input: UpdateEventInput!, $condition: ModelEventConditionInput) {
        updateEvent(input: $input, condition: $condition) {
          __typename
          id
          eventtitle
          image
          posts {
            __typename
            items {
              __typename
              id
              title
              status
              postEventId
              createdAt
              updatedAt
            }
            nextToken
          }
          activities {
            __typename
            items {
              __typename
              id
              name
              description
              owneId
              reported
              completed
              eventId
              eventTitle
              activityPostId
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateEventMutation>response.data.updateEvent;
  }
  async DeleteEvent(
    input: DeleteEventInput,
    condition?: ModelEventConditionInput
  ): Promise<DeleteEventMutation> {
    const statement = `mutation DeleteEvent($input: DeleteEventInput!, $condition: ModelEventConditionInput) {
        deleteEvent(input: $input, condition: $condition) {
          __typename
          id
          eventtitle
          image
          posts {
            __typename
            items {
              __typename
              id
              title
              status
              postEventId
              createdAt
              updatedAt
            }
            nextToken
          }
          activities {
            __typename
            items {
              __typename
              id
              name
              description
              owneId
              reported
              completed
              eventId
              eventTitle
              activityPostId
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteEventMutation>response.data.deleteEvent;
  }
  async CreatePost(
    input: CreatePostInput,
    condition?: ModelPostConditionInput
  ): Promise<CreatePostMutation> {
    const statement = `mutation CreatePost($input: CreatePostInput!, $condition: ModelPostConditionInput) {
        createPost(input: $input, condition: $condition) {
          __typename
          id
          title
          status
          postEventId
          event {
            __typename
            id
            eventtitle
            image
            posts {
              __typename
              nextToken
            }
            activities {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          comments {
            __typename
            items {
              __typename
              id
              content
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePostMutation>response.data.createPost;
  }
  async UpdatePost(
    input: UpdatePostInput,
    condition?: ModelPostConditionInput
  ): Promise<UpdatePostMutation> {
    const statement = `mutation UpdatePost($input: UpdatePostInput!, $condition: ModelPostConditionInput) {
        updatePost(input: $input, condition: $condition) {
          __typename
          id
          title
          status
          postEventId
          event {
            __typename
            id
            eventtitle
            image
            posts {
              __typename
              nextToken
            }
            activities {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          comments {
            __typename
            items {
              __typename
              id
              content
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePostMutation>response.data.updatePost;
  }
  async DeletePost(
    input: DeletePostInput,
    condition?: ModelPostConditionInput
  ): Promise<DeletePostMutation> {
    const statement = `mutation DeletePost($input: DeletePostInput!, $condition: ModelPostConditionInput) {
        deletePost(input: $input, condition: $condition) {
          __typename
          id
          title
          status
          postEventId
          event {
            __typename
            id
            eventtitle
            image
            posts {
              __typename
              nextToken
            }
            activities {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          comments {
            __typename
            items {
              __typename
              id
              content
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePostMutation>response.data.deletePost;
  }
  async CreateComment(
    input: CreateCommentInput,
    condition?: ModelCommentConditionInput
  ): Promise<CreateCommentMutation> {
    const statement = `mutation CreateComment($input: CreateCommentInput!, $condition: ModelCommentConditionInput) {
        createComment(input: $input, condition: $condition) {
          __typename
          id
          content
          post {
            __typename
            id
            title
            status
            postEventId
            event {
              __typename
              id
              eventtitle
              image
              createdAt
              updatedAt
            }
            comments {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCommentMutation>response.data.createComment;
  }
  async UpdateComment(
    input: UpdateCommentInput,
    condition?: ModelCommentConditionInput
  ): Promise<UpdateCommentMutation> {
    const statement = `mutation UpdateComment($input: UpdateCommentInput!, $condition: ModelCommentConditionInput) {
        updateComment(input: $input, condition: $condition) {
          __typename
          id
          content
          post {
            __typename
            id
            title
            status
            postEventId
            event {
              __typename
              id
              eventtitle
              image
              createdAt
              updatedAt
            }
            comments {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCommentMutation>response.data.updateComment;
  }
  async DeleteComment(
    input: DeleteCommentInput,
    condition?: ModelCommentConditionInput
  ): Promise<DeleteCommentMutation> {
    const statement = `mutation DeleteComment($input: DeleteCommentInput!, $condition: ModelCommentConditionInput) {
        deleteComment(input: $input, condition: $condition) {
          __typename
          id
          content
          post {
            __typename
            id
            title
            status
            postEventId
            event {
              __typename
              id
              eventtitle
              image
              createdAt
              updatedAt
            }
            comments {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCommentMutation>response.data.deleteComment;
  }
  async CreateActivity(
    input: CreateActivityInput,
    condition?: ModelActivityConditionInput
  ): Promise<CreateActivityMutation> {
    const statement = `mutation CreateActivity($input: CreateActivityInput!, $condition: ModelActivityConditionInput) {
        createActivity(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          owneId
          reported
          completed
          eventId
          eventTitle
          event {
            __typename
            id
            eventtitle
            image
            posts {
              __typename
              nextToken
            }
            activities {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          user {
            __typename
            id
            username
            firstname
            secondname
            imageurl
            email
            activities {
              __typename
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          activityPostId
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateActivityMutation>response.data.createActivity;
  }
  async UpdateActivity(
    input: UpdateActivityInput,
    condition?: ModelActivityConditionInput
  ): Promise<UpdateActivityMutation> {
    const statement = `mutation UpdateActivity($input: UpdateActivityInput!, $condition: ModelActivityConditionInput) {
        updateActivity(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          owneId
          reported
          completed
          eventId
          eventTitle
          event {
            __typename
            id
            eventtitle
            image
            posts {
              __typename
              nextToken
            }
            activities {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          user {
            __typename
            id
            username
            firstname
            secondname
            imageurl
            email
            activities {
              __typename
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          activityPostId
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateActivityMutation>response.data.updateActivity;
  }
  async DeleteActivity(
    input: DeleteActivityInput,
    condition?: ModelActivityConditionInput
  ): Promise<DeleteActivityMutation> {
    const statement = `mutation DeleteActivity($input: DeleteActivityInput!, $condition: ModelActivityConditionInput) {
        deleteActivity(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          owneId
          reported
          completed
          eventId
          eventTitle
          event {
            __typename
            id
            eventtitle
            image
            posts {
              __typename
              nextToken
            }
            activities {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          user {
            __typename
            id
            username
            firstname
            secondname
            imageurl
            email
            activities {
              __typename
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          activityPostId
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteActivityMutation>response.data.deleteActivity;
  }
  async CreateJobs(
    input: CreateJobsInput,
    condition?: ModelJobsConditionInput
  ): Promise<CreateJobsMutation> {
    const statement = `mutation CreateJobs($input: CreateJobsInput!, $condition: ModelJobsConditionInput) {
        createJobs(input: $input, condition: $condition) {
          __typename
          id
          jobname
          jobdescription
          owneId
          jobreported
          jobcompleted
          jobeventId
          jobeventTitle
          jobpostId
          jobposttitle
          reccordState
          postId
          event {
            __typename
            id
            eventtitle
            image
            posts {
              __typename
              nextToken
            }
            activities {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          user {
            __typename
            id
            username
            firstname
            secondname
            imageurl
            email
            activities {
              __typename
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateJobsMutation>response.data.createJobs;
  }
  async UpdateJobs(
    input: UpdateJobsInput,
    condition?: ModelJobsConditionInput
  ): Promise<UpdateJobsMutation> {
    const statement = `mutation UpdateJobs($input: UpdateJobsInput!, $condition: ModelJobsConditionInput) {
        updateJobs(input: $input, condition: $condition) {
          __typename
          id
          jobname
          jobdescription
          owneId
          jobreported
          jobcompleted
          jobeventId
          jobeventTitle
          jobpostId
          jobposttitle
          reccordState
          postId
          event {
            __typename
            id
            eventtitle
            image
            posts {
              __typename
              nextToken
            }
            activities {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          user {
            __typename
            id
            username
            firstname
            secondname
            imageurl
            email
            activities {
              __typename
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateJobsMutation>response.data.updateJobs;
  }
  async DeleteJobs(
    input: DeleteJobsInput,
    condition?: ModelJobsConditionInput
  ): Promise<DeleteJobsMutation> {
    const statement = `mutation DeleteJobs($input: DeleteJobsInput!, $condition: ModelJobsConditionInput) {
        deleteJobs(input: $input, condition: $condition) {
          __typename
          id
          jobname
          jobdescription
          owneId
          jobreported
          jobcompleted
          jobeventId
          jobeventTitle
          jobpostId
          jobposttitle
          reccordState
          postId
          event {
            __typename
            id
            eventtitle
            image
            posts {
              __typename
              nextToken
            }
            activities {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          user {
            __typename
            id
            username
            firstname
            secondname
            imageurl
            email
            activities {
              __typename
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteJobsMutation>response.data.deleteJobs;
  }
  async GetUser(id: string): Promise<GetUserQuery> {
    const statement = `query GetUser($id: ID!) {
        getUser(id: $id) {
          __typename
          id
          username
          firstname
          secondname
          imageurl
          email
          activities {
            __typename
            items {
              __typename
              id
              name
              description
              owneId
              reported
              completed
              eventId
              eventTitle
              activityPostId
              createdAt
              updatedAt
            }
            nextToken
          }
          jobs {
            __typename
            items {
              __typename
              id
              jobname
              jobdescription
              owneId
              jobreported
              jobcompleted
              jobeventId
              jobeventTitle
              jobpostId
              jobposttitle
              reccordState
              postId
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserQuery>response.data.getUser;
  }
  async ListUsers(
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUsersQuery> {
    const statement = `query ListUsers($filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
        listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            username
            firstname
            secondname
            imageurl
            email
            activities {
              __typename
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUsersQuery>response.data.listUsers;
  }
  async GetEvent(id: string): Promise<GetEventQuery> {
    const statement = `query GetEvent($id: ID!) {
        getEvent(id: $id) {
          __typename
          id
          eventtitle
          image
          posts {
            __typename
            items {
              __typename
              id
              title
              status
              postEventId
              createdAt
              updatedAt
            }
            nextToken
          }
          activities {
            __typename
            items {
              __typename
              id
              name
              description
              owneId
              reported
              completed
              eventId
              eventTitle
              activityPostId
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetEventQuery>response.data.getEvent;
  }
  async ListEvents(
    filter?: ModelEventFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListEventsQuery> {
    const statement = `query ListEvents($filter: ModelEventFilterInput, $limit: Int, $nextToken: String) {
        listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            eventtitle
            image
            posts {
              __typename
              nextToken
            }
            activities {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListEventsQuery>response.data.listEvents;
  }
  async GetPost(id: string): Promise<GetPostQuery> {
    const statement = `query GetPost($id: ID!) {
        getPost(id: $id) {
          __typename
          id
          title
          status
          postEventId
          event {
            __typename
            id
            eventtitle
            image
            posts {
              __typename
              nextToken
            }
            activities {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          comments {
            __typename
            items {
              __typename
              id
              content
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPostQuery>response.data.getPost;
  }
  async ListPosts(
    filter?: ModelPostFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPostsQuery> {
    const statement = `query ListPosts($filter: ModelPostFilterInput, $limit: Int, $nextToken: String) {
        listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            status
            postEventId
            event {
              __typename
              id
              eventtitle
              image
              createdAt
              updatedAt
            }
            comments {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPostsQuery>response.data.listPosts;
  }
  async GetComment(id: string): Promise<GetCommentQuery> {
    const statement = `query GetComment($id: ID!) {
        getComment(id: $id) {
          __typename
          id
          content
          post {
            __typename
            id
            title
            status
            postEventId
            event {
              __typename
              id
              eventtitle
              image
              createdAt
              updatedAt
            }
            comments {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCommentQuery>response.data.getComment;
  }
  async ListComments(
    filter?: ModelCommentFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCommentsQuery> {
    const statement = `query ListComments($filter: ModelCommentFilterInput, $limit: Int, $nextToken: String) {
        listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            content
            post {
              __typename
              id
              title
              status
              postEventId
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCommentsQuery>response.data.listComments;
  }
  async GetActivity(id: string): Promise<GetActivityQuery> {
    const statement = `query GetActivity($id: ID!) {
        getActivity(id: $id) {
          __typename
          id
          name
          description
          owneId
          reported
          completed
          eventId
          eventTitle
          event {
            __typename
            id
            eventtitle
            image
            posts {
              __typename
              nextToken
            }
            activities {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          user {
            __typename
            id
            username
            firstname
            secondname
            imageurl
            email
            activities {
              __typename
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          activityPostId
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetActivityQuery>response.data.getActivity;
  }
  async ListActivitys(
    filter?: ModelActivityFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListActivitysQuery> {
    const statement = `query ListActivitys($filter: ModelActivityFilterInput, $limit: Int, $nextToken: String) {
        listActivitys(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            owneId
            reported
            completed
            eventId
            eventTitle
            event {
              __typename
              id
              eventtitle
              image
              createdAt
              updatedAt
            }
            user {
              __typename
              id
              username
              firstname
              secondname
              imageurl
              email
              createdAt
              updatedAt
            }
            activityPostId
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListActivitysQuery>response.data.listActivitys;
  }
  async GetJobs(id: string): Promise<GetJobsQuery> {
    const statement = `query GetJobs($id: ID!) {
        getJobs(id: $id) {
          __typename
          id
          jobname
          jobdescription
          owneId
          jobreported
          jobcompleted
          jobeventId
          jobeventTitle
          jobpostId
          jobposttitle
          reccordState
          postId
          event {
            __typename
            id
            eventtitle
            image
            posts {
              __typename
              nextToken
            }
            activities {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          user {
            __typename
            id
            username
            firstname
            secondname
            imageurl
            email
            activities {
              __typename
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetJobsQuery>response.data.getJobs;
  }
  async ListJobss(
    filter?: ModelJobsFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListJobssQuery> {
    const statement = `query ListJobss($filter: ModelJobsFilterInput, $limit: Int, $nextToken: String) {
        listJobss(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            jobname
            jobdescription
            owneId
            jobreported
            jobcompleted
            jobeventId
            jobeventTitle
            jobpostId
            jobposttitle
            reccordState
            postId
            event {
              __typename
              id
              eventtitle
              image
              createdAt
              updatedAt
            }
            user {
              __typename
              id
              username
              firstname
              secondname
              imageurl
              email
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListJobssQuery>response.data.listJobss;
  }
  OnCreateUserListener: Observable<
    SubscriptionResponse<OnCreateUserSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateUser {
        onCreateUser {
          __typename
          id
          username
          firstname
          secondname
          imageurl
          email
          activities {
            __typename
            items {
              __typename
              id
              name
              description
              owneId
              reported
              completed
              eventId
              eventTitle
              activityPostId
              createdAt
              updatedAt
            }
            nextToken
          }
          jobs {
            __typename
            items {
              __typename
              id
              jobname
              jobdescription
              owneId
              jobreported
              jobcompleted
              jobeventId
              jobeventTitle
              jobpostId
              jobposttitle
              reccordState
              postId
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateUserSubscription>>;

  OnUpdateUserListener: Observable<
    SubscriptionResponse<OnUpdateUserSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateUser {
        onUpdateUser {
          __typename
          id
          username
          firstname
          secondname
          imageurl
          email
          activities {
            __typename
            items {
              __typename
              id
              name
              description
              owneId
              reported
              completed
              eventId
              eventTitle
              activityPostId
              createdAt
              updatedAt
            }
            nextToken
          }
          jobs {
            __typename
            items {
              __typename
              id
              jobname
              jobdescription
              owneId
              jobreported
              jobcompleted
              jobeventId
              jobeventTitle
              jobpostId
              jobposttitle
              reccordState
              postId
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateUserSubscription>>;

  OnDeleteUserListener: Observable<
    SubscriptionResponse<OnDeleteUserSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteUser {
        onDeleteUser {
          __typename
          id
          username
          firstname
          secondname
          imageurl
          email
          activities {
            __typename
            items {
              __typename
              id
              name
              description
              owneId
              reported
              completed
              eventId
              eventTitle
              activityPostId
              createdAt
              updatedAt
            }
            nextToken
          }
          jobs {
            __typename
            items {
              __typename
              id
              jobname
              jobdescription
              owneId
              jobreported
              jobcompleted
              jobeventId
              jobeventTitle
              jobpostId
              jobposttitle
              reccordState
              postId
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteUserSubscription>>;

  OnCreateEventListener: Observable<
    SubscriptionResponse<OnCreateEventSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateEvent {
        onCreateEvent {
          __typename
          id
          eventtitle
          image
          posts {
            __typename
            items {
              __typename
              id
              title
              status
              postEventId
              createdAt
              updatedAt
            }
            nextToken
          }
          activities {
            __typename
            items {
              __typename
              id
              name
              description
              owneId
              reported
              completed
              eventId
              eventTitle
              activityPostId
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateEventSubscription>>;

  OnUpdateEventListener: Observable<
    SubscriptionResponse<OnUpdateEventSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateEvent {
        onUpdateEvent {
          __typename
          id
          eventtitle
          image
          posts {
            __typename
            items {
              __typename
              id
              title
              status
              postEventId
              createdAt
              updatedAt
            }
            nextToken
          }
          activities {
            __typename
            items {
              __typename
              id
              name
              description
              owneId
              reported
              completed
              eventId
              eventTitle
              activityPostId
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateEventSubscription>>;

  OnDeleteEventListener: Observable<
    SubscriptionResponse<OnDeleteEventSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteEvent {
        onDeleteEvent {
          __typename
          id
          eventtitle
          image
          posts {
            __typename
            items {
              __typename
              id
              title
              status
              postEventId
              createdAt
              updatedAt
            }
            nextToken
          }
          activities {
            __typename
            items {
              __typename
              id
              name
              description
              owneId
              reported
              completed
              eventId
              eventTitle
              activityPostId
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteEventSubscription>>;

  OnCreatePostListener: Observable<
    SubscriptionResponse<OnCreatePostSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreatePost {
        onCreatePost {
          __typename
          id
          title
          status
          postEventId
          event {
            __typename
            id
            eventtitle
            image
            posts {
              __typename
              nextToken
            }
            activities {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          comments {
            __typename
            items {
              __typename
              id
              content
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreatePostSubscription>>;

  OnUpdatePostListener: Observable<
    SubscriptionResponse<OnUpdatePostSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePost {
        onUpdatePost {
          __typename
          id
          title
          status
          postEventId
          event {
            __typename
            id
            eventtitle
            image
            posts {
              __typename
              nextToken
            }
            activities {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          comments {
            __typename
            items {
              __typename
              id
              content
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdatePostSubscription>>;

  OnDeletePostListener: Observable<
    SubscriptionResponse<OnDeletePostSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeletePost {
        onDeletePost {
          __typename
          id
          title
          status
          postEventId
          event {
            __typename
            id
            eventtitle
            image
            posts {
              __typename
              nextToken
            }
            activities {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          comments {
            __typename
            items {
              __typename
              id
              content
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeletePostSubscription>>;

  OnCreateCommentListener: Observable<
    SubscriptionResponse<OnCreateCommentSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateComment {
        onCreateComment {
          __typename
          id
          content
          post {
            __typename
            id
            title
            status
            postEventId
            event {
              __typename
              id
              eventtitle
              image
              createdAt
              updatedAt
            }
            comments {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateCommentSubscription>>;

  OnUpdateCommentListener: Observable<
    SubscriptionResponse<OnUpdateCommentSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateComment {
        onUpdateComment {
          __typename
          id
          content
          post {
            __typename
            id
            title
            status
            postEventId
            event {
              __typename
              id
              eventtitle
              image
              createdAt
              updatedAt
            }
            comments {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateCommentSubscription>>;

  OnDeleteCommentListener: Observable<
    SubscriptionResponse<OnDeleteCommentSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteComment {
        onDeleteComment {
          __typename
          id
          content
          post {
            __typename
            id
            title
            status
            postEventId
            event {
              __typename
              id
              eventtitle
              image
              createdAt
              updatedAt
            }
            comments {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteCommentSubscription>>;

  OnCreateActivityListener: Observable<
    SubscriptionResponse<OnCreateActivitySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateActivity {
        onCreateActivity {
          __typename
          id
          name
          description
          owneId
          reported
          completed
          eventId
          eventTitle
          event {
            __typename
            id
            eventtitle
            image
            posts {
              __typename
              nextToken
            }
            activities {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          user {
            __typename
            id
            username
            firstname
            secondname
            imageurl
            email
            activities {
              __typename
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          activityPostId
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateActivitySubscription>>;

  OnUpdateActivityListener: Observable<
    SubscriptionResponse<OnUpdateActivitySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateActivity {
        onUpdateActivity {
          __typename
          id
          name
          description
          owneId
          reported
          completed
          eventId
          eventTitle
          event {
            __typename
            id
            eventtitle
            image
            posts {
              __typename
              nextToken
            }
            activities {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          user {
            __typename
            id
            username
            firstname
            secondname
            imageurl
            email
            activities {
              __typename
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          activityPostId
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateActivitySubscription>>;

  OnDeleteActivityListener: Observable<
    SubscriptionResponse<OnDeleteActivitySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteActivity {
        onDeleteActivity {
          __typename
          id
          name
          description
          owneId
          reported
          completed
          eventId
          eventTitle
          event {
            __typename
            id
            eventtitle
            image
            posts {
              __typename
              nextToken
            }
            activities {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          user {
            __typename
            id
            username
            firstname
            secondname
            imageurl
            email
            activities {
              __typename
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          activityPostId
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteActivitySubscription>>;

  OnCreateJobsListener: Observable<
    SubscriptionResponse<OnCreateJobsSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateJobs {
        onCreateJobs {
          __typename
          id
          jobname
          jobdescription
          owneId
          jobreported
          jobcompleted
          jobeventId
          jobeventTitle
          jobpostId
          jobposttitle
          reccordState
          postId
          event {
            __typename
            id
            eventtitle
            image
            posts {
              __typename
              nextToken
            }
            activities {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          user {
            __typename
            id
            username
            firstname
            secondname
            imageurl
            email
            activities {
              __typename
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateJobsSubscription>>;

  OnUpdateJobsListener: Observable<
    SubscriptionResponse<OnUpdateJobsSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateJobs {
        onUpdateJobs {
          __typename
          id
          jobname
          jobdescription
          owneId
          jobreported
          jobcompleted
          jobeventId
          jobeventTitle
          jobpostId
          jobposttitle
          reccordState
          postId
          event {
            __typename
            id
            eventtitle
            image
            posts {
              __typename
              nextToken
            }
            activities {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          user {
            __typename
            id
            username
            firstname
            secondname
            imageurl
            email
            activities {
              __typename
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateJobsSubscription>>;

  OnDeleteJobsListener: Observable<
    SubscriptionResponse<OnDeleteJobsSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteJobs {
        onDeleteJobs {
          __typename
          id
          jobname
          jobdescription
          owneId
          jobreported
          jobcompleted
          jobeventId
          jobeventTitle
          jobpostId
          jobposttitle
          reccordState
          postId
          event {
            __typename
            id
            eventtitle
            image
            posts {
              __typename
              nextToken
            }
            activities {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          user {
            __typename
            id
            username
            firstname
            secondname
            imageurl
            email
            activities {
              __typename
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteJobsSubscription>>;
}
