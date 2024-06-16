-- CreateTable
CREATE TABLE "HotmartEvent" (
    "id" SERIAL NOT NULL,
    "eventBody" JSONB NOT NULL,
    "eventBodyId" TEXT NOT NULL,
    "eventBodyEvent" TEXT NOT NULL,
    "eventBodyCreationDate" TIMESTAMP(3) NOT NULL,
    "eventBodyVertion" TEXT NOT NULL,
    "eventBodySubscriberEmail" TEXT NOT NULL,
    "eventBodyBuyerEmail" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "HotmartEvent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "HotmartEvent_eventBodyId_key" ON "HotmartEvent"("eventBodyId");
