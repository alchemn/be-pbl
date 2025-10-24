-- CreateTable
CREATE TABLE `Siswa` (
    `id` VARCHAR(191) NOT NULL,
    `kodesiswa` VARCHAR(191) NOT NULL,
    `namasiswa` VARCHAR(191) NOT NULL,
    `tanggal_lahir` DATETIME(3) NOT NULL,
    `jurusan_siswa` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
