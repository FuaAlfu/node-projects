---
stack: node js, sql - cassandra
lang: all
---

# create a server app

## connect to db by docker
```
docker run -it --rm --entrypoint cqlsh scylladb/scylla -u user_name -p *************** 157.241.36.67
```

## create a table for db
create table items (id uuid, name text, completed boolean, PRIMARY KEY ((id)));
insert into items (id, name, completed) values (uuid(),'play with pets',false);
select * from items;