-- CreateTable
CREATE TABLE "Orders" (
    "order_id" SERIAL NOT NULL,
    "customer_id" INTEGER NOT NULL,
    "total_price" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "crated_at" TEXT NOT NULL,

    CONSTRAINT "Orders_pkey" PRIMARY KEY ("order_id")
);
