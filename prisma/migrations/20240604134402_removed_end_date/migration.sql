-- CreateTable
CREATE TABLE "Schedule" (
    "id" SERIAL NOT NULL,
    "boxSizeNumber" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "boxSizeUnit" TEXT NOT NULL,
    "wakeupTime" TEXT NOT NULL,
    "userEmail" TEXT NOT NULL,

    CONSTRAINT "Schedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Goal" (
    "id" SERIAL NOT NULL,
    "priority" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "targetDate" TIMESTAMP(3) NOT NULL,
    "scheduleID" INTEGER,

    CONSTRAINT "Goal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TimeBox" (
    "id" SERIAL NOT NULL,
    "numberOfBoxes" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "startTime" TIMESTAMPTZ NOT NULL,
    "endTime" TIMESTAMPTZ NOT NULL,
    "reoccuringID" INTEGER,
    "goalID" INTEGER,
    "scheduleID" INTEGER,

    CONSTRAINT "TimeBox_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reoccuring" (
    "id" SERIAL NOT NULL,
    "reoccurFrequency" TEXT NOT NULL,
    "weeklyDay" INTEGER,

    CONSTRAINT "Reoccuring_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RecordedTimeBox" (
    "id" SERIAL NOT NULL,
    "recordedStartTime" TIMESTAMPTZ NOT NULL,
    "recordedEndTime" TIMESTAMPTZ NOT NULL,
    "timeBoxID" INTEGER,
    "scheduleID" INTEGER,

    CONSTRAINT "RecordedTimeBox_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompletedHabit" (
    "id" SERIAL NOT NULL,
    "userEmail" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CompletedHabit_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Goal" ADD CONSTRAINT "Goal_scheduleID_fkey" FOREIGN KEY ("scheduleID") REFERENCES "Schedule"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TimeBox" ADD CONSTRAINT "TimeBox_reoccuringID_fkey" FOREIGN KEY ("reoccuringID") REFERENCES "Reoccuring"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TimeBox" ADD CONSTRAINT "TimeBox_goalID_fkey" FOREIGN KEY ("goalID") REFERENCES "Goal"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TimeBox" ADD CONSTRAINT "TimeBox_scheduleID_fkey" FOREIGN KEY ("scheduleID") REFERENCES "Schedule"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecordedTimeBox" ADD CONSTRAINT "RecordedTimeBox_timeBoxID_fkey" FOREIGN KEY ("timeBoxID") REFERENCES "TimeBox"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecordedTimeBox" ADD CONSTRAINT "RecordedTimeBox_scheduleID_fkey" FOREIGN KEY ("scheduleID") REFERENCES "Schedule"("id") ON DELETE SET NULL ON UPDATE CASCADE;
