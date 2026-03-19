-- CreateTable
CREATE TABLE "user_tb" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "user_tb_id_key" ON "user_tb"("id");

-- CreateIndex
CREATE UNIQUE INDEX "user_tb_email_key" ON "user_tb"("email");
