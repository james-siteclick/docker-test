import {MigrationInterface, QueryRunner} from "typeorm";

export class testMigration1615644431750 implements MigrationInterface {
    name = 'testMigration1615644431750'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "test" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), CONSTRAINT "PK_5417af0062cf987495b611b59c7" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "test"`);
    }

}
