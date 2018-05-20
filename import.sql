-- Category
INSERT INTO CATEGORY (id, name, version) VALUES (-1, 'Articles de Noël', 1);
INSERT INTO CATEGORY (id, name, version) VALUES (-2, 'Stock', 1);

-- Articles
insert into ARTICLE (id, title, price, category_id, version) values (-3, 'Sapin', '15', -1, 1);
insert into ARTICLE (id, title, price, category_id, version) values (-4, 'Pneu neige', '50', -2, 1);
