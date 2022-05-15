/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     15/05/2022 03:58:12                          */
/*==============================================================*/


drop table if exists STATISTIKA;

/*==============================================================*/
/* Table: STATISTIKA                                            */
/*==============================================================*/
create table STATISTIKA
(
   ID_USED              int not null,
   NAME_USED            varchar(50) not null,
   PRICE_USED           decimal not null,
   UNITS                int not null,
   primary key (ID_USED)
);

