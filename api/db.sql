/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     14/05/2022 20:19:24                          */
/*==============================================================*/

drop table if exists REPRESENTET;

drop table if exists RECIPES;

drop table if exists ITEMS;
/*==============================================================*/
/* Table: ITEMS                                                 */
/*==============================================================*/
create table ITEMS
(
   ITEM_ID              int not null,
   NAME                 varchar(100) not null,
   EXPERATIONDATE       datetime,
   INFRIDGE             bool not null default 0,
   primary key (ITEM_ID)
);

/*==============================================================*/
/* Table: RECIPES                                               */
/*==============================================================*/
create table RECIPES
(
   RECIPE_ID            int not null,
   INSTRUCTION          varchar(100) not null,
   GRADESUM             int not null,
   NUMOFGRADES          int not null,
   primary key (RECIPE_ID)
);

/*==============================================================*/
/* Table: REPRESENTET                                           */
/*==============================================================*/
create table REPRESENTET
(
   ITEM_ID              int not null,
   RECIPE_ID            int not null,
   primary key (ITEM_ID, RECIPE_ID)
);

alter table REPRESENTET add constraint FK_REPRESENTET foreign key (ITEM_ID)
      references ITEMS (ITEM_ID) on delete restrict on update restrict;

alter table REPRESENTET add constraint FK_REPRESENTET2 foreign key (RECIPE_ID)
      references RECIPES (RECIPE_ID) on delete restrict on update restrict;

