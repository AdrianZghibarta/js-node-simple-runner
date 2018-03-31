import FileSystem from "fs";

// {
//     "emails": {
//         "adrian.zghibarta@gmail.com": "12/12/2017",
//         "adrian@soluti.fr": null
//     }
// }

FileSystem.readFile("/Users/azghibarta/Desktop/emails.json", "utf8", (error, data) => {
    if (error) {
        console.log("Error while reading to file: ", error);
    }
    else {
        console.log("File data: ", data);
        var emailInfo = JSON.parse(data);
        emailInfo.emails["adrian.zghibarta@gmail.com"] = "12/12/2017";

        FileSystem.writeFile("/Users/azghibarta/Desktop/emails.json", JSON.stringify(emailInfo, null, 4), (error) => {
            if (error) {
                console.log("Error while writing to file: ", error);
            }
            else {
                console.log("Write to file was done");
            }
        });
    }
});