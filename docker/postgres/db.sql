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
	counter int4 NOT NULL,
	CONSTRAINT uniq_word UNIQUE (user_id, word),
	CONSTRAINT vocabulary_pkey PRIMARY KEY (id)
);


-- public.vocabulary foreign keys

ALTER TABLE public.vocabulary ADD CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES "user"(id);

-- inserts

insert into public."user" (email, name, chat_id) values
('rodrigo@gmail.com', 'Rodrigo', 123),
('juliana@gmail.com', 'Juliana', 234),
('mlivia@gmail.com', 'Livia', 345),
('mluiza@gmail.com', 'Luiza', 456);

insert into public.vocabulary (user_id, word, phrase, counter) values
(1, 'A', 'ABC1', 10),
(1, 'B', 'ABC2', 11),
(1, 'C', 'ABC3', 10),
(1, 'D', 'ABC4', 12),
(1, 'E', 'ABC5', 11),
(1, 'F', 'ABC6', 11),
(2, 'Aa', 'ABC1a', 196),
(2, 'Bb', 'ABC2b', 195),
(2, 'Cc', 'ABC3c', 194),
(2, 'Dd', 'ABC4d', 195),
(2, 'Ee', 'ABC5e', 192),
(2, 'Ff', 'ABC6f', 194);