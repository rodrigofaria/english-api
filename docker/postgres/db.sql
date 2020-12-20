-- public."user" definition

-- Drop table

-- DROP TABLE public."user";

CREATE TABLE public."user" (
	id serial NOT NULL,
	email varchar(150) NULL,
	"name" varchar(150) NOT NULL,
	chat_id int4 NOT NULL,
	CONSTRAINT user_email_key UNIQUE (email),
	CONSTRAINT user_pkey PRIMARY KEY (id)
);

-- public.vocabulary definition

-- Drop table

-- DROP TABLE public.vocabulary;

CREATE TABLE public.vocabulary (
	id serial NOT NULL,
	user_id int4 NOT NULL,
	word varchar(100) NOT NULL,
	phrase varchar(250) NOT NULL,
	CONSTRAINT uniq_word UNIQUE (user_id, word),
	CONSTRAINT vocabulary_pkey PRIMARY KEY (id)
);


-- public.vocabulary foreign keys

ALTER TABLE public.vocabulary ADD CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES "user"(id);