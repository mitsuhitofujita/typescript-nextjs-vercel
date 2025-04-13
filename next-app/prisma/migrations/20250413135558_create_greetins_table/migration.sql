-- CreateTable
CREATE TABLE "greetings" (
    "id" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "greetings_pkey" PRIMARY KEY ("id")
);
