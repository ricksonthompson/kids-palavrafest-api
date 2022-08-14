-- CreateTable
CREATE TABLE "Children" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "age" TEXT NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP,

    CONSTRAINT "Children_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Children_id_key" ON "Children"("id");
