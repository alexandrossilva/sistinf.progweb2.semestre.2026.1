-- CreateTable
CREATE TABLE `Curso` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(50) NOT NULL,

    UNIQUE INDEX `Curso_nome_key`(`nome`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Aluno` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(50) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `cursoId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Aluno` ADD CONSTRAINT `Aluno_cursoId_fkey` FOREIGN KEY (`cursoId`) REFERENCES `Curso`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
