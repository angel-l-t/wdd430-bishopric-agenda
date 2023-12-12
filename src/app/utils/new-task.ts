import prisma from "../db/prisma"
import { redirect } from "next/navigation"

export async function createTask(data: any) {
    "use server";

    // Task Layout
    let newTask = {
        type: "",
        assigned: "",
        title: "",
        description: "",
        dateTime: ""
    };

    // Setting Variables
    let type;
    let type2;
    
    let assignedTo;
    let assignedTo2;
    
    let title;
    let description;
    
    let dateTime;
    let dateTime2;
    
    // Getting form data
    type = data.get("type");
    type2 = data.get("type2");
    
    assignedTo = data.get("assignedTo");
    assignedTo2 = data.get("assignedTo2");

    title = data.get("title");
    description = data.get("description");
    
    dateTime = data.get("dateTime");
    dateTime2 = data.get("dateTime2");


    // Data Validation
    // type
    if (type === "Other") {
        if (type2?.trim() === "") {
            type2 = "N/A";
        }
        newTask["type"] = type2;
    } else {
        newTask["type"] = type;
    }

    // assignedTo
    if (assignedTo === "Other") {
        if (assignedTo2?.trim() === "") {
            assignedTo2 = "N/A";
        }
        newTask["assigned"] = assignedTo2;
    } else {
        newTask["assigned"] = assignedTo;
    }

    // title
    if (title.trim() === "") {
        title = "N/A";
    }
    newTask["title"] = title;

    // description
    if (description.trim() === "") {
        description = "N/A";
    }
    newTask["description"] = description;

    // dateTime
    if (dateTime === "No") {
        newTask["dateTime"] = dateTime;
    } else {
        newTask["dateTime"] = dateTime2;
    }

    // Checking newTask object
    console.log(newTask);

    const task = await prisma.tasks.create({
        data: newTask,
    });

    redirect("/");
}
