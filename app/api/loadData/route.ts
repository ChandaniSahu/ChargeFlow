// import { NextResponse } from 'next/server';
// import clientPromise from '@/app/lib/mongodb';
// import data from "@/app/admin/data/users.json";

// export async function GET() {
//   try {
//     const client = await clientPromise;
//     const db = client.db("ZenixData");
//     const collection = db.collection("users");

//     // remove old data (optional but recommended)
//     await collection.deleteMany({});

//     const result = await collection.insertMany(data.usersData);

//     return NextResponse.json({
//       success: true,
//       message: "Data synced to ZenixTask database",
//       count: result.insertedCount,
//       ids: result.insertedIds
//     });

//   } catch (error) {
//     return NextResponse.json({
//       success: false,
//       error: error instanceof Error ? error.message : "Unknown error"
//     }, { status: 500 });
//   }
// }

import { NextResponse } from "next/server";
import clientPromise from "@/app/lib/mongodb";
import data from "@/app/admin/data/admin-data.json";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("ZenixData");
    const collection = db.collection("userDashData");

    // delete old users
    await collection.deleteMany({});

    // insert only user section
    const result = await collection.insertOne(data.user);

    return NextResponse.json({
      success: true,
      message: "User data inserted successfully",
      id: result.insertedId
    });

  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}