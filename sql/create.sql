--TODO for future create 1 mounth of date a node-cron that insert date every week

CREATE TABLE `handleturni`.`day` ( `id` VARCHAR(20) NOT NULL , `users` VARCHAR(20) NOT NULL ,turni VARCHAR(100) ) ENGINE = InnoDB;


-- quando si arriva a vedere i turni, ho le date con associati i turni e gli utenti che devono fare il turno.
-- sarà necessaria una tabella users con una foreign key su users della tabella 'day'
-- in modo che con una soloa query si fa una join e si ottiene tutti i dati necessari.