DROP DATABASE IF EXISTS review_list;

CREATE DATABASE review_list;

CREATE TABLE reviews (
    id integer PRIMARY KEY,
    ageBracket integer,
    appeal integer,
    buyForSelf boolean,
    email text,
    gameID integer,
    gameplay integer,
    gender integer,
    graphics integer,
    helpful integer,
    location text,
    nickname text,
    overall integer,
    ownershipBracket integer,
    purchaseOnline boolean,
    readReviews boolean,
    recommend boolean,
    recommendBGS integer,
    review text,
    review_date text,
    title text,
    unhelpful integer   
);
