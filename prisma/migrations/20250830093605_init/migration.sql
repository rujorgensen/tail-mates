-- AlterTable
ALTER TABLE "public"."Dog" ALTER COLUMN "neutered" DROP DEFAULT;

-- CreateTable
CREATE TABLE "public"."_DogToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_DogToUser_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_DogToUser_B_index" ON "public"."_DogToUser"("B");

-- AddForeignKey
ALTER TABLE "public"."_DogToUser" ADD CONSTRAINT "_DogToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Dog"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_DogToUser" ADD CONSTRAINT "_DogToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
