DROP keyspace IF EXISTS review_list;

CREATE KEYSPACE review_list WITH replication = {'class':'SimpleStrategy', 'replication_factor' : 1};

USE review_list;

CREATE TABLE reviews (
    id UUID PRIMARY KEY,
    gameID int,
    review_date date,
    overall int,
    title text,
    review text,
    recommend boolean,
    nickname text,
    location text,
    email text,
    buyForSelf boolean,
    ageBracket int,
    gender int,
    graphics int,
    gameplay int,
    appeal int,
    ownershipBracket int,
    purchaseOnline boolean,
    readReviews boolean,
    recommendBGS int,
    helpful int,
    unhelpful int
);



